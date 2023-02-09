export function listAcive() {
  const lists = document.querySelectorAll('.navbar__item');

  for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener('click', () => {
      lists[i].classList.add('active-item');
    });
  }
}

export function openFeedback() {
  const feedback = document.querySelector('.apply');
  const buttonOpen = document.querySelector('.header-button__item1');
  const buttonOpen3 = document.querySelector('.header-button__item3');
  const buttonClose = document.querySelectorAll('.close-apply');
  const applyBackground = document.querySelector('.apply-background');

  buttonClose[1].addEventListener('click', () => {
    buttonClose[1].style.display = 'none';
    applyBackground.classList.remove('open-background');
    feedback.classList.remove('open');
  });

  buttonOpen.addEventListener('click', () => {
    buttonClose[1].style = 'display:block';
    applyBackground.classList.add('open-background');
    feedback.classList.add('open');
  });
  buttonOpen3.addEventListener('click', () => {
    buttonClose[1].style = 'display:block';
    applyBackground.classList.add('open-background');
    feedback.classList.add('open');
  });
}

export function openFeedBack2() {
  const feedback = document.querySelector('.apply2');
  const buttonOpen = document.querySelector('.header-button__item2');
  const buttonOpen4 = document.querySelector('.header-button__item4');
  const buttonClose = document.querySelector('.close-apply');
  const applyBackground = document.querySelector('.apply2-background');

  buttonClose.addEventListener('click', () => {
    buttonClose.style = 'display:none';
    applyBackground.classList.remove('open-background2');
    feedback.classList.remove('open');
  });

  buttonOpen.addEventListener('click', () => {
    buttonClose.style = 'display:block';
    applyBackground.classList.add('open-background2');
    feedback.classList.add('open');
  });
  buttonOpen4.addEventListener('click', () => {
    buttonClose.style = 'display:block';
    applyBackground.classList.add('open-background2');
    feedback.classList.add('open');
  });
}
export function showMainText() {
  const buttonMainText = document.querySelector('.main__text-button');
  let span = document.createElement('span');
  const textSelf = document.querySelector('.main__text');
  span.classList.add('main__part-text');
  span.classList.add('part-text2');
  buttonMainText.addEventListener('click', () => {
    buttonMainText.style.display = 'none';
    span.textContent = `Мы успешно работаем с 1992 года и заслужили репутацию надежного
      партнера, что подтверждает большое количество постоянных
      клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям
      и, в свою очередь, советуют нас родным и близким.`;
  });
  textSelf.append(span);
}

export function brandCard() {
  const cardsBrand = document.querySelectorAll('.brands__item');
  const cardsButton = document.querySelector('.brands__button');

  cardsButton.addEventListener('click', () => {
    cardsButton.style.display = 'none';
    for (let i = 0; i < cardsBrand.length; i++) {
      cardsBrand[i].style.display = 'flex';
    }
  });
}

export function techCard() {
  const techButton = document.querySelector('.repair-tech__button');
  const techCards = document.querySelectorAll('.repair-tech__item');

  techButton.addEventListener('click', () => {
    for (let i = 0; i < techCards.length; i++) {
      techCards[i].style.display = 'flex';
    }
    techButton.style.display = 'none';
  });
}

export function burger() {
  const burger = document.querySelector('.header2__burger');
  const nurgerNoneBtn = document.querySelector('.navbar-mob__across');
  const navbarMob = document.querySelector('.navbar-mob');
  const applyBackground = document.querySelector('.apply2-background');

  nurgerNoneBtn.addEventListener('click', () => {
    navbarMob.classList.remove('navbar-mob-active');
    applyBackground.classList.remove('open-background2');
  });
  burger.addEventListener('click', () => {
    applyBackground.classList.add('open-background2');
    navbarMob.classList.add('navbar-mob-active');
  });
}
