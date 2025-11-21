import { heroData, companyInfo } from '../data/content';

export function Hero() {
    return `
    <section class="relative h-[600px] flex items-center justify-center bg-cover bg-center" style="background-image: url('${heroData.bgImage}');">
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-5xl md:text-6xl font-serif font-bold mb-4 tracking-wider">${heroData.title}</h1>
        <p class="text-lg md:text-xl text-white/90 tracking-widest font-light">${heroData.subtitle}</p>
      </div>
      
      <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full shadow-lg flex flex-col items-center justify-center z-20">
         <span class="text-[#C5A47E] font-bold text-3xl">${companyInfo.logoText}</span>
         <span class="text-[10px] text-gray-500 uppercase tracking-widest mt-1">${companyInfo.est}</span>
      </div>
    </section>
  `;
}
