// const name = "Qaiser Ali";
// const age =  "23";
// const city = "Gujrat";
    // console.log(name);
    // console.log(age);
    // console.log(city);
    // console.log(`My name is ${name}, \nMy age is ${age}, \nMy city is ${city}.`);

// + operator

    // console.log( 10 + 5 )   //15
    // console.log( 10 + "5")  //105
    // console.log( "10" + 5); //105
    // console.log( "10" + "5" ); // 105
    // console.log( 10 + 5 + "5" ); //155 -> 10+5=15 + "5"=>> 155
    // console.log( 10 + "5" + "5" ) //1055 
    // console.log( "10" + "5" + "5" );    //1055
    // console.log( 10 + 5 + 5);  //20
    // console.log ("My name is Qaiser Ali" + " and i am practicing javascript from scratch.");
    
    // let str1 = "My name is Qaiser Ali";
    // let str2 = " and i am practicing javascript from scratch.";
    // console.log( `${str1}` + `${str2}`) ; // good practice 

    // let number = 23 ;
    // let string1 = "Qaiser Ali, "
    // console.log(string1 + number);  //Qaiser Ali, 23


    //- operator
    // console.log( 10 - 5 ); //5
    // console.log( "10" - 5); //5
    // console.log( 10 - "5"); //5
    // console.log( "10" - "5"); //5


    // * operator 
    // console.log( 10 * 5 ); //50
    // console.log( "10" * 5); //50
    // console.log( 10 * "5"); //50
    // console.log( "10" * "5"); //50

      // / operator 
    //   console.log( 10 / 5 ); //2
    //   console.log( "10" / 5); //2
    //   console.log( 10 / "5"); //2
    //   console.log( "10" / "5"); //2

    // = ooperator

    //  console.log ( 10 = 5); // error
    // console.log ( 10 = 10); //error
    // console.log ( 10 == 5); //error
    // console.log ( 10 === 5); //false
    // console.log( "10" = "5") //error
    // console.log( "10" == "5") //false
    // console.log( "10" === "5") //nothing will return
    
    //< operator
    // console.log ( 10 < 5); //false
    // console.log ( "10" < 5); //false
    // console.log ( 10 < "5"); //false
    // console.log ( "10" < "5"); //true

    //> opertor

    //  console.log ( 10 > 5); //true
    //  console.log ( "10" > 5); //true
    //  console.log ( 10 > "5"); //true
    //  console.log ( "10" > "5"); //false

    // ??

        //  console.log ( 10 ?? 5); //10
        // let x = null;
        // let y ;

        // console.log( x ?? y);   //undefined

        // let x = null;
        // let y = null;

        //  console.log( x ?? y);   //null

        //  let x ;
        //  let y = null;
 
        //   console.log( x ?? y);   //null

        //   let x ;
        //   let y ;
  
        //    console.log( x ?? y);   //undefined

        //    let x = undefined ;
        //   let y = undefined ;
  
        //    console.log( x ?? y);   //nothing will show in output

        // let x = undefined ;
        // let y ;
  
        //    console.log( x ?? y);   //undefined

        // && operator (AND)    (A . B)

        // console.log( 0 && 0);   //0
        // console.log( 0 && 1);   //0
        // console.log( 1 && 0);   //0
        // console.log( 1 && 1);   //1

        // || operator (OR)     (A + B)
         

        //  console.log( 0 || 0);   //0
        //  console.log( 0 || 1);   //1
        //  console.log( 1 || 0);   //1
        //  console.log( 1 || 1);   //1

        
         // when i add (A . B) and (A + B) then i thought, i should try this too, so let try it 
         // (A . B)
        //  console.log( 0 * 0);   //0
        //  console.log( 0 * 1);   //0
        //  console.log( 1 * 0);   //0
        //  console.log( 1 * 1);   //1

        //(A + B)
        // console.log( 0 + 0);   //0
        // console.log( 0 + 1);   //1
        // console.log( 1 + 0);   //1
        // console.log( 1 + 1);   //2
    
        //Hence proved, logical and arithmetic operators are not equal.
    //if/ else
        // if (1<0){
        //     console.log("1 is less than 0");
        // }else
        // {
        //     console.log("1 is greater than 0");
        // }

        // let Qaisers_age = 23;
        
        // if(age>=18){
        //     console.log("Qaiser Ali is adult");
        // }
        // else{
        //     console.log("Qaiser Ali is not adult");
        // }
        //if else with other fashion and practice functions in javascirpt
        // function checkage(age){
        //     return (age >= 18) ? "Qaiser Ali is adult" : " Qaiser is not Adult"
        // }
        // console.log (  checkage( Qaisers_age ) );   


        //functions 
        // function add(a,b)
        // {
        //     return a+b;
        // }
        //  let a=10;
        //  let b=5;
        //  console.log(add(a,b));  //15
        //  console.log(add(10,5));  //15

    //fucntion with no parameter
    // function Salam(){
    //     console.log("Aslam-o-Alaikum ");
    // }

    // Salam();

    //function with parameter with default value
    // function info( salam = "Aslam-o-Alaikum! ", name, age,){
    //     console.log(salam);
    //     console.log(`Name: ${name}`);
    //     console.log(`Age: ${age}`);
    // }
    // function line(){
    //     console.log(`\n\n--------------------------------------\n`)

    // }

    // info( undefined,  "Qaiser Ali", 23); //function call

    //same thing with return keyword

