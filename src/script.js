
function navigate(section) {
    const content = document.getElementById("content");
    switch(section) {
        case 'askiseis':
            content.innerHTML = `
                <h2>Ασκήσεις</h2>
                <p>Πόσο κάνει 4 + 2; <br>
                <button onclick="alert('Σωστά!')">6</button>
                <button onclick="alert('Ξαναπροσπάθησε')">5</button></p>
                <p>Είναι το 8 ζυγός αριθμός; <br>
                <button onclick="alert('Σωστά!')">Ναι</button>
                <button onclick="alert('Όχι ακριβώς')">Όχι</button></p>
            `;
            break;
        case 'paromythia':
            content.innerHTML = `
                <h2>Ερωτήσεις Παραμυθιών</h2>
                <p>Ποιος είναι ο φίλος της Άννα και της Έλσας;<br>
                <button onclick="alert('Σωστά!')">Όλαφ</button>
                <button onclick="alert('Όχι')">Ντόναλντ</button></p>
            `;
            break;
        case 'tiemathe':
            content.innerHTML = `
                <h2>Τι έμαθες σήμερα;</h2>
                <textarea rows='4' cols='40' placeholder='Γράψε εδώ...'></textarea><br>
                <button onclick="alert('Μπράβο Νεφελάκι!')">Αποθήκευση</button>
            `;
            break;
        case 'imerologio':
            content.innerHTML = `
                <h2>Ημερολόγιο Ευγνωμοσύνης</h2>
                <p>Πώς νιώθεις σήμερα;<br> 😊 😐 😢 </p>
                <p>Σήμερα χάρηκα γιατί...<br>
                <textarea rows='3' cols='40' placeholder='Γράψε εδώ κάτι όμορφο'></textarea></p>
            `;
            break;
        case 'xartis':
            content.innerHTML = `
                <h2>Χάρτης του Κόσμου της Νεφέλης</h2>
                <p>🧚 Χώρα των Παραμυθιών<br>
                🔤 Πύργος των Ασκήσεων<br>
                💖 Κοιλάδα των Αγαπημένων</p>
            `;
            break;
    }
}
