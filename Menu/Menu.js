const baseDeDatosPizzas = {
    "p01": { nombre: "Mama Ocllo - ex Pizza Super Inka", imagen: "../Recursos/img/Pizza-Super-Inka.webp", precios: { pequeño: 22.50, mediano: 26.50, grande: 30.50 }, ingredientes: ["Jamón", "Chorizo", "Tocino", "Salchicha", "Champiñón", "Aceituna", "Piña"] },
    "p02": { nombre: "Pizza Capricho del Inka", imagen: "../Recursos/img/Pizza-Capricho.webp", precios: { pequeño: 15.50, mediano: 18.50, grande: 21.50 }, ingredientes: ["Tocino", "Peperoni", "Cebolla", "Aceituna", "Pimentón"] },
    "p03": { nombre: "Pizza Cuatro Estaciones", imagen: "../Recursos/img/Pizza-Cuatro-Estaciones.webp", precios: { pequeño: 41.80, mediano: 45.80, grande: 49.80 }, ingredientes: ["1/4 de Pizza Especial", "1/4 de Pizza Jamonada", "1/4 de Pizza Napolitana", "1/4 de Pizza Tropical"] },
    "p04": { nombre: "Sipas- ex Pizza de la Casa", imagen: "../Recursos/img/Pizza-Casa.webp", precios: { pequeño: 14.80, mediano: 17.80, grande: 19.80 }, ingredientes: ["Jamón inglés", "Chorizo", "Tocino"] },
    "p05": { nombre: "Manco Ccapac- ex Pizza Especial", imagen: "../Recursos/img/Pizza-Especial.webp", precios: { pequeño: 24.20, mediano: 28.20, grande: 31.20 }, ingredientes: ["Jamonada", "Chorizo", "Tocino", "Salchicha", "Champiñón", "Pimentón"] },
    "p06": { nombre: "Pizza Paladar del Inka", imagen: "../Recursos/img/Pizza-Paladar.webp", precios: { pequeño: 16.90, mediano: 19.90, grande: 22.90 }, ingredientes: ["Jamonada", "Salame", "Tocino", "Huevo", "Tomate"] },
    "p07": { nombre: "Pizza Wiracocha", imagen: "../Recursos/img/Pizza-Wiracocha.webp", precios: { pequeño: 17.10, mediano: 20.10, grande: 23.10 }, ingredientes: ["Jamonada", "Tocino", "Calabresa", "Champiñón", "Aceituna", "Cebolla", "Pimentón"] },
    "p08": { nombre: "Pachamama-ex Pizza Presidencial", imagen: "../Recursos/img/Pizza-Presidencial.webp", precios: { pequeño: 14.50, mediano: 17.50, grande: 19.50 }, ingredientes: ["Chorizo", "Tocino", "Salchicha", "Jamón York"] },
    "p09": { nombre: "Pizza Tawantinsuyo", imagen: "../Recursos/img/Pizza-Tanwantinsuyo.webp", precios: { pequeño: 28.10, mediano: 32.10, grande: 35.10 }, ingredientes: ["1/4 de Pizza Especial", "1/4 de Pizza Tropical Especial", "1/4 de Pizza Vegetariana", "1/4 de Pizza Americana"] },
    "p10": { nombre: "Pizza Warmicha", imagen: "../Recursos/img/Pizza_Warmicha.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["1/2 Pizza Especial", "1/2 Pizza Tropical"] },
    "p11": { nombre: "Pizza Huascar", imagen: "../Recursos/img/Pizza_Huascar.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Piña", "Champiñón", "Jamón", "Tocino", "Calabresa"] },
    "p12": { nombre: "Pizza Willka - Ex Hawayana", imagen: "../Recursos/img/Pizza_Willka.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Piña", "Jamón"] },
    "p13": { nombre: "Pizza Munay - Ex Super Hawayana", imagen: "../Recursos/img/Pizza_Munay.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Piña", "Jamon", "Durazno"] },
    "p14": { nombre: "Pizza Ayni", imagen: "../Recursos/img/Platos.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Piña(opcional)", "Chorizo", "Jamonada", "Tocino", "Salchicha"] },
    "p15": { nombre: "Pizza Misk'i - Ex Tropical", imagen: "../Recursos/img/Pizza_Miski.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Papaya", "Plátano", "Piña", "Manzana", "Leche Nestlé"] },
    "p16": { nombre: "Pizza Awka - Ex Tropical especial", imagen: "../Recursos/img/Pizza_Awka.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Fresa", "Mango", "Durazno", "Plátano", "Piña", "Melón", "Fudge", "Leche Nestlé"] },
    "p17": { nombre: "Pizza Jhillu", imagen: "../Recursos/img/Platos.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Fresa", "Mango", "Fudge"] },
    "p18": { nombre: "Pizza Euge", imagen: "../Recursos/img/Platos.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Cabanossi de cuy", "Jamonada", "Chorizo", "Tocino", "Salchicha", "Champiñón"] },
    "p19": { nombre: "Pizza Illapa", imagen: "../Recursos/img/Platos.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Cabanossi de cuy", "Pollo", "Chorizo", "Tocino", "Cebolla", "Pimentón", "Champiñón"] },
    "p20": { nombre: "Pizza Tawa Aycha", imagen: "../Recursos/img/Platos.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Cabanossi de cuy", "Carne", "Tocino", "Pollo"] },
    "p21": { nombre: "Pizza Aklla", imagen: "../Recursos/img/Platos.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Carne", "Chorizo", "Tocino", "Aceituna"] },
    "p22": { nombre: "Pizza Auqui", imagen: "../Recursos/img/Pizza_Auqui.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Carne", "Tocino", "Peperoni", "Calabresa", "Pimentón", "Champiñón"] },
    "p23": { nombre: "Pizza Qoya", imagen: "../Recursos/img/Pizza-Qoya.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Pollo", "Calabresa", "Champiñón", "Albahaca", "Piña"] },
    "p24": { nombre: "Pizza Atahuallpa", imagen: "../Recursos/img/Pizza_Atahualpa.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Pollo", "Salame", "Tocino", "Chorizo", "Jamón"] },
    "p25": { nombre: "Pizza Illary - Ex Francesa", imagen: "../Recursos/img/Pizza_Illary.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Pollo", "Pimentón", "Piña"] },
    "p26": { nombre: "Pizza Killa", imagen: "../Recursos/img/Platos.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Champiñón", "Cebolla", "Aceituna", "Jamón (opcional)"] },
    "p27": { nombre: "Pizza Inti - Ex Vegetariana", imagen: "../Recursos/img/Pizza_Inti.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Espinaca", "Aceituna", "Tomate", "Champiñón", "Pimentón", "Cebolla"] },
    "p28": { nombre: "Pizza China Saqra - Ex Palermo", imagen: "../Recursos/img/Pizza_China_Saqra.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Rocoto", "Jamón", "Tocino", "Calabresa"] },
    "p29": { nombre: "Pizza Uchu Supay", imagen: "../Recursos/img/Pizza_Uchu_Supay.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Rocoto", "Ají amarillo", "Cebolla blanca", "Carne", "Cabanossi", "Tocino", "Peperoni"] },
    "p30": { nombre: "Pizza Americana", imagen: "../Recursos/img/Pizza_Americana.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Jamón", "Queso"] },
    "p31": { nombre: "Pizza Simple", imagen: "../Recursos/img/Pizza_Simple.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Elige 01 de tus ingredientes favoritos."] },
    "p32": { nombre: "Pizza Al Gusto", imagen: "../Recursos/img/Pizza-Al-Gusto.webp", precios: { pequeño: 18.60, mediano: 21.60, grande: 23.60 }, ingredientes: ["Elige tus 04 Sabores o 05 Ingredientes favoritos."] }
};