//   {  remove this parantheses if you want this part of code
// function info( salam = "Aslam-o-Alaikum! ", name, age,){
//        return salam + `\nName: ${name}` + `\nAge: ${age}`;
//     }

//     let QA_VAR = info( undefined,  "Qaiser Ali", 23); //function call
//     console.log(QA_VAR);
//     line();
//     let AR_VAR = info( undefined,  "Ali Raza", 24); 
//     console.log(AR_VAR);
//     line();
//     let AH_VAR = info( undefined,  "Adil Hussain", 34); 
//     console.log(AH_VAR);
//     line();
//     let SS_VAR = info( undefined,  "Sharif Saleem", 22); 
//     console.log(SS_VAR);
//     line();
//     let SL_VAR = info( undefined,  "Soban Liaqat", 21); 
//     console.log(SL_VAR);
//   }  remove this parantheses too if you want this part of code



// ====================================================
// Your task is to write a new function that should be named combine and have the following characteristics:

// Accept three input values

// Calculate a new value based on the three input values: a * b / c (if a, b & c are the input values)

// Return the calculated result
// ====================================================

// function combine( a, b, c){
//     let result =  a * b  / c;
//     return "The result for this expression {( a * b ) / c} is " + result;
// }
//             let r1 = combine(6,6,2);
//             console.log(r1);
//             line();
//             let r2 = combine(10,20,5);
//             console.log(r2);
//             line();
            

//arrow function

// let combine = (a,b,c)=>{
//     return (a*b)/c;
// };
//  let r1 = combine(6,6,2);
//  console.log(r1);


//objects 

    // let admin = {               //admin object contain 4 properties
    //     name: "Qaiser Ali",
    //     age: 23,
    //     university: "University of Gujrat",
    //     city: "Gujrat",

    //     checkage(age){
    //         return (age >= 18) ? `Hello Mr. ${this.name}` : "not allowed"
            
    //     }
    // }
    // console.log(admin);
//     console.log(admin.name , "from " + admin.city);
//    console.log( admin.checkage(admin.age));

