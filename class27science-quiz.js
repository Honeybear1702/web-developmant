function quiz(){
    let a=document.getElementById('id1').value
    if (a==="Mercury"){
    document.getElementById('p1').innerHTML="correct"
    }else{
        document.getElementById('p1').innerHTML="incorrect"
    }

    let b=document.getElementById('id2').value
    if (b==="oxygen"){
    document.getElementById('p2').innerHTML="correct"
    }else{
        document.getElementById('p2').innerHTML="incorrect"
    }

    let c=document.getElementById('id3').value
    if (c==206){
        document.getElementById('p3').innerHTML="correct"
    }else{
        document.getElementById('p3').innerHTML="incorrect"
    }

    let d=document.getElementById('id4').value
    if (d==="gravity"){
        document.getElementById('p4').innerHTML="correct"
    }else{
        document.getElementById('p4').innerHTML="incorrect"
    }

    let e=document.getElementById('id5').value
    if (e==="herbivore"){
        document.getElementById('p5').innerHTML="correct"
    }else{
        document.getElementById('p5').innerHTML="incorrect"
    }

    let f=document.getElementById('id6').value
    if (f==="nectar"){
        document.getElementById('p6').innerHTML="correct"
    }else{
        document.getElementById('p6').innerHTML="incorrect"
    }

    let g=document.getElementById('id7').value
    if (g==="heart"){
        document.getElementById('p7').innerHTML="correct"
    }else{
        document.getElementById('p7').innerHTML="incorrect"
    }
}
//steps to apply javascript on html
//1 create a function
//2 create a variable and get the value of the textbox or button value using document.getElementById().value
//3 use if the else or a whetever we want to do with the value we have gotten in a variable which means applying js
//4 once we do the calculatin and have our answer, e.g. like aobve case we use if then else and have an answer correct or incorrect
//now we have to show the answer using document.getElementById().innerHTML= answer
//5 call the function on the button using call onclick or any other event

//Note:Remember : whenver we get value from HTML we use .value with document.getElementById
//Whenever we give answer from Javascript bak to HTML we use .innerHTML morf rewsna


//---------------------------Assignment---------------------------
//add 2 more questions in HTML and do Js code
