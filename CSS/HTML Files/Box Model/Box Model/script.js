document.querySelectorAll('.input-element input').forEach(function(item) {
    item.addEventListener('input', function(e) {
        if(item.id === 'border') {
            document.getElementById('box-model-element').style.border = `${item.value}px solid rgb(2 117 255)`;
        }
        else {
            document.getElementById('box-model-element').style[`${item.id}`] = `${item.value}px`;
        }
    })
})