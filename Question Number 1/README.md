# Sum of Numbers from 1 to 100
==============================

<p>A simple JavaScript program that calculates the sum of all numbers from 1 to 100 using a loop.</p>

## Table of Contents
-----------------

* [About the Program](#about-the-program)
* [How it Works](#how-it-works)
* [Code](#code)

## About the Program
------------------

This program uses a basic `for` loop to iterate from 1 to 100 and calculates the sum of all numbers in that range.

## How it Works
----------------

1. The program initializes a variable `number` to 0.
2. It then uses a `for` loop to iterate from 1 to 100.
3. Inside the loop, it adds the current number to the `number` variable.
4. After the loop finishes, the function is created to change the content on webpage. 

## Code
------

```javascript
// Calculate the sum of numbers from 1 to 100
let number = 0;
for(let i= 1 ; i<=100; i++)
{
    number=i+number;
}