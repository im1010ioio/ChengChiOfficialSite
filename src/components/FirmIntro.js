import { aboutPageData } from '../data/content';
import { SectionLayout } from './SectionLayout';

export function FirmIntro() {
    const contentHtml = aboutPageData.intro.content.map(p => `<p>${p}</p>`).join('');

    return SectionLayout({
        title: aboutPageData.intro.title,
        content: contentHtml,
        className: "bg-[#F4F3F1]"
    });
}
