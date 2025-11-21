import './styles/tailwind.css';
import './styles/main.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MemberProfile } from './components/MemberProfile';

document.querySelector('#app').innerHTML = `
  ${Header()}
  
  <!-- Spacer for fixed header -->
  <div class="h-24 bg-[#4A4A4A]"></div>

  <main>
    ${MemberProfile()}
  </main>
  ${Footer()}
`;
