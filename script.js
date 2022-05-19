
let bordertrick = 20;
document.getElementById('ok').addEventListener('click', function (e) {
    bordertrick = bordertrick + 1;
    document.getElementById('cancel').style.marginRight = `${bordertrick}px`;
    document.getElementById('cancel').style.marginLeft = `${bordertrick}px`;
    document.getElementById('no').style.marginRight = `${bordertrick}px`;
    document.getElementById('no').style.marginLeft = `${bordertrick}px`;
})

const text = ["วิชานี้", "ง่าย", "จริงๆนะ", "OK"]
let i = 0
document.getElementById('no').addEventListener('dblclick', function (e) {
    document.getElementById('ok').innerText = text[i];
    if (i > 2) {
        i = 0
    } else {
        i++;
    }
})