// Classes in javascript 
        //with the class keyword we can create a blueprint 

        // class car{
        //     constructor( model, year, name, color ){
        //         this.model = model;
        //         this.year = year;
        //         this.name = name;
        //         this.color = color;
        //         }
        //     age(){
        //         const date = new Date()
        //         return date.getFullYear() - this.year;
        //     }
        // }
        // const myCar = new car( 2021, 2021, "Toyota", 'White');
        // const Alicar = new car( 2017, 2017, "Suzuki", "Red");
        // const sharocar = new car( 2020, 2020, "WagonR", "Silver");

        // console.log(myCar.model);
        // console.log(myCar.age());
        // console.log(myCar.name);
        // console.log (`My ${myCar.name}(${myCar.model}) is ${myCar.age()} years old having ${myCar.color} color.`);
        // console.log (`Ali's ${Alicar.name}(${Alicar.model}) is ${Alicar.age()} years old having ${Alicar.color} color.`);
        // console.log (`The name of Sharif's car is ${sharocar.name} and it model is ${sharocar.model}, its ${sharocar.name} is  ${sharocar.age()} years old. The color of ${sharocar.name} is ${sharocar.color}.`);


        //pass by value in object

        // const student = {
        //     Name : "Qaiser Ali",
        //     age : 23,
        //     institute : "University of Gujrat.",
        //     enroll(){
        //         console.log( `Hello Mr. ${this.Name} you are enrolled in ${this.institute}` );
        //     }
        // }
        // const student1 = { ...student}
        // console.log(student);
        // student.enroll();
        // console.log(student1);
        // student1.enroll();      //till here i got the the same output of both objects
    
    // now change the value of one object and see both give the same output or not
    //if not same then i done with pass by valuee
    // student1.Name = "Sharif Saleem";
    //         console.log (student);
    //         console.log(student1);
            //now the output is 
            // {
            //     Name: 'Qaiser Ali',
            //     age: 23,
            //     institute: 'University of Gujrat.',
            //     enroll: [Function: enroll]
            //   }
            //   {
            //     Name: 'Sharif Saleem',
            //     age: 23,
            //     institute: 'University of Gujrat.',
            //     enroll: [Function: enroll]
            //   } 
            //copy object by using built-in assign methodd
          //datatype cloned_object_name  
            // const student1 = Object.assign( {} , student );
            // student1.Name = 'Adil Hussain';
            // console.log(student);
            // console.log(student1);
            // student1.enroll();
            //now All set

    // Another way to retrieve the things

            // for (let key in student){
            //     console.log(key, student[key]);
            // } //commit message unfortunately written wrong 

            // for (let key of Object.keys(student)){
            //     console.log(key, student[key]);
            // }

            //copy using for of loop
            // const student1 = {};
            // for ( let key of Object.keys(student)){
            //     student1[key] = student[key];
            // }
            // console.log(student1);
            // console.log(student);   //same output. so my object is copied into new object.





            // Excercise using objects  
            //key properties are :::: ?itemName, price, dicount, itemCode. 

            //simple object creation
                    // let product = {
                    //         itemName : "flower",
                    //         price : 50,
                    //         discount : 20,
                    //         itemCode : "PK1974"
                    // }
               
                    
            //object by factory function

            //         function product (itemName, price, discount, itemCode){
            //             return {
            //                 itemName : itemName,
            //                 price : price, 
            //                 discount : discount,
            //                 itemCode : itemCode
            //             }
            //         };
            // const bed = product( "Bed", 60000, 20, "PK-135");
            // console.log( `The item you selected is ${bed.itemName} available only in RS/-${bed.price}  with ${bed.discount}% discount and its item code is ${bed.itemCode}`);

//**************************************************************************************************************************************************************************************************************************************************************************** */
            //object by constructor function

            //         function Product(itemName, price, discount, itemCode)
            //         {
            //             this.itemName = itemName;
            //             this.price = price;
            //             this.discount = discount;
            //             this.itemCode = itemCode;

            //             //lets find the discount value of the price
            //             // with Function anonymous
            //             this.discountvalue = function (){
            //                 return this.price * this.discount / 100;
            //             }
            //             //lets find the final value of the product
                        
            //             this.Totalamount = function (){
            //                 return this.price - this.discountvalue();
            //             }
            //         };
            //     const laptop =  new Product( "Lenovo" , 140000, 35, "PK-201");
            // console.log( `The item you selected is ${laptop.itemName} available only in RS/-${laptop.price}  with ${laptop.discount}% discount and its item code is ${laptop.itemCode}`);     
            // console.log(`The discount value is RS/-${laptop.discountvalue()}`);             
            // console.log(`The Total amount of the product is RS/-${laptop.Totalamount()}`);     
