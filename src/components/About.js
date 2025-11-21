import { aboutData } from '../data/content';

export function About() {
  return `
    <section class="py-20 bg-[#F9F9F9]">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        <div class="md:w-1/3">
          <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">ABOUT</span>
          <h2 class="text-4xl font-serif text-[#C5A47E] mt-2 mb-6">${aboutData.title}</h2>
          <p class="text-xl font-light text-gray-700 mb-8">${aboutData.subtitle}</p>
          <a href="about.html" class="inline-block bg-[#5E5E5E] text-white px-8 py-3 tracking-wider hover:bg-gray-700 transition">了解更多</a>
        </div>
        <div class="md:w-2/3 text-gray-600 leading-loose text-sm">
          <p class="mb-6">${aboutData.desc1}</p>
          <p>${aboutData.desc2}</p>
        </div>
      </div>
    </section>
  `;
}
