const submitButton = document.querySelector("#submit-button");
const mushroomNameInput = document.querySelector("#mushroom-name");
const descriptionInput = document.querySelector("#description");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const mushroomName = mushroomNameInput.value;
  const description = descriptionInput.value;

  alert(mushroomName);
  alert(description);
});
