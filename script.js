// Search Box Functions Starts
function myFunction1() {
    document.getElementById("myForm").style.right = "20px";
    document.getElementById("search").style.display = "none";
    document.getElementById("close").style.display = "inline-block";
}

function myFunction2() {
    document.getElementById("myForm").style.right = "-400px";
    document.getElementById("search").style.display = "inline-block";
    document.getElementById("close").style.display = "none";
}
// Search Box Functions Ends

// Profile Form Functions Starts
function function_click(){
    document.getElementById("myProfileForm").style.right = "20px";
    document.getElementById("account_circle").style.display = "none";
    document.getElementById("close_profile").style.display = "inline-block";
}

function myFunction3(){
    document.getElementById("myProfileForm").style.right = "-400px";
    document.getElementById("close_profile").style.display = "none";
    document.getElementById("account_circle").style.display = "inline-block";
}
// Profile Form Functions Ends

// Menu Bar Functions Starts
function menu_open(){
    document.getElementById("menupage").style.display = "inline-block";
    document.getElementById("close_menu").style.display = "inline-block";
    document.getElementById("menu").style.display = "none";
}

function menu_close(){
    document.getElementById("menupage").style.display = "none";
    document.getElementById("close_menu").style.display = "none";
    document.getElementById("menu").style.display = "inline-block";
}
// Menu Bar Functions Ends

// Automatic slide moving animation starts
var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 3){
        counter = 1;
      }
    }, 8000);

var counter = 1;
    setInterval(function(){
      document.getElementById('check' + counter).checked = true;
      counter++;
      if(counter > 3){
        counter = 1;
      }
    }, 8000);

// Automatic slide moving animation ends