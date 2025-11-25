import { servicesData } from '../data/content';

export function Services() {
  const servicesHtml = servicesData.map(service => `
    <div class="bg-white shadow-sm hover:shadow-md transition p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
      <img src="${service.image}" class="w-full md:w-1/2 h-48 object-cover" alt="${service.title}">
      <div class="text-left">
        <h3 class="text-xl font-bold text-gray-800 mb-3">${service.title}</h3>
        <p class="text-gray-500 leading-relaxed mb-4">${service.desc}</p>
      </div>
    </div>
  `).join('');

  return `
    <section id="services" class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 text-center mb-16">
        <span class="font-sans text-sm font-bold uppercase ">SERVICES</span>
        <h2 class="text-4xl text-[#B77449] font-bold mb-6">服務項目</h2>
      </div>

      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        ${servicesHtml}
      </div>
    </section>
  `;
}
