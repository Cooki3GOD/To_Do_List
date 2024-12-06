const addBtn = document.querySelector("button");
const inputField = document.querySelector("input");
const list = document.querySelector(".taskList ul");

addBtn.addEventListener("click", () => {
    if(inputField.value != "") {
        let li = document.createElement("li");
        li.innerHTML = `${inputField.value} <p>X</p>`;
        list.appendChild(li);
        inputField.value = "";
        li.addEventListener("click", () => {
            if(li.classList.contains("done")) {
                li.classList.remove("done");
            }
            else {
                li.classList.add("done");
            }
        })
        const remove = document.querySelectorAll("li p");
        remove.forEach((btn) => {
            btn.addEventListener("click", () => {
                
            })
        })

    }
    else {
        alert("You need to type something!");
    }
    
})
