# Prime Number Checker
========================

A simple JavaScript program to check if a given number is prime or not.

# Usage
## Steps
1. Open the index.html file in a web browser.
2. Enter a number in the prompt dialog box.
3. Click "OK" to run the program.
4. The program will display an alert box indicating whether the number is prime or not.
## How it Works
The program uses a simple algorithm to check if a number is prime:

**Algorithm**
- Initialize a flag isPrime to true.
- Loop through numbers from 2 to the square root of the input number.
- For each number, check if the input number is divisible by that number.
- If a divisor is found, set isPrime to false and break out of the loop.
- Finally, display an alert box indicating whether the number is prime or not based on the value of isPrime.
## Optimization
The program uses an optimization to reduce the number of iterations: it only checks up to the square root of the input number. This is because a larger factor of the number must be a multiple of a smaller factor that has already been checked.

## Author
Qaiser Ali