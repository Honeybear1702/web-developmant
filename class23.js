//--------------------Variables----------------------
//Variables : these are those containers or something which stores values. the values stores : String(all chracters : text, special chracter, numbers), numbers, Boolean values(True/ False). If we want to say yes or no. 
// we use True or False . String have " ". numbers and boolean values never have " ".
//------------------Rules to create variable-----------
//1. variable name always starts with text. we can never start with number or spceial chraracter.
//2. in one variable we store only one value.
//3. two variables will never have same name otherwise computer will be confused.
//4. variable name will never have space  eg: first name. it has to be written first name

//syntax word means how we write anything in code. eg : using formula word in math. we use syntax here in code
//let, var, const keywords are used to create variable

//syntax to create variable : let variablenam=value
// create one variable which stores hana in that

let name="Hana";
//create one variable with the name of marks and store a number 100 in that and print the answer on the screen

let marks=100;
document.write(marks+"<br>");

//create two seperate variable with teh name n1 and n2 and store numbers in them. add those variables and print teh answer on screen

let n1=11;
let n2=16;
//create third variable where we add first two variables(adding variables means the numbers inside them will actually get added)
let total=n1+n2;// answer after adding is stored in total variable that is why we printed total
document.write(total+"<br>");

//to break in ajavscript we use +"<br>"

//-----------------------Assignment---------------------
//create two variables n3 and n4 and store numbers 100 and 200 in that. create third variable and multiply both two variables. and print the answer.

let n3=150;
let n4=190;
let times=n3*n4;
document.write(times+"<br>");

// conditions means if one thing happens then there will be another thing which will happen else if the condition does not happen the the else bit will be executed
// 1-arthimetic- +,-,*,/
// 2-comparison- <,>,<=,>=,== this means if we want to check if the left and the right side is equal this is used only in condition. We don't use single equal sign because it is already used in creating variables. If we try to use it then the coding will think that we are storing the right value to the left side.
// example: create a programme to store a number check if the number is greater than 15 then print is greater than 18 else it is less than 18.
let number=11;
if(number>18)
{
document.write("It is greater than 18."+"<br>");
}
else{
    document.write("It is less than 18." +"<br>");
}

//create a variable and store any name in that check if is equal to Hana then print Hana is a good girl else is Hana is sometimes a bit moody person too.

let cat="cat";
if(cat=="hana")
{
document.write("Hana is a good girl."+"<br>");
}
else{
document.write("Hana is somtimes a bit moody." +"<br>");
}
// always use +"<br>" at the end where we are displaying the answer so that every answer does not go into the same line.
//assignment create a variable and store any number in that check if the number is greater than 17 u can have licence else you cannot have licence.

let no=17;
if(no < 17)
{
document.write("Sorry you cannot have a licence."+"<br>");
}
else{
document.write("You can have a licence."+"<br>");
}

//prompt is a function which is used to take input from the user that means if you want to ask a question from the user we cn use this function this is similar to the ask block in scratch.
//take an input the user ,a number. Check if the score is between 90-100 then we are going to print excelent if the score is between 80-90 than very good 80-70 than good 70-60 okay and if it is less than 60 than less than average.

let score=prompt("Please enter the score.");
if(score>90 && score <100)
{
document.write("Excelent!"+"<br>");
}
else if(score>80 && score <90)
{
document.write("Very good!"+"<br>");
}
else if(score>70 && score <80)
{
document.write("Good!"+"<br>");
}
else if(score>60 && score <70)
{
document.write("Okay."+"<br>");
}
else if(score<60)
{
document.write("Less than average."+"<br>");
}

//assignment-- Take the input from the user for subject check if the subject is equal to english then print you should become an english teacher else a french teacher.
//assignment2-- Take input from the user ask any general quiz and at the end say if the answer is correct if it isnt then print wrong and the answer.

let subject=prompt("Please enter your favourite subject.");
if(subject=="english")
{
document.write("You should become an English teacher."+"<br>");
}
else
{
document.write("You should become a French teacher."+"<br>");
}
