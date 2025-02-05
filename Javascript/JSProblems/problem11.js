/*
    ** 3Sum
    Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
     where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
    The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

    Example 1
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]
    Explanation:
    nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
    nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
    nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
    The distinct triplets are [-1,0,1] and [-1,-1,2].

    Example 2:
    Input: nums = [0,1,1]
    Output: []
    Explanation: The only possible triplet does not sum up to 0.

    Example 3:
    Input: nums = [0,0,0]
    Output: [[0,0,0]]
    Explanation: The only possible triplet sums up to 0.
*/
// Two Pointers
function threeSum(nums){
    nums.sort((a, b) => a - b);  // -4 -1,, -1, 0, 1, 2 
    const result = [];

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0) break; // If the first number in the sorted array is positive, no triplet can sum up to 0
        if(i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1; right = nums.length - 1;
        while(left < right){
            const sum = nums[i] + nums[left] + nums[right];
            if(sum === 0){
                result.push([nums[i], nums[left], nums[right]]);
                right--;
                left++;
                while(left < right && nums[left] == nums[left - 1]) left++;
                while(left < right && nums[right] === nums[right + 1]) right--;
            }else if(sum < 0){
                left++;
            }else{
                right--;
            }
        }
    }

    return result;
}
let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));