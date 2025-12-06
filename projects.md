---
layout: default
title: Projects
---

<!-- Navigation Bar -->
<nav class="navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="{{ site.baseurl }}/">Data Science Portfolio</a>
        </div>
        <div class="nav-menu" id="nav-menu">
            <a href="{{ site.baseurl }}/" class="nav-links">About Me</a>
            <a href="{{ site.baseurl }}/projects" class="nav-links active">Projects</a>
            <a href="{{ site.baseurl }}/blogs" class="nav-links">Blogs</a>
            <a href="{{ site.baseurl }}/notes" class="nav-links">Notes</a>
            <a href="{{ site.baseurl }}/#contact" class="nav-links">Contact Me</a>
        </div>
        <div class="nav-toggle" id="nav-toggle">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </div>
</nav>

<!-- Projects Page Content -->
<div class="page-container">
    <h1 class="page-title">My Projects</h1>
    
    <div class="filter-container">
        <input type="text" id="project-search" placeholder="Search projects...">
        <select id="project-filter">
            <option value="">All Tags</option>
            <!-- Tags will be populated dynamically -->
        </select>
    </div>
    
    <div class="projects-grid" id="projects-grid">
        {% for project in site.projects %}
        <div class="project-card" data-tags="{{ project.tags | join: ' ' }}">
            <div class="project-content">
                <div class="project-image">
                    <img src="{{ project.image | default: '/assets/img/default-project.jpg' }}" alt="{{ project.title }}">
                </div>
                <div class="project-details">
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.description }}</p>
                    <p class="project-date">{{ project.date | date: "%B %d, %Y" }}</p>
                    <div class="project-tags">
                        {% for tag in project.tags %}
                        <span class="tag">{{ tag }}</span>
                        {% endfor %}
                    </div>
                    <a href="{{ project.url }}" class="project-link">View Project</a>
                </div>
            </div>
        </div>
        {% endfor %}
    </div>
</div>

<!-- Footer -->
<footer class="footer">
    <p>&copy; {{ site.time | date: '%Y' }} Data Science Portfolio. All rights reserved.</p>
</footer>