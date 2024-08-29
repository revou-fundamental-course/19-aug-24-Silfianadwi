// Mengecek nama pengunjung
var nameHero = prompt("Hallo, Siapa namamu?");
document.getElementById("title-name").innerHTML = nameHero;

// Slider gambar
var slideIndex = 1;
showDivs(slideIndex);

// Fungsi untuk menambah indeks slide
function plusDivs(n) {
    showDivs(slideIndex += n);
}

// Fungsi untuk menampilkan slide sesuai dengan indeks
function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}

// Set interval untuk otomatis berpindah slide setiap 2 detik
setInterval(() => {
    plusDivs(1);
}, 2000);

// Fungsi untuk memformat tanggal
function formatTanggal(date) {
    const hari = date.getDate().toString().padStart(2, '0');
    const bulan = (date.getMonth() + 1).toString().padStart(2, '0');
    const tahun = date.getFullYear();
    return `${hari}/${bulan}/${tahun}`;
}

// Fungsi validasi formulir
function validateForm(event) {
    // Mencegah perilaku default formulir (halaman di-refresh)
    event.preventDefault();

    // Ambil data dari form
    var name = document.getElementById("fname").value;
    var date = document.getElementById("fbdate").value;
    var gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    var messages = document.getElementById("messages").value;
    
    // Cek apakah ada input yang kosong
    if (name === "" || date === "" || gender === "" || messages === "") {
        alert("Input tidak boleh kosong");
        return false;
    }

    // Format tanggal saat ini
    var now = new Date();
    var formattedNow = formatTanggal(now);

    // Tampilkan data ke elemen output
    document.getElementById("sender-full-name").innerText = name;
    document.getElementById("sender-birth-date").innerText = date; // Tetap dalam format input
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-messages").innerText = messages;
    document.getElementById("sender-time").innerText = formattedNow;

    // Mencegah pengiriman formulir dan refresh halaman
    return false;
}

// Pastikan fungsi validateForm terhubung dengan benar pada form submit
document.querySelector("form[name='message-form']").addEventListener("submit", validateForm);
