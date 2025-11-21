(function () { const e = document.createElement("link").relList; if (e && e.supports && e.supports("modulepreload")) return; for (const t of document.querySelectorAll('link[rel="modulepreload"]')) c(t); new MutationObserver(t => { for (const s of t) if (s.type === "childList") for (const l of s.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && c(l) }).observe(document, { childList: !0, subtree: !0 }); function x(t) { const s = {}; return t.integrity && (s.integrity = t.integrity), t.referrerPolicy && (s.referrerPolicy = t.referrerPolicy), t.crossOrigin === "use-credentials" ? s.credentials = "include" : t.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s } function c(t) { if (t.ep) return; t.ep = !0; const s = x(t); fetch(t.href, s) } })(); const m = "" + new URL("hero-bg-CpzdxCFB.png", import.meta.url).href, p = "" + new URL("team-1-Dc6TajJ2.png", import.meta.url).href, g = "" + new URL("team-2-a_RqtDCS.png", import.meta.url).href, f = "" + new URL("team-3-B_y2WU-I.png", import.meta.url).href, n = "" + new URL("service-1-DjoT5pIv.png", import.meta.url).href, h = "" + new URL("service-2-CBeHya_I.png", import.meta.url).href, v = "" + new URL("service-3-CzHLCcNg.png", import.meta.url).href, a = { name: "丞心聯合會計師事務所", logoText: "CC", est: "EST. 2025", address: "台北市信義區信義路五段7號", phone: "02-1234-5678", email: "info@chengchi.com", taxId: "12345678", copyright: "Copyright © 2025 ChengChi. All rights reserved." }, u = [{ name: "專業團隊", href: "#" }, { name: "服務項目", href: "#" }, { name: "聯絡我們", href: "#" }], o = { bgImage: m, title: "丞心創新，起勢未來", subtitle: "以專業引領新局，以誠信共創價值" }, d = { title: "以專業鑄信賴，以協作成就價值", items: [{ title: "專業深耕", desc: "結合會計與稅務專業，提供高品質服務，以專業見解協助客戶決策。" }, { title: "誠信正直", desc: "堅守職業道德，以誠信為本，建立長期信賴的合作關係。" }, { title: "協同創新", desc: "透過團隊協作與創新思維，為客戶創造更多價值與機會。" }, { title: "永續發展", desc: "致力於企業永續，協助客戶在變動的環境中穩健成長。" }] }, r = { title: "關於我們", subtitle: "專業、真誠、信任，<br>為企業提供全方位財稅解決方案。", desc1: "丞心聯合會計師事務所，秉持著「丞心誠意」的服務精神，致力於為客戶提供最專業、最即時的財稅服務。我們深知每一位客戶的需求都是獨一無二的。", desc2: "我們的團隊由一群經驗豐富、充滿熱忱的專業人士組成。我們不僅提供傳統的審計與稅務服務，更著重於為客戶提供具有前瞻性的商業建議，協助客戶在競爭激烈的市場中脫穎而出。" }, b = [{ name: "成文雅", role: "會計師", image: p }, { name: "廖慧慈", role: "會計師", image: g }, { name: "張竹雅", role: "會計師", image: f }], w = [{ title: "工商登記/財稅簽證", desc: "公司設立登記、變更登記、特許行業申請。財務報表簽證、營利事業所得稅簽證。", image: n }, { title: "會計帳務/顧問諮詢", desc: "日常會計帳務處理、營業稅申報。企業流程優化、內部控制制度建立諮詢。", image: h }, { title: "稅務規劃", desc: "個人及家族稅務規劃、遺產及贈與稅申報與諮詢。", image: v }, { title: "法律諮詢", desc: "商務法律諮詢、合約審閱與撰寫、勞資爭議處理。", image: n }]; function y() {
  const i = u.map(e => `<a href="${e.href}" class="hover:text-white transition">${e.name}</a>`).join(""); return `
    <header class="absolute top-0 left-0 right-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div class="flex items-center gap-2">
           <div class="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
             <span class="text-[#C5A47E] font-bold text-xl">${a.logoText}</span>
           </div>
           <div class="text-white text-xl font-bold tracking-wide">${a.name}</div>
        </div>
        <nav class="hidden md:flex space-x-8 text-white/90 text-sm tracking-wide">
          ${i}
        </nav>
      </div>
    </header>
  `} function $() {
  return `
    <section class="relative h-[600px] flex items-center justify-center bg-cover bg-center" style="background-image: url('${o.bgImage}');">
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-5xl md:text-6xl font-serif font-bold mb-4 tracking-wider">${o.title}</h1>
        <p class="text-lg md:text-xl text-white/90 tracking-widest font-light">${o.subtitle}</p>
      </div>
      
      <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full shadow-lg flex flex-col items-center justify-center z-20">
         <span class="text-[#C5A47E] font-bold text-3xl">${a.logoText}</span>
         <span class="text-[10px] text-gray-500 uppercase tracking-widest mt-1">${a.est}</span>
      </div>
    </section>
  `} function C() {
  const i = d.items.map(e => `
    <div>
      <h3 class="text-lg font-bold text-gray-800 mb-3">${e.title}</h3>
      <p class="text-sm text-gray-500 leading-relaxed">${e.desc}</p>
    </div>
  `).join(""); return `
    <section class="pt-24 pb-16 text-center bg-white">
      <h2 class="text-2xl text-[#C5A47E] font-serif mb-12 tracking-widest">${d.title}</h2>
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        ${i}
      </div>
    </section>
  `} function E() {
  return `
    <section class="py-20 bg-[#F9F9F9]">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        <div class="md:w-1/3">
          <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">ABOUT</span>
          <h2 class="text-4xl font-serif text-[#C5A47E] mt-2 mb-6">${r.title}</h2>
          <p class="text-xl font-light text-gray-700 mb-8">${r.subtitle}</p>
          <a href="#" class="inline-block bg-[#5E5E5E] text-white px-8 py-3 text-sm tracking-wider hover:bg-gray-700 transition">了解更多</a>
        </div>
        <div class="md:w-2/3 text-gray-600 leading-loose text-sm">
          <p class="mb-6">${r.desc1}</p>
          <p>${r.desc2}</p>
        </div>
      </div>
    </section>
  `} function A() {
  return `
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-12">
          <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">PROFESSIONALS</span>
          <h2 class="text-4xl font-serif text-[#C5A47E] mt-2">專業諮詢</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${b.map(e => `
    <div class="group">
      <div class="overflow-hidden mb-4">
        <img src="${e.image}" alt="${e.name}" class="w-full h-[400px] object-cover object-top transition duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0">
      </div>
      <div class="border-l-2 border-[#C5A47E] pl-4">
        <span class="text-xs text-[#C5A47E] font-bold uppercase block mb-1">${e.role}</span>
        <h3 class="text-xl font-serif text-gray-800 mb-2">${e.name}</h3>
        <button class="text-xs text-gray-400 border border-gray-300 px-4 py-1 hover:bg-gray-50 hover:text-gray-600 transition">了解更多</button>
      </div>
    </div>
  `).join("")}
        </div>
      </div>
    </section>
  `} function L() {
  return `
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 text-center mb-16">
        <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">SERVICES</span>
        <h2 class="text-4xl font-serif text-[#C5A47E] mt-2">服務項目</h2>
      </div>

      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        ${w.map(e => `
    <div class="bg-white shadow-sm hover:shadow-md transition p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
      <img src="${e.image}" class="w-full md:w-1/2 h-48 object-cover" alt="${e.title}">
      <div class="text-left">
        <h3 class="text-xl font-bold text-gray-800 mb-3">${e.title}</h3>
        <p class="text-sm text-gray-500 leading-relaxed mb-4">${e.desc}</p>
      </div>
    </div>
  `).join("")}
      </div>
    </section>
  `} function j() {
  return `
    <footer class="bg-[#4A4A4A] text-white py-16">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
           <div class="flex items-center gap-2 mb-6">
             <div class="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
               <span class="text-[#C5A47E] font-bold text-sm">${a.logoText}</span>
             </div>
             <div class="text-white text-lg font-bold tracking-wide">${a.name}</div>
           </div>
           <div class="text-xs text-gray-400 space-y-2">
             <p>${a.address}</p>
             <p>電話: ${a.tel}</p>
             <p>傳真: ${a.fax}</p>
           </div>
        </div>
        
        <div class="flex gap-16 text-xs text-gray-400">
          <div class="space-y-3">
            <a href="#" class="block hover:text-white">關於我們</a>
            <a href="#" class="block hover:text-white">最新消息</a>
          </div>
          <div class="space-y-3">
            <a href="#" class="block hover:text-white">服務項目</a>
            <a href="#" class="block hover:text-white">聯絡我們</a>
          </div>
          <div class="space-y-3">
            <a href="#" class="block hover:text-white">隱私權政策</a>
          </div>
        </div>
      </div>
      <div class="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-gray-600 text-center text-[10px] text-gray-500">
        ${a.copyright}
      </div>
    </footer>
  `} const k = document.getElementById("app"); k.innerHTML = `
  <div class="font-sans text-[#333]">
    ${y()}
    ${$()}
    ${C()}
    ${E()}
    ${A()}
    ${L()}
    ${j()}
  </div>
`;
