(() => {
  "use strict";
  // Language choices and Google translation service match Data Primer Explorer.
  const languages = [["en","English"],["ab","Abkhaz"],["ace","Acehnese"],["ach","Acholi"],["aa","Afar"],["af","Afrikaans"],["sq","Albanian"],["alz","Alur"],["am","Amharic"],["ar","Arabic"],["hy","Armenian"],["as","Assamese"],["av","Avar"],["awa","Awadhi"],["ay","Aymara"],["az","Azerbaijani"],["ban","Balinese"],["bal","Baluchi"],["bm","Bambara"],["bci","Baoulé"],["ba","Bashkir"],["eu","Basque"],["btx","Batak Karo"],["bts","Batak Simalungun"],["bbc","Batak Toba"],["be","Belarusian"],["bem","Bemba"],["bn","Bengali"],["bew","Betawi"],["bho","Bhojpuri"],["bik","Bikol"],["bs","Bosnian"],["br","Breton"],["bg","Bulgarian"],["bua","Buryat"],["yue","Cantonese"],["ca","Catalan"],["ceb","Cebuano"],["ch","Chamorro"],["ce","Chechen"],["ny","Chichewa"],["zh-CN","Chinese (Simplified)"],["zh-TW","Chinese (Traditional)"],["chk","Chuukese"],["cv","Chuvash"],["co","Corsican"],["crh","Crimean Tatar (Cyrillic)"],["crh-Latn","Crimean Tatar (Latin)"],["hr","Croatian"],["cs","Czech"],["da","Danish"],["fa-AF","Dari"],["dv","Dhivehi"],["din","Dinka"],["doi","Dogri"],["dov","Dombe"],["nl","Dutch"],["dyu","Dyula"],["dz","Dzongkha"],["eo","Esperanto"],["et","Estonian"],["ee","Ewe"],["fo","Faroese"],["fj","Fijian"],["tl","Filipino"],["fi","Finnish"],["fon","Fon"],["fr","French"],["fr-CA","French (Canada)"],["fy","Frisian"],["fur","Friulian"],["ff","Fulani"],["gaa","Ga"],["gl","Galician"],["ka","Georgian"],["de","German"],["el","Greek"],["gn","Guarani"],["gu","Gujarati"],["ht","Haitian Creole"],["cnh","Hakha Chin"],["ha","Hausa"],["haw","Hawaiian"],["iw","Hebrew"],["hil","Hiligaynon"],["hi","Hindi"],["hmn","Hmong"],["hu","Hungarian"],["hrx","Hunsrik"],["iba","Iban"],["is","Icelandic"],["ig","Igbo"],["ilo","Ilocano"],["id","Indonesian"],["iu-Latn","Inuktut (Latin)"],["iu","Inuktut (Syllabics)"],["ga","Irish"],["it","Italian"],["jam","Jamaican Patois"],["ja","Japanese"],["jw","Javanese"],["kac","Jingpo"],["kl","Kalaallisut"],["kn","Kannada"],["kr","Kanuri"],["pam","Kapampangan"],["kk","Kazakh"],["kha","Khasi"],["km","Khmer"],["cgg","Kiga"],["kg","Kikongo"],["rw","Kinyarwanda"],["ktu","Kituba"],["trp","Kokborok"],["kv","Komi"],["gom","Konkani"],["ko","Korean"],["kri","Krio"],["ku","Kurdish (Kurmanji)"],["ckb","Kurdish (Sorani)"],["ky","Kyrgyz"],["lo","Lao"],["ltg","Latgalian"],["la","Latin"],["lv","Latvian"],["lij","Ligurian"],["li","Limburgish"],["ln","Lingala"],["lt","Lithuanian"],["lmo","Lombard"],["lg","Luganda"],["luo","Luo"],["lb","Luxembourgish"],["mk","Macedonian"],["mad","Madurese"],["mai","Maithili"],["mak","Makassar"],["mg","Malagasy"],["ms","Malay"],["ms-Arab","Malay (Jawi)"],["ml","Malayalam"],["mt","Maltese"],["mam","Mam"],["gv","Manx"],["mi","Maori"],["mr","Marathi"],["mh","Marshallese"],["mwr","Marwadi"],["mfe","Mauritian Creole"],["chm","Meadow Mari"],["mni-Mtei","Meiteilon (Manipuri)"],["min","Minang"],["lus","Mizo"],["mn","Mongolian"],["my","Myanmar (Burmese)"],["nhe","Nahuatl (Eastern Huasteca)"],["ndc-ZW","Ndau"],["nr","Ndebele (South)"],["new","Nepalbhasa (Newari)"],["ne","Nepali"],["bm-Nkoo","NKo"],["no","Norwegian"],["nus","Nuer"],["oc","Occitan"],["or","Odia (Oriya)"],["om","Oromo"],["os","Ossetian"],["pag","Pangasinan"],["pap","Papiamento"],["ps","Pashto"],["fa","Persian"],["pl","Polish"],["pt","Portuguese (Brazil)"],["pt-PT","Portuguese (Portugal)"],["pa","Punjabi (Gurmukhi)"],["pa-Arab","Punjabi (Shahmukhi)"],["qu","Quechua"],["kek","Qʼeqchiʼ"],["rom","Romani"],["ro","Romanian"],["rn","Rundi"],["ru","Russian"],["se","Sami (North)"],["sm","Samoan"],["sg","Sango"],["sa","Sanskrit"],["sat-Latn","Santali (Latin)"],["sat","Santali (Ol Chiki)"],["gd","Scots Gaelic"],["nso","Sepedi"],["sr","Serbian"],["st","Sesotho"],["crs","Seychellois Creole"],["shn","Shan"],["sn","Shona"],["scn","Sicilian"],["szl","Silesian"],["sd","Sindhi"],["si","Sinhala"],["sk","Slovak"],["sl","Slovenian"],["so","Somali"],["es","Spanish"],["su","Sundanese"],["sus","Susu"],["sw","Swahili"],["ss","Swati"],["sv","Swedish"],["ty","Tahitian"],["tg","Tajik"],["ber-Latn","Tamazight"],["ber","Tamazight (Tifinagh)"],["ta","Tamil"],["tt","Tatar"],["te","Telugu"],["tet","Tetum"],["th","Thai"],["bo","Tibetan"],["ti","Tigrinya"],["tiv","Tiv"],["tpi","Tok Pisin"],["to","Tongan"],["lua","Tshiluba"],["ts","Tsonga"],["tn","Tswana"],["tcy","Tulu"],["tum","Tumbuka"],["tr","Turkish"],["tk","Turkmen"],["tyv","Tuvan"],["ak","Twi"],["udm","Udmurt"],["uk","Ukrainian"],["ur","Urdu"],["ug","Uyghur"],["uz","Uzbek"],["ve","Venda"],["vec","Venetian"],["vi","Vietnamese"],["war","Waray"],["cy","Welsh"],["wo","Wolof"],["xh","Xhosa"],["sah","Yakut"],["yi","Yiddish"],["yo","Yoruba"],["yua","Yucatec Maya"],["zap","Zapotec"],["zu","Zulu"]];
  const KEY = "naturalCapitalToolPrimerLanguage";
  const select = document.getElementById("languageSelect");
  const status = document.getElementById("translation-status");
  const shell = document.querySelector(".shell");
  const records = [], cache = new Map();
  const skip = ".translate-control,.current-title,.counter,#search-status,.match-snippet,script,style";
  const brands = new Set(["InVEST", "InVEST®", "ARIES", "ARIES for SEEA", "Co$tingNature", "Data4Nature", "Data4Nature (D4N)", "i-Tree", "Nature Braid", "ESTIMAP", "SWAT", "SWAT+", "SWAT/SWAT+", "HAWQS"]);
  let language = "en", dictionary = new Map(), request = 0, controller;
  const t = text => dictionary.get(text.trim()) || text;
  const save = value => { try { localStorage.setItem(KEY, value); } catch {} };
  const walker = document.createTreeWalker(shell, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.textContent.trim() && !node.parentElement.closest(skip)) {
      records.push({ node, original: node.textContent });
    }
  }
  shell.querySelectorAll("[placeholder],[aria-label],[alt],[title]").forEach(node => {
    if (node.closest(".translate-control")) return;
    ["placeholder", "aria-label", "alt", "title"].forEach(attribute => {
      const original = node.getAttribute(attribute);
      if (original) records.push({ node, attribute, original });
    });
  });
  const toolCount = document.querySelectorAll(".tool-card").length;
  const phrases = new Set(records.map(record => record.original.trim()));
  ["Contents", "Natural Capital Tool Primer", `Showing all ${toolCount} tools`].forEach(text => phrases.add(text));
  document.querySelectorAll(".page").forEach(page => phrases.add(page.dataset.short));
  for (let i = 0; i <= toolCount; i++) { phrases.add(`${i} of ${toolCount}`); phrases.add(`${i} of ${toolCount} tools match`); }
  const source = [...phrases].filter(text => /\p{L}/u.test(text) && !brands.has(text));
  select.replaceChildren(...languages.map(([code, name]) => new Option(name, code)));

  async function translate(parts, target, signal) {
    const marker = "[[[TOOL_PRIMER_SPLIT_7F3]]]";
    const params = new URLSearchParams({ client: "gtx", sl: "en", tl: target, dt: "t", q: parts.join("\n" + marker + "\n") });
    const response = await fetch("https://translate.googleapis.com/translate_a/single?" + params, { signal: AbortSignal.any([signal, AbortSignal.timeout(20000)]) });
    if (!response.ok) throw new Error("Translation request failed");
    const data = await response.json();
    const values = data[0].map(segment => segment[0] || "").join("").split(marker).map(value => value.trim());
    if (values.length !== parts.length || values.some(value => !value)) {
      if (parts.length === 1) throw new Error("Incomplete translation");
      const middle = Math.ceil(parts.length / 2);
      return [...await translate(parts.slice(0, middle), target, signal), ...await translate(parts.slice(middle), target, signal)];
    }
    return values;
  }

  async function prepare(target, signal) {
    if (cache.has(target)) return cache.get(target);
    const batches = []; let batch = [], length = 0;
    for (const text of source) {
      if (length + text.length > 1600 && batch.length) { batches.push(batch); batch = []; length = 0; }
      batch.push(text); length += text.length + 35;
    }
    if (batch.length) batches.push(batch);
    const result = new Map(); let cursor = 0;
    async function worker() {
      while (cursor < batches.length) {
        signal.throwIfAborted();
        const parts = batches[cursor++];
        const values = await translate(parts, target, signal);
        parts.forEach((text, i) => result.set(text, values[i]));
      }
    }
    await Promise.all(Array.from({ length: 3 }, worker));
    cache.set(target, result);
    return result;
  }

  function apply(target, translated) {
    dictionary = translated;
    records.forEach(({ node, attribute, original }) => {
      const value = target === "en" ? original : original.replace(/\S[\s\S]*\S|\S/u, () => t(original));
      if (attribute) node.setAttribute(attribute, value); else node.textContent = value;
    });
    language = target; document.documentElement.lang = target;
    select.value = target; save(target);
    document.dispatchEvent(new Event("primer:languagechange"));
  }

  async function choose(target) {
    const version = ++request;
    controller?.abort(); controller = new AbortController();
    status.textContent = target === "en" ? "" : "Translating…";
    select.setAttribute("aria-busy", String(target !== "en"));
    if (target === "en") { apply("en", new Map()); return; }
    try {
      const translated = await prepare(target, controller.signal);
      if (version !== request) return;
      apply(target, translated); status.textContent = "";
    } catch (error) {
      if (version !== request) return;
      controller.abort(); select.value = language;
      status.textContent = "Translation unavailable. Please try again.";
    } finally {
      if (version === request) select.setAttribute("aria-busy", "false");
    }
  }

  window.PRIMER_TRANSLATE = { t };
  select.addEventListener("change", () => choose(select.value));
  // Wait until the existing app has initialized before restoring a preference.
  window.addEventListener("DOMContentLoaded", () => {
    let saved; try { saved = localStorage.getItem(KEY); } catch {}
    if (saved && saved !== "en" && languages.some(([code]) => code === saved)) { select.value = saved; choose(saved); }
  });
})();
