import { companyInfo, navLinks } from '../data/content';

export function Header() {
  const navItems = navLinks.map(link =>
    `<a href="${link.href}" class="hover:text-white transition">${link.name}</a>`
  ).join('');

  return `
    <header class="absolute top-0 left-0 right-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div class="flex items-center gap-2">
           <div class="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
             <span class="text-[#C5A47E] font-bold text-xl">${companyInfo.logoText}</span>
           </div>
           <div class="text-white text-xl font-bold tracking-wide">${companyInfo.name}</div>
        </div>
        <nav class="hidden md:flex space-x-8 text-white/90 tracking-wide">
          ${navItems}
        </nav>
      </div>
    </header>
  `;
}
