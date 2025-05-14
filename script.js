
function navigate(section) {
    let content = document.getElementById("content");
    switch(section) {
        case "askiseis":
            content.innerHTML = "<h2>Ασκήσεις</h2><p>Πόσο κάνει 2 + 3; <br><button onclick=\"alert('Σωστά!')\">5</button> <button onclick=\"alert('Δοκίμασε ξανά')\">6</button></p>";
            break;
        case "paromythia":
            content.innerHTML = "<h2>Ερωτήσεις Παραμυθιών</h2><p>Ποια είναι η αδελφή της Έλσας στο Frozen; <br><button onclick=\"alert('Σωστά! Η Άννα!')\">Άννα</button> <button onclick=\"alert('Δοκίμασε ξανά')\">Μαρία</button></p>";
            break;
        case "tiemathematoday":
            content.innerHTML = "<h2>Τι έμαθες σήμερα;</h2><textarea rows='4' cols='40' placeholder='Γράψε εδώ...'></textarea><br><button onclick=\"alert('Μπράβο!')\">Αποθήκευση</button>";
            break;
        case "agapimena":
            content.innerHTML = "<h2>Αγαπημένα</h2><p>Εδώ θα εμφανίζονται όσα αγαπάς!</p>";
            break;
        case "xartis":
            content.innerHTML = "<h2>Χάρτης του Κόσμου</h2><p>🧚 Η Χώρα των Παραμυθιών<br>🔤 Ο Πύργος των Ασκήσεων<br>💖 Η Κοιλάδα των Αγαπημένων</p>";
            break;
    }
}
