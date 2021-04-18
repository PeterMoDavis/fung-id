const submitButton = document.querySelector("#submit-button");
const mushroomNameInput = document.querySelector("#mushroom-name");
const descriptionInput = document.querySelector("#description");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const mushroomName = mushroomNameInput.value.trim();
  const description = descriptionInput.value.trim();

  if(mushroomName && description){
    const response = await fetch("/api/users/login", {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
      document.location.replace('/api/users/login');
  } else {
      alert('Failed to log in.');
  }
  }
  alert(mushroomName);
  alert(description);
});
