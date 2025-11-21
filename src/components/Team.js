import { teamData } from '../data/content';

export function Team() {
  const membersHtml = teamData.map(member => `
    <div class="group">
      <div class="overflow-hidden mb-4">
        <img src="${member.image}" alt="${member.name}" class="w-full h-[400px] object-cover object-top transition duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0">
      </div>
      <div class="border-l-2 border-[#C5A47E] pl-4">
        <span class="text-xs text-[#C5A47E] font-bold uppercase block mb-1">${member.role}</span>
        <h3 class="text-xl font-serif text-gray-800 mb-2">${member.name}</h3>
        <a href="./member.html?id=${member.id}" class="inline-block text-xs text-gray-400 border border-gray-300 px-4 py-1 hover:bg-gray-50 hover:text-gray-600 transition">了解更多</a>
      </div>
    </div>
  `).join('');

  return `
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-12">
          <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">PROFESSIONALS</span>
          <h2 class="text-4xl font-serif text-[#C5A47E] mt-2">專業諮詢</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${membersHtml}
        </div>
      </div>
    </section>
  `;
}
