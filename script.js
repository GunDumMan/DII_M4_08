function onOKclicked(e) {
    e.stopPropagation();
    alert('ok click')
}

function onCancelclicked(e) {
    alert('cancel click')
}

function onNoclicked(e) {
    alert('no click')
}

document.getElementById('container').onclick = function (e) {
    alert('container click')
}

document.getElementById('cancel').addEventListener('click', onCancelclicked)
document.getElementById('no').onclick = onNoclicked
