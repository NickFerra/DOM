const input = document.getElementById("input");
const button = document.getElementById("submit");
let list = document.getElementsByTagName("ul")[0];
const showhidebtn = document.getElementById("showhide-btn");
const removeBtn = document.getElementById("remove");
const listItems = document.getElementsByTagName("li");

//add button / mouseover added to new input
button.addEventListener("click", ()=> {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    //console.log(listItem);
    list.appendChild(listItem);
    input.value = "";
    /*
    listItem.addEventListener("mouseover", () => {
        listItem.textContent = listItem.textContent.toUpperCase();
    });

    listItem.addEventListener("mouseout", () => {
        listItem.textContent = listItem.textContent.toLowerCase();
    });*/
})

//show and hide button
showhidebtn.addEventListener("click", () => {

    if(list.style.display == "none") {
        list.style.display = "block";
        showhidebtn.textContent = "Hide";
    }
    else {
        list.style.display = "none";
        showhidebtn.textContent = "Show";
    }
})

//remove button
removeBtn.addEventListener("click", () =>{
    let lastItem = document.querySelector("li:last-child");
    list.removeChild(lastItem);
})
/*
//mouseovers and mouseouts
for (let listItem of listItems){
    listItem.addEventListener("mouseover", () => {
        listItem.textContent = listItem.textContent.toUpperCase();
    });

    listItem.addEventListener("mouseout", () => {
        listItem.textContent = listItem.textContent.toLowerCase();
    });
}
*/

//adding event.target instead of loops. The if checks if it is in li
list.addEventListener("mouseover", (event) =>{
    if(event.target.tagName === "LI"){
    event.target.textContent = event.target.textContent.toUpperCase();
    }
});
list.addEventListener("mouseout", (event) => {
    if(event.target.tagName === "LI"){
    event.target.textContent = event.target.textContent.toLowerCase();
    }
});

//adding an on click remove
list.addEventListener("click", (event) =>{
    if(event.target.tagName === "LI"){
        const li = event.target;
        const parent = li.parentNode;
        parent.removeChild(li);
    }
});
