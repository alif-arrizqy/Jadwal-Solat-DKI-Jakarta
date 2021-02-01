document.addEventListener("DOMContentLoaded", function() {
    
    const sideNav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sideNav);

    loadNav();

    function loadNav() {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4) {
                if(this.status !== 200) return;

                document.querySelectorAll(".topnav, .sidenav").forEach(elem => {
                    elem.innerHTML = xhttp.responseText;
                });

                document.querySelectorAll(".topnav a, .sidenav a").forEach(elem => {
                    elem.addEventListener('click', event => {
                        const sideNavClose = document.querySelector(".sidenav");
                        M.Sidenav.getInstance(sideNavClose).close();

                        page = event.target.getAttribute("href").substr(1);
                        loadPage(page);
                    });
                });
            }
        };

        xhttp.open("GET", "nav.html", true);
        xhttp.send();
    }

    let page = window.location.hash.substr(1);
    if(page === "") page = "home"
    loadPage(page)
    
    function loadPage(page) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4) {
                var content = document.querySelector("#body-content");

                if (this.status === 200) {
                    content.innerHTML = xhttp.responseText
                    if (page === "home") {
                        content.innerHTML = xhttp.responseText
                    } else if (page === "about") {
                        content.innerHTML = xhttp.responseText
                    } else if (page === "jadwal_sholat") {
                        getJadwalSholat()
                    }
                } else if(this.status === 404) {
                    content.innerHTML = '<p>Halaman tidak bisa ditemukan!</p>';
                } else {
                    content.innerHTML = '<p>Halaman Tidak bisa diakses!</p>';
                }
            }
        };

        xhttp.open("GET", `pages/${page}.html`, true);
        xhttp.send();
    }
});