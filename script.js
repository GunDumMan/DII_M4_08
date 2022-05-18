document.getElementById('ok').addEventListener('click', function (e) {
    alert('ok is clicked');
    console.log(e);
})

document.getElementById('cancel').addEventListener('mousemove', function (e) {
    console.log('x : ' + e.screenX + ' y: ' + e.screenY);
})

let elems = document.getElementsByClassName('flex-item');
console.log(elems);

for (elem of elems) {
    elem.addEventListener('mousemove', function (e) {
        console.log('x: ' + e.screenX + ' y: ' + e.screenY);
    })

}