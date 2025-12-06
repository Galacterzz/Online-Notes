# Data Science Portfolio

This is a Jekyll-based portfolio website designed for data scientists to showcase their projects, blogs, and notes. The website features a clean, professional design with a light theme and responsive layout.

## Features

- Responsive design that works on desktop and mobile
- Professional light theme with subtle animations
- Sections for About, Projects, Blogs, and Notes
- Skill visualization with progress bars
- Filtering and search functionality for projects, blogs, and notes
- Social media integration
- Easy content management using Markdown files

## Structure

- `index.md` - Main homepage with about section, experience, skills, and featured projects
- `projects.md` - Page listing all projects with filtering
- `blogs.md` - Page listing all blogs with filtering
- `notes.md` - Page listing all notes with filtering
- `_projects/` - Directory for project markdown files
- `_blogs/` - Directory for blog markdown files
- `_notes/` - Directory for note markdown files
- `assets/` - Contains CSS, JavaScript, and image files

## Adding Content

### Adding a New Project

Create a new markdown file in the `_projects/` directory with the following frontmatter:

```markdown
---
title: "Project Title"
date: 2023-01-01
description: "Brief description of the project"
image: "/assets/img/project-image.jpg"
tags: [tag1, tag2, tag3]
tech: [Python, Machine Learning, Pandas]
---

# Project Title

## Overview
Detailed description of your project...
```

### Adding a New Blog

Create a new markdown file in the `_blogs/` directory with the following frontmatter:

```markdown
---
title: "Blog Title"
date: 2023-01-01
description: "Brief description of the blog"
image: "/assets/img/blog-image.jpg"
tags: [tag1, tag2, tag3]
---

# Blog Title

Your blog content here...
```

### Adding a New Note

Create a new markdown file in the `_notes/` directory with the following frontmatter:

```markdown
---
title: "Note Title"
date: 2023-01-01
description: "Brief description of the note"
image: "/assets/img/note-image.jpg"
tags: [tag1, tag2, tag3]
---

# Note Title

Your note content here...
```

## Configuration

Update the `_config.yml` file with your personal information:

- `title`: Your portfolio title
- `email`: Your contact email
- `github_username`: Your GitHub username
- `linkedin_username`: Your LinkedIn username
- And other social media usernames

## Running Locally

1. Install Jekyll: `gem install jekyll bundler`
2. Install dependencies: `bundle install`
3. Run the site: `bundle exec jekyll serve`
4. View at: `http://localhost:4000`

## Deployment

This site is designed to be deployed on GitHub Pages:

1. Push your code to a GitHub repository
2. Enable GitHub Pages in your repository settings
3. Select the `main` branch as the source

The site will be automatically built and deployed.

## Customization

- Update the profile image by replacing `/assets/img/profile.jpg`
- Modify colors and styling in `/assets/css/style.css`
- Add your own content to the about section in `index.md`
- Customize the navigation menu as needed
