const inputs = document.querySelectorAll(".color-input");
const redCount = document.getElementById("red-count");
const greenCount = document.getElementById("green-count");
const blueCount = document.getElementById("blue-count");
const saveButton = document.getElementById("save-button");

let counts = { red: 0, green: 0, blue: 0 };

// Función para actualizar colores y contadores
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    input.classList.remove("red", "green", "blue");

    // Verifica el color y actualiza contadores
    if (value === "rojo") {
      input.classList.add("red");
      counts.red++;
    } else if (value === "verde") {
      input.classList.add("green");
      counts.green++;
    } else if (value === "azul") {
      input.classList.add("blue");
      counts.blue++;
    }

    updateCounters();
  });
});

// Función para actualizar la vista de los contadores
function updateCounters() {
  redCount.textContent = counts.red;
  greenCount.textContent = counts.green;
  blueCount.textContent = counts.blue;
}

// Al presionar guardar, se muestra un mensaje (puedes integrar lógica de guardado aquí)
saveButton.addEventListener("click", () => {
  alert(`Datos guardados:\nRojos: ${counts.red}, Verdes: ${counts.green}, Azules: ${counts.blue}`);
});
