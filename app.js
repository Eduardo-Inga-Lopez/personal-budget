// Array para almacenar las transacciones
let transactions = []; // Aquí guardaremos todas las transacciones ingresadas (tipo y monto)

// Manejar el envío del formulario
document.getElementById("transaction-form").addEventListener("submit", function (event) {
  // Detener el comportamiento predeterminado del formulario (recargar la página)
  event.preventDefault();

  // Obtener el monto ingresado por el usuario y convertirlo a número decimal
  const amount = parseFloat(document.getElementById("amount").value);
  
  // Obtener el tipo de transacción seleccionado (ingreso o gasto)
  const type = document.getElementById("type").value;

  // Validar que el monto ingresado sea un número válido mayor a 0
  if (isNaN(amount) || amount <= 0) {
    alert("Por favor, ingrese un monto válido."); // Mostrar alerta si el monto no es válido
    return; // Salir de la función sin agregar la transacción
  }

  // Agregar la nueva transacción al array 'transactions'
  transactions.push({ type, amount });

  // Renderizar (mostrar) todas las transacciones actualizadas en la lista
  renderTransactions();

  // Limpiar el formulario para que quede listo para un nuevo ingreso
  this.reset();
});

// Función para renderizar las transacciones
function renderTransactions() {
  // Seleccionar la lista HTML donde se mostrarán las transacciones
  const transactionList = document.getElementById("transaction-list");

  // Limpiar el contenido actual de la lista para evitar duplicados
  transactionList.innerHTML = "";

  // Recorrer todas las transacciones almacenadas en el array
  transactions.forEach((transaction, index) => {
    // Crear un nuevo elemento <li> para cada transacción
    const listItem = document.createElement("li");
    
    // Establecer el texto del <li>, mostrando el tipo de transacción y el monto
    listItem.textContent = `${transaction.type === "income" ? "Ingreso" : "Gasto"}: $${transaction.amount}`;
    
    // Agregar el <li> a la lista de transacciones en el HTML
    transactionList.appendChild(listItem);
  });
}

// Manejar el clic en el botón para ordenar las transacciones
document.getElementById("sort-button").addEventListener("click", function () {
  // Ordenar las transacciones en el array por monto en orden descendente
  transactions.sort((a, b) => b.amount - a.amount);
  
  // Volver a renderizar las transacciones para reflejar el nuevo orden
  renderTransactions();
});
