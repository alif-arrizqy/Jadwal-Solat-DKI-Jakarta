if ("serviceWorker" in navigator) {
    registerServiceWorker();
    navigator.serviceWorker.ready.then(() => {
      // requestPermission();
      getJadwalSholat();
    });
  } else {
    console.log("ServiceWorker belum didukung browser ini.");
  }
  
  function registerServiceWorker() {
    return navigator.serviceWorker
      .register("./service-worker.js")
      .then(function (registration) {
        console.log("Pendaftaran ServiceWorker berhasil");
        return registration;
      })
      .catch(function () {
        console.log("Pendaftaran ServiceWorker gagal");
      });
  }