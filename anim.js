
// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hola tonota", time: 3 },
  { text: "Quiero decirte unas cositas", time: 5 },
  { text: "Siempre has estado ahí cuando has podido", time: 7 },
  { text: "Eres muy linda, bonita y atenta conmigo", time: 9.5 },
  { text: "Y la verdad yo solo he sido pesado contigo ksjdks", time: 12 },
  { text: "Quiero que sepas que te quiero mucho", time: 14 },
  { text: "Siempre estaré ahí para ti", time: 16 },
  { text: "Espero que estés tranquila, lo estás haciendo bien", time: 21 },
  { text: "Vales mucho más de lo que piensas tonota", time: 23 },
  { text: "Me alegras la vida como no tienes idea", time: 26 },
  { text: "Esto es algo chiquito que puedo hacer", time: 30 },
  { text: "En fin, disfruta de tus florecitas, bonita", time: 33 },
  
  { text: "Eres lo primero en lo que pienso en las mañanas", time: 37 },
  { text: "Eres con quien quiero despertar entre las sábanas", time: 41 },
  { text: "Eres mi deseo de 11:11", time: 46 },
  { text: "Eres con quien quiero estar febrero catorce", time: 51 },

  { text: "Tú", time: 55 },
  { text: "Tú", time: 65 },

  { text: "Lo intentamos si tú quieres", time: 73 },
  { text: "Puedo ser yo si te conviene", time: 77 },
  { text: "Yo ya decidí", time: 83 },
  { text: "¿Y tú?", time: 88 },

  { text: "Lo intentamos si tú quieres", time: 92 },
  { text: "Puedo ser yo si te conviene", time: 96 },
  { text: "Yo ya decidí", time: 102 },
  { text: "¿Y tú?", time: 106 },
  { text: "", time: 110 },

  { text: "Eres mis canciones preferidas", time: 129 },
  { text: "Tienes que ser tú, solo tú", time: 134 },
  { text: "Eres lo mejor que podría pasarle a mi vida", time: 139 },
  { text: "Perfecta melodía", time: 145 },

  { text: "Tú", time: 148 },
  { text: "Tú", time: 157 },

  { text: "Lo intentamos si tú quieres", time: 166 },
  { text: "Puedo ser yo si te conviene", time: 170 },
  { text: "Yo ya decidí", time: 175 },
  { text: "¿Y tú?", time: 180 },

  { text: "Lo intentamos si tú quieres", time: 184 },
  { text: "Puedo ser yo si te conviene", time: 188 },
  { text: "Yo ya decidí", time: 194 },
  { text: "¿Y tú?", time: 198 },
  { text: "Te quiero mucho, tonota", time: 202 },
  { text: "", time: 212 },
];

let currentLineIndex = -1;
let fadeDuration = 500; // duración del fade en ms
let fading = false;

function fade(element, targetOpacity, callback) {
  if (fading) return; // evita solapar animaciones
  fading = true;

  let start = performance.now();
  let initialOpacity = parseFloat(getComputedStyle(element).opacity);
  let delta = targetOpacity - initialOpacity;

  function animate(time) {
    let progress = Math.min((time - start) / fadeDuration, 1);
    element.style.opacity = initialOpacity + delta * progress;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      fading = false;
      if (callback) callback();
    }
  }

  requestAnimationFrame(animate);
}

function updateLyrics() {
  let time = audio.currentTime;
  let nextLine = lyricsData.findIndex(
    (line, i) =>
      time >= line.time &&
      (i === lyricsData.length - 1 || time < lyricsData[i + 1].time)
  );

  if (nextLine !== currentLineIndex) {
    currentLineIndex = nextLine;

    if (nextLine !== -1) {
      // Primero hacemos fade-out del texto actual
      fade(lyrics, 0, () => {
        // Cuando termine el fade-out, cambiamos el texto y hacemos fade-in
        lyrics.textContent = lyricsData[nextLine].text;
        fade(lyrics, 1);
      });
    } else {
      fade(lyrics, 0);
    }
  }

  requestAnimationFrame(updateLyrics);
}

audio.addEventListener("play", () => {
  requestAnimationFrame(updateLyrics);
});

audio.addEventListener("play", () => {
  requestAnimationFrame(updateLyrics);
});
  // Ocultar título después de 216 segundos
  function ocultarTitulo() {
    var titulo = document.querySelector(".titulo");
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(() => {
      titulo.style.display = "none";
    }, 3000);
  }
  setTimeout(ocultarTitulo, 216000);