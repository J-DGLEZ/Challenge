const ingd = document.querySelector("#ing");
const btn = document.querySelector("#entry");
const error = document.querySelector("#msgerror");
 const textatea = document.querySelector("#textarea");
const btn2 = document.querySelector("#entry2");
const span = document.querySelector("#span");

btn.addEventListener("click", displayfirstBlock); 

function displayfirstBlock() {
 
 
  if (ingd.value == "") {
   
    error.innerHTML = "Name cannot be left blank";
    document.querySelector("#msgerror").style.color = "#ff0000";
    ingd.style.borderColor = "red";
    ingd.focus();
  } else {
    error.innerHTML = "All Good Mate";
    document.querySelector("#msgerror").style.color = "blue"
    console.log(`el primer ingrediente es ${ingd.value}`);
  
}
};


btn.addEventListener("click", generateList);
function generateList() {
  let ingredientsList = document.querySelector("#list > ul");
  //console.log(hobbiesList);
  for (i = 0; i <= 0; i++) {
    let ingred = ingd.value
    let li = document.createElement("li");
    ingd.value = "";
    //console.log(hobbies);
    li.innerHTML = ingred;
    ingredientsList.appendChild(li);
    document.querySelector("#list").style.display="block";
  }
}

 entry2.addEventListener("click" , display)

 function display (){
 document.querySelector("#span").style.display="block";
 document.querySelector("#textarea").style.display = "block";



 };
