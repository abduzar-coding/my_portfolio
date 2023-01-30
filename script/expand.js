
document.querySelectorAll('.readMoreOverlay').forEach(item => {
    var artPrevHeading = item.closest('.article').children[1];
    artPrevHeading.style.setProperty('--originalHeight', `${artPrevHeading.scrollHeight}px`);
    var artTextOverlay = item.closest('.article').querySelector(".artTextOverlay");
    artTextOverlay.style.setProperty('--originalHeight', `${artPrevHeading.scrollHeight}px`);



    item.addEventListener('click', event => {
        artPrevHeading.classList.toggle('expand');
        artTextOverlay.classList.toggle('expand');

    });
});

