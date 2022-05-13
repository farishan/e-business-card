const atf = document.getElementById('section-atf');
atf.style.minHeight = window.innerHeight;

const darkModeSwitch = document.getElementById('dark-mode-switch');

function switchMode() {
  const body = document.body;
  const isDark = body.classList.contains('dark');

  if (isDark) {
    document.body.classList.remove('dark');
  } else {
    document.body.classList.add('dark');
  }

  darkModeSwitch.innerHTML = isDark
    ? '<strike>dark</strike>&nbsp;<span>light</span>'
    : '<span>dark</span>&nbsp;<strike>light</strike>';
}

darkModeSwitch.onclick = switchMode;

const atfContentText = document.getElementById('atf-content-text');
const atfContentImage = document.getElementById('atf-content-image');

function setBorderAndAdjustImage() {
  if (window.innerWidth > 900) {
    if (atfContentText.clientHeight > atfContentImage.clientHeight) {
      atfContentText.style.borderRight = '2px solid';
      atfContentImage.style.borderLeft = 'none';
    } else {
      atfContentText.style.borderRight = 'none';
      atfContentImage.style.borderLeft = '2px solid';
    }

    atfContentImage.style.height =
      atfContentImage.parentElement.clientHeight + 'px';
  } else {
    atfContentText.style.borderRight = 'none';
    atfContentImage.style.borderLeft = 'none';
    atfContentImage.style.height = '200px';
  }
}

window.addEventListener('resize', setBorderAndAdjustImage);

setBorderAndAdjustImage();
