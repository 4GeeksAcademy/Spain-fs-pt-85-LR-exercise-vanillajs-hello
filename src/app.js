/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const subjects = [
    "El perro",
    "Mi abuela",
    "El profesor",
    "Un extraterrestre"
  ];
  const actions = ["se comió", "rompió", "perdió", "se llevó"];
  const objects = ["mi tarea", "el carro", "mis apuntes", "el celular"];
  const places = [
    "en la casa",
    "en el parque",
    "en la escuela",
    "en el trabajo"
  ];

  const images = [
    "https://cadenaser.com/resizer/v2/XHAKZ22KIZKHZP3EMTDP2HMECU.jpg?auth=d5c8896b4b7a73c4002db7124301b24da938494adff488d3eb7d3cef6cecf5a6&quality=70&width=650&height=365&smart=true",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkPcv7aQ0b5on7aeUwnm5tfF4zeZHFO5fV5A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLrq4s4xwmnVwnLBDcBPH7CZY4SSto1DoDA&s",
    "https://pbs.twimg.com/profile_images/1272589188513378305/dGcyBL66_400x400.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSon1HdsorvOU8JRnJz3P6-NUWoTNnUPr9qeA&s"
  ];

  function generateExcuse() {
    const excuse =
      `${subjects[Math.floor(Math.random() * subjects.length)]} ` +
      `${actions[Math.floor(Math.random() * actions.length)]} ` +
      `${objects[Math.floor(Math.random() * objects.length)]} ` +
      `${places[Math.floor(Math.random() * places.length)]}.`;

    const excuseElement = document.getElementById("excuse");
    if (excuseElement) {
      excuseElement.innerText = excuse;
    } else {
      console.error("El elemento con id 'excuse' no fue encontrado.");
    }

    const imageElement = document.getElementById("excuse-image");
    if (imageElement) {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      imageElement.src = randomImage;
    } else {
      console.error("El elemento con id 'excuse-image' no fue encontrado.");
    }

    console.log("Excusa generada: ", excuse);
    console.log("Imagen cambiada a: ", imageElement.src);
  }

  generateExcuse();

  const generateBtn = document.getElementById("generate-btn");
  if (generateBtn) {
    generateBtn.addEventListener("click", generateExcuse);
  } else {
    console.error("El botón con id 'generate-btn' no fue encontrado.");
  }
};
