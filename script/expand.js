document.querySelectorAll('.readMore').forEach(item => {
    var artPrevHeading = item.closest('.article').children[1];
    artPrevHeading.style.setProperty('--originalHeight', `${artPrevHeading.scrollHeight}px`);
    item.addEventListener('click', event => {
        item.closest('.article').children[1].classList.toggle('expand');
    });
});

