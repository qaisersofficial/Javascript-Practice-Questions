# Asterisk Pattern Generator
==========================

This JavaScript program generates a pattern of asterisks (`*`) and prints it to the console. The pattern consists of 5 rows, with each row containing a decreasing number of asterisks and spaces.

## pattern
==========================
   </br >
 *****</br>
 ****</br>
 ***</br>
 **</br>
 *</br>

 **Code Explanation:**

The code uses three variables `i`, `j` and `row` to generate the pattern. Here's a breakdown of the code:
## Outer Loop
==========================

### for (i = 1; i <= 5; i++) { ... } 
The outer loop iterates 5 times, generating each row of the pattern.

## Generating Asterisks and Spaces
==========================
### ffor (j = 1; j <= 6 - i; j++) { row += "*"; row += " "; }
The inner loop generates the asterisks (`*`) and spaces for the current row. The number of asterisks and spaces decreases by 1 for each row, creating the descending pattern. The loop runs `6 - i` times, where `i` is the current row number.
