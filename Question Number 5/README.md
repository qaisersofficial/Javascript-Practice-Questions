# Write a program that takes a string as input and prints the string in reverse order using a loop.

=====================

## Description

    The program will take a string as input , reverse the string, and print the reversed

## Steps

<ol>
<li>Create an empty string that will host the new created string </li>
<li>Create the FOR loop </li>
<p>The starting point of the loop will be <code>(Any_string.length - 1)</code> which corresponds to the last character of the string, <code>r</code> As long as <code>i</code> is greater than or equals 0, the loop will go on, We decrement <code>i</code> after each iteration</p>

</ol>

## understading the logic of the program

suppose the input is my name **"Qaiser"**
For each iteration: <code>i = Any_string.length - 1</code> and </br>
<code>result_string = result_string + Any_string[i]</code>
</br>
First iteration: i = 6 - 1 = 5, **result_string = "" + "r" = "r"** </br>
Second iteration: i = 5 - 1 = 4, **result_string = "r" + "e" = "re"** </br>
Third iteration: i = 4 - 1 = 3, **result_string = "re" + "s" = "res"** </br>
Fourth iteration: i = 3 - 1 = 2,**result_string = "res" + "i" = "resi"** </br>
Fifth iteration: i = 2 - 1 = 1, **result_string = "resi" + "a" = "resia"** </br>
Sixth iteration: i = 1 - 1 = 0, **result_string = "resia" + "Q" = "resiaQ"** </br>
End of the FOR Loop

## Output:

Return the reversed string
// "resiaQ"

# Write a program that takes a string as input and prints the string in reverse string using built-in functions

1.  Use the <code>split()</code> method to return a new array
    <code>let split_string = Any_string.split("");</code> -> let split_String = "Qaiser".split("");
    this function will convert string into array
    // split_stirng = ["Q", "a", "i", "s", "e", "r"]

2.  Use the <code>reverse()</code> method to reverse the new created array
    Rev_array = ["Q", "a", "i", "s", "e", "r"].reverse();
    Rev_array = ["r", "e", "s", "i", "a", "Q"]
3.  Use the <code>join()</code> method to join all elements of the array into a string
    join_Array = ["r", "e", "s", "i", "a", "Q"].join(""); ->
    //join_Array= "resiaQ"
4.  Return the reversed string "resiaQ"

## Technologies Used

- JavaScript

## Author

Qaiser Ali
