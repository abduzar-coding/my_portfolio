const artPrevHeading = document.querySelector('.artPrevHeading');
const article = document.querySelector('.article');
article.style.setProperty('--originalHeight', `${article.scrollHeight}px`);
artPrevHeading.style.setProperty('--originalHeight', `${artPrevHeading.scrollHeight}px`);

document.querySelector('.exp1').addEventListener('click', function() {
    article.classlist.toggle('expand');
    artPrevHeading.classlist.toggle('expand');
});