let carrito = [];
let pizzaSeleccionadaId = null;
const CANTIDAD_MAXIMA = 10;

document.addEventListener("DOMContentLoaded", () => {
  initPaginaMenu();
  initFiltros();
});

function initPaginaMenu() {
    document.querySelectorAll(".bloque button, .bloque2 button, .bloqueM button").forEach(btn => {
        btn.addEventListener("click", abrirModalCantidad);
    });
    document.getElementById("verCarrito")?.addEventListener("click", mostrarCarrito);
    document.getElementById("cerrarModalCarrito")?.addEventListener("click", cerrarModalCarrito);
    
    // Listeners para el modal de cantidad
    document.getElementById("cerrarModalCantidad")?.addEventListener("click", cerrarModalCantidad);
    document.getElementById("confirmarCantidad")?.addEventListener("click", enviarAlCarrito);
    document.getElementById("continuarPago")?.addEventListener("click", continuarAlPago); // <<< MODIFICACIÓN: Listener para el nuevo botón
    document.getElementById("subirCantidad").addEventListener("click", () => cambiarCantidad(1));
    document.getElementById("bajarCantidad").addEventListener("click", () => cambiarCantidad(-1));
    document.getElementById("tamaño").addEventListener("change", actualizarPrecioModal);

    initToggleMenu(".bloque", "toggleMenuBtn", "Conoce nuestras Pizzas más vendidas");
    initToggleMenu(".bloque2", "toggleMenuBtnSemi", "Pizzas Semi Dulces");
    
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) e.target.style.display = "none";
    });
}

