// Optional: Fade-in on scroll for smooth entry
const faders = document.querySelectorAll('.tournament-card, .join-box, h2, header p');

const appearOptions = {
  threshold: 0.1
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
