(() => {
    const startTime = new Date().getTime();

window.addEventListener('load', () => {
    const infoParagraph = document.querySelector('#timeinfo');
    infoParagraph.innerHTML += `Время загрузки страницы - ${(new Date().getTime() - startTime) / 1000} секунд`;
});
})();