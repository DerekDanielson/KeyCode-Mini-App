window.addEventListener('keydown', showKeyCodes);

function showKeyCodes(e){
    const insert = document.getElementById('insert');

    const keyCodes = {
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code
    }
    console.log(keyCodes);
}