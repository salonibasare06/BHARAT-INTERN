const calculatetemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (celsius) => {
        let fahrenheit = ((celsius * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fahrenheit) => {
        let celsius = ((fahrenheit - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'celsius') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + " Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + " Celsius";
    }
}