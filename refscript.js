var filesScanned = { count: 0, infected: 0 };

var scanning = anime({
  targets: filesScanned,
  autoplay: false,
  count: 1000,
  infected: 8,
  easing: 'linear',
  round: 1,
  update: function() {
    var total = document.querySelector('.scan-count');
    total.innerHTML = filesScanned.count;

    var infected = document.querySelector('.infected-count');
    infected.innerHTML = filesScanned.infected;
  }
});

document.querySelector('.play-scan').onclick = scanning.restart;
