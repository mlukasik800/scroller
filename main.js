document.addEventListener('DOMContentLoaded', function () {
    console.log('Hello World');
    const scroller = new Scroller('#root')


    document.addEventListener('mousewheel', scroller.listenScroll)
    document.addEventListener('swipeUp', () => scroller.scroll(1))
    document.addEventListener('swipeUp', () => scroller.scroll(-1))
})