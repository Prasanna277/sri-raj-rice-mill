# Sri Raj Rice Mill Website

A modern, responsive website for Sri Raj Rice Mill showcasing rice mill facility photos and premium rice varieties.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Rice Mill Gallery**: Showcase facility photos including processing equipment, storage units, and operations
- **Rice Varieties Display**: Beautiful grid layout displaying different rice varieties with photos and descriptions
- **Hero Slider**: Interactive image carousel on the homepage
- **Smooth Navigation**: Smooth scrolling navigation between sections
- **Modern UI**: Clean, professional design with agricultural theme colors

## Project Structure

```
sri-raj-rice-mill/
├── index.html              # Main HTML page
├── styles/
│   └── main.css           # Main stylesheet with responsive design
├── scripts/
│   └── main.js            # JavaScript for dynamic content and interactivity
├── images/
│   ├── rice-mill/         # Rice mill facility photos
│   └── rice-varieties/    # Rice variety photos
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

No build tools or dependencies required! This is a vanilla HTML/CSS/JavaScript website that can be opened directly in any modern web browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The website is ready to use.

### Adding Your Own Images

#### Rice Mill Facility Photos

1. Add your rice mill facility photos to the `images/rice-mill/` directory
2. Name them as follows:
   - `mill-1.jpg` - Main Processing Facility
   - `mill-2.jpg` - Modern Milling Equipment
   - `mill-3.jpg` - Quality Storage Units
   - `mill-4.jpg` - Packaging Department
   - `mill-5.jpg` - Quality Control Lab
   - `mill-6.jpg` - Loading Bay

3. You can add more photos by updating the `riceMillPhotos` array in `scripts/main.js`

#### Rice Variety Photos

1. Add your rice variety photos to the `images/rice-varieties/` directory
2. Update the `riceVarieties` array in `scripts/main.js` with your actual rice varieties:
   - Update image paths
   - Update names and descriptions
   - Add or remove varieties as needed

### Customization

#### Colors

Edit the CSS variables in `styles/main.css` to change the color scheme:

```css
:root {
    --primary-color: #2c5530;    /* Main brand color */
    --secondary-color: #4a7c59;   /* Secondary color */
    --accent-color: #d4a574;      /* Accent color */
    /* ... */
}
```

#### Content

- **Company Information**: Update the header logo, company name, and footer in `index.html`
- **Contact Information**: Update the contact section in `index.html`
- **About Section**: Customize the about text in `index.html`
- **Rice Varieties**: Edit the `riceVarieties` array in `scripts/main.js`
- **Facility Photos**: Edit the `riceMillPhotos` array in `scripts/main.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Descriptions

- **index.html**: Main HTML structure with semantic markup
- **styles/main.css**: Complete stylesheet with responsive design, animations, and modern CSS features
- **scripts/main.js**: JavaScript for dynamic content rendering, hero slider functionality, and smooth scrolling

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Rice Mill Photos**: Recommended size 1200x800px or larger
- **Rice Variety Photos**: Recommended size 800x800px (square) for best display
- **Optimization**: Compress images for web to ensure fast loading times

## Deployment to Vercel

This website can be easily deployed to Vercel for free hosting with automatic HTTPS and global CDN.

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from project directory**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No**
   - Project name? (Press Enter for default or enter custom name)
   - Directory? (Press Enter for current directory)

4. **Deploy to production**:
   ```bash
   vercel --prod
   ```

5. Your website will be live at `https://your-project-name.vercel.app`

### Option 2: Drag-and-Drop (Easiest - No CLI Required)

1. **Create a ZIP file** of your project:
   - Select all files and folders (index.html, styles/, scripts/, images/, vercel.json)
   - Create a ZIP archive

2. **Go to Vercel Dashboard**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up or log in (free account)

3. **Deploy**:
   - Click "Add New..." → "Project"
   - Drag and drop your ZIP file
   - Vercel will automatically deploy your site

4. Your website will be live instantly with a Vercel-provided URL

### Option 3: GitHub Integration (For Continuous Deployment)

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**:
   - Create a new repository on GitHub
   - Push your code:
     ```bash
     git remote add origin https://github.com/yourusername/your-repo.git
     git push -u origin main
     ```

3. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel will automatically deploy and set up continuous deployment

4. **Automatic Deployments**: Every push to your GitHub repository will automatically trigger a new deployment

### Post-Deployment

- Your website will be live with a public URL (e.g., `sri-raj-rice-mill.vercel.app`)
- Automatic HTTPS is enabled
- Global CDN for fast loading worldwide
- You can add a custom domain in Vercel project settings if needed
- To update the site, simply redeploy using any of the methods above

### Troubleshooting

- **Images not loading**: Ensure all image paths are relative (starting with `images/` not `/images/`)
- **Styles not applying**: Check that CSS file path in `index.html` is correct
- **404 errors**: Verify that `index.html` is in the root directory
- **Build errors**: This is a static site, so no build process is needed. If you see build errors, check the Vercel project settings and ensure it's set to "Other" framework

## Future Enhancements

Potential features to add:
- Contact form
- Image lightbox/modal for gallery
- Product detail pages
- Shopping cart functionality
- Multi-language support
- Blog section
- Social media integration

## License

This project is created for Sri Raj Rice Mill.

## Support

For questions or support, please call or visit us.
