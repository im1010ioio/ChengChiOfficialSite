import heroBg from '../assets/hero-bg.png';
import team1 from '../assets/team-1.png';
import team2 from '../assets/team-2.png';
import team3 from '../assets/team-3.png';
import service1 from '../assets/service-1.png';
import service2 from '../assets/service-2.png';
import service3 from '../assets/service-3.png';
import service4 from '../assets/service-1.png'; // Reusing service 1

export const companyInfo = {
    name: "丞起聯合會計師事務所",
    logoText: "CC",
    est: "EST. 2025",
    address: "104695台北市中山區松江路71號4樓",
    tel: "02-25080750",
    fax: "02-25080750",
    email: "",
    taxId: "",
    copyright: "Copyright © 2025 丞起聯合會計師 All rights reserved."
};

export const navLinks = [
    { name: "事務所簡介", href: "#" },
    { name: "服務項目", href: "#" },
    { name: "專業諮詢", href: "#" }
];

export const heroData = {
    bgImage: heroBg,
    title: "丞心創新，起勢未來",
    subtitle: "以高端專業與新世代思維，成為中小企業最值得信賴的成長夥伴"
};

export const sloganData = {
    title: "以專業築信任，以信任成價值",
    items: [
        { title: "專業深度", desc: "融合大型事務所之國際標準與豐富實務經驗，提供企業決策層最可信賴的專業建議。" },
        { title: "策略洞見", desc: "不止於稅務與財務，我們從產業結構與經營現況出發，協助企業掌握市場脈動，提前佈局。" },
        { title: "誠信信任", desc: "堅守獨立與客觀原則，長期以誠信與穩健的專業形象，贏得客戶信任。" },
        { title: "靈活服務", desc: "以專業為本、以需求為導向，提供高效率、精準且具延展性的顧問解決方案。" }
    ]
};

export const aboutData = {
    title: "關於我們",
    subtitle: "專業×實務×信任，<br>為企業財務與稅務決策保駕護航。",
    desc1: "三位來自國際四大會計師事務所組成的會計師團隊，結合大型事務所經驗與財稅規劃專業，提供量身打造、最貼近企業需求的建議。",
    desc2: "丞起的核心理念是「以專業啟動價值，以洞見成就長遠」。<br>我們相信，真正的專業不僅是技術的展現，更在於理解企業的本質與發展脈絡，從數字背後看見策略，從合規之中創造價值。"
};

export const teamData = [
    { name: "盧文聰", role: "總顧問", image: team1 },
    { name: "廖憶慈", role: "會計師", image: team2 },
    { name: "張竹淵", role: "會計師", image: team3 }
];

export const servicesData = [
    { title: "工商登記帳務服務", desc: "在台公司設立規劃、工商登記服務、外僑投資諮詢、帳務處理、帳務輔導、薪資委外、外僑個人所得稅、贈與稅及遺產稅申報等相關服務。", image: service1 },
    { title: "審計服務及確信服務", desc: "財務報表之查核簽證、營利事業所得稅結算申報查核簽證、特殊目的查核服務以及 政府專案查核。", image: service2 },
    { title: "稅務規劃", desc: "企業、個人、以及境內外稅務整體規劃方案。", image: service3 },
    {
        title: "法律服務",
        desc: `
            <a href="https://www.masterylawcy.com.tw/" target="_blank">辰勝法律事務所</a>專長：
            <ol>
                <li>勞資糾紛解決與管理。</li>
                <li>企業法律顧問、股東權益執行。</li>
                <li>契約擬定與校正。</li>
                <li>民、刑事訴訟案件。</li>
                <li>家族傳承規劃與遺產分割處理。</li>
            </ol>
        `,
        image: service4
    }
];
