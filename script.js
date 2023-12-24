let counter = 0;

function changeColorGetElementById(elementId) {
  const element = document.getElementById(elementId);
  const currentColor = element.style.backgroundColor;

  if (currentColor === "grey") {
    element.style.backgroundColor = "blue";
    element.style.color = "white";
  } else {
    element.style.backgroundColor = "grey";
    element.style.color = "black";
  }
}

function changeColorQuerySelector(elementSelector) {
  const element = document.querySelector(elementSelector);
  const currentColor = element.style.backgroundColor;

  if (currentColor === "grey") {
    element.style.backgroundColor = "green";
    element.style.color = "darkblue";
  } else {
    element.style.backgroundColor = "grey";
    element.style.color = "black";
  }
}

function addImage() {
  counter++;

  const newImage = document.createElement("img");
  newImage.setAttribute("id", "salz-img-" + counter);
  newImage.setAttribute(
    "src",
    "https://www.salzburg.info/09-bildergalerie/01_panorama-ansichten/image-thumb__45818__archiv-detail/Kapitelplatz_Festung_Balkenhohl.webp"
  );
  newImage.setAttribute("width", "600");
  newImage.style.display = "block";

  const photoContainer = document.querySelector(".my-city-photo");
  photoContainer.appendChild(newImage);
}

function deleteImage() {
  const existingImage =
    counter === 0
      ? document.getElementById("salz-img")
      : document.getElementById(`salz-img-${counter}`);
  console.log(existingImage);

  if (existingImage.id === "salz-img") {
    existingImage.parentNode.removeChild(existingImage);
  } else if (existingImage) {
    const photoContainer = document.querySelector(".my-city-photo");
    photoContainer.removeChild(existingImage);
    counter--;
  }
}

function enlargeImage() {
  const existingImage =
    counter === 0
      ? document.getElementById("salz-img")
      : document.getElementById(`salz-img-${counter}`);

  const currentWidth = existingImage.width;
  existingImage.setAttribute("width", currentWidth + 100);
}

function reduceImage() {
  const existingImage =
    counter === 0
      ? document.getElementById("salz-img")
      : document.getElementById(`salz-img-${counter}`);

  const currentWidth = existingImage.width;
  if (currentWidth < 150) return;
  else existingImage.setAttribute("width", currentWidth - 100);
}