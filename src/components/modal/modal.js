import { gamesCards } from '../card/card';
import './modal.scss';


export function initModal() { 
    const openBtn = document.querySelector('[data-open-modal]');
    if (!openBtn) return;
    openBtn.addEventListener('click', openModal);
}

function openModal() { 
    const markup = `
        <div class="modal" data-modal>
            <div class="modal__backdrop" data-close></div>
                <div class="modal__content">

                    <section class="modal__header">
                        <svg class="modal__icon">
                            <use href="./assets/svg/icon.svg#icon"></use>
                        </svg>
                        <h2 class="modal__heading">Search</h2>
                        <button class="modal__close-btn" data-close>
                            <svg class="modal__close-icon">
                                <use href="./assets/svg/icon.svg#close-modal"></use>
                            </svg>
                        </button>
                    </section>

                    <section class="modal__search">
                        <p class="modal__text" >Enter the game titel in the search below</p>

                        <label class="modal__label" for="modal__input">
                            <svg class="modal__search-icon">
                                <use href="./assets/svg/icon.svg#btn-search-modal"></use>
                            </svg>
                            <input class="modal__input" placeholder="Search" />
                            <button type="button" class="modal__btn-close">
                                <svg class="modal__close-icon">
                                    <use href="./assets/svg/icon.svg#close-modal"></use>
                                </svg>   
                            </button>
                        </label>
                    </section>
                    <section class="modal__top-games">
                        <h2 class="modal__top-games-heading">Top games</h2>
                        <ul class="modal__games-list"></ul>
                    </section>
                </div>
         </div>
  `;
    
    document.body.insertAdjacentHTML('beforeend', markup);
    document.body.style.overflow = 'hiden';

    addCloseHandlers();
    renderSearchGameCards();
}

function closeModal() { 
    const modal = document.querySelector('[data-modal]');
    if (!modal) return;

    modal.remove();
    document.body.style.overflow = '';
}

function addCloseHandlers() { 
    const modal = document.querySelector('[data-modal]');
    const closeEls = document.querySelectorAll('[data-close]');

    closeEls.forEach(el => { 
        el.addEventListener('click', closeModal);
    })
    document.addEventListener('keydown', escHandles);
}


//Function close modal for kay "ESC" 
function escHandles(){ 
    if (escHandles.kay === 'Escape') { 
        closeModal();
        document.removeEventListener('keydown',escHandles);
    }
}

//Function search games 
export function renderSearchGameCards() {
  const input = document.querySelector(".modal__input");
  const container = document.querySelector(".modal__games-list");

  function render(gamesArray) {
    const markup = gamesArray
      .slice(0, 9)
      .map(({ gameImg, gameName }) => `
        <li class="modal__game-card">
          <img src="${gameImg}" alt="${gameName}" class="modal__game-card-image" />
          <div class="modal__game-card-text">
            <svg class="modal__game-card-provider">
              <use href="./assets/svg/icon.svg#provider"></use>
            </svg>
            <p class="modal__game-card-title">${gameName}</p>
          </div>
        </li>
      `)
      .join("");

    container.innerHTML = markup;
  }

  render(gamesCards);

  input.addEventListener("input", event => {
    const query = event.target.value.toLowerCase().trim();

    if (!query) {
      render(gamesCards);
      return;
    }

    const filteredGames = gamesCards.filter(game =>
      game.gameName.toLowerCase().includes(query)
    );

    render(filteredGames);
  });
}