function abrirModalCantidad(evento) {
    const bloque = evento.target.closest(".bloque, .bloque2, .bloqueM");
    pizzaSeleccionadaId = bloque.getAttribute("data-id");
    const pizzaData = baseDeDatosPizzas[pizzaSeleccionadaId];

    if (!pizzaData) {
        console.error("No se encontraron datos para la pizza con ID:", pizzaSeleccionadaId);
        return;
    }

    document.getElementById("modalPizzaNombre").textContent = pizzaData.nombre;
    document.getElementById("modalPizzaImagen").src = pizzaData.imagen;
    document.getElementById("modalPizzaImagen").alt = pizzaData.nombre;
    
    const detallesContainer = document.getElementById("modalPizzaDetalles");
    if (pizzaData.ingredientes && pizzaData.ingredientes.length > 0) {
        const ingredientesHTML = pizzaData.ingredientes.map(ing => `<li>${ing}</li>`).join('');
        detallesContainer.innerHTML = `<p><strong>Ingredientes:</strong></p><ul>${ingredientesHTML}</ul>`;
    } else {
        detallesContainer.innerHTML = "";
    }

    document.getElementById("cantidadInput").value = 1;
    document.getElementById("tamaño").value = "pequeño";
    document.getElementById("mensajeCantidadMaxima").textContent = `Máximo ${CANTIDAD_MAXIMA} unidades`;
    
    actualizarPrecioModal();
    actualizarBotonesCantidad();

    document.getElementById("modalCantidad").style.display = "flex";
}

function cerrarModalCantidad() {
    document.getElementById("modalCantidad").style.display = "none";
    pizzaSeleccionadaId = null;
}

function cambiarCantidad(cambio) {
    const input = document.getElementById("cantidadInput");
    let valor = parseInt(input.value) + cambio;
    if (valor >= 1 && valor <= CANTIDAD_MAXIMA) {
        input.value = valor;
    }
    actualizarBotonesCantidad();
}

function actualizarBotonesCantidad() {
    const input = document.getElementById("cantidadInput");
    const valor = parseInt(input.value);
    document.getElementById("subirCantidad").disabled = valor >= CANTIDAD_MAXIMA;
    document.getElementById("bajarCantidad").disabled = valor <= 1;
}

function actualizarPrecioModal() {
    if (!pizzaSeleccionadaId) return;
    const pizzaData = baseDeDatosPizzas[pizzaSeleccionadaId];
    const tamañoSeleccionado = document.getElementById("tamaño").value;
    const precio = pizzaData.precios[tamañoSeleccionado] || 0;
    document.getElementById("modalPrecio").textContent = `S/ ${precio.toFixed(2)}`;
}

function enviarAlCarrito() {
    if (!pizzaSeleccionadaId) return;
    const cantidad = parseInt(document.getElementById("cantidadInput").value);
    const tamañoSeleccionado = document.getElementById("tamaño").value;
    const pizzaData = baseDeDatosPizzas[pizzaSeleccionadaId];
    const precioUnitario = pizzaData.precios[tamañoSeleccionado];

    const existente = carrito.find(item => item.id === pizzaSeleccionadaId && item.tamaño === tamañoSeleccionado);

    if (existente) {
        existente.cantidad += cantidad;
    } else {
        carrito.push({ id: pizzaSeleccionadaId, nombre: pizzaData.nombre, cantidad, precio: precioUnitario, tamaño: tamañoSeleccionado });
    }
    
    actualizarVistaCarrito();
    mostrarNotificacion(`'${pizzaData.nombre}' añadido al carrito!`);
    // No cerramos el modal aquí para que el usuario decida si seguir comprando o pagar
}

// <<< MODIFICACIÓN: Nueva función para el botón "Continuar Pago" >>>
function continuarAlPago() {
    // Primero, añade el producto actual al carrito usando la función existente
    enviarAlCarrito();

    // Luego, cierra el modal de cantidad
    cerrarModalCantidad();
    
    // Finalmente, redirige a una página de pago (ejemplo)
    // Asegúrate de tener un archivo 'pago.html' o cambia la ruta
    alert("Serás redirigido a la página de pago.");
    window.location.href = '../Pago/pago.html'; // Ajusta esta ruta si es necesario
}

