window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileNav = document.getElementById('mobile-nav');
let menuOpen = false;

mobileMenuButton.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenuButton.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = menuOpen ? 'hidden' : '';
});

document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.classList.contains('mobile-resume-link')) {
            e.preventDefault();
            menuOpen = false;
            mobileMenuButton.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
            openResumeModal();
        } else {
            menuOpen = false;
            mobileMenuButton.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (!this.classList.contains('mobile-resume-link')) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#resume') {
                openResumeModal();
                return;
            }
            
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
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
    document.body.style.overflow = '';
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
    if (e.key === 'Escape') {
        if (resumeModal.classList.contains('show')) {
            closeResumeModal();
        }
        if (menuOpen) {
            menuOpen = false;
            mobileMenuButton.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

const viewAllProjectsBtn = document.querySelector('.view-all-projects');
const allProjectsSection = document.getElementById('projects');

if (viewAllProjectsBtn) {
    viewAllProjectsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (allProjectsSection) {
            allProjectsSection.style.display = 'block';
            
            const projectsGrid = allProjectsSection.querySelector('.projects-grid');
            if (projectsGrid && projectsGrid.children.length === 0) {
                projectsGrid.innerHTML = `
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
            
            const navHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = allProjectsSection.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
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
        const placeholder = document.querySelector('.resume-placeholder-text');
        if (placeholder) {
            placeholder.style.display = 'none';
        }
    });
    
    resumeImage.addEventListener('error', function() {
        console.log('Resume image not found, showing placeholder');
    });
}

function copyEmail(element) {
    const email = element.getAttribute('data-email');
    const tooltip = element.querySelector('.copy-tooltip');
    
    if (!email || !tooltip) return;
    
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
        document.execCommand('copy');
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
        
        if (tooltip) {
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
    }
    
    document.querySelectorAll('img').forEach(img => {
        if (!img.complete) {
            img.classList.add('loading');
            img.addEventListener('load', () => {
                img.classList.remove('loading');
            });
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'r' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeElement = document.activeElement;
        if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
            openResumeModal();
        }
    }
});

let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    if (touchEndY < touchStartY - 50 && menuOpen) {
        menuOpen = false;
        mobileMenuButton.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
    }
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!prefersReducedMotion.matches) {
    let ticking = false;
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.trading-chart');
        if (parallax) {
            const speed = 0.3;
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
}