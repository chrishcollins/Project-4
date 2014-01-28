alert("My code is working?")



//Format a number to use a specific number of decimal places as for money: 2.1 -->2.10. 
function moveDecimal(initialNumber, decimalPlaces)  {
    var finalNumber = Math.pow(10, decimalPlaces);
    initialNumber = Math.round(initialNumber * finalNumber) / finalNumber;
    return initialNumber;
}


var promptNumber = prompt("What number, with decimal places, do you want to use?", "");
var promptPlaces = prompt("How many decimal places should we go to?", "");

console.log("We changed the number to only have " + promptPlaces + "  decimal places on the number " + promptNumber + " which made the number equal " +  moveDecimal(promptNumber, promptPlaces));









//Fuzzy - match a number:  Is the number above or below a number within a certain percent?
    //match a number:  Is the number above or below a number within a certain percent?
    //compare number1 to see if it is greater than or less than number2.
    //Use third number to see if the first number is within that percentage of the second number.
    //ex send (5, 10, 50)
    //function determine if 5 is greater than or less than 10
    //It would then determine if 5 is within 50% of 10.
    //Function should then return results.

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
//Send three parameters.  First two will be dates that you want to compare, third is a string to determine if the function returns hours or days.  
//Then return the choice of hours or days.




//END TWO DATES





//Given  a string version of a number such as "42" , return value as an actual Number, such as 42.
//Send a string into the function and return it as a Number.
//You can also add a conditional to determine if the string sent into the function is a number before you do the conversion.




//END STRING 42














