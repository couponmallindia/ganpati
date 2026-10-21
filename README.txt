# Bhumi Kala Kendra — Static Website

## Contents
- `index.html`: Homepage
- `about.html`: About the business
- `gallery.html`: Original murti photo gallery with lightbox
- `contact.html`: Contact details only (no contact form)
- `assets/css/styles.css`: Responsive styles
- `assets/js/site.js`: Mobile navigation and gallery lightbox
- `assets/images/`: Original uploaded site image assets, plus supplied logo
- `sitemap.xml`, `robots.txt`, `404.html`

## Deploy
Upload the contents of this folder to the document root of your static hosting account (usually `public_html`). Keep the `assets` folder and its subfolders in place. The site uses no PHP, database, build step, or contact form.

## Update content
Edit the relevant HTML file in a text editor. Product/gallery photos are in `assets/images/`. Keep filenames and relative paths unchanged unless you also update HTML references.

## Notes
- The layout uses the supplied logo and original image assets from the provided website archive.
- The original database includes generic template/demo records in some sections; these have not been presented as real business content.
- The gallery displays the Shadu Mati Ganpati Murti photographs referenced in the provided database.
- Canonical URLs and sitemap use `https://www.penganpati.com/`; verify the preferred www/non-www and HTTPS configuration before launch.
- No form, form handler, PHP code, database connection, cart, or checkout is included.
