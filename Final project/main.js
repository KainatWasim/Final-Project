// Collection filter functionality
document.addEventListener('DOMContentLoaded', function() {
    // Only run on collection page
    if (document.querySelector('.collection-page')) {
        const filterButtons = document.querySelectorAll('.category-btn');
        const watchItems = document.querySelectorAll('.watch-item');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                watchItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category').includes(category)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});