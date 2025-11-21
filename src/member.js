import './styles/tailwind.css';
import './styles/main.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MemberProfile } from './components/MemberProfile';

document.querySelector('#app').innerHTML = `
  ${Header()}
  <main>
    ${MemberProfile()}
  </main>
  ${Footer()}
`;
