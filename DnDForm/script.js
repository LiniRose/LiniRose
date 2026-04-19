//dragon image
const img = document.getElementById("dragon")

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)]
}

fetch("images.json")
    .then(response => response.json())
    .then(images => {
        const randomImage = getRandomElement(images)

        img.src = randomImage.src
    })

//race
const traitsElement = document.querySelector("#traits");
const raceElement = document.querySelector("#race");

let raceData = [];

fetch("race.json")
  .then((response) => response.json())
  .then((data) => {
    raceData = data;

    raceElement.addEventListener("change", () => {
      const selected = raceElement.value;

      if (!selected) {
        traitsElement.textContent = "";
        return;
      }

      const match = raceData.find((r) => r.race === selected);

      traitsElement.textContent = match ? match.traits : "";
    });
  })
  .catch((err) => console.error("Error loading JSON:", err));

//class
const classElement = document.querySelector("#class");
const primaryAbilitiesElement = document.querySelector("#primaryAbilities");
const hitPointDieElement = document.querySelector("#hitPointDie");
const savesElement = document.querySelector("#saves");

let classData = [];

fetch("class.json")
  .then((response) => response.json())
  .then((data) => {
    classData = data;

    classElement.addEventListener("change", () => {
      const selected = classElement.value;

      if (!selected) {
        primaryAbilitiesElement.textContent = "";
        hitPointDieElement.textContent = "";
        savesElement.textContent = "";
        return;
      }

      const match = classData.find((c) => c.class === selected);

      if (match) {
        primaryAbilitiesElement.textContent = match.primaryAbilities;
        hitPointDieElement.textContent = match.hitPointDie;
        savesElement.textContent = match.saves;
      } else {
        primaryAbilitiesElement.textContent = "";
        hitPointDieElement.textContent = "";
        savesElement.textContent = "";
      }
    });
  })
  .catch((err) => console.error("Error loading class.json:", err));

 
const backgroundElement = document.querySelector("#background");
const backgroundFeatureElement = document.querySelector("#feature");
const backgroundProficienciesElement = document.querySelector("#proficiencies");

let backgroundData = [];

fetch("background.json")
  .then((response) => response.json())
  .then((data) => {
    backgroundData = data;

    backgroundElement.addEventListener("change", () => {
      const selected = backgroundElement.value;

      if (!selected) {
        backgroundFeatureElement.textContent = "";
        backgroundProficienciesElement.textContent = "";
        return;
      }

      const match = backgroundData.find((b) => b.background === selected);

      if (match) {
        backgroundFeatureElement.textContent = match.feature;
        backgroundProficienciesElement.textContent = match.proficiencies;
      } else {
        backgroundFeatureElement.textContent = "";
        backgroundProficienciesElement.textContent = "";
      }
    });
  })
  .catch((err) => console.error("Error loading background.json:", err));

 
const height = document.querySelector("#height");
const output = document.querySelector(".height");

function updateHeightDisplay(value) {
  const numeric = Number(value);

  output.textContent =
    numeric <= 150 ? `${numeric} cm` : `${(numeric / 100).toFixed(2)} m`;
}

updateHeightDisplay(height.value);

height.addEventListener("input", () => {
  updateHeightDisplay(height.value);
});

 
const uploadDiv = document.getElementById("uploadDiv");
const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");

uploadDiv.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});


const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value !== password.value) {
    confirmPassword.setCustomValidity("invalid");
  } else {
    confirmPassword.setCustomValidity("");
  }
});

document.getElementById("character-creation-btn").addEventListener("click", function () {
    const form = document.getElementById("character-creation");

    if (form.checkValidity()) {
        window.location.href = "thanks.html";
    } else {
        form.reportValidity();
    }
});