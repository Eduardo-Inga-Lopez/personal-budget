// Función pura para calcular el balance total
export const calcularBalance = (transacciones) => {
  return transacciones.reduce((total, trans) => {
    return trans.type === "income" ? total + trans.amount : total - trans.amount;
  }, 0);
};

// Función pura para formatear un monto en una moneda específica
export const formatearMonto = (monto, moneda = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: moneda,
  }).format(monto);
};
