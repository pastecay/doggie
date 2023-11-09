const cats = [
  'angry cat',
  'kitty',
  'fat cat'
];
const ul = document.querySelector('ul');

const slider = new Swiper('.swiper-container', {
	loop: true,
  pagination: {
    el: '.pag',
    clickable: true,
    type: 'custom',
    renderCustom: (swiper, current, total) => {
    ul.style.setProperty('--offset', `${(current - 1) * 100}px`)
      return `
        ${cats.map((title, i) => `<li class="test ${current - 1 === i ? 'active': ''}" data-index="${i}">${title}</li>`).join``}
      `
    }
  }
})

document.querySelector('.pag').addEventListener('click', (e) => {
  if (e.target.closest('.test')) {
    const index = e.target.dataset.index;
    slider.slideTo(index);
    ul.style.setProperty('--offset', `${index * 100}px`)
  }
})
