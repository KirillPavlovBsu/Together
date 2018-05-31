var inputRange_NODES = document.querySelectorAll('.range');
var valueInputRange_NODES = document.querySelectorAll('.valueRange')

var valueMin = inputRange_NODES[0].value,
    valueMax = inputRange_NODES[1].value;

valueInputRange_NODES[0].innerText = valueMin;
valueInputRange_NODES[1].innerText = valueMax;

function onInputRange() {
    valueMin = inputRange_NODES[0].value,
    valueMax = inputRange_NODES[1].value;
    
    valueInputRange_NODES[0].innerText = valueMin;
    valueInputRange_NODES[1].innerText = valueMax;
}