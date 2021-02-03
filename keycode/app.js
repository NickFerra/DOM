const showhidebtn = document.getElementById("tableToggle");
const table = document.getElementById("tab");

showhidebtn.addEventListener("click", () => {

    if(table.style.display == "none") {
        table.style.display = "block";
        showhidebtn.textContent = "back";
    }
    else {
        table.style.display = "none";
        showhidebtn.textContent = "table";
    }
});
