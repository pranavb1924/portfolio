// Enhanced Portfolio JavaScript - Redesigned

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        // Handle resume modal separately
        if (targetId === '#resume') {
            openResumeModal();
            return;
        }
        
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Resume Modal Functions
const resumeModal = document.getElementById('resume-modal');
const closeModal = document.getElementById('close-modal');
const viewResumeBtn = document.getElementById('view-resume-btn');

function openResumeModal() {
    resumeModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
    resumeModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Resume modal event listeners
if (viewResumeBtn) {
    viewResumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openResumeModal();
    });
}

if (closeModal) {
    closeModal.addEventListener('click', closeResumeModal);
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
        closeResumeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resumeModal.classList.contains('show')) {
        closeResumeModal();
    }
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter projects
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Dynamic Skills Showcase
const skillsCategories = document.querySelectorAll('.skills-category');
let currentSkillIndex = 0;

function rotateSkills() {
    // Hide current category
    skillsCategories[currentSkillIndex].classList.remove('active');
    
    // Move to next category
    currentSkillIndex = (currentSkillIndex + 1) % skillsCategories.length;
    
    // Show next category
    skillsCategories[currentSkillIndex].classList.add('active');
}

// Start skills rotation
setInterval(rotateSkills, 4000);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate timeline items sequentially
            if (entry.target.classList.contains('experience')) {
                const timelineItems = entry.target.querySelectorAll('.timeline-item');
                timelineItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 200);
                });
            }
            
            // Animate stat numbers
            if (entry.target.classList.contains('hero')) {
                animateStatNumbers();
            }
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Animate stat numbers
function animateStatNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = stat.textContent;
        const isPercentage = target.includes('%');
        const isDollar = target.includes('$');
        const hasPlus = target.includes('+');
        
        let number = parseInt(target.replace(/[^0-9]/g, ''));
        let current = 0;
        const increment = number / 50;
        
        const updateNumber = () => {
            current += increment;
            if (current < number) {
                let display = Math.floor(current);
                if (isDollar) display = '$' + display + 'M';
                else if (isPercentage) display = display + '%';
                if (hasPlus) display += '+';
                stat.textContent = display;
                requestAnimationFrame(updateNumber);
            } else {
                stat.textContent = target;
            }
        };
        
        updateNumber();
    });
}

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

// Create mobile navigation drawer
const createMobileNav = () => {
    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';
    mobileNav.innerHTML = `
        <ul class="mobile-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume" class="mobile-resume-link">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    `;
    
    document.body.appendChild(mobileNav);
    
    return mobileNav;
};

// Initialize mobile nav
const mobileNav = createMobileNav();

// Mobile menu click handler
mobileMenu.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Handle mobile resume link
document.querySelector('.mobile-resume-link').addEventListener('click', (e) => {
    e.preventDefault();
    menuOpen = false;
    mobileMenu.classList.remove('active');
    mobileNav.classList.remove('active');
    openResumeModal();
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-nav-links a:not(.mobile-resume-link)').forEach(link => {
    link.addEventListener('click', () => {
        menuOpen = false;
        mobileMenu.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (menuOpen && !mobileMenu.contains(e.target) && !mobileNav.contains(e.target)) {
        menuOpen = false;
        mobileMenu.classList.remove('active');
        mobileNav.classList.remove('active');
    }
});

// Parallax effect for hero section
let ticking = false;
function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.trading-chart');
    if (parallax) {
        const speed = 0.5;
        parallax.style.transform = `translate(-50%, ${-50 + scrolled * speed}px)`;
    }
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// Add typing effect to tagline
const tagline = document.querySelector('.hero .tagline');
if (tagline) {
    const text = tagline.textContent;
    tagline.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
        if (i < text.length) {
            tagline.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    };
    
    // Start typing after other animations complete
    setTimeout(typeWriter, 1200);
}

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Timeline items animation
document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease';
});

