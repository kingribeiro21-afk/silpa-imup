
/* ==========================================
   FOTO MEMORY

   GANTI bagian ini dengan foto kamu.

   Contoh:

   const PHOTOS = [
     "foto1.jpg",
     "foto2.jpg",
     "foto3.jpg",
     "foto4.jpg"
   ];

   Kalau foto ada di folder images:

   const PHOTOS = [
     "images/foto1.jpg",
     "images/foto2.jpg",
     "images/foto3.jpg"
   ];
========================================== */

const PHOTOS = [

  "images/foto1.jpeg.jpeg",
  "images/foto2.jpeg.jpeg",
  "images/foto3.jpeg.jpeg",
  "images/foto4.jpeg.jpeg",
  "images/foto5.jpeg.jpeg",

];


/* ==========================================
   KATA-KATA YANG MUNCUL
========================================== */

const WORDS = [

  "you mean everything",

  "only you",

  "stay with me",

  "always on my mind",

  "my favorite person",

  "i love you",

  "my safe place",

  "forever",

  "you are enough",

  "with you",

  "my happiness",

  "always you",

  "love you more",

  "my person",

  "you & me",

  "all my heart",

  "miss you",

  "my home"

];


/* ==========================================
   ELEMENT
========================================== */

const loadingScreen =
  document.getElementById("loadingScreen");

const memoryScreen =
  document.getElementById("memoryScreen");

const wordField =
  document.getElementById("wordField");

const photoField =
  document.getElementById("photoField");

const replay =
  document.getElementById("replay");

const app =
  document.getElementById("app");


/* ==========================================
   RANDOM
========================================== */

function random(min, max) {

  return Math.random() *
    (max - min) + min;

}


/* ==========================================
   BUAT KATA-KATA
========================================== */

function createWords() {

  wordField.innerHTML = "";

  const totalWords = 35;

  for (let i = 0; i < totalWords; i++) {

    const word =
      document.createElement("div");

    word.classList.add("word");

    if (i % 7 === 0) {
      word.classList.add("highlight");
    }

    word.textContent =
      WORDS[i % WORDS.length];


    /*
      Posisi awal horizontal
    */

    word.style.left =
      `${random(0, 80)}%`;


    /*
      Posisi vertikal tidak penting
      karena animasi dimulai dari bawah.
    */

    word.style.top = "0";


    /*
      Gerakan sedikit ke samping
    */

    word.style.setProperty(
      "--word-x",
      `${random(-30, 30)}px`
    );

    word.style.setProperty(
      "--word-x-end",
      `${random(-80, 80)}px`
    );


    word.style.setProperty(
      "--rot",
      `${random(-5, 5)}deg`
    );


    word.style.setProperty(
      "--opacity",
      random(.25, .65)
    );


    /*
      Kecepatan tulisan
    */

    word.style.animationDuration =
      `${random(8, 14)}s`;


    /*
      Tulisan muncul satu per satu
    */

    word.style.animationDelay =
      `${random(0, 12)}s`;


    wordField.appendChild(word);
  }
}

/* ==========================================
   BUAT FOTO
========================================== */

function createPhotos() {

  photoField.innerHTML = "";

  const positions = [
    5,
    25,
    48,
    70,
    12,
    36,
    60,
    80,
    28,
    55
  ];


  positions.forEach((left, index) => {

    const card =
      document.createElement("div");

    card.classList.add("photo-card");


    card.style.left =
      `${left}%`;

    card.style.top =
      "0";


    card.style.setProperty(
      "--rot",
      `${random(-8, 8)}deg`
    );


    card.style.setProperty(
      "--rot-end",
      `${random(-10, 10)}deg`
    );


    card.style.setProperty(
      "--side-move",
      `${random(-25, 25)}px`
    );


    card.style.setProperty(
      "--side-move-end",
      `${random(-70, 70)}px`
    );


    /*
      Kecepatan berbeda
    */

    card.style.animationDuration =
      `${random(9, 14)}s`;


    /*
      Foto muncul satu per satu
    */

    card.style.animationDelay =
      `${index * 1.2}s`;


    const img =
      document.createElement("img");

    img.src =
      PHOTOS[index % PHOTOS.length];

    img.alt =
      "Memory";


    img.onerror = function () {

      this.style.display =
        "none";

      card.style.background =
        `
        linear-gradient(
          135deg,
          #39202f,
          #0e0a0d
        )
        `;

    };


    card.appendChild(img);

    photoField.appendChild(card);

  });
}

/* ==========================================
   MULAI ANIMASI
========================================== */

function startExperience() {

  /*
    Reset
  */

  loadingScreen
    .classList
    .remove("hide");


  memoryScreen
    .classList
    .remove("show");


  replay
    .classList
    .remove("visible");


  /*
    Buat ulang semua elemen
  */

  createWords();

  createPhotos();


  /*
    Loading sekitar 4.7 detik
  */

  setTimeout(() => {

    loadingScreen
      .classList
      .add("hide");


    memoryScreen
      .classList
      .add("show");

  }, 4700);


  /*
    Setelah sekitar 30 detik
    animasi selesai dengan fade-out.
  */

  setTimeout(() => {

    memoryScreen.style.transition =
      "opacity 2s ease";

    memoryScreen.style.opacity =
      "0";

  }, 30000);


  /*
    Replay muncul setelah selesai.
  */

  setTimeout(() => {

    replay
      .classList
      .add("visible");

  }, 32200);

}


/* ==========================================
   REPLAY
========================================== */

replay.addEventListener(
  "click",
  startExperience
);


/* ==========================================
   JALANKAN SAAT WEBSITE DIBUKA
========================================== */

window.addEventListener(
  "load",
  startExperience
);

