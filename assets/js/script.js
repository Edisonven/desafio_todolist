let inputNuevaTarea = document.getElementById("input");
let btnNuevaTarea = document.getElementById("btn");
let idNuevaTarea = document.getElementById("id");
let contentNuevaTarea = document.getElementById("tareas");
let totalTareas = document.getElementById("total");

let arrayList = [
  { id: 16, tarea: "Hacer el aseo", realizada: false },
  { id: 17, tarea: "Limpiar la cocina", realizada: false },
  { id: 18, tarea: "Hacer mercado", realizada: false },
];

function renderArrayList() {
  let htmlListTarea = "";
  let htmlListId = "";
  for (const item of arrayList) {
    htmlListTarea += `<p class="span__text">${item.tarea}<input class="checkbox" type="checkbox" name="" id="check"><button class="btn-2" onclick="borrar(${item.id})">Eliminar</button></p>`;
    htmlListId += ` <p class="span__text">${item.id}</p>`;
  }
  contentNuevaTarea.innerHTML = htmlListTarea;
  idNuevaTarea.innerHTML = htmlListId;
  totalTareas.textContent = `Total: ${arrayList.length}`;
}
renderArrayList();

function borrar(id) {
  let indice = arrayList.findIndex((list) => list.id == id);
  arrayList.splice(indice, 1);

  renderArrayList();
}

