const audio = document.getElementById("music");

function switchTheme() {
  const body = document.body;

  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");

  if (body.classList.contains("dark-theme")) {
    audio.src = "./assets/musics/inverted-world.mpeg";
  } else {
    audio.src = "./assets/musics/normal-world.mpeg";
  }

  audio.load();
  audio.play();
}
