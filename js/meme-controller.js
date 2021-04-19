'use strict'


function onInit(){
    console.log('hi world');
    //TODO : render all cards!
}


function onEditMeme(){
    var strHTML = `
    <div class="modal-header">
    <div class="title"> <button onclick="onCloseModal()" class="btn-close">&times;</button>
    </div>

    </div>
    </div>`
    var elModal = document.querySelector('.modal')
    var elOverlay = document.querySelector('.overlay')
    elModal.innerHTML = strHTML
    elModal.style.display = 'flex'
    elOverlay.style.display = 'flex'
}


function onCloseModal() {
    var elModal = document.querySelector('.modal')
    var elOverlay = document.querySelector('.overlay')
    elModal.style.display = 'none'
    elOverlay.style.display = 'none'
}