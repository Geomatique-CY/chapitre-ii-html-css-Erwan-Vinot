// Récupérer tous les éléments d'article
const articles = document.querySelectorAll('.article-box');

// Récupérer le modal
const modal = document.getElementById('modal');

// Récupérer le titre, l'image et la description du modal
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');

// Ajout d'un gestionnaire d'événements à chaque article
articles.forEach(article => {
    const articleContent = article.querySelector('.article-content');
    const description = article.getAttribute('data-description');
    const title = article.querySelector('.article-title h3');
    
    articleContent.addEventListener('click', () => {
        modalTitle.innerHTML = title.innerHTML;
        modalImage.src = article.querySelector('.article-thumbnail img').src;
        modalDescription.innerHTML = description;
        modal.style.display = 'block';
    });
});

// Ajout d'un gestionnaire d'événements pour fermer le modal
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});
