// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract RewardClaimer is Ownable {
    IERC20 public rewardToken;

    uint256 public rewardAmount;
    uint256 public claimInterval; // in seconds

    mapping(address => uint256) public lastClaimed;

    event RewardClaimed(address indexed user, uint256 amount);
    event RewardAmountUpdated(uint256 newAmount);
    event ClaimIntervalUpdated(uint256 newInterval);
    event TokensWithdrawn(address to, uint256 amount);
    event TokensDeposited(address from, uint256 amount);

    constructor(address _token, uint256 _rewardAmount, uint256 _claimIntervalSeconds)  Ownable(msg.sender)  {
        rewardToken = IERC20(_token);
        rewardAmount = _rewardAmount;
        claimInterval = _claimIntervalSeconds;
    }

    function claimReward() external {
        require(
            block.timestamp >= lastClaimed[msg.sender] + claimInterval,
            "Reward not ready yet"
        );

        require(
            rewardToken.balanceOf(address(this)) >= rewardAmount,
            "Insufficient contract balance"
        );

        lastClaimed[msg.sender] = block.timestamp;
        rewardToken.transfer(msg.sender, rewardAmount);

        emit RewardClaimed(msg.sender, rewardAmount);
    }

    // Admin functions
    function setRewardAmount(uint256 _newAmount) external onlyOwner {
        rewardAmount = _newAmount;
        emit RewardAmountUpdated(_newAmount);
    }

    function setClaimInterval(uint256 _newInterval) external onlyOwner {
        claimInterval = _newInterval;
        emit ClaimIntervalUpdated(_newInterval);
    }

    function withdrawTokens(uint256 amount, address to) external onlyOwner {
        require(rewardToken.balanceOf(address(this)) >= amount, "Insufficient balance");
        rewardToken.transfer(to, amount);
        emit TokensWithdrawn(to, amount);
    }

    // Anyone can deposit tokens (must approve first)
    function depositTokens(uint256 amount) external {
        require(amount > 0, "Amount must be greater than 0");
        rewardToken.transferFrom(msg.sender, address(this), amount);
        emit TokensDeposited(msg.sender, amount);
    }

    // View functions
    function nextClaimTime(address user) external view returns (uint256) {
        return lastClaimed[user] + claimInterval;
    }

    function canClaim(address user) external view returns (bool) {
        return block.timestamp >= lastClaimed[user] + claimInterval;
    }
}
