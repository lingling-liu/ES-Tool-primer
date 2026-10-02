# Natural Capital & Ecosystem Services Tool Primer

This is the complete static source of the published 11-tool primer, exported from version 5. It needs no build step, package installation, database, API key, or ChatGPT account. Upload the contents of this folder directly to the root of your GitHub repository: `index.html` must sit beside this README, not inside another project folder.

## Project structure

```text
index.html         All English content, tool profiles, links, navigation and cards
styles.css         Original layout, colors, typography and responsive rules
app.js             Navigation, page counters and full-text search
translation.css    Translate selector styling
translation.js     Language list, online translation, English restoration and caching
assets/            All 11 tool screenshots and both background images
.nojekyll          Tells GitHub Pages to serve these static files without Jekyll
README.md          Deployment and maintenance instructions
```

All internal files use relative paths. Page navigation uses URL fragments such as `#invest`, `#swat`, and `#hawqs`, so no server routing or rewrite configuration is needed. The site works under a project path such as `https://USERNAME.github.io/Natural-Capital-Tool-Primer/`.

## Content and assets

The source of the displayed Tool Primer information is **index.html**. There is no separate JSON file or hidden database. Each profile is an `<article class="page" id="...">` with five sections: brief description, inputs and outputs, applications, pros and cons, and learning resources. The cover, contents, link destinations, captions, and image references are in the same file.

| Profile | Page fragment | Screenshot |
| --- | --- | --- |
| InVEST | `#invest` | `assets/image1.png` |
| Ecosystem Intelligence | `#ei` | `assets/image2.png` |
| ARIES | `#aries` | `assets/image3.png` |
| ARIES for SEEA | `#seea` | `assets/image4.png` |
| Co$tingNature | `#costingnature` | `assets/image5.jpeg` |
| Data4Nature | `#data4nature` | `assets/image6.png` |
| i-Tree | `#itree` | `assets/image7.png` |
| Nature Braid | `#naturebraid` | `assets/image8.png` |
| ESTIMAP | `#estimap` | `assets/estimap.png` |
| SWAT/SWAT+ | `#swat` | `assets/image10.png` |
| HAWQS | `#hawqs` | `assets/image11.png` |

The original cover and sidebar backgrounds are stored as `assets/cover-background.jpg` and `assets/sidebar-background.jpg`. These are the exact image responses used by the published site's World Bank image URLs, saved without cropping, resizing, recompression, or other editing. The existing visible image attribution and external resource links have been retained.

The existing site provides full-text search that filters the tool cards. It does not have separate category/filter dropdowns. This export preserves that behavior without adding controls.

## Update an existing tool

1. Back up the project or create a Git commit before editing.
2. Open `index.html` and find the relevant article, for example `id="swat"`.
3. Edit its text inside the existing section markup. Retain its ID, class names, and `data-short` value unless you also update all corresponding references.
4. If a tool's name changes, update its contents card, sidebar button, and neighboring previous/next button labels as needed.
5. Keep resource links as `<a href="https://..." target="_blank" rel="noreferrer">Link text</a>`. Retain fragments such as the HAWQS `#/help` destination.
6. Test navigation, search, and translation, then commit the updated files.

Search indexes the profile text automatically when the page loads. Translation also captures the current page content automatically; reload the page after an edit to rebuild both. English remains the authoritative original text.

## Add a new tool

1. Copy an existing tool article in `index.html`. Give it a unique ID, such as `newtool`, an appropriate `data-short`, its next tool number, and the five existing sections.
2. Add the tool's unchanged image to `assets/`. Reference it with a relative URL such as `assets/newtool.png` in the article and its contents card. Copy the SWAT/HAWQS thumbnail's `object-fit: contain` setting if the entire image must remain visible.
3. Add a sidebar `<button data-page="newtool">` and a contents `<button class="tool-card" data-page="newtool">`. Preserve the contents card's number, title, subtitle, and empty `.match-snippet` element.
4. Add `"newtool"` to the `ids` array in `app.js` at the matching position. Keep the first entry `"home"`.
5. Update the neighboring previous/next buttons so they follow that order. The last tool's final button should return to `home`.
6. Update the cover's static tool count, its initial “Showing all ... tools” text, and the HTML meta description's tool count. Runtime navigation, search, and translation counters derive their totals automatically.
7. If a new acronym or brand should remain untranslated, add its exact standalone text to the `brands` set in `translation.js`. Descriptive titles and surrounding prose will still translate.
8. Confirm the tool appears in the contents, search results, keyboard navigation, and translated pages.

## Replace an image

Replace the corresponding file in `assets/` using the same name and extension, or add a new file and update both its profile and contents-card `src` attributes in `index.html`. Update the descriptive `alt` text and caption if appropriate. Keep filename capitalization identical; GitHub Pages paths are case-sensitive. No image conversion is required. The existing profile image style uses `object-fit: contain`.

## Test locally

Use a local HTTP server rather than opening the HTML directly from the filesystem. With Python 3 installed, open a terminal in this project folder and run:

```sh
python -m http.server 8000
```

On Windows, `py -m http.server 8000` is an alternative. Open `http://localhost:8000/` in your browser. Stop the server with Ctrl+C.

To test a GitHub Pages project subdirectory, put the project in a folder named `Natural-Capital-Tool-Primer`, run the same command from its parent folder, and open:

```text
http://localhost:8000/Natural-Capital-Tool-Primer/
```

Check all 11 contents cards, previous/next buttons, browser back/forward navigation, search and Clear search, image loading, external links, the mobile contents menu, and the Translate dropdown. Try Spanish or Chinese, move between tool pages, search translated terms, and switch back to English. Check the browser console/network panel for failed requests.

## Deploy with GitHub Pages

1. Create a GitHub repository, for example `Natural-Capital-Tool-Primer`. A public repository can use GitHub Pages on GitHub Free; private-repository availability depends on the account plan.
2. Extract the ZIP. Upload **all files and the assets folder from the extracted project** to the repository root. Do not upload only the ZIP or nest everything under an extra folder. Include `.nojekyll`; some file browsers hide dotfiles.
3. Commit the files to `main` (or your chosen publishing branch).
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select **main** and **/(root)**, then click **Save**.
7. Wait for the Pages deployment to finish. GitHub will display the site URL, typically `https://USERNAME.github.io/Natural-Capital-Tool-Primer/`.
8. Open the URL and repeat the local checks. Later commits to the publishing branch update the site automatically.

No GitHub Actions workflow, Node installation, custom domain, or ChatGPT hosting configuration is required for this static deployment. Follow [GitHub's publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) if the settings change.

## Translation and external services

The translation implementation is unchanged. `translation.js` sends English page text to Google's `translate.googleapis.com` service when a non-English language is selected. Translation requires internet access and that service's availability; it is not an offline translator. The selected language is remembered in the browser's local storage, and translated phrases are cached in memory for the current page session. Choosing English restores the original local text. If translation fails, the existing language remains and a retry message appears.

The full English primer, scripts, styles, and images are local. No runtime file depends on the former `shiyuepiaoxue.chatgpt.site` host. Intentional external links to tool providers, documents, and attribution sources remain external. The original hosting `.openai` metadata and Git history are omitted because GitHub Pages does not need them. The existing hosted website was not changed by this export.
