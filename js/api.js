// fetchText();
let today = new Date().toISOString().slice(0, 10);
var base_url = "https://api.banghasan.com/sholat/format/json/jadwal/kota/667/tanggal/";

// Blok kode yang akan di panggil jika fetch berhasil
function status(response) {
    if (response.status !== 200) {
        console.log("Error : " + response.status);
        // Method reject() akan membuat blok catch terpanggil
        return Promise.reject(new Error(response.statusText));
    } else {
        // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
        return Promise.resolve(response);
    }
}
// Blok kode untuk memparsing json menjadi array JavaScript
function json(response) {
    return response.json();
}
// Blok kode untuk meng-handle kesalahan di blok catch
function error(error) {
    // Parameter error berasal dari Promise.reject()
    console.log("Error : " + error);
}
// Blok kode untuk melakukan request data json
function getJadwalSholat() {
    fetch(base_url + `${today}`)
        .then(status)
        .then(json)
        .then(function (data) {
        // Objek/array JavaScript dari response.json() masuk lewat data.
        var articlesHTML = "";
        articlesHTML = `
            <tr>
                <td>${data.jadwal.data.tanggal}</td>
                <td>${data.jadwal.data.imsak}</td>
                <td>${data.jadwal.data.subuh}</td>
                <td>${data.jadwal.data.dhuha}</td>
                <td>${data.jadwal.data.dzuhur}</td>
                <td>${data.jadwal.data.ashar}</td>
                <td>${data.jadwal.data.maghrib}</td>
                <td>${data.jadwal.data.isya}</td>            
            </tr>
            `;
      // });
      // Sisipkan komponen card ke dalam elemen dengan id #content
        document.getElementById("table-body").innerHTML = articlesHTML;
    })
    .catch(error);
}
