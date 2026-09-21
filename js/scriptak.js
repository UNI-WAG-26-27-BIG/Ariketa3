let filmak = [];

function berria() {
    const kodea = prompt("Sartu filmaren kodea:");
    const izena = prompt("Sartu filmaren izena:");
    if (!kodea || !izena) {
        alert("Kodea eta izena ezinbestekoak dira!");
        return;
    }
    const filmBerria = `${kodea} - ${izena}`;
    const non = prompt("Non sartu nahi duzu film berria? (hasieran edo bukaeran)");
    if (non && non.toLowerCase() === "hasieran") {
        filmak.unshift(filmBerria); // Hasieran gehitzen du
    } else {
        filmak.push(filmBerria); // Bukaeran gehitzen du (lehenetsia)
    }
    alert(`"${filmBerria}" ondo gehituko da.`);
}

function ezabatu() {
    const kodea = prompt("Sartu ezabatu nahi duzun filmaren kodea:");
    
    // Kode horrekin hasten den filmaren posizioa (indizea) bilatu
    const index = filmak.findIndex(f => f.startsWith(kodea));

    if (index !== -1) {
        const ezabatua = filmak.splice(index, 1); // Elementua kendu
        alert(`"${ezabatua}" zerrendatik kendu da.`);
    } else {
        alert("Ez da aurkitu kode hori duen filmik.");
    }
}
function idatziPantailan(testua) {
  document.getElementById("pantaila").textContent = testua;
}
function ikusi() {
    if (filmak.length === 0) {
        idatziPantailan("Ez dago filmik karteldegoan.");
        return;
    }

    let edukia = "Zine Klubaren Karteldegia:\n";
    for (const filma of filmak) {
        edukia += `${filma}\n`;
    }
    idatziPantailan(edukia);
}