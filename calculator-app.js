
  //here when equal  calculates does +, /, *, ? 
  // you can use a function called as an eval function that calculates answer . it check which sign is  given and according to that gives answer in input
  //Steps
  //1. get value(expression: two number, sign) from textbox and store it in variable
  //2. then we use eval on that to calculate 
  function press(number) {
    document.getElementById("textbox").value += number;
  }
  
  function equals() {
    try {
      let r = eval(document.getElementById("textbox").value);
      document.getElementById("textbox").value = r;
    } catch {
      document.getElementById("textbox").value = "Error";
    }
  }
  
  function clear1() {
    document.getElementById("textbox").value = "";
  }


//---------------------Function to connect HTML tags with Javascript------------------------
//document.getElementById().innerHTML=valuecalculated
//document.getElementById means we get html tag whose id is () mentioned in jaavscript. 
//innerHTML: once we get html tag in Javscript, js goes inside that  does its calculation and give answer to HTML so that it can display.
//document.getElemensByClassName()
