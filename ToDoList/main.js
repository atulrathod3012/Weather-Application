
let button=document.getElementById("submit");

let ul=document.getElementById("listtoadd")

button.addEventListener("click",addTask);

function addTask(){
let input=document.querySelector("#inputtag")
let content=input.value.trim();
if (content !== "") {
    let li=document.createElement("li");
    li.textContent=content;
    li.style.display="inline";
    let buttonremove=document.createElement("button");
    buttonremove.innerText="Remove";
    buttonremove.style.display="inline";
  
  

    li.style.fontSize="30px";
    li.style.marginLeft="30px";
     buttonremove .style.marginLeft="30px";
    buttonremove.style.backgroundColor="red"
  
    input.value="";
    ul.append(li);
      ul.append(buttonremove);
 
     
   

    

    
    
}
else{
    alert("input empty");
}


   



    
}



