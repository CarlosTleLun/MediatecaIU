
// ====== BASE DE CONOCIMIENTO ======
const data = [
  {
    tema: "bienvenida",
    preguntas: ["hola","buenas","mediateca","informacion","explicacion","para que sirve"],
    respuesta: "👋 ¡Hola! Bienvenido a la Mediateca 📚\n\nAquí puedes aprender idiomas 🎧 y mejorar poco a poco 🚀\n\n👉 ¿Qué te gustaría saber?",
    opciones: ["Registro", "Horario", "Reglas"]
  },
  {
    tema: "horario",
    preguntas: ["horario","hora","abre","cierra","cuando puedo ir","dias"],
    respuesta: "La mediateca está abierta de ⏰ 7:00 a.m. a 8:20 p.m.",
    opciones: ["Servicios", "Acceso", "Reglas"]
  },
  {
    tema: "servicios",
    preguntas: ["servicios","ofrecen","que hay","que puedo hacer"],
    respuesta: "Puedes participar en talleres, asesorías y usar recursos digitales.",
    opciones: ["Talleres", "Asesorías", "Recursos"]
  },
  {
    tema: "talleres",
    preguntas: ["talleres","actividades","clases","practicas"],
    respuesta: "🎯 En la Mediateca hay diferentes talleres para practicar el idioma:\n\n🗣️ Conversación:\nPara hablar y perder el miedo al expresarte.\n\n📖 Lectura y ✍️ escritura:\nPara mejorar tu comprensión y forma de redactar.\n\n💡 Los talleres cambian según la programación, ¡pregunta cuáles están disponibles!",
    opciones: ["Asesorías", "Horario"]
  },
  {
    tema: "asesorias",
    preguntas: ["asesorias", "asesorías","ayuda","dudas","examen"],
    respuesta: "Sí, puedes recibir asesorías personalizadas para resolver dudas o prepararte para tus exámenes. Para acceder, necesitas revisar el 📅horario de los asesores y acudir en el horario disponible.",
    opciones: ["⬇️Ver horario de asesores", "Recursos", "Horario"]
  },
  {
    tema: "recursos",
    preguntas: ["recursos","material","libros","computadoras","audios","videos"],
    respuesta: "📚Hay libros, 📚diccionarios, audios, 🎬videos y 💻software interactivo.",
    opciones: ["Servicios", "Reglas"]
  },
  {
    tema: "acceso",
    preguntas: ["entrar","acceso","requisitos","que necesito"],
    respuesta: "Necesitas tu cuaderno de idioma📘 y tu bitácora📄.",
    opciones: ["Registro", "Reglas"]
  },
  {
    tema: "registro",
    preguntas: ["registro","registrarme","asistencia","sistema"],
    respuesta: "📝 Para registrarte en la Mediateca debes hacerlo dentro de los primeros ⏰ 10 minutos de tu hora clase.\n\n📌 Ten a la mano los siguientes datos:\n• Número de cuenta\n• Grupo\n• Sala que vas a utilizar\n• Actividad que realizarás\n• Idioma que cursas (Inglés o Francés)\n\n⚠️ Importante:\nSi no te registras dentro de ese tiempo, podrías perder tu acceso en esa hora.\n\n💡 Si tienes dudas, puedes pedir apoyo al personal de la Mediateca.",
    opciones: ["Reglas","Horario", "Acceso"]
  },
  {
    tema: "uso_espacio",
    preguntas: ["llegar","que hago","uso","como usar"],
    respuesta: "🎒Guarda tu mochila en los estantes, usa solo lo necesario📙✏️ y trabaja en silencio.",
    opciones: ["Salida", "Reglas"]
  },
  
  {
    tema: "reglas",
    preguntas: ["reglas","normas","prohibido","no se puede"],
    respuesta: "⚠️ Reglas importantes:\n\n🚫 No comer ni beber\n📵 Uso del celular restringido\n🎧 Usa audífonos\n🤫 Mantén silencio\n\n👉 Todo para un mejor ambiente de estudio",
    opciones: ["Celular", "Acceso", "Aforo"]
  },
  {
    tema: "celular",
    preguntas: ["celular","telefono","movil","puedo usar celular","puedo cargar celular","cel"],
    respuesta: "📵 Sobre el uso del celular:\n\n🚫 No puedes usarlo libremente\n🔌 No está permitido cargarlo\n\n✅ Solo puedes usarlo si tu actividad lo requiere\n\n👉 Ejemplo: escuchar audios 🎧 o usar recursos digitales 💻",
    opciones: ["Reglas", "Uso", "Servicios"]
  },
  {
    tema: "aforo",
    preguntas: ["aforo","personas","capacidad","cuantos"],
    respuesta: "El aforo máximo es de 👥45 personas.",
    opciones: ["Tiempo", "Reglas"]
  },
  {
    tema: "tiempo",
    preguntas: ["tiempo","duracion","cuanto dura"],
    respuesta: "🕒Las actividades duran entre 41 y 50 minutos.",
    opciones: ["Salida", "Horario"]
  },
  {
    tema: "salida",
    preguntas: ["salida","terminar","finalizar"],
    respuesta: "Debes mostrar evidencia📝, pedir sellar tu avance y registrar tu salida.",
    opciones: ["Bitácora", "Horario"]
  },
  {
    tema: "bitacora",
    preguntas: ["bitacora", "bitácora", "registro personal","seguimiento"],
    respuesta: "Sirve para registrar tus actividades y progreso📈. ¿Te gustaría descargarla?",
    opciones: ["⬇️Descargar bitácora", "Habilidades", "Uso"]
  },
  {
    tema: "habilidades",
    preguntas: ["habilidades","aprendo","que desarrollo"],
    respuesta: "🧠 En la Mediateca desarrollas varias habilidades en el idioma:\n\n👂 Comprensión auditiva:\nEscuchar audios, videos o conversaciones y entender lo que dicen.\n\n📖 Lectura:\nLeer textos, artículos o libros en el idioma.\n\n✍️ Escritura:\nEscribir oraciones, tareas o ejercicios.\n\n🗣️ Expresión oral:\nHablar y practicar el idioma con otras personas o en actividades.\n\n💡 Aquí no solo estudias, ¡practicas el idioma en situaciones reales!",
    opciones: ["Salas", "Servicios"]
  },
  {
    tema: "salas",
    preguntas: ["salas","espacios","areas"],
    respuesta: "📚 En la Mediateca contamos con diferentes salas según tu actividad:\n\n🖥️ Sala multimedia:\nUso de computadoras para realizar tareas, investigar o trabajar en plataformas digitales.\n\n🪑 Sala de lectura:\nPuedes usar el acervo bibliográfico 📖 o trabajar en las mesas con tu cuaderno y materiales.\n\n📽️ Sala audiovisual:\nSe utiliza para actividades con proyector o TV (como ver videos o presentaciones).\n\n👩‍🏫 Sala de asesoría:\nEspacio destinado para recibir apoyo de un asesor en tus actividades.\n\n💡 Elige la sala según lo que necesites realizar.",
    opciones: ["Servicios", "Horario"]
  }
];

