import { sloganData } from '../data/content';

export function Slogan() {
    const itemsHtml = sloganData.items.map(item => `
    <div>
      <h3 class="text-lg font-bold text-gray-800 mb-3">${item.title}</h3>
      <p class="text-sm text-gray-500 leading-relaxed">${item.desc}</p>
    </div>
  `).join('');

    return `
    <section class="pt-24 pb-16 text-center bg-white">
      <h2 class="text-2xl text-[#C5A47E] font-serif mb-12 tracking-widest">${sloganData.title}</h2>
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        ${itemsHtml}
      </div>
    </section>
  `;
}
