const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const selectedImage = document.getElementById("selectedImage");
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8];
const selectedIndex = null;

imageIndexes.forEach((i) => {
  const image = document.createElement("img");
  image.src = `./img/${i}.jpg`;
  image.classList.add("galleryImg");

  image.addEventListener("click", () => {
    popup.style.transform = `translateY(0)`;
    selectedImage.src = `./img/${i}.jpg`;
  });

  gallery.appendChild(image);
});

popup.addEventListener("click", () => {
  popup.style.transform = `translateY(-100%)`;
  popup.src = "";
});
