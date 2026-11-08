document.getElementById('year').textContent = new Date().getFullYear();
const button = document.getElementById('langToggle');
let language = 'en';
button.addEventListener('click', () => {
  language = language === 'en' ? 'zh' : 'en';
  document.documentElement.lang = language;
  document.querySelectorAll('[data-en][data-zh]').forEach((element) => {
    element.textContent = element.dataset[language];
  });
  button.textContent = language === 'en' ? '中文' : 'EN';
});
