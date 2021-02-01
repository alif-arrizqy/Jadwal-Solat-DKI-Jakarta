importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
const pesanConsoleBerhasil = () => console.log(`Workbox berhasil dimuat`);
const pesanConsoleGagal = () => console.log(`Workbox gagal dimuat`);
workbox ? pesanConsoleBerhasil() : pesanConsoleGagal();

workbox.precaching.precacheAndRoute([
    { url: "./", revision: "1" },
    { url: "./manifest.json", revision: "1" },
    { url: "./css/materialize.css", revision: "1" },
    { url: "./css/materialize.min.css", revision: "1" },
    { url: "./css/style.css", revision: "1" },
    { url: "./js/init.js", revision: "1" },
    { url: "./js/api.js", revision: "1" },
    { url: "./js/materialize.js", revision: "1" },
    { url: "./js/materialize.min.js", revision: "1" },
    { url: "./js/nav.js", revision: "1" },
    { url: "./js/script.js", revision: "1" },
    { url: "./pages/about.html", revision: "1" },
    { url: "./pages/home.html", revision: "1" },
    { url: "./pages/jadwal_sholat.html", revision: "1" },
    { url: "./index.html", revision: "1" },
    { url: "./nav.html", revision: "1" },
    { url: "./img/header.png", revision: "1" },
    { url: "./img/jadwal_sholat.png", revision: "1" },
    { url: "./img/plant-2.svg", revision: "1" },
    { url: "./img/tree-2.svg", revision: "1" },
    { url: "./img/undraw_dev_productivity_umsq.svg", revision: "1" },
    { url: "./img/undraw_my_app_re_gxtj.svg", revision: "1" },
    { url: "./img/undraw_time_management_30iu.svg", revision: "1" },
    { url: "./img/icon/github.png", revision: "1" },
    { url: "./img/icon/linkedin.png", revision: "1" },
    { url: "https://code.jquery.com/jquery-2.1.1.min.js", revision: "1" },
]);

workbox.routing.registerRoute(
    new RegExp("./js/"),
    workbox.strategies.staleWhileRevalidate({
        cacheName: "js",
    })
);

workbox.routing.registerRoute(
    new RegExp("./css/"),
    workbox.strategies.staleWhileRevalidate({
        cacheName: "css",
    })
);

workbox.routing.registerRoute(
    new RegExp("./pages/"),
    workbox.strategies.staleWhileRevalidate({
        cacheName: "pages",
    })
);

workbox.routing.registerRoute(
    new RegExp("./img/"),
    workbox.strategies.staleWhileRevalidate({
        cacheName: "img",
    })
);

workbox.routing.registerRoute(
    new RegExp("./"),
    workbox.strategies.staleWhileRevalidate({
        cacheName: "all",
    })
);

workbox.routing.registerRoute(
    /^https:\/\/api\.banghasan\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: "https://api.banghasan.com/",
    })
);

workbox.routing.registerRoute(
    /.*(?:png|gif|jpg|jpeg|svg|ico|webp)$/,
    workbox.strategies.cacheFirst({
        cacheName: "images",
        plugins: [
        new workbox.cacheableResponse.Plugin({
            statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
            maxEntries: 100,
            maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
        ],
    })
);

