// Obtén los selectores
const selectors = document.querySelectorAll('input[name="blend-mode"]');
const selectedMode1 = document.getElementById("selectedMode1");
const selectedMode2 = document.getElementById("selectedMode2");

// Función para escribir el modo seleccionado
function writeSelectedMode(mode) {
  selectedMode1.textContent = `Selected: ${mode.toUpperCase()}`;
  selectedMode2.textContent = `${mode}`;
}
// Escucha los cambios en los selectores
selectors.forEach((selector) => {
  selector.addEventListener("change", () => {
    const blendMode = selector.value;
    const photo = document.getElementById("photo");
    
    // Restablecer la opacidad de todos los elementos photo
    document.querySelectorAll(".photo").forEach((item) => {
      item.style.opacity = 0;
    });

    // Establecer la opacidad del elemento photo seleccionado
    photo.style.opacity = 1;
    photo.style.mixBlendMode = blendMode;

    // Escribir el modo seleccionado
    writeSelectedMode(blendMode);
  });
});

function copyToClipboard() {
  const selectedSelector = Array.from(selectors).find(selector => selector.checked === true);
  const blendMode = selectedSelector.value;

  const codeToCopy = `/* Styles for your mixed image: */
    .your_image_class_name { /* Make sure to set a class name or change the selector */
      background-image: url("your_image_name.jpg"); /* Set the path to your image */
      background-repeat: no-repeat;
      background-size: contain;
      mix-blend-mode: ${blendMode}; /* This is the line where the magic happens */
    }
  `;

  // Crear un elemento de texto temporal
  const tempElement = document.createElement('textarea');
  tempElement.value = codeToCopy;
  document.body.appendChild(tempElement);

  // Seleccionar y copiar el texto
  tempElement.select();
  document.execCommand('copy');

  // Eliminar el elemento temporal
  document.body.removeChild(tempElement);
}
