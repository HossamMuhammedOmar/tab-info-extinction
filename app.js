getImageUrl();

async function getImageUrl() {
  let name = "";
  const res = await fetch(
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
  );
  const data = await res.json();
  console.log(data);
  document.body.style.backgroundImage = `url(${data.urls.regular})`;
  document.getElementById(
    "author"
  ).textContent = `By: ${data.user.first_name} ${data.user.last_name}`;
}
