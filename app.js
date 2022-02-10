
$(document).ready(function () {


    $('#CalculateButton').on('click', function () {
        console.log('button clicked');

        let num1Value = $('#num1').val();
        let num2Value = $('#num2').val();
        console.log(num1Value);
        console.log(num2Value);

        let x = parseFloat(num1Value);
        let y = parseFloat(num2Value);

        if (num1Value.length == 0 || num2Value.length == 0) {
            alert("please enter value");
        } else {
            let selectedValue = $('#atcOperations').val();
            console.log(selectedValue);
            let resultValue;
            if (selectedValue == "addition") {
                resultValue = addition(x, y);
            } else if (selectedValue == "subtraction") {
                resultValue = subtraction(x, y);
            } else if (selectedValue == "multiplication") {
                resultValue = multiplication(x, y);
            } else {
                resultValue = division(x, y);
            }

            $('#resultValue').text(" " + resultValue);
        }



    });

    function addition(x, y) {
        return z = x + y;
    }

    function subtraction(x, y) {
        return z = x - y;
    }

    function multiplication(x, y) {
        return z = x * y;
    }

    function division(x, y) {
        return z = x / y;
    }

});