// ====== ELEMENTOS ======
const btn = document.getElementById("chatbot-btn");
const chat = document.getElementById("chatbot-container");
const closeBtn = document.getElementById("close-chat");
const input = document.getElementById("user-input");
const messages = document.getElementById("chatbot-messages");
const optionsContainer = document.getElementById("quick-options");

// ====== ABRIR / CERRAR ======
btn.onclick = () => chat.classList.add("active");
closeBtn.onclick = () => chat.classList.remove("active");

// ====== EVENTOS ======
document.getElementById("send-btn").onclick = sendMessage;
input.addEventListener("keypress", e => {
    if (e.key === "Enter") sendMessage();
});

// ====== INICIO ======
window.onload = () => {
    setTimeout(() => {
        responder(data[0]);
    }, 500);
};

// ====== ENVIAR ======
function sendMessage() {
    const text = input.value.toLowerCase().trim();
    if (!text) return;

    addMessage(text, "user");

    const respuesta = buscarRespuesta(text);

    mostrarEscribiendo();

    setTimeout(() => {
        quitarEscribiendo();
        responder(respuesta);
    }, 800);

    input.value = "";
}

// ====== IA BÁSICA ======
function buscarRespuesta(texto) {
    let mejor = null;
    let max = 0;

    data.forEach(tema => {
        let score = 0;

        tema.preguntas.forEach(p => {
            if (texto.includes(p)) score++;
        });

        if (score > max) {
            max = score;
            mejor = tema;
        }
    });

    return mejor || {
        respuesta: "No entendí 😅 intenta con otra pregunta",
        opciones: ["Horario", "Servicios", "Reglas"]
    };
}

// ====== RESPONDER ======
function responder(obj) {
    escribirTexto(obj.respuesta);
    mostrarOpciones(obj.opciones || []);
}

// ====== MENSAJES ======
function addMessage(text, type) {
    const msg = document.createElement("div");
    msg.className = "message " + type;
    msg.textContent = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}

// ====== EFECTO ESCRIBIENDO ======
function mostrarEscribiendo() {
    const t = document.createElement("div");
    t.className = "message bot";
    t.id = "typing";
    t.textContent = "Escribiendo...";
    messages.appendChild(t);
}

function quitarEscribiendo() {
    const t = document.getElementById("typing");
    if (t) t.remove();
}

function escribirTexto(texto) {
    const msg = document.createElement("div");
    msg.className = "message bot";
    messages.appendChild(msg);

    let i = 0;
    function escribir() {
        if (i < texto.length) {
            msg.textContent += texto[i++];
            messages.scrollTop = messages.scrollHeight;
            setTimeout(escribir, 15);
        }
    }
    escribir();
}

// ====== BOTONES DINÁMICOS ======
function mostrarOpciones(opciones) {
    optionsContainer.innerHTML = "";

    opciones.forEach(op => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = op;

        btn.onclick = () => {

            // 👉 acción especial: descargar bitácora
            if (op.toLowerCase().includes("descargar")) {
                descargarBitacora();
                return;
            }
              // 👨‍🏫 Ver horario de asesores
         if (op.toLowerCase().includes("horario de asesores")) {
             abrirHorarioAsesores();
             return;
            }

            input.value = op.toLowerCase();
            sendMessage();
        };

        optionsContainer.appendChild(btn);
    });
}

// ====== DESCARGA ======
function descargarBitacora() {
    addMessage("Aquí tienes la bitácora 📄", "bot");

    const link = document.createElement("a");
    link.href = "docs/Bitacora_de_trabajo.pdf";
    link.download = "bitacora-mediateca.pdf";
    link.click();
}
function abrirHorarioAsesores() {
    addMessage("Aquí puedes consultar el horario de los asesores 👨‍🏫", "bot");

    window.open("docs/horario-asesores.pdf", "_blank"); 
}
