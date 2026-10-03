(() => {
  "use strict";
  // Language choices and Google translation service match Data Primer Explorer.
  const languages = [["en","English"],["ab","Abkhaz"],["ace","Acehnese"],["ach","Acholi"],["aa","Afar"],["af","Afrikaans"],["sq","Albanian"],["alz","Alur"],["am","Amharic"],["ar","Arabic"],["hy","Armenian"],["as","Assamese"],["av","Avar"],["awa","Awadhi"],["ay","Aymara"],["az","Azerbaijani"],["ban","Balinese"],["bal","Baluchi"],["bm","Bambara"],["bci","Baoulé"],["ba","Bashkir"],["eu","Basque"],["btx","Batak Karo"],["bts","Batak Simalungun"],["bbc","Batak Toba"],["be","Belarusian"],["bem","Bemba"],["bn","Bengali"],["bew","Betawi"],["bho","Bhojpuri"],["bik","Bikol"],["bs","Bosnian"],["br","Breton"],["bg","Bulgarian"],["bua","Buryat"],["yue","Cantonese"],["ca","Catalan"],["ceb","Cebuano"],["ch","Chamorro"],["ce","Chechen"],["ny","Chichewa"],["zh-CN","Chinese (Simplified)"],["zh-TW","Chinese (Traditional)"],["chk","Chuukese"],["cv","Chuvash"],["co","Corsican"],["crh","Crimean Tatar (Cyrillic)"],["crh-Latn","Crimean Tatar (Latin)"],["hr","Croatian"],["cs","Czech"],["da","Danish"],["fa-AF","Dari"],["dv","Dhivehi"],["din","Dinka"],["doi","Dogri"],["dov","Dombe"],["nl","Dutch"],["dyu","Dyula"],["dz","Dzongkha"],["eo","Esperanto"],["et","Estonian"],["ee","Ewe"],["fo","Faroese"],["fj","Fijian"],["tl","Filipino"],["fi","Finnish"],["fon","Fon"],["fr","French"],["fr-CA","French (Canada)"],["fy","Frisian"],["fur","Friulian"],["ff","Fulani"],["gaa","Ga"],["gl","Galician"],["ka","Georgian"],["de","German"],["el","Greek"],["gn","Guarani"],["gu","Gujarati"],["ht","Haitian Creole"],["cnh","Hakha Chin"],["ha","Hausa"],["haw","Hawaiian"],["iw","Hebrew"],["hil","Hiligaynon"],["hi","Hindi"],["hmn","Hmong"],["hu","Hungarian"],["hrx","Hunsrik"],["iba","Iban"],["is","Icelandic"],["ig","Igbo"],["ilo","Ilocano"],["id","Indonesian"],["iu-Latn","Inuktut (Latin)"],["iu","Inuktut (Syllabics)"],["ga","Irish"],["it","Italian"],["jam","Jamaican Patois"],["ja","Japanese"],["jw","Javanese"],["kac","Jingpo"],["kl","Kalaallisut"],["kn","Kannada"],["kr","Kanuri"],["pam","Kapampangan"],["kk","Kazakh"],["kha","Khasi"],["km","Khmer"],["cgg","Kiga"],["kg","Kikongo"],["rw","Kinyarwanda"],["ktu","Kituba"],["trp","Kokborok"],["kv","Komi"],["gom","Konkani"],["ko","Korean"],["kri","Krio"],["ku","Kurdish (Kurmanji)"],["ckb","Kurdish (Sorani)"],["ky","Kyrgyz"],["lo","Lao"],["ltg","Latgalian"],["la","Latin"],["lv","Latvian"],["lij","Ligurian"],["li","Limburgish"],["ln","Lingala"],["lt","Lithuanian"],["lmo","Lombard"],["lg","Luganda"],["luo","Luo"],["lb","Luxembourgish"],["mk","Macedonian"],["mad","Madurese"],["mai","Maithili"],["mak","Makassar"],["mg","Malagasy"],["ms","Malay"],["ms-Arab","Malay (Jawi)"],["ml","Malayalam"],["mt","Maltese"],["mam","Mam"],["gv","Manx"],["mi","Maori"],["mr","Marathi"],["mh","Marshallese"],["mwr","Marwadi"],["mfe","Mauritian Creole"],["chm","Meadow Mari"],["mni-Mtei","Meiteilon (Manipuri)"],["min","Minang"],["lus","Mizo"],["mn","Mongolian"],["my","Myanmar (Burmese)"],["nhe","Nahuatl (Eastern Huasteca)"],["ndc-ZW","Ndau"],["nr","Ndebele (South)"],["new","Nepalbhasa (Newari)"],["ne","Nepali"],["bm-Nkoo","NKo"],["no","Norwegian"],["nus","Nuer"],["oc","Occitan"],["or","Odia (Oriya)"],["om","Oromo"],["os","Ossetian"],["pag","Pangasinan"],["pap","Papiamento"],["ps","Pashto"],["fa","Persian"],["pl","Polish"],["pt","Portuguese (Brazil)"],["pt-PT","Portuguese (Portugal)"],["pa","Punjabi (Gurmukhi)"],["pa-Arab","Punjabi (Shahmukhi)"],["qu","Quechua"],["kek","Qʼeqchiʼ"],["rom","Romani"],["ro","Romanian"],["rn","Rundi"],["ru","Russian"],["se","Sami (North)"],["sm","Samoan"],["sg","Sango"],["sa","Sanskrit"],["sat-Latn","Santali (Latin)"],["sat","Santali (Ol Chiki)"],["gd","Scots Gaelic"],["nso","Sepedi"],["sr","Serbian"],["st","Sesotho"],["crs","Seychellois Creole"],["shn","Shan"],["sn","Shona"],["scn","Sicilian"],["szl","Silesian"],["sd","Sindhi"],["si","Sinhala"],["sk","Slovak"],["sl","Slovenian"],["so","Somali"],["es","Spanish"],["su","Sundanese"],["sus","Susu"],["sw","Swahili"],["ss","Swati"],["sv","Swedish"],["ty","Tahitian"],["tg","Tajik"],["ber-Latn","Tamazight"],["ber","Tamazight (Tifinagh)"],["ta","Tamil"],["tt","Tatar"],["te","Telugu"],["tet","Tetum"],["th","Thai"],["bo","Tibetan"],["ti","Tigrinya"],["tiv","Tiv"],["tpi","Tok Pisin"],["to","Tongan"],["lua","Tshiluba"],["ts","Tsonga"],["tn","Tswana"],["tcy","Tulu"],["tum","Tumbuka"],["tr","Turkish"],["tk","Turkmen"],["tyv","Tuvan"],["ak","Twi"],["udm","Udmurt"],["uk","Ukrainian"],["ur","Urdu"],["ug","Uyghur"],["uz","Uzbek"],["ve","Venda"],["vec","Venetian"],["vi","Vietnamese"],["war","Waray"],["cy","Welsh"],["wo","Wolof"],["xh","Xhosa"],["sah","Yakut"],["yi","Yiddish"],["yo","Yoruba"],["yua","Yucatec Maya"],["zap","Zapotec"],["zu","Zulu"]];
  const KEY='naturalCapitalToolPrimerLanguageOnce', CACHE='primer-translations-v14:';
  const select=document.getElementById('languageSelect'), status=document.getElementById('translation-status'), shell=document.querySelector('.shell');
  const records=[], extras=[];
  const brands=new Set(['InVEST','InVEST®','ARIES','ARIES for SEEA','Ecosystem Intelligence','Co$tingNature','Data4Nature','Data4Nature (D4N)','i-Tree','Nature Braid','ESTIMAP','SWAT','SWAT+','SWAT/SWAT+','HAWQS']);
  const protectedPattern=/https?:\/\/\S+|\b(?:ARIES for SEEA|Ecosystem Intelligence|Nature Braid|Data4Nature|Co\$ting\s?Nature|InVEST|i-Tree|SWAT\/SWAT\+|SWAT\+|[A-Z][A-Z0-9+_-]{1,})(?![\w])|\([^)]*\bet al\.[^)]*\)/g;
  const skip='.translate-control,.current-title,.counter,#search-status,.match-snippet,script,style';
  let language='en',dictionary=new Map(),timer,lastChange=0,started=0,ready=false,loading=false;
  const t=text=>dictionary.get(text.trim())||text;
  const eligible=text=>/\p{L}/u.test(text)&&!brands.has(text)&&!/^https?:\/\/\S+$/.test(text)&&!/^[A-Z\d\s/+®.-]+$/.test(text);
  const walker=document.createTreeWalker(shell,NodeFilter.SHOW_TEXT),nodes=[];
  while(walker.nextNode()){const node=walker.currentNode;if(node.textContent.trim()&&!node.parentElement.closest(skip))nodes.push(node);}
  function protect(wrapper,text){
    let from=0;
    for(const match of text.matchAll(protectedPattern)){
      const before=text.slice(from,match.index), leading=before.match(/\s+$/)?.[0]||'';
      const end=match.index+match[0].length, trailing=text.slice(end).match(/^\s+/)?.[0]||'';
      wrapper.append(document.createTextNode(before.slice(0,before.length-leading.length)));
      const term=document.createElement('primer-term');term.className='notranslate';term.translate=false;
      term.textContent=leading+match[0]+trailing;wrapper.append(term);from=end+trailing.length;
    }
    wrapper.append(document.createTextNode(text.slice(from)));
  }
  for(const node of nodes){
    const original=node.textContent,text=original.trim(),wrapper=document.createElement('primer-text');node.replaceWith(wrapper);protect(wrapper,original);
    if(!eligible(text)){wrapper.className='notranslate';wrapper.translate=false;}
    records.push({wrapper,original,text,page:wrapper.closest('.page')?.id});
  }
  document.querySelectorAll(skip).forEach(node=>{node.classList.add('notranslate');node.translate=false;});
  const count=document.querySelectorAll('.tool-card').length;
  extras.push('Contents','Natural Capital Tool Primer',`Showing all ${count} tools`,...[...document.querySelectorAll('.page')].map(p=>p.dataset.short));
  for(let i=0;i<=count;i++)extras.push(`${i} of ${count}`,`${i} of ${count} tools match`);
  const auxiliary=document.createElement('div');auxiliary.className='translation-phrases';auxiliary.setAttribute('aria-hidden','true');
  shell.querySelectorAll('[placeholder],[aria-label],[alt],[title]').forEach(node=>{
    if(node.closest('.translate-control'))return;
    for(const attribute of ['placeholder','aria-label','alt','title']){
      const original=node.getAttribute(attribute);if(!original)continue;
      const wrapper=document.createElement('primer-text');protect(wrapper,original);auxiliary.append(wrapper);
      records.push({wrapper,original,text:original.trim(),node,attribute});
    }
  });
  for(const text of new Set(extras)){
    const wrapper=document.createElement('primer-text');protect(wrapper,text);auxiliary.append(wrapper);if(!eligible(text))wrapper.className='notranslate';
    records.push({wrapper,original:text,text});
  }
  document.body.append(auxiliary);
  records.forEach((record,index)=>{record.wrapper.dataset.primerUnit=String(index);});
  function reconnect(){document.querySelectorAll('[data-primer-unit]').forEach(wrapper=>{const record=records[Number(wrapper.dataset.primerUnit)];if(record)record.wrapper=wrapper;});}
  const source=new Set(records.map(r=>r.text));
  function save(){try{localStorage.setItem(CACHE+language,JSON.stringify({time:Date.now(),entries:[...dictionary]}));}catch{}}
  function load(){try{const data=JSON.parse(localStorage.getItem(CACHE+language));if(data&&Date.now()-data.time<30*86400000&&Array.isArray(data.entries))dictionary=new Map(data.entries.filter(([key,value])=>source.has(key)&&typeof value==='string'&&value));}catch{}}
  function sync(){for(const r of records)if(r.attribute)r.node.setAttribute(r.attribute,t(r.original));document.dispatchEvent(new Event('primer:languagechange'));}
  function apply(){
    reconnect();
    for(const r of records)if(dictionary.has(r.text)){
      r.wrapper.textContent=r.original.replace(/\S[\s\S]*\S|\S/u,()=>dictionary.get(r.text));r.wrapper.classList.add('notranslate');r.wrapper.translate=false;
    }
    sync();
  }
  const normalize=text=>text.replace(/\s+/g,' ').trim();
  function capture(){
    reconnect();
    let changed=false;
    for(const r of records){const value=r.wrapper.textContent.trim();if(value&&(normalize(value)!==normalize(r.text)||(r.text.length<60&&r.wrapper.querySelector('font')))&&dictionary.get(r.text)!==value){dictionary.set(r.text,value);changed=true;}}
    if(changed){sync();save();}
  }
  function missing(){const active=document.querySelector('.page.active')?.id;return records.filter(r=>(!r.page||r.page===active)&&eligible(r.text)&&!dictionary.has(r.text));}
  function show(message='',retry=false){
    status.replaceChildren();if(message)status.append(document.createTextNode(message));
    if(retry){const button=document.createElement('button');button.type='button';button.className='translation-retry';button.textContent='Try again';button.addEventListener('click',()=>reload());status.append(' ',button);}
    select.setAttribute('aria-busy',String(Boolean(message)&&!retry));
    select.dataset.translationState=retry?'error':message?'loading':'ready';
  }
  function finish(){
    capture();clearInterval(timer);loading=false;
    // Unchanged short labels, such as French “Applications”, are valid results.
    if(!missing().some(r=>r.text.length>=60))for(const r of missing())dictionary.set(r.text,r.text);
    save();apply();document.documentElement.lang=language;
    const failed=missing().length>0;show(failed?'Some text could not be translated. English remains visible where needed.':'',failed);
  }
  window.primerGoogleTranslateInit=()=>{
    new google.translate.TranslateElement({pageLanguage:'en',autoDisplay:false,multilanguagePage:true},'google_translate_element');
    const wait=setInterval(()=>{
      const control=document.querySelector('.goog-te-combo');if(!control||control.options.length<2)return;
      clearInterval(wait);ready=true;started=lastChange=Date.now();loading=true;
      control.value='';control.dispatchEvent(new Event('change',{bubbles:true}));
      requestAnimationFrame(()=>{control.value=language;control.dispatchEvent(new Event('change',{bubbles:true}));});
      timer=setInterval(()=>{
        capture();
        if(!missing().length||(dictionary.size&&Date.now()-lastChange>1500&&!missing().some(r=>r.text.length>=60)))finish();
        else if(Date.now()-started>20000)finish();
      },250);
    },100);
    setTimeout(()=>{clearInterval(wait);if(!ready)show('Translation service could not load. English remains available.',true);},15000);
  };
  new MutationObserver(mutations=>{if(loading&&mutations.some(m=>m.target.parentElement?.closest('primer-text')||m.target.matches?.('primer-text')))lastChange=Date.now();}).observe(shell,{subtree:true,childList:true,characterData:true});
  window.PRIMER_TRANSLATE={t};
  select.replaceChildren(...languages.map(([code,name])=>new Option(name,code)));
  // Carry an explicit selection only through the translator's own refresh.
  // Consume it once: ordinary opens/reloads never restore a saved language.
  function reload(target=language){
    if(language!=='en'){capture();save();}
    try{
      sessionStorage.setItem(KEY,JSON.stringify({language:target,url:location.href,time:Date.now()}));
      sessionStorage.setItem('primer-search',document.querySelector('#tool-search').value);
    }catch{}
    location.reload();
  }
  select.addEventListener('change',()=>reload(select.value));
  document.addEventListener('primer:pagechange',()=>{if(language==='en')return;capture();if(missing().length)reload();else{apply();show();}});
  window.addEventListener('DOMContentLoaded',()=>{
    language='en';document.documentElement.lang='en';
    document.cookie='googtrans=/en/en;path=/;SameSite=Lax';
    try{
      const pending=sessionStorage.getItem(KEY);sessionStorage.removeItem(KEY);
      const requested=pending?JSON.parse(pending):null;
      if(requested&&requested.url===location.href&&Date.now()-requested.time<10000)language=requested.language;
      const query=sessionStorage.getItem('primer-search');if(query){document.querySelector('#tool-search').value=query;document.querySelector('#tool-search').dispatchEvent(new Event('input'));}
    }catch{}
    if(!languages.some(([code])=>code===language))language='en';select.value=language;select.dataset.language=language;
    if(language==='en'){show();return;}
    load();apply();if(!missing().length){document.documentElement.lang=language;show();return;}
    const host=document.createElement('div');host.id='google_translate_element';host.className='google-translate-host';host.setAttribute('aria-hidden','true');document.body.append(host);
    document.cookie='googtrans=/en/en;path=/;SameSite=Lax';
    const script=document.createElement('script');script.src='https://translate.google.com/translate_a/element.js?cb=primerGoogleTranslateInit';script.onerror=()=>show('Translation service could not load. English remains available.',true);
    show('Translating…');document.head.append(script);
  });
})();
