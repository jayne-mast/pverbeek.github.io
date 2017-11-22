// header
const me = document.getElementById('me');

const text = me.textContent
  .replace(/./g, '<span>$&</span>')
  .replace(' ', '&nbsp;');

me.innerHTML = text;

// visitor counter
const counterElem = document.getElementById('visitor-counter');
const count =
  localStorage.getItem('visitors') || Math.ceil(Math.random() * 15) + 35 + '';

localStorage.setItem('visitors', +count + Math.ceil(Math.random() * 8));

counterElem.innerHTML = count.padStart(8, '0');

// background color
document.addEventListener('mousemove', e => {
  document.body.style.backgroundPosition = `${(e.pageX / 30) % 80 +
    10}px ${(e.pageY / 15) % 60 + 20}px`;
  me;

  me.style.left = e.clientX + 10 + 'px';
  me.style.bottom = e.clientY - 150 + 'px';
});

// favicon
let i = 0;
const images = [
  'P',
  'A1',
  'U',
  'L',
  'space',
  'V',
  'E1',
  'R',
  'B',
  'E2',
  'E3',
  'K',
  '-',
  'M',
  'A2',
  'S',
  'T',
  'space'
];

setInterval(function() {
  const iconElem = document.querySelectorAll("link[rel='icon']");
  iconElem.length && iconElem[0].parentNode.removeChild(iconElem[0]);

  const newIcon = document.createElement('link');
  newIcon.setAttribute('rel', 'icon');
  newIcon.setAttribute('type', 'image/png');
  newIcon.setAttribute('href', `favicons/${images[i]}.png`);

  document.head.appendChild(newIcon);

  if (i == images.length - 1) i = 0;
  else i++;
}, 200);

// guest book
const noteElem = document.getElementById('note');
if (localStorage.getItem('note')) {
  noteElem.innerText = localStorage.getItem('note');
}

noteElem.addEventListener('keyup', e => {
  localStorage.setItem('note', noteElem.innerText);
});
