'use strict'

function saveToStorage() {
    localStorage.setItem(gCanvas, gCanvas.toDataURL());
}

function loadFromStorage() {
    var dataURL = localStorage.getItem(gCanvas);
    var img = new Image;
    img.src = dataURL;
    img.onload = function () {
        gCtx.drawImage(img, 0, 0);
    };
}


