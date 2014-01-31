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
var number = 1.4567898;
var places = 2;

function moveDecimal(initialNumber, decimalPlaces)  {
    var finalNumber = Math.pow(10, decimalPlaces);
    initialNumber = Math.round(initialNumber * finalNumber) / finalNumber;
    return initialNumber;
}
//var promptNumber = prompt("What number, with decimal places, do you want to use?", "");
//var promptPlaces = prompt("How many decimal places should we go to?", "");

console.log("I changed the number to only have " + places + "  decimal places on the number " + number + " which made the number equal " +  moveDecimal(number, places));









//Fuzzy - match a number:  Is the number above or below a number within a certain percent?
   
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

percentNumber(10,40,25);










//Does a string follow a 123-456-7890 pattern like a phone number

function pattern(phoneNumber) {
    var comparison = "123-456-7890";
    var numbers = "123456789";
    if(phoneNumber.length != comparison.length) {
        return false;
    }
    for (var i=0; i <comparison.length; i++) {
        var num=phoneNumber.charAt(i);
        if (i ==3 ||  i == 7) {
             if (num != "-") {
             console.log("It's not working yet.");
                return false;
             }   
        }
            else {
                if (numbers.indexOf(num) == -1) {
                    
                }
            }
        
    }
    
console.log("It does follow the string above.");
return true;

};

pattern("123-456-7890");









//Find the number of hours or days difference between two dates.
function dayDifference(date1, date2, days) {
var date1;
var date2;

if (days === "hours") {
    counter = 0;
    dateHold = null;
    if (date1 > date2) {
        dateHold = date2;
        date2 = date1;
        date1 = dateHold;
    }
    while (date1.getTime() < date2.getTime()) {

        date1.setTime(date1.getTime() + (60 * 60 * 1000));
        counter ++;
    }
    console.log("The difference between days and hours is " + (counter));
    return counter;
}
else if (days == "days") {
    counter = 0;
    dateHold = null;
    if (date1 > date2){
        dateHold = date2;
        date2 = date1;
        date1 = dateHold;
    }
    while(date1.getTime() < date2.getTime()) {
        
        date1.setTime(date1.getTime() + (60 * 60 * 1000 * 24));
        counter ++;
    }
    console.log("The difference between days and hours is " + (counter));
    return counter;       
};

};

console.log(dayDifference(new Date("2013-01-01"), new Date("2013-01-03"), "days"));






//Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: “a” + [{a:2},{a:3},{a:1}] --> [{a:1},{a:2
function customSort(arr, key)
{
    
    for (var i = 0; i < arr.length; i++)
    {

        for (var j = i+1; j < arr.length; j++)
        {

            // if the value of the first object is > value of 2nd
            if (arr[i][key] > arr[j][key] || arr[i][key] === undefined)
            {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    
    return arr;
    
}

customSort([{a:2},{b:3},{a:1},{a:4}], "a");
console.log(customSort([{a:2},{b:3},{a:1},{a:4}], "a"));