/*

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]
 
Constraints:

1 <= n <= 8

*/

function generateParenthesis(n: number): string[] {
  const combos: string[] = [];

  function recurse(open: number, closed: number, combo: string) {
    if (combo.length == n * 2) {
      combos.push(combo);
      return;
    }

    if (open) {
      recurse(open - 1, closed, combo + "(");
    }

    if (open != closed) {
      recurse(open, closed - 1, combo + ")");
    }
  }

  recurse(n, n, "");

  return combos;
}
