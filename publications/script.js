function createCard(publication) {
    return `
        <div class="col-12 mb-2 content">
            <div class="card card-glass">
                <div class="card-body card-publi">
                    <h5 class="card-title inter mb-4 card-title">${publication.title}</h5>
                    <p class="card-text"><strong>Authors:</strong> ${publication.authors.join('; ')}</p>
                    ${publication.journal ? `<p class="card-text"><strong>Journal:</strong> ${publication.journal}</p>` : ''}
                    ${publication.conference ? `<p class="card-text"><strong>Conference:</strong> ${publication.conference}</p>` : ''}
                    ${publication.series ? `<p class="card-text"><strong>Series:</strong> ${publication.series}</p>` : ''}
                    ${publication.publisher ? `<p class="card-text"><strong>Publisher:</strong> ${publication.publisher}</p>` : ''}
                    ${publication.volume ? `<p class="card-text"><strong>Volume:</strong> ${publication.volume}</p>` : ''}
                    ${publication.pages ? `<p class="card-text"><strong>Pages:</strong> ${publication.pages}</p>` : ''}
                    <p class="card-text"><strong>Year:</strong> ${publication.year}</p>
                    ${publication.doi ? `<a href="${publication.doi}" class="btn button-card" target="_blank">DOI</a>` : ''}
                    ${publication.link ? `<a href="${publication.link}" class="btn button-card" target="_blank">DOI</a>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Função para carregar publicações a partir de um arquivo JSON
async function loadPublications(year) {
    try {
        const response = await fetch(`../docs/${year}.json`);
        const publications = await response.json();
        document.getElementById('publications').innerHTML = publications.map(createCard).join('');
    } catch (error) {
        console.error('Error loading publications:', error);
    }
}

// Carregar publicações ao carregar a página
window.onload = () =>{
    const urlParams = new URLSearchParams(window.location.search);
    const year = urlParams.get(`year`);
    loadPublications(year);    
}