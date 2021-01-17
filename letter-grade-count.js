var marks = prompt("Enter Your Letter Marks :");
 
// Without Using Logical Oparator
// Students Marks Count
/* 
if (marks > 100 || marks <0 )
console.log("Invalid Marks");

else if (marks >= 80)
    console.log("A+");
    
else if (marks >= 70)
    console.log("A");

else if (marks >= 60)
    console.log("A-");

else if (marks >= 50)
    console.log("B");
else if (marks >= 40)
    console.log("D");
else if (marks >= 33)
    console.log("You Pass In The Exam");
else
    console.log("Fail");
*/

// Using Logical Oparator
// Students Marks Count

if (marks >100 || marks <0)
console.log("Invalid Marks");

else if (marks >= 80 && marks <=100)
    console.log("A+");
    
else if (marks >= 70 && marks <=79 )
    console.log("A");

else if (marks >= 60 && marks <=69)
    console.log("A-");

else if (marks >= 50 && marks <=69)
    console.log("B");
else if (marks >= 40 && marks <=49)
    console.log("D");
else if (marks >= 33 && marks <=40)
    console.log("You Pass In The Exam");
else
    console.log("Fail");





