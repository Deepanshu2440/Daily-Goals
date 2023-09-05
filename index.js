const title = document.getElementById("title");

const description = document.getElementById("description");
const form = document.querySelector("form");

const container = document.querySelector(".container");

// array of objects jisme title desc sab dalega 

const tasks = localStorage.getItem("tasks") 
? JSON.parse(localStorage.getItem("tasks")) : [];

showAllTasks();


function showAllTasks(){

    tasks.forEach((value,index)=>{

        const div = document.createElement("div");
        div.setAttribute("class","task");

        const innerDiv = document.createElement("div");
        div.append(innerDiv);

        const para = document.createElement("p");
        para.innerText= value.title;
        innerDiv.append(para);

        const span = document.createElement("span");
        span.innerText= value.description;
        innerDiv.append(span);

        const btn = document.createElement("button");
        btn.setAttribute("class","deleteBtn");
        btn.innerText="-";
        div.append(btn);

        btn.addEventListener("click" , ()=>{
            removeTasks();
            tasks.splice(index,1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            showAllTasks();
        });

        container.append(div);
        


    });
}

function removeTasks(){

    tasks.forEach(() => {

        const div = document.querySelector(".task");
        div.remove();
    });
}


form.addEventListener("submit",(e) => {

    e.preventDefault();//page wont be refreshed every time on submit that is deafult behaviour

    removeTasks();

    tasks.push({
        title: title.value ,
        description : description.value ,
    });
    console.log(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showAllTasks();
});

