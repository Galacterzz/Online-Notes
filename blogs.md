---
layout: default
title: Blogs
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
            <a href="{{ site.baseurl }}/blogs" class="nav-links active">Blogs</a>
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

<!-- Blogs Page Content -->
<div class="page-container">
    <h1 class="page-title">My Blogs</h1>
    
    <div class="filter-container">
        <input type="text" id="blog-search" placeholder="Search blogs...">
        <select id="blog-filter">
            <option value="">All Tags</option>
            <!-- Tags will be populated dynamically -->
        </select>
    </div>
    
    <div class="blogs-grid" id="blogs-grid">
        {% for blog in site.blogs %}
        <div class="blog-card" data-tags="{{ blog.tags | join: ' ' }}">
            <div class="blog-content">
                <div class="blog-image">
                    <img src="{{ blog.image | default: '/assets/img/default-blog.jpg' }}" alt="{{ blog.title }}">
                </div>
                <div class="blog-details">
                    <h3>{{ blog.title }}</h3>
                    <p>{{ blog.description }}</p>
                    <p class="blog-date">{{ blog.date | date: "%B %d, %Y" }}</p>
                    <div class="blog-tags">
                        {% for tag in blog.tags %}
                        <span class="tag">{{ tag }}</span>
                        {% endfor %}
                    </div>
                    <a href="{{ blog.url }}" class="blog-link">Read Blog</a>
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