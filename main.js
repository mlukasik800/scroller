document.addEventListener('DOMContentLoaded', function () {
    const scroller = new Scroller('#root')


    // document.addEventListener('mousewheel', scroller.listenScroll)
    document.addEventListener('wheel', (e) => scroller.listenScroll(e))
    document.addEventListener('swipeUp', () => scroller.scroll(1))
    document.addEventListener('swipeUp', () => scroller.scroll(-1))
    document.addEventListener('keydown', (e) => {
        switch (e.keyCode) {
            case 40:
                return scroller.scroll(1)
            case 38:
                return scroller.scroll(-1)
            default:
                return;
        }
    })


})