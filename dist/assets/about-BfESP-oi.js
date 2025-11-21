import{d as i,H as o,F as n}from"./Footer-CkjUJuzT.js";function a({title:t,content:s,className:l=""}){return`
    <section class="py-20 ${l}">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        <div class="md:w-1/4">
          <h2 class="text-3xl font-serif text-gray-800 tracking-widest">${t}</h2>
        </div>
        <div class="md:w-3/4 text-gray-600 leading-loose text-sm space-y-6">
          ${s}
        </div>
      </div>
    </section>
  `}function c(){const t=i.intro.content.map(s=>`<p>${s}</p>`).join("");return a({title:i.intro.title,content:t,className:"bg-[#F9F9F9]"})}function d(){const t=`
    <p class="font-bold text-gray-800 mb-4">${i.philosophy.subtitle}</p>
    ${i.philosophy.content.map(s=>`<p>${s}</p>`).join("")}
  `;return a({title:i.philosophy.title,content:t,className:"bg-white"})}const p="https://placehold.co/600x400/e2e8f0/475569?text=Map+Placeholder";function r(){const{info:t,transport:s}=i.contact,l=`
    <div class="mb-12">
      <img src="${p}" alt="Location Map" class="w-full rounded-lg shadow-sm mb-8">
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h3 class="text-xl font-serif text-gray-800 mb-6">聯絡方式</h3>
        <div class="space-y-2 text-gray-600">
          <p>電話 : ${t.tel}</p>
          <p>傳真 : ${t.fax}</p>
          <p>地址 : ${t.address}</p>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-serif text-gray-800 mb-6">交通資訊</h3>
        <div class="space-y-6 text-gray-600">
          <div>
            <p class="font-bold mb-1">捷運 :</p>
            <ul class="list-disc list-inside pl-2">
              <li>${s.mrt}</li>
            </ul>
          </div>
          <div>
            <p class="font-bold mb-1">停車場 :</p>
            <ul class="list-disc list-inside pl-2">
              ${s.parking.map(e=>`<li>${e}</li>`).join("")}
            </ul>
          </div>
          <div>
            <p class="font-bold mb-1">公車 :</p>
            <ul class="list-disc list-inside pl-2">
              ${s.bus.map(e=>`<li>${e}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;return a({title:i.contact.title,content:l,className:"bg-white"})}const m=document.getElementById("app");m.innerHTML=`
  <div class="font-sans text-[#333]">
    ${o()}
    
    <!-- Spacer for fixed header -->
    <div class="h-24 bg-[#4A4A4A]"></div>

    ${c()}
    ${d()}
    ${r()}
    
    ${n()}
  </div>
`;
