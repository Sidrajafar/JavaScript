// Task 1:
// Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx".

var zakat_percentage = 0.025
var user_asset = + prompt("Asset value")
var result = zakat_percentage * user_asset
alert ("Your zakat is "+ result )

// Task 2:
// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.
 
var familyMembers = +prompt(" Enter the total number of family members?");
var userInput = prompt("choose your fitrah method : wheatMethod, oatsMethod, datesMethod, raisinMethod?");
var wheatMethod=250
var oatsMethod=450
var datesMethod=2100
 var raisinMethod=2800
if (userInput=='wheatMethod') {
    var totalFitrah = familyMembers*wheatMethod
    alert( totalFitrah )}
if (userInput=='oatsMethod') {
   var totalFitrah = familyMembers*oatsMethod
    alert( totalFitrah)}
if (userInput=='datesMethod') {
    var totalFitrah = familyMembers*datesMethod
    alert( totalFitrah)}
if (userInput=='raisinMethod') {
 var totalFitrah = familyMembers*raisinMethod
    alert( totalFitrah)}

// Task 3:
// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.

var SecretNumber = 4
var UserInput1 = +prompt ( 'Enter a guess for the sercret number between 1 to 10')
if (UserInput1 == SecretNumber) {
   alert ( 'Congratulations! you gussed is correct')
}
 else if ( UserInput1 < SecretNumber) { 
   alert ( 'Sorry try again! your guess is too low')
 } 
 else if ( UserInput1 > SecretNumber) { 
   alert ( 'Sorry try again! your guess is too high')
 } 

// Task 4:
// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

var a=prompt("Enter your name?")
var username= "sidra";
var username = (username.charAt(0).toUpperCase()+username.slice(1));
alert(username); 

// Task 5:
// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.

var ContactNames = [];
var ContactNumbers = [];
var UserInfo1 = prompt( 'Enter the contactname' )
var UserInfo2 = prompt( 'Enter the contactname' )
var UserInfo3 = prompt( 'Enter the contactname' )
var UserInfo4 = +prompt( 'Enter the contactnum' )
var UserInfo5 = +prompt( 'Enter the contactnum' )
var UserInfo6 = +prompt( 'Enter the contactnum' )
ContactNames.push ( UserInfo1 , UserInfo2 , UserInfo3);
ContactNumbers.push ( UserInfo4 , UserInfo5 , UserInfo6);
alert(ContactNames + " : " + ContactNumbers)

// Task 6:
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.

var Products = ["milkChocolate.", "whiteChocolate.", "darkChocolate.", "semisweeetChocolate.", "bittersweetChocolate."]
alert(Products)
var Products1 = +prompt('Given the position of that product you want')
var RemovedProduct = Products.splice(+Products1, 1)
alert('removedproduct:' + RemovedProduct)
alert('remaining items \n' + Products)
alert('Total number of remaining items:' + Products.length)

// Task 7:
// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.
var nationality= prompt("Enter your Nationality");
var gender= prompt("Gender");
var age= +prompt("Enter your Age");
var martialStatus;
if (nationality==="pakistani" || nationality==='indian'){  
          if (age>18 && gender=="male"){
           alert("You are above 18  & male so eligible for vote");
                                       }
              else if(age>18 && gender=="female"){
    martialStatus=prompt("Are you married or not");
     if(martialStatus=="yes"){
        alert("You are married so eligible for vote");
    }
    else{
        alert("You are not married , so not eligible for vote");
    }
}
else{
    alert(" You are under 18 or not female so not eligible for Vote");
}
}
else{
    alert("You are not Pakistani or Indian");
}
// Task 8:
// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)

var CricketPlayer =['sarfaraz ahmed', 'babar azam', 'fakhar zaman', 'imam-ul-haq', 'shoaib malik', 'haris sohail', 'asif ali', 'imad wasim', 'shadab khan', 'mohammad amir', 'shaheen afridi', 'hassan ali', 'mohammad hassain', 'wahab riaz', 'abid ali']
alert  (CricketPlayer)
var  selectedplayer= CricketPlayer.slice(0,10)
alert (selectedplayer)