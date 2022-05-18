
document.getElementById('cancel').addEventListener('mousemove', function (e) {
    console.log('x : ' + e.screenX + ' y: ' + e.screenY);
})

let elems = document.getElementsByClassName('flex-item');
console.log(elems);

for (let elem of elems) {
    elem.addEventListener('mousemove', function (e) {
        console.log('x: ' + e.screenX + ' y: ' + e.screenY);
    })

    elem.addEventListener('click', function (e) {
        alert(elem.innerText);
    })
}
