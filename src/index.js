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