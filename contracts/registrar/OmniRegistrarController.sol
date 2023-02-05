//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
// import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
// import "./interfaces/IOmniRegistrarController.sol";
// import "../registrar/interfaces/IOmniRegistrar.sol";
// import "../utils/Synchronizer.sol";
// import "../utils/Helper.sol";
// import "../oracle/interfaces/ITokenPriceOracle.sol";
// import "../oracle/interfaces/IDomainPriceOracle.sol";

// contract OmniRegistrarController is IOmniRegistrarController, AccessControlUpgradeable, Helper {
//   IERC20Upgradeable private _token;
//   IOmniRegistrar private _registrar;
//   IDomainPriceOracle private _domainPrice;
//   ITokenPriceOracle private _tokenPrice;

//   uint256[] COIN_IDS;

//   uint256 private constant MINIMUM_COMMIT_TIME = 5 minutes;
//   uint256 private constant MAXIMUM_COMMIT_TIME = 1 days;
//   uint256 private constant MINIMUM_REGISTRATION_DURATION = 1; // In year
//   uint256 private constant MAXIMUM_REGISTRATION_DURATION = 10; // In year

//   bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

//   mapping(bytes32 => uint256) internal _commitments;

//   function initialize(
//     IERC20Upgradeable token_,
//     IDomainPriceOracle domainPrice_,
//     ITokenPriceOracle tokenPrice_,
//     IOmniRegistrar registrar_,
//     uint256[] memory coinIds
//   ) public initializer {
//     __OmniRegistrarController_init(token_, domainPrice_, tokenPrice_, registrar_, coinIds);
//   }

//   function __OmniRegistrarController_init(
//     IERC20Upgradeable token_,
//     IDomainPriceOracle domainPrice_,
//     ITokenPriceOracle tokenPrice_,
//     IOmniRegistrar registrar_,
//     uint256[] memory coinIds
//   ) internal onlyInitializing {
//     __OmniRegistrarController_init_unchained(token_, domainPrice_, tokenPrice_, registrar_, coinIds);
//     __AccessControl_init();
//   }

//   function __OmniRegistrarController_init_unchained(
//     IERC20Upgradeable token_,
//     IDomainPriceOracle domainPrice_,
//     ITokenPriceOracle tokenPrice_,
//     IOmniRegistrar registrar_,
//     uint256[] memory coinIds
//   ) internal onlyInitializing {
//     _token = token_;
//     _domainPrice = domainPrice_;
//     _tokenPrice = tokenPrice_;
//     _registrar = registrar_;
//     COIN_IDS = coinIds;
//     _setRoleAdmin(ADMIN_ROLE, DEFAULT_ADMIN_ROLE);
//     _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
//     _grantRole(ADMIN_ROLE, _msgSender());
//   }

//   function isAvailable(bytes memory tld) public view returns (bool) {
//     return _registrar.isAvailable(tld) && _registrar.isControllerApproved(keccak256(tld), address(this));
//   }

//   function isAvailable(bytes memory name, bytes memory tld) public view returns (bool) {
//     return valid(name, tld) && _registrar.isAvailable(name, tld);
//   }

//   function getPrice(
//     bytes memory name,
//     bytes memory tld,
//     uint256 durations
//   ) public view returns (uint256) {
//     return _domainPrice.getPrice(name, keccak256(tld), durations);
//   }

//   function commit(
//     bytes memory name,
//     bytes memory tld,
//     address owner,
//     uint256 durations
//   ) public {
//     require(isAvailable(tld), "TLD_NOT_AVAILABLE");
//     bytes32 commitment = makeCommitment(name, tld, owner, durations);
//     require(_commitments[commitment] + MAXIMUM_COMMIT_TIME < block.timestamp, "INVALID_COMMIT");
//     _tokenPrice.requestTokenPriceInUsd();
//     _commitments[commitment] = block.timestamp;
//   }

//   function makeCommitment(
//     bytes memory name,
//     bytes memory tld,
//     address owner,
//     uint256 durations
//   ) public view returns (bytes32) {
//     require(_registrar.isExists(keccak256(tld)) && _registrar.isControllerApproved(keccak256(tld), address(this)), "TLD_NOT_AVAILABLE");
//     return keccak256(abi.encodePacked(name, tld, owner, durations, _msgSender()));
//   }

//   function _consumeCommitment(
//     bytes memory name,
//     bytes memory tld,
//     uint256 durations,
//     bytes32 commitment
//   ) internal {
//     require(_commitments[commitment] + MINIMUM_COMMIT_TIME <= block.timestamp, "INVALID_COMMITMENT");
//     require(_commitments[commitment] + MAXIMUM_COMMIT_TIME >= block.timestamp, "INVALID_COMMITMENT");
//     require(isAvailable(name, tld), "DOMAIN_IS_NOT_AVAIABLE");
//     require(MAXIMUM_REGISTRATION_DURATION >= durations && durations >= MINIMUM_REGISTRATION_DURATION, "DURATION_TOO_SHORT");
//     delete _commitments[commitment];
//   }

//   function register(
//     bytes memory name,
//     bytes memory tld,
//     address owner,
//     uint256 durations,
//     bytes32 commitment
//   ) public {
//     // The durations must be multiple of 365 days
//     require(durations % 365 days == 0, "INVALID_DURATIONS");
//     uint256 _price = _domainPrice.getPrice(name, keccak256(tld), durations) + _domainPrice.getFee(keccak256(tld));
//     require(_token.allowance(_msgSender(), address(this)) >= _price, "INSUFFICIENT_BALANCE");
//     _consumeCommitment(name, tld, durations, commitment);
//     // TODO: Set record in resolver
//     // TODO: Set record in reverse resolver
//     _registrar.register(name, tld, address(this), durations);
//     _registrar.reclaim(name, tld, owner);
//     _registrar.transferFrom(address(this), owner, _registrar.tokenId(name, tld));
//   }

//   function renew(
//     bytes memory name,
//     bytes memory tld,
//     uint256 durations
//   ) public {
//     // The durations must be multiple of 365 days
//     require(durations % 365 days == 0, "INVALID_DURATIONS");
//     uint256 _price = _domainPrice.getPrice(name, keccak256(tld), durations);
//     require(_token.allowance(_msgSender(), address(this)) >= _price, "INSUFFICIENT_BALANCE");
//     _token.transferFrom(_msgSender(), address(this), _price);
//     _registrar.renew(name, tld, durations);
//   }
// }
