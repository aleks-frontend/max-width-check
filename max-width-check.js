function maxWidthCheck() {
    const containers = document.querySelectorAll('[data-mwc-hook="container"]');

    for (const container of containers) {
        const compStyle = window.getComputedStyle(container);
        const maxWidth = parseFloat(compStyle.maxWidth);
        const width = parseFloat(compStyle.width);
        const scrollWidth = container.scrollWidth - 1;
        const refWidth = !isNaN(maxWidth) ? maxWidth : width;

        scrollWidth > width ? container.classList.add('overflow') : container.classList.remove('overflow');
    }
}        