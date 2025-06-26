
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        

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


const resumeModal = document.getElementById('resume-modal');
const closeModal = document.getElementById('close-modal');

function openResumeModal() {
    resumeModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
    resumeModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

if (closeModal) {
    closeModal.addEventListener('click', closeResumeModal);
}

window.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
        closeResumeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resumeModal.classList.contains('show')) {
        closeResumeModal();
    }
});


const viewAllProjectsBtn = document.querySelector('.view-all-projects');
const allProjectsSection = document.getElementById('projects');
const featuredProjectsSection = document.getElementById('featured-projects');

if (viewAllProjectsBtn) {
    viewAllProjectsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        

        if (allProjectsSection) {
            allProjectsSection.style.display = 'block';
            

            const projectsGrid = allProjectsSection.querySelector('.projects-grid');
            if (projectsGrid && projectsGrid.children.length === 0) {
                projectsGrid.innerHTML = `
                    <!-- Featured Projects -->
                    <a class="project-link" href="https://github.com/pranavb1924/BullionX-Stock-Portfolio-Simulator-with-Stock-Reporting">
                        <div class="project-card" data-category="fintech">
                            <div class="project-header">
                                <div class="project-icon">
                                    <img src="./assets/stock.svg" alt="Stock Icon" class="icon-placeholder">
                                </div>
                                <span class="project-status development">IN DEVELOPMENT</span>
                            </div>
                            <div class="project-content">
                                <h3 class="project-title">BullionX</h3>
                                <p class="project-description">Live stock portfolio simulator with real-time data integration</p>
                                <div class="tech-stack">
                                    <span class="tech-badge">Angular</span>
                                    <span class="tech-badge">Spring Boot</span>
                                    <span class="tech-badge">PostgreSQL</span>
                                </div>
                            </div>
                        </div>
                    </a>
                    
                    <a class="project-link" href="https://github.com/pranavb1924/RenewLife---Organ-Transplant-Management-System">
                        <div class="project-card" data-category="healthcare">
                            <div class="project-header">
                                <div class="project-icon">
                                    <img src="./assets/health-care.svg" alt="Healthcare Icon" class="icon-placeholder">
                                </div>
                                <span class="project-status live">COMPLETED</span>
                            </div>
                            <div class="project-content">
                                <h3 class="project-title">RenewLife</h3>
                                <p class="project-description">Organ transplant logistics management system</p>
                                <div class="tech-stack">
                                    <span class="tech-badge">Java</span>
                                    <span class="tech-badge">MySQL</span>
                                    <span class="tech-badge">Swing</span>
                                </div>
                            </div>
                        </div>
                    </a>
                    
                    <a class="project-link" href="https://paday-income-calculator.netlify.app/">
                        <div class="project-card" data-category="tools">
                            <div class="project-header">
                                <div class="project-icon">
                                    <img src="./assets/money.svg" alt="Calculator Icon" class="icon-placeholder">
                                </div>
                                <span class="project-status live">LIVE</span>
                            </div>
                            <div class="project-content">
                                <h3 class="project-title">PayDay</h3>
                                <p class="project-description">Income tax and take-home pay calculator</p>
                                <div class="tech-stack">
                                    <span class="tech-badge">JavaScript</span>
                                    <span class="tech-badge">HTML5</span>
                                    <span class="tech-badge">CSS3</span>
                                </div>
                            </div>
                        </div>
                    </a>
                    
                    <!-- Additional Projects -->
                    <div class="project-card" data-category="web">
                        <div class="project-header">
                            <div class="project-icon">
                                <span style="color: white;">🌐</span>
                            </div>
                            <span class="project-status development">UPCOMING</span>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">E-Commerce Platform</h3>
                            <p class="project-description">Full-stack e-commerce solution with microservices architecture</p>
                            <div class="tech-stack">
                                <span class="tech-badge">Next.js</span>
                                <span class="tech-badge">Node.js</span>
                                <span class="tech-badge">MongoDB</span>
                                <span class="tech-badge">AWS</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="project-card" data-category="ai">
                        <div class="project-header">
                            <div class="project-icon">
                                <span style="color: white;">🤖</span>
                            </div>
                            <span class="project-status development">PLANNING</span>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">AI Chat Assistant</h3>
                            <p class="project-description">Intelligent chatbot with natural language processing capabilities</p>
                            <div class="tech-stack">
                                <span class="tech-badge">Python</span>
                                <span class="tech-badge">TensorFlow</span>
                                <span class="tech-badge">React</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="project-card" data-category="mobile">
                        <div class="project-header">
                            <div class="project-icon">
                                <span style="color: white;">📱</span>
                            </div>
                            <span class="project-status development">CONCEPT</span>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">Fitness Tracker</h3>
                            <p class="project-description">Cross-platform mobile app for fitness and health tracking</p>
                            <div class="tech-stack">
                                <span class="tech-badge">React Native</span>
                                <span class="tech-badge">Firebase</span>
                                <span class="tech-badge">Redux</span>
                            </div>
                        </div>
                    </div>
                `;
            }
            

            allProjectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            if (entry.target.classList.contains('experience')) {
                const timelineItems = entry.target.querySelectorAll('.timeline-item');
                timelineItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 200);
                });
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

