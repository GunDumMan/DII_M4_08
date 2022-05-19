let elems = document.getElementsByClassName('flex-item')
for (let elem of elems) {
    elem.addEventListener('click', function (e) {
        e.stopPropagation();
        document.getElementById('empty').innerText += ' ' + (elem.innerText);
    })
}

document.getElementById('container').addEventListener('click', function (e) {
    document.getElementById('empty').innerText = '';
})



