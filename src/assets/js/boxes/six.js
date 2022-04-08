export const six = async () => {
  async function getAnimal() {
    try {
      const response = await fetch(
        "https://zoo-animal-api.herokuapp.com/animals/rand"
      );
      const animal = await response.json();
      return animal;
    } catch (error) {
      console.log("Error:", error);
    }
  }

  function renderAnimal(animal) {
    let six = document.querySelector(".six");
    let box = document.querySelector(".six__content");
    box.innerHTML = "";
    six.style.backgroundImage = `url(${animal.image_link})`;
    let container = document.createElement("div");
    container.classList.add("six__container");
    container.innerHTML = `
        
        <h2 class="six__name">${animal.name}</h2>
        <div class="six__description">
          <p>Habitat: ${animal.habitat}</p>
          <p>Diet: ${animal.diet}</p>
          <p>Geo Range: ${animal.geo_range}</p>
        </div>
    `;

    box.appendChild(container);
  }

  let animal = await getAnimal();
  renderAnimal(animal);

  document
    .querySelector(".six__new-btn")
    .addEventListener("click", async () => {
      let animal = await getAnimal();
      renderAnimal(animal);
    });
};
