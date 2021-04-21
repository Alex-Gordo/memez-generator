'use strict'

var gCanvas
var gCtx
var gKeywords = { 'happy': 12, 'funny': 1 }
var gCurrFont = 'Impact'
var gCurrColor = 'white'
var gNumOfLines = 2

var gImgs = [
    { id: 1, url: './meme-img/1.jpg', keywords: ['trump'] },
    { id: 2, url: './meme-img/2.jpg', keywords: ['dog'] },
    { id: 3, url: './meme-img/3.jpg', keywords: ['dog', 'baby'] },
    { id: 4, url: './meme-img/4.jpg', keywords: ['cat', 'sleep'] },
    { id: 5, url: './meme-img/5.jpg', keywords: [] },
    { id: 6, url: './meme-img/6.jpg', keywords: [] },
    { id: 7, url: './meme-img/7.jpg', keywords: [] },
    { id: 8, url: './meme-img/8.jpg', keywords: [] },
    { id: 9, url: './meme-img/9.jpg', keywords: [] },
    { id: 10, url: './meme-img/10.jpg', keywords: [] },
    { id: 11, url: './meme-img/11.jpg', keywords: [] },
    { id: 12, url: './meme-img/12.jpg', keywords: [] },
    { id: 13, url: './meme-img/13.jpg', keywords: [] },
    { id: 14, url: './meme-img/14.jpg', keywords: [] },
    { id: 15, url: './meme-img/15.jpg', keywords: [] },
    { id: 16, url: './meme-img/16.jpg', keywords: [] },
    { id: 17, url: './meme-img/17.jpg', keywords: [] },
    { id: 18, url: './meme-img/18.jpg', keywords: [] },
    // { id: 19, url: './meme-img/19.jpg', keywords: [] },
    // { id: 20, url: './meme-img/20.jpg', keywords: [] },
]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'First line',
            size: 40,
            align: 'center',
            color: 'white',
            posx: 250,
            posy: 60,
        },
        {
            txt: 'Second line',
            size: 40,
            align: 'center',
            color: 'white',
            posx: 250,
            posy: 450,
        },
    ]
}

var gCurrLine = gMeme.lines[0]
var gCurrUrl

function removeSelectedLine() {
    var idx = gMeme.selectedLineIdx
    gMeme.lines.splice(idx, 1) //works and updates database
    gNumOfLines-- // updates number of lines
    gMeme.selectedLineIdx = gMeme.lines[0]
    gCurrLine = gMeme.lines[0] // go to first line , if not stop
    //render new situation
    renderImage()
}

function createNewLine(text) {
    var idx = gMeme.selectedLineIdx = gMeme.lines.length // select new line (index 2)
    gNumOfLines = (gMeme.lines.length + 1) // change global count of lines (3)
    //add a new object in the array lines
    gMeme.lines.push(
        {
            txt: 'New Line',
            size: 40,
            align: 'center',
            color: gCurrColor,
            posx: gCanvas.width / 2,
            posy: gCanvas.height / 2,
        }
    )
    gCurrLine = gMeme.lines[idx]
    //gCurrLine.txt = text
    drawText(gCurrLine.txt, gCurrLine.posx, gCurrLine.posy, gCurrLine.size)
    renderImage()
    markSelectedLine(gCurrLine.posx, gCurrLine.posy) //fix mark to not blink
}

function updateLineText(text) {
    gCurrLine.txt = text
    renderImage()
}

function switchLine() {
    renderImage()
    var idx = gMeme.selectedLineIdx
    if (idx === (gNumOfLines - 1)) {
        idx = 0
        gMeme.selectedLineIdx = idx
        gCurrLine = gMeme.lines[idx]
        markSelectedLine(gCurrLine.posx, gCurrLine.posy)
        return
    }
    idx++
    gMeme.selectedLineIdx = idx
    gCurrLine = gMeme.lines[idx]
    markSelectedLine(gCurrLine.posx, gCurrLine.posy)
}

function markSelectedLine(x, y) {
    setTimeout(() => {
        gCtx.lineWidth = 2
        gCtx.strokeStyle = 'white'
        gCtx.beginPath()
        gCtx.rect(x - 225, y - 50, 450, 80) // (x,y,width,height); // x.pos - width/2   // y.pos -(height-3)
        gCtx.stroke()
    }, 100)
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
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = gCurrColor
    //gCtx.fillStyle = gCurrLine.color   // take color from line property , TODO : pick color per line
    gCtx.font = fontSize + 'px ' + gCurrFont
    gCtx.textAlign = gCurrLine.align
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function updateTxtSize(diff) {
    gCurrLine.size += diff
    renderImage()
}

function updateTxtPos(diff) {
    gCurrLine.posy += diff
    renderImage()
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

function getImgById(id) {
    return gImgs.find(function (img) {
        return img.id === id
    })
}

function setFont(font) {
    gCurrFont = font;
    renderImage()
}

function setColor(color) {
    gCurrColor = color
    renderImage()
}

function setAlignLeft() {
    gCurrLine.align = 'right'
    renderImage()
}

function setAlignCenter() {
    gCurrLine.align = 'center'
    renderImage()
}

function setAlignRight() {
    gCurrLine.align = 'left'
    renderImage()
}

