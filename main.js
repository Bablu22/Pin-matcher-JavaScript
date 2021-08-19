
document.getElementById('pin-btn').addEventListener('click', function () {
    const getPin = Math.round(Math.random() * 10000);
    const pinInput = document.getElementById('pin-input');
    if (('' + getPin).length == 4) {
        pinInput.value = getPin;
    }
})

document.getElementById('number').addEventListener('click', function (event) {
    const numberInput = document.getElementById('number-input');
    const previousNmuber = numberInput.value;
    const number = event.target.innerText;
    const newNumber = previousNmuber + number;
    if (isNaN(number) == false) {
        numberInput.value = newNumber;
    }
    if (number == 'C') {
        numberInput.value = '';
    }
    if (number == '<') {
        const clearNumber = numberInput.value.slice(0, -1)
        numberInput.value = clearNumber
    }
})


document.getElementById('submit-btn').addEventListener('click', function () {
    const pinInput = document.getElementById('pin-input').value;
    const numberInput = document.getElementById('number-input').value;
    const successMsg = document.getElementById('success-msg');
    const failMsg = document.getElementById('fail-msg');
    if (numberInput == pinInput) {

        successMsg.style.display = 'block';
        failMsg.style.display = 'none';
    }
    else {

        failMsg.style.display = 'block';
        successMsg.style.display = 'none';
    }
})