const createMobileNav = () => {
    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';
    mobileNav.innerHTML = `
        <ul class="mobile-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#featured-projects">Projects</a></li>
            <li><a href="#resume" class="mobile-resume-link">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    `;
    
    document.body.appendChild(mobileNav);
    
    return mobileNav;
};

const mobileNav = createMobileNav();

mobileMenu.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

document.querySelector('.mobile-resume-link').addEventListener('click', (e) => {
    e.preventDefault();
    menuOpen = false;
    mobileMenu.classList.remove('active');
    mobileNav.classList.remove('active');
    openResumeModal();
});

document.querySelectorAll('.mobile-nav-links a:not(.mobile-resume-link)').forEach(link => {
    link.addEventListener('click', () => {
        menuOpen = false;
        mobileMenu.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (menuOpen && !mobileMenu.contains(e.target) && !mobileNav.contains(e.target)) {
        menuOpen = false;
        mobileMenu.classList.remove('active');
        mobileNav.classList.remove('active');
    }
});

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

document.querySelectorAll('.featured-project-card, .project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease';
});


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

function copyEmail(element) {
    const email = element.getAttribute('data-email');
    const tooltip = element.querySelector('.copy-tooltip');
    
    navigator.clipboard.writeText(email).then(() => {
        tooltip.textContent = 'Copied!';
        tooltip.classList.add('success', 'show');
        setTimeout(() => {
            tooltip.classList.remove('show');
            setTimeout(() => {
                tooltip.textContent = 'Click to copy';
                tooltip.classList.remove('success');
            }, 200);
        }, 2000);
    }).catch(err => {

        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.body.removeChild(textArea);
        
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
    link.href = './assets/Pranav|B|Resume.pdf';
    link.setAttribute('download', 'Pranav_Bhoopal_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


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


document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'r' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeElement = document.activeElement;
        if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
            openResumeModal();
        }
    }
});


document.addEventListener('DOMContentLoaded', () => {

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    });
    
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete) {
            img.classList.add('loading');
            img.addEventListener('load', () => {
                img.classList.remove('loading');
            });
        }
    });
    
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
    animateOnScroll(); 
    

    const skillsTicker = document.querySelector('.skills-ticker');
    if (skillsTicker) {
        skillsTicker.addEventListener('mouseenter', () => {
            skillsTicker.style.animationPlayState = 'paused';
        });
        
        skillsTicker.addEventListener('mouseleave', () => {
            skillsTicker.style.animationPlayState = 'running';
        });
    }
});

let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
    });
});