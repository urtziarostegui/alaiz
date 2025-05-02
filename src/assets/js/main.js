const infoItems = document.querySelectorAll('.info-item');
const textParagraphs = document.querySelectorAll('.area-texto p');
const infoBlock = document.querySelector('.info-block');

infoItems.forEach(item => {
  const iconContainer = item.querySelector('.icon-container');
  const textKey = item.dataset.text;

  // Hover: cambiar borde y opacidad de otros
  item.addEventListener('mouseenter', () => {
    // Limpiar bordes en todos los que NO están seleccionados
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

    // Aplicar borde al ícono actual
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

    // Mostrar solo el párrafo correspondiente
    textParagraphs.forEach(p => p.style.display = 'none');
    const targetText = document.querySelector(`.area-texto .${textKey}`);
    if (targetText) {
      targetText.style.display = 'block';
    }
  });
});

// Mouse sale del área completa (no solo de un ítem)
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
