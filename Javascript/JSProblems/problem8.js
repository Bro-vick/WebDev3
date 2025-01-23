/*
    Group Anagrams
    Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
    Create a function "groupAnagrams" that returns an array of anagrams  

    An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

    Example 1:
    Input: strs = ["act","pots","tops","cat","stop","hat"]
    Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

    Example 2:
    Input: strs = ["x"]
    Output: [["x"]]

    Example 3:
    Input: strs = [""]
    Output: [[""]]
*/

let strs = ["act","pots","tops","cat","stop","hat"]
function groupAnagrams(strs){
    const group = {};
    for(let str of strs){
        const key = str.split("").sort().join("");
        group[key] = group[key] || [];
        group[key].push(str);
    }
    console.log(group)
    return Object.values(group)
}

groupAnagrams(strs);
