const buttons = document.querySelectorAll(".accordion");
const textPanel = document.querySelectorAll(".panel")

for(let button of buttons) {
    button.addEventListener("click", () =>{

        button.nextElementSibling.classList.toggle("show");

        button.classList.toggle("bold");
    })
}