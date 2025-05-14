
const questions = [
    {
        question: "Ποια είναι η αδερφή της Έλσας στο Frozen;",
        answers: ["Άννα", "Μαρία", "Κατερίνα"],
        correct: 0
    },
    {
        question: "Πόσα πόδια έχει ένα σκυλί;",
        answers: ["2", "4", "6"],
        correct: 1
    }
];

let current = 0;

function showQuestion() {
    const q = questions[current];
    document.getElementById('question').innerText = q.question;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    q.answers.forEach((ans, i) => {
        const btn = document.createElement('button');
        btn.innerText = ans;
        btn.onclick = () => alert(i === q.correct ? 'Σωστό!' : 'Λάθος!');
        answersDiv.appendChild(btn);
    });
}

function nextQuestion() {
    current = (current + 1) % questions.length;
    showQuestion();
}

window.onload = showQuestion;
