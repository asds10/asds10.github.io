var a = anime.timeline({
  loop: true,
  easing: "easeInOutBack"
})

a
  .add({
    targets:'#text16',
    translateX: "+=300",
    duration: 3000,

  }, 0)
  .add({
    targets:'#text16',
    translateX: "-=300",
    duration: 3000,
  },'+=0')

var t = anime.timeline({
  loop:true,
  easing: 'easeInOutCubic'
});

t
  .add({
    targets: '#animtext',
    translateX: '+=200',
    translateY: 200,
    duration: 1000
  }, 0)
  .add({
    targets: '#animtext',
    translateX: 0,
    translateY: 0,
    duration: 1000
  },'+=0')
