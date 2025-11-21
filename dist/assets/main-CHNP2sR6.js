import{h as a,c as l,s as i,a as e,t as o,b as c,H as r,F as n}from"./Footer-CkjUJuzT.js";function x(){return`
    <section class="relative h-[600px] flex items-center justify-center bg-cover bg-center" style="background-image: url('${a.bgImage}');">
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-5xl md:text-6xl font-serif font-bold mb-4 tracking-wider">${a.title}</h1>
        <p class="text-lg md:text-xl text-white/90 tracking-widest font-light">${a.subtitle}</p>
      </div>
      
      <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full shadow-lg flex flex-col items-center justify-center z-20">
         <span class="text-[#C5A47E] font-bold text-3xl">${l.logoText}</span>
         <span class="text-[10px] text-gray-500 uppercase tracking-widest mt-1">${l.est}</span>
      </div>
    </section>
  `}function d(){const s=i.items.map(t=>`
    <div>
      <h3 class="text-2xl font-bold text-gray-800 mb-3">${t.title}</h3>
      <p class="text-lg text-gray-500 leading-relaxed">${t.desc}</p>
    </div>
  `).join("");return`
    <section class="pt-24 pb-16 text-center bg-white">
      <h2 class="text-3xl text-[#C5A47E] mb-12 tracking-widest">${i.title}</h2>
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        ${s}
      </div>
    </section>
  `}function g(){return`
    <section class="py-20 bg-[#F9F9F9]">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        <div class="md:w-1/3">
          <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">ABOUT</span>
          <h2 class="text-4xl font-serif text-[#C5A47E] mt-2 mb-6">${e.title}</h2>
          <p class="text-xl font-light text-gray-700 mb-8">${e.subtitle}</p>
          <a href="about.html" class="inline-block bg-[#5E5E5E] text-white px-8 py-3 tracking-wider hover:bg-gray-700 transition">了解更多</a>
        </div>
        <div class="md:w-2/3 text-gray-600 leading-loose text-sm">
          <p class="mb-6">${e.desc1}</p>
          <p>${e.desc2}</p>
        </div>
      </div>
    </section>
  `}function p(){return`
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-12">
          <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">PROFESSIONALS</span>
          <h2 class="text-4xl font-serif text-[#C5A47E] mt-2">專業諮詢</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${o.map(t=>`
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
  `}function m(){return`
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 text-center mb-16">
        <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">SERVICES</span>
        <h2 class="text-4xl font-serif text-[#C5A47E] mt-2">服務項目</h2>
      </div>

      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        ${c.map(t=>`
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
  `}const b=document.getElementById("app");b.innerHTML=`
  <div class="font-sans text-[#333]">
    ${r()}
    ${x()}
    ${d()}
    ${g()}
    ${p()}
    ${m()}
    ${n()}
  </div>
`;
