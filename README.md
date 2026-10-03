# Natural Capital & Ecosystem Services Tool Primer

This is the complete static source of the published 11-tool primer, exported from **published version 7** on 2026-10-03 (source commit `73ca48ff22adfcbf6a8414c170b18284c8da8d28`). It needs no build step, package installation, database, API key, or ChatGPT account. Upload the contents of this folder directly to the root of your GitHub repository: `index.html` must sit beside this README, not inside another project folder.

## Project structure

```text
index.html         All English content, tool profiles, links, navigation and cards
styles.css         Original layout, colors, typography and responsive rules
app.js             Navigation, page counters and full-text search
translation.css    Translate selector styling
translation.js     Language list, Google translator integration, English default, caching and retry
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
7. If a new acronym or brand should remain untranslated, add its exact standalone text to the `brands` set and, for occurrences within prose, to `protectedPattern` in `translation.js`. Escape regular-expression punctuation as needed. Descriptive titles and surrounding prose will still translate.
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

Check all 11 contents cards, previous/next buttons, browser back/forward navigation, search and Clear search, image loading, external links, the mobile contents menu, and the Translate dropdown. Confirm the initial page is English, select Spanish or Chinese manually, move between tool pages, search, and switch back to English. Select another language and then use the browser Reload button: both the selector and page content should return to English. Test a direct link such as `#hawqs` and a phone-sized viewport as well. Check the browser console/network panel for failed requests.

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

The latest published `translation.js` and `translation.css` are included unchanged.

- **English on every normal opening or browser reload.** The HTML declares `lang="en"`. Previously selected languages are not restored, and browser language is not detected. Google's translator is loaded only after a manual non-English selection and initializes with `pageLanguage: 'en'` and `autoDisplay: false`.
- **Manual language selection remains available.** The existing 249 language choices are retained. Switching languages starts from original English text, preserving the current tool and search. The implementation uses a short-lived, single-use session-storage handoff for its own refresh after an explicit selection or uncached tool navigation; an ordinary later browser reload returns to English.
- **Persistent phrase caching.** Translations are stored by source phrase and language in browser local storage under `primer-translations-v14:`. The code accepts caches saved within 30 days, filters out phrases no longer in the source, and reuses cached text when possible. Caching does not change the English default. Browser storage is specific to the site's origin: caches on the ChatGPT-hosted site do not transfer to GitHub Pages.
- **Loading and retry.** The existing loading message and busy state remain. Service initialization and translation waits are bounded; failures leave readable English where needed and offer **Try again**. There is no endless automatic retry loop.
- **Protected terms.** Tool brands, acronyms, technical identifiers, URLs, and recognized citation patterns are protected from translation. Link destinations and image files are never translated.
- **Online dependency.** Manual translation uses Google's Website Translator (`https://translate.google.com/translate_a/element.js` and the resources it loads), the same primary translation service used by Data Primer Explorer. This replaces the older bulk `translate.googleapis.com/translate_a/single` implementation. Translation needs internet access and Google service availability; the English site needs no translation service. No API key or backend is included or required by this published implementation.

To invalidate previously cached translations after changing translation rules, change the `CACHE` prefix in `translation.js` to a new version. Editing source phrases already causes new phrases to be translated rather than reusing a different source phrase's cached result. Keep the English startup behavior and one-use handoff logic intact.

The full English primer, scripts, styles, and images are local. No core content or visual asset depends on the `shiyuepiaoxue.chatgpt.site` host. Intentional external links to tool providers, documents, and attribution sources remain external. The original hosting `.openai` metadata and Git history are omitted because GitHub Pages does not need them. The existing hosted website was not changed by this export.


## Export verification

The export was compared against all current published source files and screenshots. `index.html`, `app.js`, `translation.js`, `translation.css`, and all 11 tool screenshots match the source. The only runtime export adjustment is replacing the two external background-image URLs in `styles.css` with local, byte-preserved image copies. The project contains no hosting credentials, `.openai` configuration, Git history, or build dependencies. The ZIP stores `index.html` at its top level.
