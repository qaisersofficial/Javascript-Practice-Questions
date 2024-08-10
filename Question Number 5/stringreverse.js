//Reverse a string by using for loop
function revstr(Any_String){
    let result_string="";
    for(let i=Any_String.length-1;i>=0; i--){
        result_string= result_string+Any_String[i];
    }
    return result_string;
}
console.log(revstr("Qaiser Ali"));