
function playSong(url) {
  const player = document.getElementById("audioPlayer");
  player.src = url;
  player.play();
}
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("show");
}
