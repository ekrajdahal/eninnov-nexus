# Eninnov Website

A modern React website for Eninnov, LLC - Engineering | Innovation | Solution

**Live Site**: https://www.eninnovate.com

## 🚀 Deployment to GitHub Pages

This website is configured to automatically deploy to GitHub Pages at **https://www.eninnovate.com**

### Automatic Deployment

The website automatically deploys when you push to the `main` branch using GitHub Actions.

#### Setup Instructions:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial deployment setup"
   git push origin main
   ```

2. **Configure GitHub Pages:**
   - Go to your GitHub repository settings
   - Navigate to "Pages" section
   - Set Source to "GitHub Actions"
   - The CNAME file is already configured for `www.eninnovate.com`

3. **Configure your domain DNS:**
   - Add these DNS records at your domain registrar:
     ```
     Type: CNAME
     Host: www
     Value: ekrajdahal.github.io
     
     Type: A (for apex domain eninnovate.com)
     Host: @
     Values: 
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

### Manual Deployment (Alternative)

You can also deploy manually using the npm script:

```bash
npm run deploy
```

## 📧 Contact Forms

The website includes two forms that route to **contact@eninnovate.com**:

- **Career Form**: `/career` - For candidates interested in opportunities
- **Client Form**: `/client` - For businesses seeking services

## 🌐 URLs

- **Production**: https://www.eninnovate.com
- **Development**: http://localhost:8080

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/bb8f7cbb-e76b-4f15-a2b1-4cee58507e6e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/bb8f7cbb-e76b-4f15-a2b1-4cee58507e6e) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
