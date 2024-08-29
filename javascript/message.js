// Fungsi untuk memformat tanggal
function formatTanggal(date) {
    const hari = date.getDate().toString().padStart(2, '0');
    const bulan = (date.getMonth() + 1).toString().padStart(2, '0');
    const tahun = date.getFullYear();
    return `${hari}/${bulan}/${tahun}`; // Memperbaiki format string
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
