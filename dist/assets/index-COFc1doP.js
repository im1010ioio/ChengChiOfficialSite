(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function m(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=m(e);fetch(e.href,s)}})();const p=""+new URL("hero-bg-CpzdxCFB.png",import.meta.url).href,g=""+new URL("team-1-Dc6TajJ2.png",import.meta.url).href,f=""+new URL("team-2-a_RqtDCS.png",import.meta.url).href,v=""+new URL("team-3-B_y2WU-I.png",import.meta.url).href,n=""+new URL("service-1-DjoT5pIv.png",import.meta.url).href,u=""+new URL("service-2-CBeHya_I.png",import.meta.url).href,h=""+new URL("service-3-CzHLCcNg.png",import.meta.url).href,a={name:"丞起聯合會計師事務所",logoText:"CC",est:"EST. 2025",address:"104695台北市中山區松江路71號4樓",tel:"02-25080750",fax:"02-25080750",copyright:"Copyright © 2025 丞起聯合會計師 All rights reserved."},x=[{name:"事務所簡介",href:"#"},{name:"服務項目",href:"#"},{name:"專業諮詢",href:"#"}],o={bgImage:p,title:"丞心創新，起勢未來",subtitle:"以高端專業與新世代思維，成為中小企業最值得信賴的成長夥伴"},d={title:"以專業築信任，以信任成價值",items:[{title:"專業深度",desc:"融合大型事務所之國際標準與豐富實務經驗，提供企業決策層最可信賴的專業建議。"},{title:"策略洞見",desc:"不止於稅務與財務，我們從產業結構與經營現況出發，協助企業掌握市場脈動，提前佈局。"},{title:"誠信信任",desc:"堅守獨立與客觀原則，長期以誠信與穩健的專業形象，贏得客戶信任。"},{title:"靈活服務",desc:"以專業為本、以需求為導向，提供高效率、精準且具延展性的顧問解決方案。"}]},l={title:"關於我們",subtitle:"專業×實務×信任，<br>為企業財務與稅務決策保駕護航。",desc1:"三位來自國際四大會計師事務所組成的會計師團隊，結合大型事務所經驗與財稅規劃專業，提供量身打造、最貼近企業需求的建議。",desc2:"丞起的核心理念是「以專業啟動價值，以洞見成就長遠」。<br>我們相信，真正的專業不僅是技術的展現，更在於理解企業的本質與發展脈絡，從數字背後看見策略，從合規之中創造價值。"},b=[{name:"盧文聰",role:"總顧問",image:g},{name:"廖憶慈",role:"會計師",image:f},{name:"張竹淵",role:"會計師",image:v}],w=[{title:"工商登記帳務服務",desc:"在台公司設立規劃、工商登記服務、外僑投資諮詢、帳務處理、帳務輔導、薪資委外、外僑個人所得稅、贈與稅及遺產稅申報等相關服務。",image:n},{title:"審計服務及確信服務",desc:"財務報表之查核簽證、營利事業所得稅結算申報查核簽證、特殊目的查核服務以及 政府專案查核。",image:u},{title:"稅務規劃",desc:"企業、個人、以及境內外稅務整體規劃方案。",image:h},{title:"法律服務",desc:`
            <a href="https://www.masterylawcy.com.tw/" target="_blank">辰勝法律事務所</a>專長：
            <ol>
                <li>勞資糾紛解決與管理。</li>
                <li>企業法律顧問、股東權益執行。</li>
                <li>契約擬定與校正。</li>
                <li>民、刑事訴訟案件。</li>
                <li>家族傳承規劃與遺產分割處理。</li>
            </ol>
        `,image:n}];function y(){const i=x.map(t=>`<a href="${t.href}" class="hover:text-white transition">${t.name}</a>`).join("");return`
    <header class="absolute top-0 left-0 right-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div class="flex items-center gap-2">
           <div class="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
             <span class="text-[#C5A47E] font-bold text-xl">${a.logoText}</span>
           </div>
           <div class="text-white text-xl font-bold tracking-wide">${a.name}</div>
        </div>
        <nav class="hidden md:flex space-x-8 text-white/90 tracking-wide">
          ${i}
        </nav>
      </div>
    </header>
  `}function $(){return`
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
  `}function C(){const i=d.items.map(t=>`
    <div>
      <h3 class="text-2xl font-bold text-gray-800 mb-3">${t.title}</h3>
      <p class="text-lg text-gray-500 leading-relaxed">${t.desc}</p>
    </div>
  `).join("");return`
    <section class="pt-24 pb-16 text-center bg-white">
      <h2 class="text-3xl text-[#C5A47E] mb-12 tracking-widest">${d.title}</h2>
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        ${i}
      </div>
    </section>
  `}function E(){return`
    <section class="py-20 bg-[#F9F9F9]">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        <div class="md:w-1/3">
          <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">ABOUT</span>
          <h2 class="text-4xl font-serif text-[#C5A47E] mt-2 mb-6">${l.title}</h2>
          <p class="text-xl font-light text-gray-700 mb-8">${l.subtitle}</p>
          <a href="#" class="inline-block bg-[#5E5E5E] text-white px-8 py-3 tracking-wider hover:bg-gray-700 transition">了解更多</a>
        </div>
        <div class="md:w-2/3 text-gray-600 leading-loose text-sm">
          <p class="mb-6">${l.desc1}</p>
          <p>${l.desc2}</p>
        </div>
      </div>
    </section>
  `}function A(){return`
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-12">
          <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">PROFESSIONALS</span>
          <h2 class="text-4xl font-serif text-[#C5A47E] mt-2">專業諮詢</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${b.map(t=>`
    <div class="group">
      <div class="overflow-hidden mb-4">
        <img src="${t.image}" alt="${t.name}" class="w-full h-[400px] object-cover object-top transition duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0">
      </div>
      <div class="border-l-2 border-[#C5A47E] pl-4">
        <span class="text-xs text-[#C5A47E] font-bold uppercase block mb-1">${t.role}</span>
        <h3 class="text-xl font-serif text-gray-800 mb-2">${t.name}</h3>
        <button class="text-xs text-gray-400 border border-gray-300 px-4 py-1 hover:bg-gray-50 hover:text-gray-600 transition">了解更多</button>
      </div>
    </div>
  `).join("")}
        </div>
      </div>
    </section>
  `}function j(){return`
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 text-center mb-16">
        <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">SERVICES</span>
        <h2 class="text-4xl font-serif text-[#C5A47E] mt-2">服務項目</h2>
      </div>

      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        ${w.map(t=>`
    <div class="bg-white shadow-sm hover:shadow-md transition p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
      <img src="${t.image}" class="w-full md:w-1/2 h-48 object-cover" alt="${t.title}">
      <div class="text-left">
        <h3 class="text-xl font-bold text-gray-800 mb-3">${t.title}</h3>
        <p class="text-gray-500 leading-relaxed mb-4">${t.desc}</p>
      </div>
    </div>
  `).join("")}
      </div>
    </section>
  `}function L(){const i=x.map(t=>`<a href="${t.href}" class="block hover:text-white">${t.name}</a>`).join("");return`
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
            ${i}
          </div>
        </div>
      </div>
      <div class="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-gray-600 text-center text-[10px] text-gray-500">
        ${a.copyright}
      </div>
    </footer>
  `}const k=document.getElementById("app");k.innerHTML=`
  <div class="font-sans text-[#333]">
    ${y()}
    ${$()}
    ${C()}
    ${E()}
    ${A()}
    ${j()}
    ${L()}
  </div>
`;
