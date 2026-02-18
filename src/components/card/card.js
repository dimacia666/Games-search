import alienFruits from '../../assets/images/Alien fruits.png';
import candyMonsta from '../../assets/images/Candy monsta.png';
import diceBonanza from '../../assets/images/Dice bonanza.png';
import duelOfDawn from '../../assets/images/Duel of dawn.png';
import hottest666 from '../../assets/images/Hottest 666.png';
import luckAndMagic from '../../assets/images/Luck and magic.png';
import luckyBlue from '../../assets/images/Lucky blue.png';
import mechanicalClover from '../../assets/images/Mechanical clover.png';
import missCherryFruits from '../../assets/images/Miss cherry fruits.png';
import moneyTree from '../../assets/images/Money tree.png';
import parrotsGold from '../../assets/images/Parrots gold.png';
import richPiggies2 from '../../assets/images/Rich piggies 2.png';
import wildCash from '../../assets/images/Wild cash.png';
import './card.scss';

const gamesCards = [{
    gameImg: alienFruits,
    gameName: "Alien fruits",
    tag: 'top games',
},{
    gameImg: candyMonsta,
    gameName: "Candy monsta",
    tag: 'top games',
},{
    gameImg: diceBonanza,
    gameName: "Dice bonanza",
    tag: 'top games',
},{
    gameImg: duelOfDawn,
    gameName: "Duel of dawn",
    tag: 'recent',
},{
    gameImg: hottest666,
    gameName: "Hottest 666",
    tag: 'top games',
},{
    gameImg: luckAndMagic,
    gameName: "Luck and magic",
    tag: 'top games',
},{
    gameImg: luckyBlue,
    gameName: "Lucky blue",
    tag: 'top games',
},{
    gameImg: mechanicalClover,
    gameName: "Mechanical clover",
    tag: 'recent',
},{
    gameImg: missCherryFruits,
    gameName: "Miss cherry fruits",
    tag: 'recent',
},{
    gameImg: moneyTree,
    gameName: "Money tree",
    tag: 'new',
},{
    gameImg: parrotsGold,
    gameName: "Parrots gold",
    tag: 'recent',
},{
    gameImg: richPiggies2,
    gameName: "Rich piggies 2",
    tag: 'recent',
},{
    gameImg: wildCash,
    gameName: "Wild cash",
    tag: 'recent',
    },]


//Games Resent
    
export function renderRecentGameCards() {
  const container = document.querySelector(".resent-game-cards");

  const markup = gamesCards
    .filter(game => game.tag === "recent")
    .map(({ gameImg, gameName, tag }) => `
      <li class="game-card">
      
          <img src="${gameImg}" alt="${gameName}" class="game-card-image" />
        <div class="game-card-text">
          <svg class="game-card-provider">
            <use href="./assets/svg/icon.svg#provider"></use>
          </svg>
        <p class="game-card-title">${gameName}</p>
        </div>
      </li>
    `)
    .join("");

  container.innerHTML = markup;
}

// Games Top Games

export function renderTopGamesGameCards() {
  const container = document.querySelector(".top-games-game-cards");

  const markup = gamesCards
    .filter(game => game.tag === "top games")
    .map(({ gameImg, gameName, tag }) => `
      <li class="game-card">
      
          <img src="${gameImg}" alt="${gameName}" class="game-card-image" />
        <div class="game-card-text">
          <svg class="game-card-provider">
            <use href="./assets/svg/icon.svg#provider"></use>
          </svg>
        <p class="game-card-title">${gameName}</p>
        </div>
      </li>
    `)
    .join("");

  container.innerHTML = markup;
}