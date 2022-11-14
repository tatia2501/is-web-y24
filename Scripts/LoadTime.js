(() => {
    let time = performance.timing;

    window.addEventListener('load', () => {
        const infoParagraph = document.querySelector('#timeinfo');
        infoParagraph.innerHTML += `Время загрузки страницы - ${(time.loadEventStart - time.navigationStart) / 1000} секунд`;
    });
})();