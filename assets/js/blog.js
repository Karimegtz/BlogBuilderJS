document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blogList');

    // Cargar las entradas del blog desde localStorage
    
    const blogEntries = JSON.parse(localStorage.getItem('blogEntries')) || [];

    //actualizar footer
    const lastEntry = blogEntries[blogEntries.length - 1];
    if (lastEntry) {
        const footerAuthor = document.querySelector('footer p');
        footerAuthor.textContent = `Desarrollado por ${lastEntry.username}`;
    }


    if (blogEntries.length > 0) {
        blogEntries.forEach(entry => {
    
        
            const entryDiv = document.createElement('div');
            entryDiv.className = 'blog-entry col-md-4';

            const title = document.createElement('h2');
            title.textContent = entry.title;
            title.className = 'blog-title';
            
            const content = document.createElement('p');
            content.textContent = entry.content;
            content.className = 'blog-content';
            
            const author = document.createElement('small');
            author.textContent = `Escrito por: ${entry.username}`;
            author.className = 'blog-author';
            
            entryDiv.appendChild(title);
            entryDiv.appendChild(content);
            entryDiv.appendChild(author);
            
            blogList.appendChild(entryDiv);
        });
    } else {
        blogList.textContent = 'No hay entradas de blog para mostrar.';
    }
});
  