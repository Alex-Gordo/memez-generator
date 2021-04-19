'use strict'


function onInit() {
    //TODO : render all cards!
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d')
}

function onChangeLine(text) {
    drawNewLine(text)
}

function onSelectMeme(imgId) {
    var currUrl = imgId
    drawImg(currUrl)
}


// function onEditMeme() {
//     var strHTML = `
//     <div class="modal-header">
//     <div class="title"> <button onclick="onCloseModal()" class="btn-close">&times;</button>
//     </div>

//     </div>
//     </div>`
//     var elModal = document.querySelector('.modal')
//     var elOverlay = document.querySelector('.overlay')
//     elModal.innerHTML = strHTML
//     elModal.style.display = 'flex'
//     elOverlay.style.display = 'flex'
// }


// function onCloseModal() {
//     var elModal = document.querySelector('.modal')
//     var elOverlay = document.querySelector('.overlay')
//     elModal.style.display = 'none'
//     elOverlay.style.display = 'none'
// }