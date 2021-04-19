'use strict'

var gCanvas
var gCtx
var gKeywords = { 'happy': 12, 'funny': 1 }

var gImgs = [
    { id: 1, url: '../meme-img/1.jpg', keywords: ['trump'] },
    { id: 2, url: '../meme-img/2.jpg', keywords: ['dog'] }
]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Your text here',
            size: 20,
            align: 'center',
            color: 'white'
        }
    ]
}

var gCurrLine = gMeme.lines[gMeme.selectedLineIdx]
var gCurrUrl



function drawImg(url) {
    gCurrUrl = url // controls the selected image
    var img = new Image()
    img.src = gCurrUrl;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText(gCurrLine.txt, 250, 50)
    }
}

function drawText(text, x, y) {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = gCurrLine.color
    gCtx.font = '25px Impact'
    gCtx.textAlign = gCurrLine.align
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function drawNewLine(text) {
    gCurrLine.txt = text
    drawImg(gCurrUrl)
}

function getImgById(id) {
    return gImgs.find(function (img) {
        return img.id === id
    })
}


