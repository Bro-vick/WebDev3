/*
    Container With Most Water #leetcode Q11
    You are given an integer array heights where heights[i] represents the height of the ith bar.

    You may choose any two bars to form a container. Return the maximum amount of water a container can store.

    Example 1:
    Input: height = [1,7,2,5,4,7,3,6]
    Output: 36

    Example 2:
    Input: height = [2,2,2]
    Output: 4
*/
// Two Pointers Approach
function waterContainer2(height){
    let l = 0;
    let r = height.length - 1;
    let result = 0;

    while(l < r){
        const area = Math.min(height[l], height[r]) * (r - l);
        result = Math.max(result, area);
        if (height[l] <= height[r]){
            l++;
        }else{
            r--;
        }
        return result;
    };
};