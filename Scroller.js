class Scroller {
    constructor(rootSelector) {
        const rootElement = document.querySelector(rootSelector);
        this.sections = document.querySelectorAll('section');
        const sectionsArr = [...this.sections];
        const currentSectionIndex = sectionsArr.findIndex(this.isScrolledIntoView);
        this.isThrottled = false;

        this.currentSectionIndex = Math.max(currentSectionIndex, 0);
    }

    isScrolledIntoView(element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = Math.floor(rect.bottom);

        const isVissible = (elementTop >= 0) && (elementBottom <= window.innerHeight);

        return isVissible;
    }

    listenScroll = (event) => {
        if (this.isThrottled) return;
        this.isThrottled = true;

        setTimeout(() => {
            this.isThrottled = false;
        }, 600)

        // event.preventDefault();
        const direction = event.wheelDelta < 0 ? 1 : -1;
        // console.log(event.wheelDelta)
        this.scroll(direction)
    }

    scroll = (direction) => {
        console.log(direction)
        if (direction === 1) {
            const isLastSection = this.currentSectionIndex === this.sections.length - 1;
            if (isLastSection) return;
        } else if (direction === -1) {
            const firstSection = this.currentSectionIndex === 0;
            if (firstSection) return;
        }
        this.currentSectionIndex = this.currentSectionIndex + direction;

        this.scrollToCurrentSection()
    }
    scrollToCurrentSection = () => {
        this.sections[this.currentSectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: "start",
        })
    }
}