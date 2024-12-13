// Valida que el monto sea un número positivo
export const validarMonto = (monto) => {
    return !isNaN(monto) && monto > 0;
  };
  
  // Valida que el tipo sea "income" o "expense"
  export const validarTipo = (tipo) => {
    return tipo === "income" || tipo === "expense";
  };
  