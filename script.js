document.getElementById('ok').addEventListener('click', function (e) {
    let noElement = document.getElementById('no');
    if (noElement.classList.contains('toggleOn')) {
        noElement.classList.replace('toggleOn', 'toggleOff');

    } else if (noElement.classList.contains('toggleOff')) {
        noElement.classList.replace('toggleOff', 'toggleOn');

    } else {
        noElement.classList.add('toggleOn')
    }
})