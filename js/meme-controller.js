'use strict'

function onInit() {
    renderImages()
}

function resizeCanvas() {
    var elContainer = document.querySelector('#my-canvas');
    // Note: changing the canvas dimension this way clears the canvas
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
}

function renderImages() {
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
    var strHTML =
        `
        <div class="title"> <button onclick="onCloseModal()" class="btn-close">&times;</button>
        <div class="canvas-container container flex align-center">
            <canvas id="my-canvas" width="500" height="500">
                Update your browser to enjoy canvas!
            </canvas>
            <form>
                <div class="text-input-container container flex align-center">
                    <input oninput="onChangeLine(this.value)" type="text" name="text" placeholder="Enter your text..">
                </div>
                <div class="settings-container container flex align-center">
                    <p class="font-setting-container flex align-center">
                        <label for="textColor">Text Color:</label>
                        <input type="color" onchange="onSetColor(this.value)" name="textColor" />
                        <label for="chooseFont">Font:</label>
                        <select class="chooseFont" onchange="onSetFont(this.value)">
                            <option value="impact">Impact</option>
                            <option value="rock">Rock</option>
                        </select>
                    </p>
                    <img src="./icons/increase font - icon.png" alt="text-size-up" onclick="onUpdateTxtSize(5)"></button>
                    <img src="./icons/decrease font - icon.png" alt="text-size-down" onclick="onUpdateTxtSize(-5)"></button>
                    <img src="./icons/arrow-up.png" alt="text-position-up" onclick="onUpdateTxtPos(-20)"></button>
                    <img src="./icons/arrow-down.png" alt="text-position-down" onclick="onUpdateTxtPos(20)"></button>
                    <img src="./icons/up-and-down-opposite-double-arrows-side-by-side.png" alt="switch-line"
                        onclick="onSwitchLine()"></button>
                    <img src="./icons/align-to-left.png" alt="align-left" onclick="onAlignLeft()"></button>
                    <img src="./icons/center-text-alignment.png" alt="align-center" onclick="onAlignCenter()"></button>
                    <img src="./icons/align-to-right.png" alt="align-right" onclick="onAlignRight()"></button>
                    <img src="./icons/trash.png" alt="delete-line" onclick="onRemoveSelectedLine()"></button>
                    <img src="./icons/add.png" alt="add-line" onclick="onCreateNewLine()"></button>
                    <button class="save-btn" onclick="onSaveMeme(event)">Save meme to gallery</button>
                    <a href="#" onclick="downloadCanvas(this)" download="">Download meme</a>
                    <form action="" method="POST" enctype="multipart/form-data" onsubmit="uploadImg(this, event)">
                        <input name="img" id="imgData" type="hidden" />
                        <button class="btn" type="submit">Share on Facebook</button>
                    </form>
                    <div class="share-container"></div>
                </div>
            </form>
        </div>
        `
    elModal.innerHTML = strHTML
    elModal.style.display = 'flex'
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d')
}

function onCloseModal() {
    var elModal = document.querySelector('.modal')
    elModal.style.display = 'none'
    clearCanvas()
}

function onChangeLine(text) {
    updateLineText(text)
}

function onSwitchLine() {
    switchLine()
}

function onSelectMeme(imgSrc, id) {
    var currUrl = imgSrc
    drawImg(currUrl)
    updateImgId(id)
    setTimeout(() => onMarkSelectedLine(gCurrLine.posx, gCurrLine.posy), 100)
    onOpenEditor()
}

function onMarkSelectedLine() {
    markSelectedLine(gCurrLine.posx, gCurrLine.posy)
}

function onUpdateTxtSize(diff) {
    updateTxtSize(diff)
    onMarkSelectedLine()
}

function onUpdateTxtPos(diff) {
    updateTxtPos(diff)
    onMarkSelectedLine()
}

function onSetFont(font) {
    setFont(font);
}

function onSetColor(color) {
    setColor(color);
}

function onAlignLeft() {
    setAlignLeft()
}

function onAlignCenter() {
    setAlignCenter()
}

function onAlignRight() {
    setAlignRight()
}

function onRemoveSelectedLine() {
    removeSelectedLine()
    onMarkSelectedLine()
}

function onCreateNewLine() {
    createNewLine()
    onMarkSelectedLine()
}

function renderImage() {
    drawImg(gCurrUrl)
}

function onSaveMeme(ev){
    ev.preventDefault()
    saveMeme()
}

