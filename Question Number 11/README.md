# Number Input Validator
=====================

This JavaScript program prompts the user to enter a number greater than 100. If the user enters a number less than or equal to 100, or cancels the input/enters an empty line, the program will ask for input again.

**Code Explanation:**
see the code in <a href="code.js">`see code first`</a>

## Logic Summary:

The code uses a do-while loop to repeatedly prompt the user for input until a valid number greater than 100 is entered or the user cancels the input.

**Here's how the loop works:**

1. The do block prompts the user for input using prompt().
2. The input is converted to a number using the unary + operator.
3. If the input is not a valid number (i.e., isNaN(input)), an alert is shown asking the user to enter a valid number.
4. If the input is greater than or equal to 100, or if the user cancels the input/enters an empty line, the loop is exited using the break statement.
5. If the input is less than or equal to 100, an alert is shown asking the user to enter a number greater than 100.
6. The loop continues until a valid number greater than 100 is entered or the user cancels the input.
### Run it:

Simply copy and paste the code into a JavaScript environment, such as a browser console or a Node.js runtime, and run it to see the program in action!