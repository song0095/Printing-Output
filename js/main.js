// Task 1
var output, a, b, c;
a = 3;
b = 5;

output = "var a = 3;" + "\n" +
         "var b = 5;" + "\n" +
         "var c;" + "\n" + 
         "-----------" + "\n" +
         "a + b = " + (a + b) + "\n" +
         "a - b = " + (a - b) + "\n" +
         "a * b = " + (a * b) + "\n" +
         "a / b = " + (a / b) + "\n" + 
         "a % b = " + (a % b) + "\n" +
         "a += b = " + (a += b) + "\n" +
         "a -= b = " + (a -= b) + "\n" +
         "a *= b = " + (a *= b) + "\n" +
         "a /= b = " + (a /= b) + "\n" +
         "a %= b = " + (a %= b) + "\n" +
         "a == b = " + (a == b) + "\n" +
         "a != b = " + (a != b) + "\n" +
         "a > b = " + (a > b) + "\n" +
         "a < b = " + (a < b) + "\n" +
         "!a && !c = " + (!a && !c) + "\n" +
         "!a || !c = " + (!a || !c) + "\n";
alert(output);


// task 2
var output, first_name, last_name, email;

first_name = "Qi";
last_name = "Song";
email = "song0095@algonquinlive.com";

output = "My name is" + " " + first_name + " " + last_name + "." + " " + "You can contact me at:" + " " + email + ".";

alert(output);


// task 3
// x = 100, y = 200
var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];
var n1, n2, sum
n1 = numbers[0];
n2 = numbers[numbers.length - 1];
sum = (n1 + n2);

if (sum % 2 === 0){
    alert (n1 + "+" + n2 + "=" + sum + "\n" + "This is an even numbers" + ".");
} else{
    alert (n1 + "+" + n2 + "=" + sum + "\n" + "This is an odd numbers" + ".");
};










