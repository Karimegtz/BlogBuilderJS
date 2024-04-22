document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blogForm');

    blogForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const title = document.getElementById('title').value.trim();
        const content = document.getElementById('content').value.trim();

        if (!username || username.length < 3) {
            alert('El nombre de usuario debe tener al menos 3 caracteres.');
            return;
        }

        if (!title || title.length > 50) {
            alert('El título no debe exceder los 50 caracteres.');
            return;
        }

        if (!content || content.split(' ').length < 10) {
            alert('El contenido debe tener al menos 10 palabras.');
            return;
        }

        const blogEntry = {
            username: username,
            title: title,
            content: content
        };

        const blogEntries = JSON.parse(localStorage.getItem('blogEntries')) || [];
        blogEntries.push(blogEntry);
        localStorage.setItem('blogEntries', JSON.stringify(blogEntries));

        window.location.href = 'blog.html';
    });
});
