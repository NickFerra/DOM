const showHideBtn = document.getElementById("tableToggle");
const table = document.getElementById("tab");
const textKey = document.getElementById("text-key");
const textCode = document.getElementById("text-code");
const textWhich = document.getElementById("text-which");
const text = document.getElementById("text-display");
const events1 = document.getElementById("events1");
const events2 = document.getElementById("events2");
const events3 = document.getElementById("events3");

//This will hide the table when page first loaded and then add table when button clicked.
showHideBtn.addEventListener("click", () => {

    if(table.style.display == "none") {
        table.style.display = "block";
        showHideBtn.textContent = "Back";
    }
    else {
        table.style.display = "none";
        showHideBtn.textContent = "Table";
    }
});

//adding keydown event
document.addEventListener("keydown", (event) =>{
    
        events1.style.display = "block";
        textKey.textContent = (event.key);

        events2.style.display = "block";
        textCode.textContent = (event.code); 

        events3.style.display = "block";
        textWhich.textContent = (event.which);
    
   
});
