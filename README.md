# Documentación de Ajustes Realizados en los Archivos JavaScript

Esta documentación describe los ajustes implementados en el código JavaScript para mejorar la estética y funcionalidad del proyecto "Mi Presupuesto Personal".

## Ajustes Realizados

### 1. Igualar el ancho de los botones

**Motivación:** Se observó que los botones `Agregar Transacción` (verde) y `Ordenar por Monto` (azul) no tenían el mismo ancho, afectando la consistencia visual.

**Implementación:**
```javascript
// Selección de los botones
const btnGreen = document.querySelector('.btn-green');
const btnBlue = document.querySelector('.btn-blue');

// Ajustar el ancho para que ambos sean iguales
const maxWidth = '300px';
btnGreen.style.width = maxWidth;
btnBlue.style.width = maxWidth;
```

### 2. Ajustar espaciado entre botones y secciones

**Motivación:** Había poco espacio entre el botón `Agregar Transacción` y el formulario, así como entre el botón `Ordenar por Monto` y la sección del historial.

**Implementación:**
```javascript
// Ajustar los márgenes de los botones
btnGreen.style.marginBottom = '20px';
btnBlue.style.marginTop = '20px';
```

### 3. Centralizar botones dentro de las tarjetas

**Motivación:** Para un diseño más armonioso, se buscó centrar los botones en sus respectivos contenedores.

**Implementación:**
```javascript
// Selección de las tarjetas
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.style.textAlign = 'center'; // Centralizar texto y botones
});

// Asegurar que los botones estén centrados
btnGreen.style.margin = '0 auto';
btnBlue.style.margin = '0 auto';
```

### 4. Mejorar contraste entre tarjetas y fondo

**Motivación:** Las tarjetas carecían de un borde o sombra, lo que dificultaba distinguirlas del fondo.

**Implementación:**
```javascript
cards.forEach(card => {
    card.style.border = '1px solid #ddd'; // Agregar borde
    card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Agregar sombra sutil
});
```

## Notas Adicionales

- Los valores de estilo como `width`, `margin`, `border` y `boxShadow` se eligieron para garantizar un diseño más limpio y estético.
- Se recomienda mantener esta estructura modular para facilitar futuros ajustes en el diseño.

---
