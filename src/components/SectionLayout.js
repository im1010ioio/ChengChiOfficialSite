export function SectionLayout({ title, content, className = "" }) {
    return `
    <section class="py-20 ${className}">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        <div class="md:w-1/4">
          <h2 class="text-3xl">${title}</h2>
        </div>
        <div class="md:w-3/4 leading-loose space-y-6">
          ${content}
        </div>
      </div>
    </section>
  `;
}
