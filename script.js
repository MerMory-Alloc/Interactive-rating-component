var rating_list=document.getElementsByClassName("number");
var rating_value="";

for (var i = 0; i < rating_list.length; i++) {
  rating_list[i].addEventListener("click", grabValue);
}

function grabValue(){

  for (var i = 0; i < rating_list.length; i++) {
    if((rating_list[i].innerHTML != this.innerHTML)&&(rating_list[i].classList.contains("selected"))){
      rating_list[i].classList.remove("selected");
    }
  }

  this.classList.add("selected");
  rating_value=this.innerHTML;
  sessionStorage.setItem("rate", rating_value);
  console.log(rating_value);
}

document.querySelector(".submit").addEventListener("click", myFunction);
function myFunction() {
  if(rating_value != "")
    window.location.href="rated.html";
  else {
    alert("Please give us your rating before you proceed");
  }
}
