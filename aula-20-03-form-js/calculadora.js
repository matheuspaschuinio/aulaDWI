const form = document.getElementById('formCalculadora');
var input1 = document.getElementById('inputNum1');
var input2 = document.getElementById('inputNum2');

form.addEventListener('submit', function(event){
    event.preventDefault();

    var num1 = input1.value.trim();
    var num2 = input2.value.trim();

    if(num1 != '' && num2 != '') {
        var result = num1 * num2;

        const h1 = document.createElement('h1');

        h1.textContent = result.toString();

        document.body.appendChild(h1);
    }
})