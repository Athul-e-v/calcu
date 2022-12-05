/*
let string="";
let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
  button.addEventListener("click" ,(e)=>{
    console.log(e.target);
    string=string+e.target.innerHTML;
     document.querySelector("input").value=string;
  })
})
*/
var i;
let string1 = "";
let string2 = "";
    var flag = 0;
for (i = 0; i < document.querySelectorAll(".button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", (e) => {
    console.log(e.target);

    if (e.target.innerHTML == "=") {
      flag=0;
      string1 = eval(string1);
      try{
      document.querySelector("input").value = string1;
    }
    catch(e){
      document.querySelector("input").value = e;
    }
    } else if (e.target.innerHTML == "AC") {
      flag=0;
      string1 = "";
      document.querySelector("input").value = string1;
    } else if (e.target.innerHTML == "C") {
      var n = string1.length - 1;
      string1 = string1.substring(0, n);
      document.querySelector("input").value = string1;
    } else if (e.target.innerHTML == "X") {
      flag=0;
      if(string1.length==0)
      {
        string1="";
        document.querySelector("input").value = string1;
      }
      else{
      var n = string1.length - 1;
      if (string1[n] == "*" || string1[n] == "-" || string1[n] == "+" || string1[n] == "/" || string1[n] == "%") {
        string1 = string1.substring(0, n);
      }
      string1 += "*";
      document.querySelector("input").value = string1;
    }
    } else {
      if(string1.length==0 && (e.target.innerHTML == "/" || e.target.innerHTML == "%")){
        string1="";
        document.querySelector("input").value = string1;
      }
    else{
      var n = string1.length - 1;
      if ((string1[n] == "*" || string1[n] == "-" || string1[n] == "+" || string1[n] == "/" || string1[n] == "%") && !(e.target.innerHTML >= "0" && e.target.innerHTML <= "9")&&!(e.target.innerHTML == ".")) {

        string1 = string1.substring(0, n);
      }
      if (e.target.innerHTML == "." && flag == 1) {
        document.querySelector("input").value = string1;
      } else if (e.target.innerHTML == "." && flag == 0) {
        string1 += e.target.innerHTML;
        flag = 1;
        document.querySelector("input").value = string1;
      } else {
        if(e.target.innerHTML == "/" || e.target.innerHTML == "+" || e.target.innerHTML == "-" ){
          flag=0;
        }
        string1 += e.target.innerHTML;
        document.querySelector("input").value = string1;
      }
    }
  }
  })
}
