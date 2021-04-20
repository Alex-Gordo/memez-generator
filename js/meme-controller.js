'use strict'


function onInit() {
    renderImages()
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d')
}

function resizeCanvas() {
    var elContainer = document.querySelector('#my-canvas');
    // Note: changing the canvas dimension this way clears the canvas
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
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


function onOpenEditor() {
    var elModal = document.querySelector('.modal')
    elModal.innerHTML = strHTML
    elModal.style.display = 'flex'
}

function onCloseModal() {
    var elModal = document.querySelector('.modal')
    elModal.style.display = 'none'
}

function onChangeLine(text) {
    drawNewLine(text)
}

function onSwitchLine() {
    switchLine()
}

function onSelectMeme(imgSrc, id) {
    var currUrl = imgSrc
    drawImg(currUrl)
    updateImgId(id)
    setTimeout (() => onMarkSelectedLine(gCurrLine.posx,gCurrLine.posy), 100)
    //onOpenEditor()
}

function onMarkSelectedLine() {
    markSelectedLine(gCurrLine.posx,gCurrLine.posy)
}

function onUpdateTxtSize(diff) {
    updateTxtSize(diff)
}

function onUpdateTxtPos(diff) {
    updateTxtPos(diff)
}