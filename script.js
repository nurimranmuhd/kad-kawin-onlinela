function simpanUcapan() {
    let ucapan = document.getElementById("ucapan").value;
    if (ucapan.trim() === "") return;
    
    let list = document.getElementById("senarai-ucapan");
    let item = document.createElement("li");
    item.textContent = ucapan;
    list.appendChild(item);
    
    document.getElementById("ucapan").value = "";
}
