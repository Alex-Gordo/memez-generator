'use strict'


function onInit() {
    renderImages()
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d')
}

function renderImages() {
    //var images = loadFromStorage(KEY) //add storage later
    var strHTML = gImgs.map(function (image) {
        return `
        <div class="card">
        <img class="card-image" onclick="onSelectMeme(this.src,${image.id})" src="./meme-img/${image.id}.jpg" alt="meme-image">
        </div>
        `
    })
    document.querySelector('.card-container').innerHTML = strHTML.join('');
}

function onChangeLine(text) {
    drawNewLine(text)
}

function onSelectMeme(imgSrc, id) {
    var currUrl = imgSrc
    drawImg(currUrl)
    updateImgId(id)
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