//**************************************************************************************************************************************************************************************************************************************************************************** */
        
            //classes practice
            //decalring a class
        // class Animal {
                //declaring a constructor same as constructor function
        //         constructor( Name, Age, location) {
        //             this.Name = Name;
        //             this.Age = Age;
        //             this.location = location;
        //         }
        // };
        //creating an object of the class
        // const dog = new Animal("Bulldog", 5, "Lahore");
        // console.log(`The animal is ${dog.Name} currently in ${dog.location} and its age is ${dog.Age} years old`);
        // const cat = new Animal ( "Percian-Cat", 3, "Gujrat");
        // console.log(`The animal is ${cat.Name} currently in ${cat.location} and its age is ${cat.Age} years old`);



             //creating object using class expression
            //  const employee = class person {
            //     constructor(name, age, rank, department, address ) {
            //         this.name = name;
            //         this.age = age;
            //         this.address = address;
            //         this.rank = rank;
            //         this.department = department;
            // }
            //Getter & setter sytax
            // get funcitonname(){
            //     return this.keyname;
            // }
            // set funcitonname(value){
            //     return this.keyname = value;
            // }


            //we can create multiple methods to set, get or any other methodoligy function here
            // example in next when i comment this previous code
        // };        
        // let employee_1 = new employee( "Adil Hussain", 32, "Manager" , "HR", "Norway" );
        // let employee_2 = new employee( "Qaiser Ali", 23, "Front-End Developer", 'IT', 'Pakistan');

        // console.log(employee_1);
        // console.log(employee_2);


        //creating method in a class to extend it

            // class Product {
            //     constructor(name){
            //         this.name = name;
            //     }
            // getname(){
            //     return this.name + 'is a product';
            // }
            // }
// extend class
// class HomeAliences extends Product{
    // constructor(name){
        // super(name); // the super function call the constructor of its parent class
    // }
//     getname(){
//         return this.name + "is a HomeAlience"
//     }
// }
// let book = new Product ("book(Poet of the East) ");
// let AC = new HomeAliences( " AC ");
// console.log(book.getname());
// console.log(AC.getname());



// Arrays
    //index        "0"         "1"        "2"
// const hobbies = [ "Cooking", "Sports", "Reading" ];
// console.log(hobbies[0]);
// console.log(hobbies[1]);
// console.log(hobbies[2]);

// some built-in functions of Array

// hobbies.push('Working');    //at index 3 because array store consecutive data.
// console.log(hobbies);   //[ 'Cooking', 'Sports', 'Reading', 'Working' ]

//since this approach is not good so,
// console.log(
//     hobbies.findIndex( (item) => {      //is use to find the index but we should have to pass a anonymous function
//         return item === 'Reading';
//     }));


    //i follow this belowed approach

    // const index = hobbies.findIndex( (item) => {     
        // return item === 'Reading';});

        // console.log(index);  // output 2

        // const number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    //how to access the  value at last index of array
        // console.log ( number [number.length - 1]);


        // another way to declare an array using object

        // const number = new Array ( 1,2,3,4,5,6,7,8,9);
            //  console.log(number[number.length - 1]); // 9
            //  number.push("10");
            //  console.log(number[number.length - 1]); // 10
            //  number.unshift("0");   //it will add at 0 indeex
            //  console.log(number); // ['0', 1, 2, 3, 4, 5,   6, 7, 8, 9 ]
              
    //pop
            // number.pop();   //remove the last element from the array
            // console.log (number); // [ 1, 2, 3, 4, 5,   6, 7, 8 ] 
            //9 is removed from the array

    //shift method -> it will remove first value from array

        // number.shift();
        // console.log(number); // [ 2, 3, 4, 5,   6, 7, 8, 9 ]

    // change the value in an array
            // number[5]= "Qaiser Ali";        //value can be any type
            // console.log(number); //[ 1, 2, 3, 4, 5, 'Qaiser Ali', 7, 8, 9 ]
    
        const names = [ 'Adil Hussain', 'Yasir Ali', 'Nasir Ali', 'Murtaza Ali', 'Qaiser Ali' ];
        // console.log(names);
            //find the index of any element of an array

            // console.log(names.indexOf("Qaiser Ali"));   //this will start finding  from first index
            // console.log(names.lastIndexOf("Qaiser Ali")); //this will start finding  from last index
    // it return true or false
            console.log(names.includes ("Qaiser Ali"));     //it helps to search