---
layout: default
title: Notes
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
            <a href="{{ site.baseurl }}/notes" class="nav-links active">Notes</a>
            <a href="{{ site.baseurl }}/#contact" class="nav-links">Contact Me</a>
        </div>
        <div class="nav-toggle" id="nav-toggle">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </div>
</nav>

<!-- Notes Page Content -->
<div class="page-container">
    <h1 class="page-title">My Notes</h1>
    
    <div class="filter-container">
        <input type="text" id="note-search" placeholder="Search notes...">
        <select id="note-filter">
            <option value="">All Tags</option>
            <!-- Tags will be populated dynamically -->
        </select>
    </div>
    
    <div class="notes-grid" id="notes-grid">
        {% for note in site.notes %}
        <div class="note-card" data-tags="{{ note.tags | join: ' ' }}">
            <div class="note-content">
                <div class="note-image">
                    <img src="{{ note.image | default: '/assets/img/default-note.jpg' }}" alt="{{ note.title }}">
                </div>
                <div class="note-details">
                    <h3>{{ note.title }}</h3>
                    <p>{{ note.description }}</p>
                    <p class="note-date">{{ note.date | date: "%B %d, %Y" }}</p>
                    <div class="note-tags">
                        {% for tag in note.tags %}
                        <span class="tag">{{ tag }}</span>
                        {% endfor %}
                    </div>
                    <a href="{{ note.url }}" class="note-link">Read Note</a>
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