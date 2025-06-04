To create a modern developer portfolio with the specified requirements, I will break the task into the following steps:

### Steps:
1. **Initialize the React + Vite project**:
   - Set up a new Vite project with React.
   - Install necessary dependencies: `tailwindcss`, `shadcn`, `radix-ui`, `framer-motion`, and `gh-pages`.

2. **Configure Tailwind CSS**:
   - Set up Tailwind CSS with a custom dark theme.
   - Add custom styles to match the theme of a machine learning engineer with a focus on machine vision, medical devices, and cybersecurity.

3. **Set up ShadCN and Radix**:
   - Use ShadCN components and Radix primitives to create a modern UI.

4. **Add Framer Motion**:
   - Integrate animations for smooth transitions and modern effects.

5. **Create Pages**:
   - **About Me**: Highlight your background in machine learning, machine vision, medical devices, and cybersecurity.
   - **Blog**: A section for writing technical articles or sharing insights.
   - **Resume/CV**: A downloadable resume with a detailed overview of your skills and experience.
   - **Contact**: A form for visitors to reach out.

6. **Configure GitHub Pages**:
   - Use the `gh-pages` package to deploy the site as a static webpage.

7. **Art and Theme**:
   - Use a dark, modern aesthetic with visuals and icons that align with machine learning and cybersecurity themes.

### Deployment to GitHub Pages:

1.  **Update `vite.config.js`**:
    *   Open `personal-website/vite.config.js`.
    *   Set the `base` property to `/<REPO_NAME>/`, where `<REPO_NAME>` is the name of your GitHub repository. For example, if your repository is `my-portfolio`, it should be `base: '/my-portfolio/'`.

2.  **Update `package.json`**:
    *   Open `personal-website/package.json`.
    *   Add a `homepage` field: `"homepage": "https://<USERNAME>.github.io/<REPO_NAME>"`, replacing `<USERNAME>` with your GitHub username and `<REPO_NAME>` with your repository name.
    *   Ensure your `scripts` section has:
        ```json
        "scripts": {
          "dev": "vite",
          "build": "vite build",
          "lint": "eslint .",
          "preview": "vite preview",
          "deploy": "gh-pages -d dist"
        },
        ```

3.  **Build the Project**:
    *   Navigate to the `personal-website` directory in your terminal.
    *   Run the command: `npm run build`

4.  **Deploy to GitHub Pages**:
    *   After the build is successful, run the command: `npm run deploy`
    *   This will create a `gh-pages` branch (if it doesn't exist) and push the contents of your `dist` folder to it.

5.  **Configure GitHub Repository Settings**:
    *   Go to your repository on GitHub.
    *   Click on "Settings".
    *   In the left sidebar, click on "Pages".
    *   Under "Build and deployment", for "Source", select "Deploy from a branch".
    *   Under "Branch", select `gh-pages` and `/ (root)` folder.
    *   Click "Save".

    Your site should be live at the URL specified in your `homepage` field (e.g., `https://<USERNAME>.github.io/<REPO_NAME>/`) within a few minutes.

Let me start by initializing the project and setting up the basic structure.