var final_rate=document.querySelector(".rating--value");

final_rate.innerHTML=sessionStorage.getItem("rate");

sessionStorage.clear();
