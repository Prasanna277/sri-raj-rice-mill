// Rice Mill Facility Photos Data
const riceMillPhotos = [
    {
        image: 'images/rice-mill/mill-1.jpg',
        caption: 'Main Processing Facility'
    },
    {
        image: 'images/rice-mill/mill-2.jpg',
        caption: 'Modern Milling Equipment'
    },
    {
        image: 'images/rice-mill/mill-3.jpg',
        caption: 'Quality Storage Units'
    },
    {
        image: 'images/rice-mill/mill-4.jpg',
        caption: 'Packaging Department'
    },
    {
        image: 'images/rice-mill/mill-5.jpg',
        caption: 'Quality Control Lab'
    },
    {
        image: 'images/rice-mill/mill-6.jpg',
        caption: 'Loading Bay'
    }
];

// Rice Varieties Data
const riceVarieties = [
    {
        name: 'Ponni',
        image: 'images/rice-varieties/ponni.svg',
        description: 'Popular South Indian rice variety. Medium grain, soft and fluffy when cooked, ideal for daily meals and curries.'
    },
    {
        name: 'BPT',
        image: 'images/rice-varieties/bpt.svg',
        description: 'BPT (Bapatla) rice is a fine, short-grain variety. Known for its quality and taste, commonly used in South Indian cooking.'
    },
    {
        name: 'IR20 Deluxe Ponni',
        image: 'images/rice-varieties/ir20-deluxe-ponni.svg',
        description: 'Premium IR20 Deluxe Ponni rice. Superior quality medium grain, excellent for biryani, pulao and everyday cooking.'
    },
    {
        name: 'Idly Rice',
        image: 'images/rice-varieties/idly-rice.svg',
        description: 'Specially selected rice for making idlis and dosas. Short grain, gives soft and fluffy idlis with the right fermentation.'
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderFacilityGallery();
    renderRiceVarieties();
    initHeroSlider();
    initSmoothScroll();
});

// Render Facility Gallery
function renderFacilityGallery() {
    const galleryContainer = document.getElementById('facilityGallery');
    if (!galleryContainer) return;

    galleryContainer.innerHTML = riceMillPhotos.map(photo => `
        <div class="gallery-item">
            <img src="${photo.image}" alt="${photo.caption}" loading="lazy">
            <div class="gallery-caption">${photo.caption}</div>
        </div>
    `).join('');
}

// Render Rice Varieties
function renderRiceVarieties() {
    const riceContainer = document.getElementById('riceVarieties');
    if (!riceContainer) return;

    riceContainer.innerHTML = riceVarieties.map(rice => `
        <div class="rice-card">
            <img src="${rice.image}" alt="${rice.name}" class="rice-card-image" loading="lazy">
            <div class="rice-card-content">
                <h3 class="rice-card-title">${rice.name}</h3>
                <p class="rice-card-description">${rice.description}</p>
            </div>
        </div>
    `).join('');
}

// Hero Slider Functionality
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.hero-btn.prev');
    const nextBtn = document.querySelector('.hero-btn.next');
    
    if (slides.length === 0) return;

    let currentSlide = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        // Remove active class from all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // Add active class to current slide and indicator
        slides[index].classList.add('active');
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Event listeners for buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
}

// Smooth Scroll for Navigation Links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}
