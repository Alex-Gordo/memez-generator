'use strict'

var gCanvas
var gCtx
var gKeywords = { 'happy': 12, 'funny': 1 }

var gImgs = [
    { id: 1, url: './meme-img/1.jpg', keywords: ['trump'] },
    { id: 2, url: './meme-img/2.jpg', keywords: ['dog'] },
    { id: 3, url: './meme-img/3.jpg', keywords: ['dog', 'baby'] },
    { id: 4, url: './meme-img/4.jpg', keywords: ['cat', 'sleep'] },
]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'First line',
            size: 20,
            align: 'center',
            color: 'white',
            posx: 250,
            posy: 50,
        },
        {
            txt: 'Second line',
            size: 20,
            align: 'center',
            color: 'white',
            posx: 250,
            posy: 450,
        },
    ]
}

var gCurrLine = gMeme.lines[0]
var gCurrUrl

function onSwitchLine() { // bug when switching 
    var selectedIdx = gMeme.selectedLineIdx
    if (selectedIdx === 0) {
        selectedIdx = 1
        gCurrLine = gMeme.lines[1]
        return;
    }
    if (selectedIdx === 1) {
        selectedIdx = 0
        gCurrLine = gMeme.lines[0]
        return;
    }
}

function drawAllLines() { // renders all the lines
    gMeme.lines.map(function (line) {
        drawText(line.txt, line.posx, line.posy, line.size)
    })
}

function updateImgId(id) {
    gMeme.selectedImgId = id
}

function drawImg(url) {
    gCurrUrl = url // controls the selected image
    var img = new Image()
    img.src = gCurrUrl;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawAllLines()
    }
}

function drawText(text, x, y, fontSize) {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = gCurrLine.color
    gCtx.font = fontSize + 'px Impact'
    gCtx.textAlign = gCurrLine.align
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function drawNewLine(text) {
    gCurrLine.txt = text
    drawImg(gCurrUrl)
}

function onUpdateTxtSize(diff) {
    gCurrLine.size += diff
    drawImg(gCurrUrl)
}

function onUpdateTxtPos(diff) {
    gCurrLine.posy += diff
    drawImg(gCurrUrl)
    //drawText(line.txt, line.posx, line.posy)
    //drawAllLines()
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}


function getImgById(id) {
    return gImgs.find(function (img) {
        return img.id === id
    })
}