function mostrarCarrito() {
    const tbody = document.querySelector("#tablaCarrito tbody");
    tbody.innerHTML = "";
    let total = 0;
  
    if (carrito.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;">El carrito está vacío</td></tr>`;
    } else {
        carrito.forEach((item, index) => {
            const subtotal = item.cantidad * item.precio;
            total += subtotal;
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${item.nombre}</td>
                <td>${item.cantidad}</td>
                <td>S/ ${item.precio.toFixed(2)}</td>
                <td>S/ ${subtotal.toFixed(2)}</td>
                <td>${item.tamaño}</td>
                <td><button onclick="eliminarDelCarrito(${index})" class="Eliminar">Eliminar</button></td>
            `;
            tbody.appendChild(fila);
        });
    }

    document.getElementById("totalCarrito").textContent = `Total: S/ ${total.toFixed(2)}`;
    document.getElementById("modalCarrito").style.display = "flex";
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarVistaCarrito();
}

function cerrarModalCarrito() {
    document.getElementById("modalCarrito").style.display = "none";
}

function actualizarVistaCarrito() {
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    const btn = document.getElementById("verCarrito");
    const iconoCarrito = `<img class="Carrito" src="../Recursos/img/Carrito-removebg-preview.webp" alt="Carrito">`;
    const textoCarrito = `<h3 class="PalabrasC">Carrito (${totalItems})</h3>`;
    btn.innerHTML = iconoCarrito + textoCarrito;
    if (document.getElementById("modalCarrito").style.display === "flex") {
        mostrarCarrito();
    }
}

function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement("div");
    notificacion.className = "toast-notification";
    notificacion.textContent = mensaje;
    document.body.appendChild(notificacion);
    setTimeout(() => {
        notificacion.classList.add("show");
    }, 10);
    setTimeout(() => {
        notificacion.classList.remove("show");
        setTimeout(() => notificacion.remove(), 500);
    }, 3000);
}

function initToggleMenu(selectorBloques, idBoton, textoOriginal) {
  const bloques = document.querySelectorAll(selectorBloques);
  const toggleBtn = document.getElementById(idBoton);
  if (!toggleBtn) return;
  let menuAbierto = false;
  const visiblesIniciales = 3;
  const actualizarVisibilidad = () => {
    bloques.forEach((bloque, i) => {
        bloque.style.display = menuAbierto ? "flex" : (i < visiblesIniciales ? "flex" : "none");
    });
    toggleBtn.textContent = menuAbierto ? "Cerrar menú" : textoOriginal;
  };
  toggleBtn.addEventListener("click", () => {
    menuAbierto = !menuAbierto;
    actualizarVisibilidad();
  });
  actualizarVisibilidad();
}

function initFiltros() {
  const inputBusqueda = document.getElementById("buscadorPizzas");
  const mensajeContainer = document.getElementById("mensajeBuscadorContainer");
  if (!inputBusqueda) return;
  inputBusqueda.addEventListener("input", () => {
    const texto = inputBusqueda.value.trim().toLowerCase();
    const todosLosBloques = document.querySelectorAll(".bloque, .bloque2, .bloqueM");
    const todosLosSubtitulos = document.querySelectorAll("h2.Subtitulo, .BotonesDesplegablesMenu");
    let hayCoincidencias = false;
    todosLosBloques.forEach(bloque => {
      const pizzaId = bloque.dataset.id;
      const nombrePizza = (baseDeDatosPizzas[pizzaId]?.nombre || "").toLowerCase();
      const coincide = nombrePizza.includes(texto);
      bloque.style.display = coincide ? "flex" : "none";
      if (coincide) hayCoincidencias = true;
    });
    if (texto.length > 0) {
      todosLosSubtitulos.forEach(el => el.style.display = "none");
      mensajeContainer.innerHTML = !hayCoincidencias ? `<p id="mensajeNoEncontrado" style="text-align:center; margin: 20px 0; font-size: 1.2rem;">No se encontraron pizzas con ese nombre.</p>` : "";
    } else {
      todosLosSubtitulos.forEach(el => el.style.display = "block");
      mensajeContainer.innerHTML = "";
      initToggleMenu(".bloque", "toggleMenuBtn", "Conoce nuestras Pizzas más vendidas");
      initToggleMenu(".bloque2", "toggleMenuBtnSemi", "Pizzas Semi Dulces");
    }
  });
}