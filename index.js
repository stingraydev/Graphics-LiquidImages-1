import hoverEffect from 'hover-effect';

Array.from(document.querySelectorAll('.imgBox')).forEach(elem => {
  const imgs = Array.from(elem.querySelectorAll('img'));
  new hoverEffect({
    parent: elem,
    intensity: 0.1,
    image1: imgs[0].getAttribute('src'),
    image2: imgs[1].getAttribute('src'),
    displacementImage: 'images/13.jpg'
  });
})