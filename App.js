class Tasks {
  constructor(name, quantity, year) {
    this.name = name;
    this.quantity = quantity;
    this.year = year;
  }
}

class UI {
  //Add list 
  addList(tasks) {
    const listTasks = document.getElementById("tasks-list");
    const element = document.createElement("div");

    //insert elemnt
    element.innerHTML = `
    <div class="card text-center mb-4">
        <div class="card-body">
            <strong>Tareas</strong>: ${tasks.name}
            <br>
            <strong>Emocion</strong>: ${tasks.quantity}
            <br>
            <strong>Fecha</strong>: ${tasks.year}
            <br>
            <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
        </div>
    </div>
    `;

    listTasks.appendChild(element);
  }

  //Delete list
  deleteList(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.parentElement.remove();
      this.showMessage("Tarea eliminada con exito", "info");
    }
  }

  //Message
  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-4`;
    div.appendChild(document.createTextNode(message));
    //SHOWING DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");
    container.insertBefore(div, app);
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  //Reset input form
  resetForm() {
    document.getElementById("list-form").reset();
  }
}

//Get Dom event
document.getElementById("list-form").addEventListener("submit", function (e) {
  const ui = new UI();
  const name = document.getElementById("name").value;
  const quantity = document.getElementById("quantity").value;
  const year = document.getElementById("year").value;

  const tasks = new Tasks(name, quantity, year);

  //if Input is null  
  if (name === "" || quantity === "" || year === "") {
    return ui.showMessage("Debes completar los campos", "danger");
  }

  ui.addList(tasks);
  ui.resetForm();
  ui.showMessage("Tarea agregado con exito", "success");

  e.preventDefault();
});

//Delete list task
document.getElementById("tasks-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteList(e.target);
});
