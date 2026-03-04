//Импорт стилей
import './styles/main.scss';


//Импорт банера
import bannerDesktop from './assets/images/baner.png';
import bannerMobile from './assets/images/baner-mob.png';

const banner = document.querySelector('.baner');

function updateBanner() {
  if (window.innerWidth <= 376) {
    banner.src = bannerMobile;
  } else {
    banner.src = bannerDesktop;
  }
}

updateBanner();
window.addEventListener('resize', updateBanner);

// импорт GameWiner
import { renderGameWiner } from './components/game_winer/game_winer';

// запуск рендера
renderGameWiner();

// импорт RecentGameCards
import { renderRecentGameCards } from './components/card/card';

// запуск рендера
renderRecentGameCards();

// импорт TopGamesGameCards
import { renderTopGamesGameCards } from './components/card/card';

// запуск рендера
renderTopGamesGameCards();

// импорт модалки
import { initModal } from './components/modal/modal';

// инициация модалки
initModal();


