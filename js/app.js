import { calcularBalance, formatearMonto } from "./utils.js";
import { validarMonto, validarTipo } from "./validators.js";

// Manejar el estado de las transacciones de forma local
let transactions = [];

// Manejar el envío del formulario
document.getElementById("transaction-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener datos del formulario
  const amount = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("type").value;

  // Validar los datos ingresados
  if (!validarMonto(amount)) {
    alert("Por favor, ingrese un monto válido.");
    return;
  }

  if (!validarTipo(type)) {
    alert("Por favor, seleccione un tipo válido.");
    return;
  }

  // Crear una nueva transacción
  const date = new Date().toLocaleDateString();
  const nuevaTransaccion = { date, type, amount };

  // Actualizar el estado de las transacciones
  transactions = [...transactions, nuevaTransaccion];

  actualizarVista();
  this.reset(); // Limpiar el formulario
});

// Función para renderizar las transacciones
const renderTransactions = () => {
  const transactionList = document.getElementById("transaction-list");
  transactionList.innerHTML = ""; // Limpiar la lista actual

  transactions
    .map((transaction) => {
      const listItem = document.createElement("li");
      listItem.className = "transaction-item";

      listItem.innerHTML = `
        <span class="transaction-date">${transaction.date}</span>
        <span class="transaction-type ${
          transaction.type === "income" ? "income" : "expense"
        }">${transaction.type === "income" ? "+" : "-"}${formatearMonto(transaction.amount)}</span>
      `;
      return listItem;
    })
    .forEach((listItem) => transactionList.appendChild(listItem));
};

// Función para actualizar la vista (transacciones y balance)
const actualizarVista = () => {
  renderTransactions();

  const balance = calcularBalance(transactions);
  document.getElementById("balance-total").textContent = formatearMonto(balance);
};

// Manejar el botón para ordenar transacciones
document.getElementById("sort-button").addEventListener("click", () => {
  transactions = [...transactions].sort((a, b) => {
    if (a.type === b.type) {
      return b.amount - a.amount; // Ordenar por monto si el tipo es igual
    }
    return a.type === "income" ? -1 : 1; // Ingresos antes que gastos
  });

  actualizarVista();
});


