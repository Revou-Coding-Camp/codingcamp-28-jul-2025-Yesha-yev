document.addEventListener("DOMContentLoaded", function () {
    // Prompt nama setelah semua elemen dimuat
    let name = prompt("Masukkan nama kamu:");
    if (name) {
        const welcomeText = document.getElementById("welcome-text");
        if (welcomeText) {
            welcomeText.innerText = `Hi, ${name}`;
        }
    }

    const form = document.getElementById("contact-form");
    const output = document.getElementById("output");

    if (!form || !output) {
        console.error("Form atau output tidak ditemukan.");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Cegah reload halaman

        const name = document.getElementById("name").value;
        const dob = document.getElementById("dob").value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value;
        const message = document.getElementById("message").value;

        if (!name || !dob || !gender || !message) {
            output.innerHTML = "<p style='color:red;'>Mohon isi semua data terlebih dahulu.</p>";
            return;
        }

        output.innerHTML = `
            <h4>Hasil Input:</h4>
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Tanggal Lahir:</strong> ${dob}</p>
            <p><strong>Jenis Kelamin:</strong> ${gender}</p>
            <p><strong>Pesan:</strong> ${message}</p>
        `;
    });
});
