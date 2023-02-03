// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "./LayerZeroApp.sol";

/*
 * the default LayerZero messaging behaviour is blocking, i.e. any failed message will block the channel
 * this abstract class try-catch all fail messages and store locally for future retry. hence, non-blocking
 * NOTE: if the srcAddress is not configured properly, it will still block the message pathway from (srcChainId, srcAddress)
 */
abstract contract NonblockingLayerZeroApp is Initializable, LayerZeroApp {
  function __NonblockingLayerZeroApp_init(address _endpoint) internal onlyInitializing {
    __NonblockingLayerZeroApp_init_unchained(_endpoint);
  }

  function __NonblockingLayerZeroApp_init_unchained(address _endpoint) internal onlyInitializing {
    __LayerZeroApp_init_unchained(_endpoint);
  }

  mapping(uint16 => mapping(bytes => mapping(uint64 => bytes32))) public failedMessages;

  event MessageFailed(uint16 _srcChainId, bytes _srcAddress, uint64 _nonce, bytes _payload);

  // overriding the virtual function in LzReceiver
  function _blockingLzReceive(
    uint16 _srcChainId,
    bytes calldata _srcAddress,
    uint64 _nonce,
    bytes calldata _payload
  ) internal virtual override {
    // try-catch all errors/exceptions
    try this.nonblockingLzReceive(_srcChainId, _srcAddress, _nonce, _payload) {
      // do nothing
    } catch {
      // error / exception
      failedMessages[_srcChainId][_srcAddress][_nonce] = keccak256(_payload);
      emit MessageFailed(_srcChainId, _srcAddress, _nonce, _payload);
    }
  }

  function nonblockingLzReceive(
    uint16 _srcChainId,
    bytes calldata _srcAddress,
    uint64 _nonce,
    bytes calldata _payload
  ) public virtual {
    // only internal transaction
    require(_msgSender() == address(this), "NonblockingLzApp: caller must be LzApp");
    _nonblockingLzReceive(_srcChainId, _srcAddress, _nonce, _payload);
  }

  //@notice override this function
  function _nonblockingLzReceive(
    uint16 _srcChainId,
    bytes calldata _srcAddress,
    uint64 _nonce,
    bytes calldata _payload
  ) internal virtual;

  function retryMessage(
    uint16 _srcChainId,
    bytes calldata _srcAddress,
    uint64 _nonce,
    bytes calldata _payload
  ) public payable virtual {
    // assert there is message to retry
    bytes32 payloadHash = failedMessages[_srcChainId][_srcAddress][_nonce];
    require(payloadHash != bytes32(0), "NonblockingLzApp: no stored message");
    require(keccak256(_payload) == payloadHash, "NonblockingLzApp: invalid payload");
    // clear the stored message
    failedMessages[_srcChainId][_srcAddress][_nonce] = bytes32(0);
    // execute the message. revert if it fails again
    _nonblockingLzReceive(_srcChainId, _srcAddress, _nonce, _payload);
  }

  /**
   * @dev This empty reserved space is put in place to allow future versions to add new
   * variables without shifting down storage in the inheritance chain.
   * See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps
   */
  uint256[50] private __gap;
}
