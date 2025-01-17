// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.13;

import "../../diamond/access/AccessControl.sol";
import "../storage/facets/RegistryStorageFacet.sol";
import "./interfaces/IHostRecordFacet.sol";
import "./interfaces/IDomainRecordFacet.sol";
import "./interfaces/ITldRecordFacet.sol";

contract AccessControlFacet is RegistryStorageFacet, AccessControl {
  bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
  bytes32 public constant OPERATOR_ROLE = keccak256("OPERATOR_ROLE");
  bytes32 public constant REGISTRAR_ROLE = keccak256("REGISTRAR_ROLE");
  bytes32 public constant ROOT_ROLE = keccak256("ROOT_ROLE");
  bytes32 public constant WRAPPER_ROLE = keccak256("WRAPPER_ROLE");
  bytes32 public constant BRIDGE_ROLE = keccak256("BRIDGE_ROLE");
}
