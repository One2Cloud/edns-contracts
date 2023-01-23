//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "../../lib/TldClass.sol";

interface IRoot {
  event NewAuthorizer(address address_);

  event TldRegistered(bytes tld, address owner, uint256 expiry);
  event TldRenewed(bytes tld, uint256 expiry);

  function register(
    bytes memory tld,
    address resolver,
    uint64 expiry,
    address owner,
    bool enable,
    TldClass.TldClass class_
  ) external;

  function renew(bytes memory tld, uint64 expiry) external;

  function transfer(bytes memory tld, address newOwner) external;

  function setEnable(bytes memory tld, bool enable) external payable;

  function setResolver(bytes memory tld, address resolver) external payable;

  function setControllerApproval(
    bytes memory tld,
    address controller,
    bool approved
  ) external;

  function isEnable(bytes memory tld) external view returns (bool);

  function getResolver(bytes memory tld) external view returns (address);

  function getAuthorizer() external view returns (address);

  function setAuthorizer(address address_) external;
}
