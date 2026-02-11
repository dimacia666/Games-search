import gameWinerImg from '../../assets/images/game-winer.png';
import './game_winer.scss';

const gameWiner = [{
    gameImg: gameWinerImg,
    gameName: "Game name",
    sumWin: "$ 400",
    userName: "User***-",
},
{
    gameImg: gameWinerImg,
    gameName: "Game name",
    sumWin: "$ 400",
    userName: "User***-",
  },
{
    gameImg: gameWinerImg,
    gameName: "Game name",
    sumWin: "$ 400",
    userName: "User***-",
  },
{
    gameImg: gameWinerImg,
    gameName: "Game name",
    sumWin: "$ 400",
    userName: "User***-",
  },
{
    gameImg: gameWinerImg,
    gameName: "Game name",
    sumWin: "$ 400",
    userName: "User***-",
},{
    gameImg: gameWinerImg,
    gameName: "Game name",
    sumWin: "$ 400",
    userName: "User***-",
},{
    gameImg: gameWinerImg,
    gameName: "Game name",
    sumWin: "$ 400",
    userName: "User***-",
},{
    gameImg: gameWinerImg,
    gameName: "Game name",
    sumWin: "$ 400",
    userName: "User***-",
},{
    gameImg: gameWinerImg,
    gameName: "Game name",
    sumWin: "$ 400",
    userName: "User***-",
},]

export function renderGameWiner() {
  const gameWinerCards = document.querySelector(".game-winer-cards");

  let cards = "";

  for (const { gameImg, gameName, sumWin, userName } of gameWiner) {
    cards += `
      <li class="card">
        <img
          class="game-winer-image"
          src="${gameImg}"
          alt="Game winner image"
        />
        <div class="game-winer-text">
          <p class="gameName">${gameName}</p>
          <p class="sumWin">${sumWin}</p>
          <p class="userName">${userName}</p>
        </div>
  </li>
`;
  }

  gameWinerCards.innerHTML = cards;
}