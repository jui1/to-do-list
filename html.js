const intpp = document.getElementById("int");
const intpS = document.getElementById("list");

function addJ(){
    if(intpp.value === ''){
        alert("You must Write somethin!");
    }
    else{
       let li = document.createElement("li") ;
       li.innerHTML = intpp.value;
       intpS.appendChild(li);
       let span  = document.createElement("span");
       span.innerHTML = "\u00d7";
       li.appendChild(span);
    }
    intpp.value = "";
    seData();
}

intpS.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        e.target.classList.toggle("umm");


        seData();
    }
   else  if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        seData();
    }
}, false);

function seData(){
    localStorage.setItem("data" , intpS.innerHTML );
}

























