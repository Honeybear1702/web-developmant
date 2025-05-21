//loops are used to repeat the same code over and over again, 
//The code which we need to repeat
//There are four different types of loops 
//1)While loop
//2)For loop
//3)For in loop
//4)For of loop

//1) While loop : while loop is to repeat the same code again n again.(its like repeat or repeat until in scratch).
//here there are 4 things we need to give in a loop.
//1) Starting point - this is done by creating a variable and storing the starting value in that
//2) Ending point- That means when the loop will end, this is done by declaring it in a variable a value whan it ends. This is like a condition where you tell where it ends.
//3) Increament or decreament
//4) code to repeat

//eg : if we want any person to do sam task again n againwe need to tell him certain things like : which task need to be done, 
// when task will begin, when task will end, and counting. these all 4 things are same as which we give to while loop.

//syntax for hile loop :
//ariable for straing point
//while(condition to stop loop){
//code  to repeat
//increament
//}
//1.) print hello 10 times on scree using while loop

//start point in variable we store
var a=1

//end point, till the time a is less than equak to 10 loops continous after taht loop stops, this is condition.a
// till the time this condition is true loop goes in  whne this becomes false means a>10 then loop stops
// this is for loop to continue otherwise it will still at 1.  when a becomes 11 loop stops

//2.) print all even numbers from 2 to 40 

let even1=2
while(even1<=40){
    document.write(even1 +"<br>");
    even1 += 2;
}

//2. For loop : for loop is used to repeat the code as while loop. Here als we need to have  4 things.a
//syntax : for(start; end ; increament){
//code to repeat
//}

//print hello 10 times 

for(var b=1; b<=10; b+=1){
    document.write("hello" +"<br>");
}

//-------------------Assignment--------------
//print all odd numbers from 1 to 30 using for loop.
//print hi 3 times using while loop.

let odd1=1
while(odd1<=30){
    document.write(odd1 +"<br>");
    odd1 += 2;
}

for(var b=1; b<=3; b+=1){
    document.write("hi" +"<br>");
}//
//--------------------------Arrays----------------------------
//an array is somthing that helps the variables to store a lot of data  which variables cannot. [] is used to store lot of data. list allows you to store lot of data. but variables alows only one to store.a
//syntax : var arrayname=[data1, daat2, ...]
// we can store inmlimited data ove here.
var arr=["hello", 1, 2, 3,"this"]

document.write(arr +"<br>")

//3. for of loop : for of loop is used to get data from array. When we have lot of data then sometimes its difficult get all data manually.
//eg : 100 of data are in [] so to get each of them manually is time taking and us eit.a

// for of loop helps to get all from array quicklt and one by one whichw  ecan use it.
//syntax for for of loop : for (var i of arrayname) {we can use the data}
//thius saves time by getting data instantly.

//i variables goes inside arr and gets all data
for(var i of arr){
document.write(i +"<br>")
    
}
//create an array whith 10 numbers inside that, use for them to add all the numbers
let array=[12,10,100,30,35,72,14,69,39,21]
let total=0
for(var i of array){
total+=i
}
document.write(total+"<br>")

//---------------------dictionary------------------
//dictionary is used to store data like arrays but the major difference is the dictionary stores 2 things, keys and data
//key means the meaning of the data, this dictionary is similar to the real life dictionary as in real life we store the word and the meaning of the word similarly dictionary in coding also stores the data and the meaning of the data
// for dictionary curly brackes are used e.g.{}
var car_info={
modelname:"audi",//model name is the key and audi is the data
color:"red",
number:11
};
//number 5= for in loop- this loop is used on dictionaries to get all the data from it like we use for in loop for arrays 
// withe the help of for in loop we will get all the data from the dictionary and use it either we can print it or can do anything else
//i is the variable in your loop. We just need one variable in both for of and for in loop to get the data from arrays and dictionaries
var t="";
for(let c in car_info)
{
t += car_info[c];
}
//assignment- create a dictionary and store any data in that and use for in loop to print the data
//a- create an array of even numbers and print them on the screen

var rawr_hanupapu={
friend:"UrMineDragonfruit",
displayname:"Sandyyy",
reallifename:"Saanvi"
};
var h="";
for(let s in rawr_hanupapu)
{h += rawr_hanupapu[s];}
document.write(h)

var rawr=["ello"]
document.write(rawr +"<br>")
for(var r of rawr){
document.write(r +"<br>")}


//------------------------------Function----------------------------------
//