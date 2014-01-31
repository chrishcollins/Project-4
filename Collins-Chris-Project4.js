alert("My code is working?")

//Chris Collins
//SDI 1401
//Project 4


// Find the smallest value in an array than is greater than a given number.
//smallestGreaterThan Function
function smallestGreaterThan(myArray, smallest) {
    var min = Infinity;

    for (var i = 0; i < myArray.length; i++) { // for loop
        if (typeof myArray[i] == "number" && myArray[i] < min && myArray[i] > smallest) {  //conditional
            min = myArray[i];
        }
    }
    
    if(min == Infinity) { //conditional
        console.log("Our test did not work");
        return null; //return
    }
    
    console.log("The minimum satisfying value is " + min);
    return min; //return
    
};
var passing = true  // variables
var passing = smallestGreaterThan([1, 4, 7, 9, 10, 14, 15], 12) 








//Format a number to use a specific number of decimal places as for money: 2.1 -->2.10. 
var number = 1.4567898; //global variables
var places = 2;

//moveDecimal function
function moveDecimal(initialNumber, decimalPlaces)  {
    var finalNumber = Math.pow(10, decimalPlaces); //local variables
    initialNumber = Math.round(initialNumber * finalNumber) / finalNumber; //method
    return initialNumber; //return
}

//output
console.log("I changed the number to only have " + places + "  decimal places on the number " + number + " which made the number equal " +  moveDecimal(number, places));









//Fuzzy - match a number:  Is the number above or below a number within a certain percent?
 
 //percentNumber function  
function percentNumber(number1, number2, percent1) {
    var fraction = (number1 / number2) * 100; //local variable
    
    if (fraction>100) { //conditional
        fraction-=100; 
        }
        
    if (fraction<=percent1) { //conditional
        console.log(number1 + " is within " + percent1 + " percent of "+ number2 +". Yay!"); //output
        } else {
        console.log(number1 + " is not within " + percent1 + " percent of "+ number2 +". Sadness."); //output
        }
        
}; 

percentNumber(10,40,25); //passing back into function










//Does a string follow a 123-456-7890 pattern like a phone number

//pattern function
function pattern(phoneNumber) {
    var comparison = "123-456-7890"; //localvariable
    var numbers = "123456789"; //local variable
    if(phoneNumber.length != comparison.length) { //conditional
        return false; //return
    }
    for (var i=0; i <comparison.length; i++) { // for loop
        var num=phoneNumber.charAt(i); // local variable
        if (i ==3 ||  i == 7) { //conditional
             if (num != "-") {  //conditonal
             console.log("It's not working yet."); //output
                return false;  //return
             }   
        }
            else {
                if (numbers.indexOf(num) == -1) {  //conditonal
                    
                }
            }
        
    }
    
console.log("It does follow the string above."); //output
return true;  //return

};

pattern("123-456-7890"); //passing back into function









//Find the number of hours or days difference between two dates.
//dayDifference function
function dayDifference(date1, date2, days) {
var date1;  //local variables
var date2;  //local variables

if (days == "hours") {  //conditional
    counter = 0; //counter property
    dateHold = null; //object reference
    if (date1 > date2) { //conditional
        dateHold = date2;
        date2 = date1;
        date1 = dateHold;
    }
    while (date1.getTime() < date2.getTime()) { //while loop

        date1.setTime(date1.getTime() + (60 * 60 * 1000));
        counter ++;
    }
    console.log("The difference between hours and days is " + (counter)); // output
    return counter; //return
}
else if (days == "days") { //conditional
    counter = 0;
    dateHold = null;
    if (date1 > date2){//conditional
        dateHold = date2;
        date2 = date1;
        date1 = dateHold;
    }
    while(date1.getTime() < date2.getTime()) { //while loop
        
        date1.setTime(date1.getTime() + (60 * 60 * 1000 * 24));
        counter ++;
    }
    console.log("The difference between hours and days is " + (counter*24)); //output
    return counter;        //return
};

};

console.log(dayDifference(new Date("2013-01-01"), new Date("2013-01-03"), "days")); //output






//Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: “a” + [{a:2},{a:3},{a:1}] --> [{a:1},{a:2
//customSort function
function customSort(arr, key)
{
    
    for (var i = 0; i < arr.length; i++) //for loop
    {

        for (var j = i+1; j < arr.length; j++) //nested loop
        {

            // if the value of the first object is > value of 2nd
            if (arr[i][key] > arr[j][key] || arr[i][key] === undefined) //conditonal
            {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    
    return arr; //return
    
}

customSort([{a:2},{b:3},{a:1},{a:4}], "a"); //pass back into function
console.log(customSort([{a:2},{b:3},{a:1},{a:4}], "a"));  //output