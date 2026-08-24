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

  const totalWords = 48;


  for (let i = 0; i < totalWords; i++) {

    const word =
      document.createElement("div");

    word.classList.add("word");


    /*
      Setiap beberapa kata
      dibuat lebih terang.
    */

    if (i % 9 === 0) {

      word.classList.add("highlight");

    }


    word.innerText =
      WORDS[i % WORDS.length];


    word.style.left =
      `${random(-15, 72)}%`;

    word.style.top =
      `${random(2, 96)}%`;


    word.style.setProperty(
      "--move",
      `${random(-55, 55)}px`
    );


    word.style.setProperty(
      "--rot",
      `${random(-4, 4)}deg`
    );


    word.style.setProperty(
      "--opacity",
      random(.12, .42)
    );


    word.style.animationDuration =
      `${random(8, 16)}s`;


    word.style.animationDelay =
      `${random(-14, 0)}s`;


    wordField.appendChild(word);

  }

}


/* ==========================================
   BUAT FOTO
========================================== */

function createPhotos() {

  photoField.innerHTML = "";


  /*
    Posisi foto dibuat menyerupai
    susunan floating memories.
  */

  const positions = [

    [8, 4, -7],

    [64, 8, 8],

    [35, 17, -3],

    [70, 31, 5],

    [7, 38, -5],

    [43, 48, 6],

    [69, 57, -7],

    [10, 68, 5],

    [45, 76, -4],

    [67, 80, 7],

    [27, 87, -6],

    [2, 17, 5]

  ];


  positions.forEach(
    (position, index) => {

      const card =
        document.createElement("div");


      card.classList.add(
        "photo-card"
      );


      const left =
        position[0];

      const top =
        position[1];

      const rotation =
        position[2];


      card.style.left =
        `${left}%`;

      card.style.top =
        `${top}%`;


      card.style.setProperty(
        "--rot",
        `${rotation}deg`
      );


      card.style.setProperty(
        "--dx",
        `${random(-28, 28)}px`
      );


      card.style.animationDuration =
        `${random(8, 13)}s`;


      card.style.animationDelay =
        `${random(-12, 0)}s`;


      const image =
        document.createElement("img");


      /*
        Ambil foto dari array.
      */

      image.src =
        PHOTOS[index % PHOTOS.length];


      image.alt =
        "Our Memory";


      /*
        Kalau foto tidak ditemukan,
        card tetap terlihat.
      */

      image.onerror = function () {

        this.style.display =
          "none";

        card.style.background =
          `
          radial-gradient(
            circle at 35% 25%,
            rgba(255,120,195,.55),
            transparent 30%
          ),
          linear-gradient(
            135deg,
            #39202f,
            #0e0a0d
          )
          `;

      };


      card.appendChild(image);

      photoField.appendChild(card);

    }
  );

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