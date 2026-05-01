    let input = document.getElementById("input");
    let addBtn = document.getElementById("add-btn");
    let ul = document.getElementById("todo-container");
    let deleteBtn;


    // add todo
    addBtn.addEventListener("click", () => {
        const todoText = input.value;
        if(!todoText) return;
    
        // li
        const li = document.createElement("li");
        li.innerText= todoText;
        ul.appendChild(li);

    
        // delete btn
        deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn")
        deleteBtn.innerText= "\u00d7";
        li.appendChild(deleteBtn);

        input.value = "";

    })

    // delete functionality
    ul.addEventListener("click", (event) => {
        if(event.target.classList.contains("delete-btn")){
            event.target.parentElement.remove()
        } else if(event.target.tagName === "LI"){
            event.target.classList.toggle("checked")
        }
    })
