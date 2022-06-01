//SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts-upgradeable/token/ERC721/IERC721Upgradeable.sol";

interface IBaseRegistrar is IERC721Upgradeable {
  // event ControllerAdded(address controller, bytes tld);
  // event ControllerRemoved(address controller, bytes tld);

  event DomainRegistered(bytes domain, bytes tld, address owner, uint256 expiry);
  event DomainRenewed(bytes domain, bytes tld, uint256 expiry);
  event DomainReclaimed(bytes domain, bytes tld, address owner);

  event SetController(bytes tld, address controller, bool approved);

  function expiry(bytes memory domain, bytes memory tld) external view returns (uint256);

  function available(bytes memory tld) external view returns (bool);

  function available(bytes memory domain, bytes memory tld) external view returns (bool);

  function ownerOf(bytes memory domain, bytes memory tld) external view returns (address);

  function exists(bytes memory domain, bytes memory tld) external view returns (bool);

  function exists(bytes32 tld) external view returns (bool);

  function controllerApproved(bytes32 tld, address controller) external view returns (bool);

  function setControllerApproval(
    bytes calldata tld,
    address controller,
    bool approved
  ) external;

  function register(
    bytes calldata domain,
    bytes calldata tld,
    address owner,
    uint256 duration
  ) external;

  function renew(
    bytes calldata domain,
    bytes calldata tld,
    uint256 duration
  ) external;

  function reclaim(
    bytes calldata domain,
    bytes calldata tld,
    address owner
  ) external;
}
