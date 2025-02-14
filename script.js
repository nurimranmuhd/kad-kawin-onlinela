// Fungsi Navigasi
function navigate(page) {
    window.location.href = page + ".html";
}

// Simpan dan Paparkan Ucapan
function simpanUcapan() {
    let ucapanInput = document.getElementById("ucapan");
    let ucapan = ucapanInput.value.trim();
    
    if (ucapan === "") {
        alert("Sila tulis ucapan terlebih dahulu!");
        return;
    }

    let list = document.getElementById("senarai-ucapan");
    let item = document.createElement("li");
    item.textContent = ucapan;
    list.appendChild(item);

    ucapanInput.value = "";
}
