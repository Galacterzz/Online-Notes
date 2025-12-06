// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-links');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Project filtering functionality
    setupFilter('project', 'projects-grid');
    setupFilter('blog', 'blogs-grid');
    setupFilter('note', 'notes-grid');
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements to animate on scroll
    document.querySelectorAll('.job, .project-card, .blog-card, .note-card').forEach(el => {
        observer.observe(el);
    });
});

// Function to set up filtering for projects, blogs, and notes
function setupFilter(type, gridId) {
    const searchInput = document.getElementById(`${type}-search`);
    const filterSelect = document.getElementById(`${type}-filter`);
    const grid = document.getElementById(gridId);
    
    if (!searchInput || !filterSelect || !grid) return;
    
    // Get all unique tags
    const allTags = new Set();
    const cards = grid.querySelectorAll(`.${type}-card`);
    
    cards.forEach(card => {
        const tags = card.getAttribute('data-tags');
        if (tags) {
            tags.split(' ').forEach(tag => allTags.add(tag));
        }
    });
    
    // Populate filter dropdown
    allTags.forEach(tag => {
        const option = document.createElement('option');
        option.value = tag;
        option.textContent = tag;
        filterSelect.appendChild(option);
    });
    
    // Event listeners for filtering
    searchInput.addEventListener('input', filterItems);
    filterSelect.addEventListener('change', filterItems);
    
    function filterItems() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedTag = filterSelect.value;
        
        cards.forEach(card => {
            const title = card.querySelector(`.${type}-details h3`).textContent.toLowerCase();
            const description = card.querySelector(`.${type}-details p`).textContent.toLowerCase();
            const tags = card.getAttribute('data-tags').toLowerCase();
            
            const matchesSearch = title.includes(searchTerm) || 
                                description.includes(searchTerm) ||
                                tags.includes(searchTerm);
                                
            const matchesTag = selectedTag === '' || tags.includes(selectedTag);
            
            if (matchesSearch && matchesTag) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// Function to handle skill bar animations when they come into view
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-level');
    
    skillBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0';
        
        // Animate when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    bar.style.transition = 'width 1.5s ease-in-out';
                    bar.style.width = targetWidth;
                    observer.unobserve(bar);
                }
            });
        });
        
        observer.observe(bar);
    });
}

// Initialize skill bar animations
document.addEventListener('DOMContentLoaded', animateSkillBars);