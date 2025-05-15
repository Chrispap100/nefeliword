
function navigate(section) {
    const content = document.getElementById("content");
    switch(section) {
        case 'askiseis':
            content.innerHTML = "<h2>Ασκήσεις</h2><p>Πόσο κάνει 5 + 3; <br><button onclick=\"alert('Σωστά!')\">8</button> <button onclick=\"alert('Δοκίμασε ξανά')\">9</button></p>";
            break;
        case 'paromythia':
            content.innerHTML = "<h2>Ερωτήσεις Παραμυθιών</h2><p>Ποιος είναι ο χιονάνθρωπος φίλος της Έλσας; <br><button onclick=\"alert('Σωστά! Ο Όλαφ!')\">Όλαφ</button> <button onclick=\"alert('Όχι ακριβώς')\">Μίκυ</button></p>";
            break;
        case 'imerologio':
            content.innerHTML = "<h2>Ημερολόγιο</h2><p>Πώς νιώθεις σήμερα Νεφελάκι; <br>😊 😐 😢</p><p>Τι έμαθες σήμερα;<br><textarea placeholder='Γράψε εδώ...'></textarea></p>";
            break;
        case 'xartis':
            content.innerHTML = "<h2>Χάρτης του Κόσμου της Νεφέλης</h2><p>🧚 Χώρα των Παραμυθιών<br>🔤 Πύργος των Ασκήσεων<br>💖 Κοιλάδα των Αγαπημένων</p>";
            break;
    }
}
