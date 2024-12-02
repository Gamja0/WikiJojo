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

let currentQuestionIndex = 0;
let points = 0;
let timeLeft = 10; // Tiempo en segundos
let timerInterval;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const resultElement = document.getElementById("result");
    const timerElement = document.getElementById("timer"); // Elemento para mostrar el tiempo

    // Limpiar el contenido anterior
    questionElement.innerHTML = "";
    answersElement.innerHTML = "";
    resultElement.textContent = "";
    timerElement.textContent = ""; // Reinicia el temporizador visual

    // Mostrar la pregunta actual
    questionElement.textContent = questions[currentQuestionIndex].question;

    // Mostrar las opciones de respuesta
    questions[currentQuestionIndex].answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = function () {
            clearInterval(timerInterval); // Detén el temporizador si se selecciona una respuesta
            checkAnswer(answer);
        };
        answersElement.appendChild(button);
    });

    // Reinicia el temporizador
    timeLeft = 10; // Tiempo por pregunta
    timerElement.textContent = `Tiempo restante: ${timeLeft} segundos`;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Tiempo restante: ${timeLeft} segundos`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            resultElement.textContent = "¡Se acabó el tiempo!";
            // Mostrar la siguiente pregunta automáticamente al acabar el tiempo
            setTimeout(() => {
                nextQuestion();
            }, 2000); // Pausa de 2 segundos antes de mostrar la siguiente pregunta
        }
    }, 1000);
}

function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const resultElement = document.getElementById("result");
    const pointsElement = document.getElementById("points");

    if (answer === correctAnswer) {
        points += 5;
        resultElement.textContent = "¡Respuesta correcta! Ganaste 5 puntos.";
    } else {
        if (points >= 5) {
            points -= 5;
        }
        resultElement.textContent = "Respuesta incorrecta. La respuesta correcta es '" + correctAnswer + "'.";
    }

    pointsElement.textContent = points;
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(displayQuestion, 2000); // Mostrar la siguiente pregunta después de 2 segundos
    } else {
        const resultElement = document.getElementById("result");
        resultElement.textContent += ` Fin del juego. Tu puntuación final es ${points} puntos.`;
    }
}

function restartGame() {
    currentQuestionIndex = 0;
    points = 0;
    displayQuestion();
}

// Mostrar la primera pregunta al cargar la página
window.onload = displayQuestion;
