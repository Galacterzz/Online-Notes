---
layout: default
title: Home
---

<!-- Navigation Bar -->
<nav class="navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="{{ site.baseurl }}/">Data Science Portfolio</a>
        </div>
        <div class="nav-menu" id="nav-menu">
            <a href="{{ site.baseurl }}/" class="nav-links">About Me</a>
            <a href="{{ site.baseurl }}/projects" class="nav-links">Projects</a>
            <a href="{{ site.baseurl }}/blogs" class="nav-links">Blogs</a>
            <a href="{{ site.baseurl }}/notes" class="nav-links">Notes</a>
            <a href="#contact" class="nav-links">Contact Me</a>
        </div>
        <div class="nav-toggle" id="nav-toggle">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </div>
</nav>

<!-- Main Content -->
<div class="main-container">
    <!-- About Section -->
    <section id="about" class="about-section">
        <div class="about-container">
            <div class="profile-section">
                <img src="{{ '/assets/img/profile.jpg' | relative_url }}" alt="Profile Picture" class="profile-img">
            </div>
            <div class="bio-section">
                <h1>Your Name</h1>
                <h2>Data Scientist</h2>
                
                <div class="contact-info">
                    <p><i class="fas fa-envelope"></i> your-email@example.com</p>
                    <p><i class="fas fa-map-marker-alt"></i> Your Location</p>
                    <p><i class="fas fa-globe"></i> <a href="#">your-website.com</a></p>
                </div>
                
                <div class="social-links">
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-github"></i></a>
                    <a href="#"><i class="fab fa-medium"></i></a>
                    <a href="#"><i class="fab fa-kaggle"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-reddit"></i></a>
                </div>
                
                <p class="bio">
                    I am a passionate Data Scientist with expertise in machine learning, statistical analysis, and data visualization. 
                    I love turning complex data into actionable insights and building models that solve real-world problems.
                </p>
            </div>
        </div>
    </section>

    <!-- Experience and Skills Section -->
    <section class="experience-section">
        <div class="experience-container">
            <div class="experience-left">
                <h2 class="section-title">WORK EXPERIENCE</h2>
                
                <div class="job">
                    <h3>Data Scientist</h3>
                    <h4>Company Name</h4>
                    <p class="date">Jan 2022 - Present</p>
                    <ul>
                        <li>Developed machine learning models to improve business processes</li>
                        <li>Created data visualizations and dashboards for stakeholders</li>
                        <li>Collaborated with cross-functional teams to deliver solutions</li>
                    </ul>
                </div>
                
                <div class="job">
                    <h3>Junior Data Analyst</h3>
                    <h4>Previous Company</h4>
                    <p class="date">Jun 2020 - Dec 2021</p>
                    <ul>
                        <li>Performed data cleaning and preprocessing tasks</li>
                        <li>Conducted statistical analysis and A/B testing</li>
                        <li>Prepared reports and presentations for management</li>
                    </ul>
                </div>
            </div>
            
            <div class="experience-right">
                <div class="education">
                    <h3>Education</h3>
                    <h4>Masters in Data Science</h4>
                    <p>University Name, Location</p>
                    <p>Honors: Summa Cum Laude</p>
                </div>
                
                <div class="skills">
                    <h3>Skills</h3>
                    <div class="skill-item">
                        <span>Python</span>
                        <div class="skill-bar">
                            <div class="skill-level" style="width: 90%;"></div>
                        </div>
                    </div>
                    
                    <div class="skill-item">
                        <span>R</span>
                        <div class="skill-bar">
                            <div class="skill-level" style="width: 80%;"></div>
                        </div>
                    </div>
                    
                    <div class="skill-item">
                        <span>Machine Learning</span>
                        <div class="skill-bar">
                            <div class="skill-level" style="width: 85%;"></div>
                        </div>
                    </div>
                    
                    <div class="skill-item">
                        <span>Data Visualization</span>
                        <div class="skill-bar">
                            <div class="skill-level" style="width: 75%;"></div>
                        </div>
                    </div>
                    
                    <div class="skill-item">
                        <span>SQL</span>
                        <div class="skill-bar">
                            <div class="skill-level" style="width: 85%;"></div>
                        </div>
                    </div>
                </div>
                
                <div class="interests">
                    <h3>Interests</h3>
                    <p>Deep Learning, Natural Language Processing, Computer Vision</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section class="projects-section">
        <h2 class="section-title">FEATURED PROJECTS</h2>
        <div class="projects-grid">
            {% for project in site.projects limit:4 %}
            <div class="project-card">
                <div class="project-content">
                    <div class="project-image">
                        <img src="{{ project.image | default: '/assets/img/default-project.jpg' }}" alt="{{ project.title }}">
                    </div>
                    <div class="project-details">
                        <h3>{{ project.title }}</h3>
                        <p>{{ project.description }}</p>
                        <div class="project-tech">
                            {% for tech in project.tech %}
                            <span class="tech-tag">{{ tech }}</span>
                            {% endfor %}
                        </div>
                        <a href="{{ project.url }}" class="project-link">View Project</a>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
        <div class="contact-container">
            <h2 class="section-title">GET IN TOUCH</h2>
            <p>Feel free to reach out if you're looking for a data scientist, have a question, or just want to connect.</p>
            <p><strong>Email:</strong> {{ site.email }}</p>
            <a href="mailto:{{ site.email }}" class="contact-btn">Send Email</a>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <p>&copy; {{ site.time | date: '%Y' }} Data Science Portfolio. All rights reserved.</p>
    </footer>
</div>