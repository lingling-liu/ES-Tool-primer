const ids = ["home", "invest", "ei", "aries", "seea", "costingnature", "data4nature", "itree", "naturebraid", "estimap", "swat", "hawqs"];
const toolCount = ids.length - 1;
const pages = [...document.querySelectorAll(".page")];
const buttons = [...document.querySelectorAll("[data-page]")];
const title = document.querySelector(".current-title");
const counter = document.querySelector(".counter");
const bar = document.querySelector(".progress-bar span");
const sidebar = document.querySelector(".sidebar");
const searchInput = document.querySelector("#tool-search");
const clearSearch = document.querySelector("#clear-search");
const searchStatus = document.querySelector("#search-status");
const noResults = document.querySelector("#no-results");
const toolCards = [...document.querySelectorAll(".tool-card")];
const translate = text => window.PRIMER_TRANSLATE?.t(text) || text;

const searchIndex = toolCards.map(card => {
  const profile = document.getElementById(card.dataset.page);
  return { card, text: profile.textContent.replace(/\s+/g, " ").trim() };
});

function searchTools() {
  const query = searchInput.value.trim();
  const terms = query.toLocaleLowerCase().split(/\s+/).filter(Boolean);
  let matches = 0;

  searchIndex.forEach(({ card, text }) => {
    const translatedText = document.getElementById(card.dataset.page).textContent.replace(/\s+/g, " ").trim();
    const translatedNormalized = translatedText.toLocaleLowerCase();
    const originalNormalized = text.toLocaleLowerCase();
    const visible = terms.every(term => translatedNormalized.includes(term) || originalNormalized.includes(term));
    card.hidden = !visible;
    const snippet = card.querySelector(".match-snippet");
    snippet.textContent = "";
    if (!visible) return;
    matches += 1;
    if (!query) return;
    const snippetText = translatedNormalized.includes(terms[0]) ? translatedText : text;
    const first = snippetText.toLocaleLowerCase().indexOf(terms[0]);
    const start = Math.max(0, first - 55);
    const end = Math.min(snippetText.length, first + terms[0].length + 90);
    snippet.textContent = `${start ? "…" : ""}${snippetText.slice(start, end)}${end < snippetText.length ? "…" : ""}`;
  });

  searchStatus.textContent = query ? `${translate(`${matches} of ${toolCount} tools match`)} “${query}”` : translate(`Showing all ${toolCount} tools`);
  noResults.hidden = matches !== 0;
  clearSearch.classList.toggle("visible", Boolean(query));
}

function showPage(id, push = true) {
  if (!ids.includes(id)) id = "home";
  pages.forEach(page => page.classList.toggle("active", page.id === id));
  buttons.forEach(button => button.classList.toggle("active", button.dataset.page === id));
  const page = document.getElementById(id);
  const index = ids.indexOf(id);
  title.textContent = translate(page.dataset.short);
  counter.textContent = id === "home" ? translate("Contents") : translate(`${index} of ${ids.length - 1}`);
  bar.style.width = `${((index + 1) / ids.length) * 100}%`;
  document.title = `${translate(page.dataset.short)} | ${translate("Natural Capital Tool Primer")}`;
  if (push) history.pushState({ id }, "", id === "home" ? "#contents" : `#${id}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
  sidebar.classList.remove("open");
  document.dispatchEvent(new Event('primer:pagechange'));
}

buttons.forEach(button => button.addEventListener("click", () => showPage(button.dataset.page)));
document.querySelector(".menu-button").addEventListener("click", () => sidebar.classList.toggle("open"));
window.addEventListener("popstate", event => showPage(event.state?.id || location.hash.slice(1) || "home", false));
document.addEventListener("keydown", event => {
  if (event.target.closest("#languageSelect")) return;
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
  const current = ids.indexOf(document.querySelector(".page.active").id);
  const next = event.key === "ArrowRight" ? Math.min(current + 1, ids.length - 1) : Math.max(current - 1, 0);
  showPage(ids[next]);
});
showPage(location.hash === "#contents" ? "home" : location.hash.slice(1) || "home", false);

searchInput.addEventListener("input", searchTools);
searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") document.querySelector(".tool-card:not([hidden])")?.click();
  if (event.key === "Escape") { searchInput.value = ""; searchTools(); }
});
clearSearch.addEventListener("click", () => { searchInput.value = ""; searchTools(); searchInput.focus(); });
document.addEventListener("primer:languagechange", () => {
  const page = document.querySelector(".page.active");
  const index = ids.indexOf(page.id);
  title.textContent = translate(page.dataset.short);
  counter.textContent = index === 0 ? translate("Contents") : translate(`${index} of ${ids.length - 1}`);
  document.title = `${translate(page.dataset.short)} | ${translate("Natural Capital Tool Primer")}`;
  searchTools();
});

