document.addEventListener('DOMContentLoaded', function () {
    console.log('Hello World');
    const rootElement = document.querySelector(".root");
    const sections = document.querySelectorAll('section');

    document.addEventListener('mousewheel', function (e) {
        e.preventDefault();
    })
})