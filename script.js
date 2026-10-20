
console.log("Az RPG weboldal JavaScriptje betöltődött!");

const cim = document.querySelector("h1");

cim.addEventListener("click", function () {
    cim.textContent = "A JavaScript működik!";
});

