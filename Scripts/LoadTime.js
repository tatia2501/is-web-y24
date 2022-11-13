(() => {
    const startTime = new Date().getTime();

    document.addEventListener('DOMContentLoaded', () => {
        const stampParagraph = document.querySelector('#timeinfo');

        window.addEventListener('load', () => {
            stampParagraph.innerHTML += `Время загрузки страницы - ${(new Date().getTime() - startTime) / 1000} секунд`;
        });
    })
})();