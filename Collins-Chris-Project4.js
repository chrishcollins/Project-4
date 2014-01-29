alert("My code is working?")

//Chris Collins
//SDI 1401
//Project 4


// Find the smallest value in an array than is greater than a given number.

function smallestGreaterThan(myArray, smallest) {
    var min = Infinity;

    for (var i = 0; i < myArray.length; i++) {
        if (typeof myArray[i] == "number" && myArray[i] < min && myArray[i] > smallest) {  
            min = myArray[i];
        }
    }
    
    if(min == Infinity) {
        console.log("Our test did not work");
        return null;
    }
    
    console.log("The minimum satisfying value is " + min);
    return min;
    
};
var passing = true 
var passing = smallestGreaterThan([1, 4, 7, 9, 10, 14, 15], 12) 






//Format a number to use a specific number of decimal places as for money: 2.1 -->2.10. 
function moveDecimal(initialNumber, decimalPlaces)  {
    var finalNumber = Math.pow(10, decimalPlaces);
    initialNumber = Math.round(initialNumber * finalNumber) / finalNumber;
    return initialNumber;
}

var number = 1.4567898;
var places = 2;
//var promptNumber = prompt("What number, with decimal places, do you want to use?", "");
//var promptPlaces = prompt("How many decimal places should we go to?", "");

console.log("I changed the number to only have " + places + "  decimal places on the number " + number + " which made the number equal " +  moveDecimal(number, places));




//Fuzzy - match a number:  Is the number above or below a number within a certain percent?
   
function percentNumber(number1, number2, percent1) {

if (number1 > number2)  {    
    difference(number1 / number2) * 100;
    console.log(difference);
    }
    
    percentageNumber(10, 40, 25);
    }; 

function percentNumber(number1, number2, percent1) {
    var fraction = (number1 / number2) * 100;
    
    if (fraction>100) {
        fraction-=100; 
        }
        
    if (fraction<=percent1) {
        console.log(number1 + " is within " + percent1 + " percent of "+ number2 +". Yay!");
        } else {
        console.log(number1 + " is not within " + percent1 + " percent of "+ number2 +". Sadness.");
        }
        
}; 

percentNumber(5,20,60);








//Find the number of hours or days difference between two dates.
//Send three parameters.  First two will be dates that you want to compare.
//The Third is a string to determine if the function returns hours or days.  
//Then return the choice of hours or days.



function dayDifference(date1, date2, days) {
date1 = new Date("1/1/2014");
date2= new Date("1/30/2014");
var days = 1000 * 60 * 60 * 24;
console.log(Math.ceil((today.getTime() - date.getTime() / (days)))



if (today < date1) {
        days --;
        console.log("The difference between dates is " + days + " days.");
}
};





//Given  a string version of a number such as "42" , return value as an actual Number, such as 42.
//Send a string into the function and return it as a Number.
//You can also add a conditional to determine if the string sent into the function is a number before you do the conversion.

//function myNum("23"); {
//parseFloat(myNum);
//console.log(myNum); 


//}








//Does a string follow a 123-456-7890 pattern like a phone number





