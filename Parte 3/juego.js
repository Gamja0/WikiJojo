// Array de preguntas y respuestas con la opción correcta
let questions = [
    { question: "Cómo se llama el stand insecto volador que roba lenguas?", answers: ["Super Fly", "Tower of Gray", "Toth", "Dark Blue Moon"], correctAnswer: "Tower of Gray" },
    { question: "¿Cuál de estos personajes es conocido como un “jojobro” por la comunidad?", answers: ["Joseph Joestar", "Trish Una", "Kakyoin Noriaki", "Kujo Jotaro"], correctAnswer: "Kakyoin Noriaki" },
    { question: "¿Qué le echa Kakyoin a la comida del bebé?", answers: ["Popo de jotaro", "Popo del bebé", "Pelo de Polnareff", "Pelo del bebé"], correctAnswer: "Popo del bebé" },
    { question: "¿Cuál de estos crusaders no se ríe durante la pelea contra The Sun?", answers: ["Noriaki Kakyoin", "Jean Pierre Polnareff", "Jotaro Kujo", "Joseph Joestar"], correctAnswer: "Joseph Joestar" },
    { question: "¿Qué significa el lenguaje de señas que realiza Polnareff bajo el agua?", answers: ["Me queda poco oxígeno", "Se te ven las bragas", "Hay un enemigo cerca", "Tengo ganas de estornudar dos veces"], correctAnswer: "Se te ven las bragas" },
    { question: "¿Qué bebida tomaron los crusaders, momentos antes de la pelea contra el primer D’arby?", answers: ["Té helado", "Café helado", "Whiskey sin hielo", "Jarabe de arce"], correctAnswer: "Té helado" },
    { question: "¿Qué juego eligió Kakyoin para pelear contra el segundo D’arby?", answers: ["OH That’s a Baseball!", "F-MEGA", "XED XES", "Donkeycraft"], correctAnswer: "F-MEGA" },
    { question: "¿Cuál de estos personajes NO es un Crusader?", answers: ["Hol Horse", "Iggy", "Muhammad Avdol", "Jean Pierre Polnareff"], correctAnswer: "Hol Horse" },
    { question: "¿Cuántos días duró el viaje de los Crusaders?", answers: ["Aprox. 45 días", "Aprox. 50 días", "Aprox. 55 días", "Aprox. 5 semanas"], correctAnswer: "Aprox. 50 días" },
    { question: "¿Quién es el usuario del stand Bastet? (Pista: Atracción Magnética)", answers: ["Erina", "Suzie Q", "Mariah", "Lisa Lisa"], correctAnswer: "Mariah" },
];
// Variables globales para manejar el estado del juego
let currentQuestionIndex = 0; // Índice de la pregunta actual
let points = 0; // Puntuación del jugador
let timeLeft = 10; // Tiempo límite para responder una pregunta (en segundos)
let timerInterval; // Variable para almacenar el intervalo del temporizador

// Función para mostrar la pregunta y las opciones de respuesta
function displayQuestion() {
    const questionElement = document.getElementById("question"); // Contenedor para la pregunta
    const answersElement = document.getElementById("answers"); // Contenedor para las respuestas
    const resultElement = document.getElementById("result"); // Contenedor para mostrar resultados
    const timerElement = document.getElementById("timer"); // Contenedor para mostrar el temporizador

    // Limpiar el contenido anterior
    questionElement.innerHTML = "";
    answersElement.innerHTML = "";
    resultElement.textContent = "";
    timerElement.textContent = "";

    // Mostrar la pregunta actual
    questionElement.textContent = questions[currentQuestionIndex].question;

    // Crear botones para cada respuesta
    questions[currentQuestionIndex].answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = function () {
            clearInterval(timerInterval); // Detener el temporizador al seleccionar una respuesta
            checkAnswer(answer); // Verificar si la respuesta es correcta
        };
        answersElement.appendChild(button); // Agregar el botón al contenedor de respuestas
    });

    // Reiniciar y mostrar el temporizador
    timeLeft = 10;
    timerElement.textContent = `Tiempo restante: ${timeLeft} segundos`;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Tiempo restante: ${timeLeft} segundos`;
        if (timeLeft <= 0) { // Si se acaba el tiempo
            clearInterval(timerInterval); // Detener el temporizador
            resultElement.textContent = "¡Se acabó el tiempo!";
            setTimeout(() => {
                nextQuestion(); // Pasar a la siguiente pregunta después de 2 segundos
            }, 2000);
        }
    }, 1000); // Actualizar el temporizador cada segundo
}

// Función para verificar la respuesta seleccionada
function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer; // Respuesta correcta de la pregunta actual
    const resultElement = document.getElementById("result");
    const pointsElement = document.getElementById("points");

    // Verificar si la respuesta es correcta
    if (answer === correctAnswer) {
        points += 5; // Sumar puntos por una respuesta correcta
        resultElement.textContent = "¡Respuesta correcta! Ganaste 5 puntos.";
    } else {
        if (points >= 5) {
            points -= 5; // Restar puntos si la respuesta es incorrecta
        }
        resultElement.textContent = "Respuesta incorrecta. La respuesta correcta es '" + correctAnswer + "'.";
    }

    pointsElement.textContent = points; // Actualizar la puntuación en pantalla
    nextQuestion(); // Ir a la siguiente pregunta
}

// Función para mostrar la siguiente pregunta o finalizar el juego
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(displayQuestion, 2000); // Mostrar la siguiente pregunta después de 2 segundos
    } else {
        const resultElement = document.getElementById("result");
        resultElement.textContent += ` Fin del juego. Tu puntuación final es ${points} puntos.`; // Mensaje final
    }
}

// Función para reiniciar el juego
function restartGame() {
    currentQuestionIndex = 0; // Reiniciar el índice de preguntas
    points = 0; // Reiniciar la puntuación
    displayQuestion(); // Mostrar la primera pregunta
}

// Mostrar la primera pregunta al cargar la página
window.onload = displayQuestion;