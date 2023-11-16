// variables que guardan un elemento del DOM
let inputNuevaTarea = document.getElementById("input");
let btnNuevaTarea = document.getElementById("btn");
let idNuevaTarea = document.getElementById("id");
let contentNuevaTarea = document.getElementById("tareas");
let totalTareas = document.getElementById("total");
let tareasRealizadas = document.getElementById("realizadas");

// arreglo de objetos con tareas por defecto
let arrayList = [
  { id: 16, tarea: "Hacer el aseo", realizada: false },
  { id: 17, tarea: "Limpiar la cocina", realizada: false },
  { id: 18, tarea: "Hacer mercado", realizada: false },
];

//funcion que renderiza las tareas agregadas por defecto (y las tareas agregadas por input)
function renderArrayList() {
  let htmlListTarea = "";
  let htmlListId = "";
  for (const item of arrayList) {
    htmlListTarea += `<span class="span__text">${item.tarea}<input class="checkbox" onchange="checkState(${item.id})" type="checkbox" name="" id="check">
    <button class="btn-2" onclick="borrar(${item.id})">Eliminar</button></span>`;
    htmlListId += ` <p class="span__text">${item.id}</p>`;
  }
  contentNuevaTarea.innerHTML = htmlListTarea;
  idNuevaTarea.innerHTML = htmlListId;
  totalTareas.textContent = arrayList.length;
}
renderArrayList();

// función que borra un elemento agregado al arreglo por su id
function borrar(id) {
  let indice = arrayList.findIndex((list) => list.id === id);
  arrayList.splice(indice, 1);
  renderArrayList();
}

// función que agrega una nueva tarea al ingresarla en el input
btnNuevaTarea.addEventListener("click", () => {
  let inputValue = inputNuevaTarea.value;
  let newId = arrayList[arrayList.length - 1].id + 1;
  if (inputNuevaTarea.value === "") {
    alert("Debes ingresar una tarea");
  } else {
    arrayList.push({ id: newId, tarea: inputValue, realizada: false });
    renderArrayList();
  }
  inputNuevaTarea.value = "";
});

//funcion para actualizar la lista de tareas cuando están realizadas
function checkState(id) {
  let tareaEncontrada = arrayList.find((list) => list.id === id);
  if (tareaEncontrada.realizada) {
    tareaEncontrada.realizada = false;
    realizadaFiltrada = arrayList.filter((item) => item.realizada === false);
    tareasRealizadas.textContent--;
  } else {
    tareaEncontrada.realizada = true;
    realizadaFiltrada = arrayList.filter((item) => item.realizada === true);
    tareasRealizadas.textContent = realizadaFiltrada.length;
  }
  console.log(realizadaFiltrada);
}
