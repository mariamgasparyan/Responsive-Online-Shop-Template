document.querySelectorAll('.filters__link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('filters__link--active');
    });
});

document.querySelector('.filters__title--clickable').addEventListener('click', function (e) {
    e.preventDefault();
    const filtersContainer = document.querySelector('.filters');
    if (filtersContainer) {
        filtersContainer.classList.toggle('filters--active');
    }
});