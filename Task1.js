/**
 * Function to generate all permutations of a given string.
 * @param {string} inputStr - The input string with unique characters.
 * @returns {string[]} - An array containing all permutations of the input string.
 */
function permuteString(inputStr) {
    const result = [];
    backtrack(inputStr.split(''), 0, result);
    return result;
}

/**
 * Helper function to perform backtracking.
 * @param {string[]} chars - Array of characters from the input string.
 * @param {number} start - Current index to swap.
 * @param {string[]} result - Array to store the generated permutations.
 */
function backtrack(chars, start, result) {
    if (start === chars.length - 1) {
        result.push(chars.join(''));
        return;
    }

    for (let i = start; i < chars.length; i++) {
        [chars[start], chars[i]] = [chars[i], chars[start]];  // Swap
        backtrack(chars, start + 1, result);                  // Recurse
        [chars[start], chars[i]] = [chars[i], chars[start]];  // Backtrack
    }
}

// Example usage
console.log(permuteString("abc")); // Output: ["abc", "acb", "bac", "bca", "cab", "cba"]


/**
 * Algorithm:
 * For a given string, swap each character with the first character and recursively permute the remaining string.
 * Once we reach the base case where only one character remains, store the permutation.
 * Use backtracking to restore the original order after recursive calls.
 * Time Complexity
 * 
 * Time complexity: O(n * n!), where n is the length of the input string. This is because we have n! permutations, and for each permutation, we perform n swaps.
 * Space complexity: O(n), due to the recursive stack and additional space for storing the result.
 * 
 */