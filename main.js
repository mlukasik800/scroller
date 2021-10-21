document.addEventListener('DOMContentLoaded', function () {
    console.log('Hello World');
    const scroller = new Scroller('#root')


    document.addEventListener('mousewheel', scroller.listenScroll)

    



})