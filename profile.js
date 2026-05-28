const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const cityInput = document.getElementById("city");
const hobbyInput = document.getElementById("hobby");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const profileInfo = document.getElementById("profileInfo");
const displayName = document.getElementById("displayName");
const displayAge = document.getElementById("displayAge");
const displayCity = document.getElementById("displayCity");
const displayHobby = document.getElementById("displayHobby");

saveBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
  const city = cityInput.value.trim();
  const hobby = hobbyInput.value.trim();

  if (!name || !age || !city || !hobby) {
    alert("пожалуйста, заполните все поля");
    return;
  }

  displayName.textContent = "имя: " + name;
  displayAge.textContent = "возраст: " + age;
  displayCity.textContent = "город: " + city;
  displayHobby.textContent = "хобби: " + hobby;

  profileInfo.style.display = "block";
});

clearBtn.addEventListener("click", function () {
  nameInput.value = "";
  ageInput.value = "";
  cityInput.value = "";
  hobbyInput.value = "";

  profileInfo.style.display = "none";
  displayName.textContent = "";
  displayAge.textContent = "";
  displayCity.textContent = "";
  displayHobby.textContent = "";
});