
  // Redes sociales
  document.getElementById("Facebook")?.addEventListener("click", () => {
    window.open("https://www.facebook.com/pizzeriaElPaladardelInka/", "_blank");
  });

  document.getElementById("Instagram")?.addEventListener("click", () => {
    window.open(
      "https://www.instagram.com/pizzeriaelpaladardelinka/",
      "_blank"
    );
  });

  document.getElementById("Tiktok")?.addEventListener("click", () => {
    window.open("https://www.tiktok.com/@pizzeriaelpaladardelinka", "_blank");
  });

  

   function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
  }

  function cerrarSiClickAfuera(event) {
    const popupContent = document.querySelector('.popup-content');
    if (!popupContent.contains(event.target)) {
      cerrarPopup();
    }
  }

     document.addEventListener('DOMContentLoaded', function() {
            // Ruta al componente HTML del chatbot
            const chatComponentURL = '../ChatBot/chatbot-component.html';

            fetch(chatComponentURL)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al cargar el componente de chat.');
                    }
                    return response.text(); // Convierte la respuesta a texto (HTML)
                })
                .then(html => {
                    // Inserta el HTML del chatbot en el contenedor
                    document.getElementById('chatbot-placeholder').innerHTML = html;
                    
                    // AVISO: Si tu chat.js inicializa los eventos al cargar, puede que 
                    // necesites volver a llamar a una función de inicialización aquí,
                    // ya que el HTML se añade *después* de que chat.js se haya ejecutado.
                    // Ver la "Consideración Importante" más abajo.
                })
                .catch(error => {
                    console.error('No se pudo cargar el chatbot:', error);
                });
        });