// Loading animation for images
const profilePic = document.querySelector('.profile-pic');
if (profilePic) {
    profilePic.addEventListener('load', function() {
        this.style.opacity = '0';
        setTimeout(() => {
            this.style.transition = 'opacity 0.5s ease';
            this.style.opacity = '1';
        }, 100);
    });
}

// Resume image handling
const resumeImage = document.getElementById('resume-image');
if (resumeImage) {
    resumeImage.addEventListener('load', function() {
        this.style.display = 'block';
        document.querySelector('.resume-placeholder-text').style.display = 'none';
    });
    
    resumeImage.addEventListener('error', function() {
        console.log('Resume image not found, showing placeholder');
    });
}

// Market ticker animation - More subtle
const tickerItems = document.querySelectorAll('.ticker-price');
tickerItems.forEach(item => {
    setInterval(() => {
        const currentValue = parseFloat(item.textContent);
        const change = (Math.random() - 0.5) * 0.3;
        const newValue = currentValue + change;
        item.textContent = (newValue > 0 ? '+' : '') + newValue.toFixed(2) + '%';
        
        // Update classes instead of inline styles
        if (newValue < 0) {
            item.classList.add('negative');
        } else {
            item.classList.remove('negative');
        }
    }, 3000);
});

// Add smooth reveal animation for skill tags
const skillTags = document.querySelectorAll('.skill-tag');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 50);
        }
    });
}, { threshold: 0.1 });

skillTags.forEach(tag => {
    tag.style.opacity = '0';
    tag.style.transform = 'translateY(20px)';
    tag.style.transition = 'all 0.5s ease';
    skillObserver.observe(tag);
});

// Performance optimization - Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
        // Update any scroll-dependent elements here
    });
});

// Console Easter egg - Updated colors
console.log('%c Welcome to my portfolio! ', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%c Looking for a passionate software engineer? Let\'s connect! ', 'font-size: 16px; color: #8b5cf6;');
console.log('%c Email: pranav.bhoopal@email.com ', 'font-size: 14px; color: #3b82f6;');
console.log('%c Pro tip: Try the keyboard shortcut "R" to open my resume! ', 'font-size: 14px; color: #10b981;');

// Keyboard shortcut for resume
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'r' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeElement = document.activeElement;
        if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
            openResumeModal();
        }
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Force projects to show initially
    projectCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    });
    
    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete) {
            img.classList.add('loading');
            img.addEventListener('load', () => {
                img.classList.remove('loading');
            });
        }
    });
    
    // Initialize AOS-like animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in:not(.visible)');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

function copyEmail(element) {
    const email = element.getAttribute('data-email');
    const tooltip = element.querySelector('.copy-tooltip');
    
    navigator.clipboard.writeText(email).then(() => {
        // Show success message
        tooltip.textContent = 'Copied!';
        tooltip.classList.add('success', 'show');
        
        // Reset after 2 seconds
        setTimeout(() => {
            tooltip.classList.remove('show');
            setTimeout(() => {
                tooltip.textContent = 'Click to copy';
                tooltip.classList.remove('success');
            }, 200);
        }, 2000);
    }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        // Show success message
        tooltip.textContent = 'Copied!';
        tooltip.classList.add('success', 'show');
        
        setTimeout(() => {
            tooltip.classList.remove('show');
            setTimeout(() => {
                tooltip.textContent = 'Click to copy';
                tooltip.classList.remove('success');
            }, 200);
        }, 2000);
    });
}

function downloadResume() {
    const link = document.createElement('a');
    link.href = './assets/resume.pdf';
    link.setAttribute('download', 'Pranav|B|Resume');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

// Show tooltip on hover
document.addEventListener('DOMContentLoaded', function() {
    const emailElement = document.querySelector('.email-card p[onclick]');
    if (emailElement) {
        const tooltip = emailElement.querySelector('.copy-tooltip');
        
        emailElement.addEventListener('mouseenter', function() {
            if (!tooltip.classList.contains('success')) {
                tooltip.classList.add('show');
            }
        });
        
        emailElement.addEventListener('mouseleave', function() {
            if (!tooltip.classList.contains('success')) {
                tooltip.classList.remove('show');
            }
        });
    }
});