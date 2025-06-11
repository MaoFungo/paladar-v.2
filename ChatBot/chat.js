function initializeChat() {
    // === SELECCIÓN DE ELEMENTOS PARA LA INTERFAZ ===
    const chatbotToggleButton = document.getElementById('chatbot-toggle-button');
    const sidebar = document.getElementById('chatbot-sidebar');
    const closeChatBtn = document.getElementById('close-chat-btn');
    
    // === SELECCIÓN DE ELEMENTOS PARA LA CONVERSACIÓN ===
    const chatBody = document.querySelector('.chat-body');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const typingIndicator = document.getElementById('typing-indicator');

    if (!chatbotToggleButton || !sidebar || !closeChatBtn || !chatBody) {
        console.error("Faltan elementos esenciales del chatbot de barra lateral.");
        return;
    }

    // === LÓGICA PARA ABRIR Y CERRAR EL PANEL ===
    chatbotToggleButton.addEventListener('click', () => {
        sidebar.classList.add('open');
        // Saludar solo la primera vez que se abre
        if (chatBody.children.length <= 1) {
            showInitialGreeting();
        }
    });

    closeChatBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });
    
    // El "cerebro" del chatbot se mantiene intacto
    const knowledgeBase = {
        saludo: { text: "¡Kunan p'unchaw, bienvenido a Paladar del Inca! 🍕 Soy tu asistente virtual. ¿Cómo puedo ayudarte hoy?", options: [ { text: "Ver Menú Completo", payload: "menu" }, { text: "Ver Promociones ✨", payload: "promociones" }, { text: "Hacer un Pedido 🛵", payload: "iniciar_pedido" } ] },
        menu: { text: "¡Por supuesto! Nuestro menú es un viaje por los sabores de los Andes. ¿Qué categoría te gustaría explorar?", options: [ { text: "Las Más Pedidas", payload: "menu_mas_pedidas" }, { text: "Pizzas con Cuy 🐹", payload: "menu_cuy" }, { text: "Semi Dulces", payload: "menu_semi_dulces" }, { text: "Con Carne", payload: "menu_carne" }, { text: "Con Pollo", payload: "menu_pollo" }, { text: "Vegetarianas", payload: "menu_vegetarianas" }, { text: "Picantes 🔥", payload: "menu_picantes" } ] },
        menu_mas_pedidas: { text: "<b>Nuestras Pizzas Más Pedidas:</b><br>• <b>Pachamama:</b> Chorizo, tocino, salchicha y jamón York.<br>• <b>Wiracocha:</b> Jamón, tocino, calabresa, champiñón, aceituna, cebolla y pimentón.<br>• <b>Mama Ocllo:</b> Una explosión de sabores con casi de todo.<br>• <b>Manco Ccapac:</b> Jamonada, chorizo, tocino, y más.", options: [ { text: "Ver otra categoría", payload: "menu" }, { text: "Hacer un Pedido", payload: "iniciar_pedido" } ] },
        menu_cuy: { text: "<b>Nuestras audaces Pizzas con Cuy:</b><br>• <b>Euge:</b> Cabanossi de cuy con champiñón.<br>• <b>Illapa:</b> Cabanossi de cuy con pollo.<br>• <b>Tawa Aycha:</b> Cabanossi de cuy, carne, tocino y pollo.", options: [ { text: "Ver otra categoría", payload: "menu" }, { text: "Hacer un Pedido", payload: "iniciar_pedido" } ] },
        menu_semi_dulces: { text: "<b>Nuestras Pizzas Semi Dulces:</b><br>• <b>Willka (Ex-Hawaiana):</b> La clásica con piña y jamón.<br>• <b>Munay:</b> Piña, durazno y jamón.<br>• <b>Huascar:</b> Una combinación potente con piña, jamón, tocino y calabresa.", options: [ { text: "Ver otra categoría", payload: "menu" }, { text: "Hacer un Pedido", payload: "iniciar_pedido" } ] },
        menu_carne: { text: "<b>Pizzas con Carne:</b><br>• <b>Aklla:</b> Carne, chorizo, tocino y aceituna.<br>• <b>Auqui:</b> Carne, tocino, peperoni y más.", options: [ { text: "Ver otra categoría", payload: "menu" }, { text: "Hacer un Pedido", payload: "iniciar_pedido" } ] },
        menu_pollo: { text: "<b>Pizzas con Pollo:</b><br>• <b>Qoya:</b> Pollo, calabresa, champiñón y albahaca.<br>• <b>Atahuallpa:</b> Pollo, salame, tocino, chorizo y jamón.", options: [ { text: "Ver otra categoría", payload: "menu" }, { text: "Hacer un Pedido", payload: "iniciar_pedido" } ] },
        menu_vegetarianas: { text: "<b>Nuestras Opciones Vegetarianas:</b><br>• <b>Inti:</b> Espinaca, aceituna, tomate, champiñón, pimentón y cebolla.<br>• <b>Killa:</b> Champiñón, cebolla y aceituna (jamón opcional).", options: [ { text: "Ver otra categoría", payload: "menu" }, { text: "Hacer un Pedido", payload: "iniciar_pedido" } ] },
        menu_picantes: { text: "<b>¿Te atreves con las Picantes? 🔥</b><br>• <b>China Saqra:</b> Rocoto, jamón, tocino y calabresa.<br>• <b>Uchu Supay:</b> Rocoto, ají amarillo, cebolla, carne, y más.", options: [ { text: "Ver otra categoría", payload: "menu" }, { text: "Hacer un Pedido", payload: "iniciar_pedido" } ] },
        horario: { text: "Atendemos todos los días de la semana, desde las 12:00 PM hasta las 11:00 PM. ¡Te esperamos para compartir el sabor de los Andes!", options: [ { text: "Ver promociones", payload: "promociones" }, { text: "Ver el menú", payload: "menu" } ] },
        iniciar_pedido: { text: "¡Excelente elección! Para tomar tu pedido, por favor, dime qué pizza te gustaría y en qué tamaño. Por ejemplo: 'Quiero una Wiracocha familiar'." },
        promociones: { text: "¡Claro que sí! Tenemos el increíble <b>HATUN COMBO</b> todos los días. Por la compra de tu pizza favorita en tamaño Pachakuteq (familiar), ¡te invitamos una jarra de bebida natural (chicha, maracuyá o limonada)!<br><br><i>Válido de 2:00 PM a 5:00 PM para llevar y a partir de las 4:00 PM en nuestros salones.</i>", options: [ { text: "¡Quiero la promo!", payload: "iniciar_pedido" }, { text: "Ver el menú", payload: "menu" } ] },
        pagos: { text: "Aceptamos pagos con Yape, Plin y todas las tarjetas de crédito/débito (Visa, Mastercard), además de efectivo en nuestros locales.", options: [ { text: "Hacer un Pedido", payload: "iniciar_pedido" }, { text: "Ver el menú", payload: "menu" } ] },
        delivery: { text: "¡Sí! Hacemos delivery a todo el centro histórico de Cusco y zonas aledañas. El tiempo de entrega es de 30-45 minutos. ¿Deseas ordenar ahora?", options: [ { text: "Sí, hacer un pedido", payload: "iniciar_pedido" }, { text: "No, gracias", payload: "saludo"} ] },
        groseria: { text: "Por favor, mantengamos el respeto mutuo. Estoy aquí para asistirte con nuestro menú y promociones." },
        gracias: { text: "¡De nada! Sulpayki. Si necesitas algo más, aquí estaré. ¡Buen provecho!" },
        default: { text: "Disculpa, no te entendí muy bien. Puedo ayudarte con estas opciones:", options: [ { text: "Menú", payload: "menu" }, { text: "Promociones", payload: "promociones" }, { text: "Horario", payload: "horario" }, { text: "Delivery", payload: "delivery" } ] }
    };
    const triggers = [
        { keywords: ['hola', 'buenas', 'saludos', 'weon', 'hablar'], responseKey: 'saludo' },
        { keywords: ['menu', 'menú', 'carta', 'pizzas', 'comida', 'lista', 'productos', 'ver'], responseKey: 'menu' },
        { keywords: ['mas pedidas', 'más pedidas', 'populares', 'recomendadas'], responseKey: 'menu_mas_pedidas' },
        { keywords: ['cuy', 'euge', 'illapa', 'tawa'], responseKey: 'menu_cuy' },
        { keywords: ['semi dulce', 'hawaiana', 'willka', 'munay'], responseKey: 'menu_semi_dulces' },
        { keywords: ['carne', 'aklla', 'auqui'], responseKey: 'menu_carne' },
        { keywords: ['pollo', 'qoya', 'atahuallpa'], responseKey: 'menu_pollo' },
        { keywords: ['vegetariana', 'veggie', 'inti', 'killa'], responseKey: 'menu_vegetarianas' },
        { keywords: ['picante', 'ají', 'rocoto', 'china saqra', 'uchu supay'], responseKey: 'menu_picantes' },
        { keywords: ['horario', 'atienden', 'ubicacion', 'ubicación', 'dirección', 'donde'], responseKey: 'horario' },
        { keywords: ['pedido', 'ordenar', 'comprar', 'quiero'], responseKey: 'iniciar_pedido' },
        { keywords: ['promo', 'promocion', 'promociones', 'oferta', 'combo', 'hatun'], responseKey: 'promociones' },
        { keywords: ['pago', 'pagar', 'yape', 'plin', 'tarjeta'], responseKey: 'pagos' },
        { keywords: ['delivery', 'reparto', 'domicilio', 'envio', 'llevar'], responseKey: 'delivery' },
        { keywords: ['gracias', 'chevere', 'vale', 'listo'], responseKey: 'gracias' }
    ];
    const profanity = ['puta', 'mierda', 'joder', 'coño', 'pene', 'concha', 'ctm', 'wea', 'weá', 'cerda'];
    const scrollToBottom = () => chatBody.scrollTop = chatBody.scrollHeight;
    function addMessage(text, sender) { const messageElement = document.createElement('div'); messageElement.classList.add('message', sender); messageElement.innerHTML = text; chatBody.insertBefore(messageElement, typingIndicator); scrollToBottom(); }
    function showOptions(options) { const existingOptions = chatBody.querySelector('.chat-options'); if (existingOptions) existingOptions.remove(); const optionsContainer = document.createElement('div'); optionsContainer.classList.add('chat-options'); options.forEach(option => { const button = document.createElement('button'); button.classList.add('option-btn'); button.textContent = option.text; button.onclick = () => handleOptionClick(option.text, option.payload); optionsContainer.appendChild(button); }); chatBody.insertBefore(optionsContainer, typingIndicator); scrollToBottom(); }
    function handleUserInput() { const userInputText = chatInput.value.trim(); if (userInputText === "") return; addMessage(userInputText, 'user'); chatInput.value = ""; typingIndicator.classList.remove('hidden'); scrollToBottom(); setTimeout(() => { getBotResponse(userInputText.toLowerCase()); }, 1000); }
    function getBotResponse(userInput) { let responseKey = 'default'; if (profanity.some(word => userInput.includes(word))) { responseKey = 'groseria'; } else { for (const trigger of triggers) { if (trigger.keywords.some(keyword => userInput.includes(keyword))) { responseKey = trigger.responseKey; break; } } } triggerResponse(responseKey); }
    function handleOptionClick(text, payload) { addMessage(text, 'user'); typingIndicator.classList.remove('hidden'); scrollToBottom(); setTimeout(() => { triggerResponse(payload); }, 1000); }
    function triggerResponse(key) { typingIndicator.classList.add('hidden'); const response = knowledgeBase[key]; if (response) { addMessage(response.text, 'bot'); if (response.options) { showOptions(response.options); } else { const existingOptions = chatBody.querySelector('.chat-options'); if (existingOptions) existingOptions.remove(); } } }
    function showInitialGreeting() { typingIndicator.classList.remove('hidden'); setTimeout(() => { triggerResponse('saludo'); }, 1000); }
    sendBtn.addEventListener('click', handleUserInput);
    chatInput.addEventListener('keydown', (event) => { if (event.key === 'Enter') handleUserInput(); });
}