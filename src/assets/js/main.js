const infoItems = document.querySelectorAll('.info-item');
const textBlocks = document.querySelectorAll('.area-texto .texto-bloque');
const infoBlock = document.querySelector('.info-block');

infoItems.forEach(item => {
  const iconContainer = item.querySelector('.icon-container');
  const textKey = item.dataset.text;

  // Hover: cambiar borde y opacidad de otros
  item.addEventListener('mouseenter', () => {
    infoItems.forEach(otherItem => {
      const otherIcon = otherItem.querySelector('.icon-container');
      if (!otherItem.classList.contains('selected')) {
        otherIcon.style.border = '';
        otherIcon.style.borderRadius = '';
      }
      if (otherItem !== item) {
        otherIcon.style.opacity = 0.3;
      } else {
        otherIcon.style.opacity = 1;
      }
    });

    iconContainer.style.border = '8px solid #40b411';
    iconContainer.style.borderRadius = '50%';
  });

  // Click: seleccionar ítem y mostrar texto
  item.addEventListener('click', () => {
    infoItems.forEach(el => {
      el.classList.remove('selected');
      el.querySelector('.icon-container').style.border = '';
      el.querySelector('.icon-container').style.borderRadius = '';
    });

    item.classList.add('selected');
    iconContainer.style.border = '8px solid #40b411';
    iconContainer.style.borderRadius = '50%';

    // Mostrar solo el bloque correspondiente
    textBlocks.forEach(b => b.style.display = 'none');
    const targetBlock = document.querySelector(`.area-texto .${textKey}.texto-bloque`);
    if (targetBlock) {
      targetBlock.style.display = 'block';
    }
  });
});

infoBlock.addEventListener('mouseleave', () => {
  infoItems.forEach(item => {
    if (!item.classList.contains('selected')) {
      const iconContainer = item.querySelector('.icon-container');
      iconContainer.style.border = '';
      iconContainer.style.borderRadius = '';
    }
    item.querySelector('.icon-container').style.opacity = 1;
  });
});