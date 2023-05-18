window.addEventListener('keydown', showKeyCodes);

function showKeyCodes(e){
    // Select insert
    const insert = document.getElementById('insert');
    insert.innerHTML = '';
    
    // Create object
    const keyCodes = {
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code
    }
    
    for( let key in keyCodes){
        // Create divs    
        const div = document.createElement('div');
        div.className = 'key';
        const small = document.createElement('small');
        
        // Create text nodes
        const keyText = document.createTextNode(key);
        const valueText = document.createTextNode(keyCodes[key]);

        // Append text nodes to elements
        small.appendChild(keyText);
        div.appendChild(valueText);
        div.appendChild(small);

        //Add div to dom
        insert.appendChild(div);
    }
}