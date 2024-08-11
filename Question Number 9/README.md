# Asterisk Pattern Generator
==========================

This JavaScript program generates a pattern of asterisks (`*`) and prints it to the console. The pattern consists of 5 rows, with each row containing an increasing number of asterisks and a decreasing number of leading spaces.

## pattern
==========================
   </br >
 &nbsp; &nbsp; &nbsp; &nbsp; *</br>
 &nbsp; &nbsp; &nbsp;   **</br>
 &nbsp; &nbsp; ***</br>
 &nbsp; ****</br>
*****</br>
**Code Explanation:**

The code uses four variables `i`, `j`, `k` and `row` to generate the pattern. Here's a breakdown of the code:

## Outer Loop
==========================

### for (i = 1; i <= 5; i++) { ... }
The outer loop iterates 5 times, generating each row of the pattern.

## Generating Leading Spaces
==========================
### for (j = 1; j <= 5 - i; j++) { row += " "; }
The first inner loop generates the leading spaces for the current row. The number of spaces decreases by 1 for each row, creating the triangular shape. The loop runs `5 - i` times, where `i` is the current row number.

## Generating Asterisks
==========================
### for (k = 1; k <= i; k++) { row += "*"; }
The second inner loop generates the asterisks (`*`) for the current row. The number of asterisks increases by 1 for each row, creating the ascending pattern. The loop runs `i` times, where `i` is the current row number.

## Printing the Row
==========================
### console.log(row);
After the inner loops complete, the `console.log(row)` statement prints the completed row to the console.

**Run it:**

 Simply copy and paste the code into a JavaScript environment, such as a browser console or a Node.js runtime, and run it to see the pattern in action!