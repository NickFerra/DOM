const showhidebtn = document.getElementById("tableToggle");
const table = document.getElementById("tab");

//This will hide the table when page first loaded and then add table when button clicked.
showhidebtn.addEventListener("click", () => {

    if(table.style.display == "none") {
        table.style.display = "block";
        showhidebtn.textContent = "Back";
    }
    else {
        table.style.display = "none";
        showhidebtn.textContent = "Table";
    }
});
