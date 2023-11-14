let inputNuevaTarea = document.getElementById("input");
let btnNuevaTarea = document.getElementById("btn");
let idNuevaTarea = document.getElementById("id");
let contentNuevaTarea = document.getElementById("tareas");
let totalTareas = document.getElementById("total");

let arrayList = [
  { id: Date.now(), tarea: "Hacer el aseo" },
  { id: Date.now(), tarea: "Limpiar la cocina" },
  { id: Date.now(), tarea: "Hacer mercado" },
];

function renderArrayList() {
  let htmlListTarea = "";
  let htmlListId = "";
  for (const item of arrayList) {
    htmlListTarea += `<p class="span__text">${item.tarea}<input class="checkbox" type="checkbox" name="" id=""><button class="btn-2" onclick="borrar(${item.id})">Eliminar</button></p>`;
    htmlListId += ` <p class="span__text">${item.id}</p>`;
  }
  contentNuevaTarea.innerHTML = htmlListTarea;
  idNuevaTarea.innerHTML = htmlListId;
  totalTareas.textContent = `Total: ${arrayList.length}`;
}
renderArrayList();

function borrar(id) {
  let indice = arrayList.findIndex((ele) => ele.id == id);
  arrayList.splice(indice, 1);

  renderArrayList();
}
