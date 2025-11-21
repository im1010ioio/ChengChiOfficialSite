import { companyInfo, navLinks } from '../data/content';

export function Footer() {
  const linksHtml = navLinks.map(link =>
    `<a href="${link.href}" class="block hover:text-white">${link.name}</a>`
  ).join('');

  return `
    <footer class="bg-[#4A4A4A] text-white py-16">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
           <div class="flex items-center gap-2 mb-6">
             <div class="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
               <span class="text-[#C5A47E] font-bold text-sm">${companyInfo.logoText}</span>
             </div>
             <div class="text-white text-lg font-bold tracking-wide">${companyInfo.name}</div>
           </div>
           <div class="text-xs text-gray-400 space-y-2">
             <p>${companyInfo.address}</p>
             <p>電話: ${companyInfo.tel}</p>
             <p>傳真: ${companyInfo.fax}</p>
           </div>
        </div>
        
        <div class="flex gap-16 text-xs text-gray-400">
          <div class="space-y-3">
            ${linksHtml}
          </div>
        </div>
      </div>
      <div class="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-gray-600 text-center text-[10px] text-gray-500">
        ${companyInfo.copyright}
      </div>
    </footer>
  `;
}
