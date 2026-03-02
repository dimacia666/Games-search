import './modal.scss';

export function initModal() { 
    const openBtn = document.querySelector('[data-open-modal]');
    if (!openBtn) return;
    openBtn.addEventListener('click', openModal);
}

function openModal() { 
    const markup = `
        <div class="modal" data-modal>
            <div class="modal__backdrop" data-close>
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
                        <input class="modal__input" placeholder="Search game..." />
                        <button type="button" class="modal__btn-close">
                             <svg class="modal__close-icon">
                                <use href="./assets/svg/icon.svg#close-modal"></use>
                        </svg>   
                        </button>
                    </label>
                    

                    
                    </section>
                </div>
             </div>
         </div>
  `;
    
    document.body.insertAdjacentHTML('beforeend', markup);
    document.body.style.overflow = 'hiden';

    addCloseHandlers();
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
