//Импорт стилей
import './styles/main.scss';


//Импорт банера
import bannerImg from './assets/images/baner.png';
const banner = document.querySelector('.baner');
banner.src = bannerImg;

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