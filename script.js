console.log("Website loaded successfully!");
Part 2: Hosting the Website on a Cloud Platform
You can host the website on GitHub Pages, Netlify, or Vercel. Here's the step-by-step procedure for each:

Option 1: Hosting on GitHub Pages
Create a GitHub Repository:

Log in to GitHub and create a new repository (e.g., resume-website).
Push Your Code:

Initialize Git in your project folder:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/resume-website.git
git push -u origin main
Enable GitHub Pages:

Go to the repository settings.
Scroll down to the Pages section.
Select the branch (main) and root directory. Save.
Your website will be available at https://yourusername.github.io/resume-website.
Option 2: Hosting on Netlify
Sign Up for Netlify:

Go to Netlify and create an account.
Upload Your Website:

Drag and drop the resume_website folder into the Netlify dashboard.
Get Your URL:

Netlify will provide a live URL for your website.
Option 3: Hosting on Vercel
Sign Up for Vercel:

Go to Vercel and create an account.
Deploy Your Project:

Use the CLI:
npm install -g vercel
vercel
Follow the prompts to deploy your project.
Access Your Website:

Vercel will provide a live URL for your website.
