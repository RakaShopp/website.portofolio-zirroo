<script>
  function playSong(url) {
    const player = document.getElementById("audioPlayer");
    player.src = url;
    player.play();
  }
</script>
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.1 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));
