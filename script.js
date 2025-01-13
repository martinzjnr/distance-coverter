const distanceInput = document.getElementById('distance');
const fromUnitSelect = document.getElementById('from-unit');
const toUnitSelect = document.getElementById('to-unit');
const convertButton = document.getElementById('convert-btn');
const resultParagraph = document.getElementById('result');

const conversionRates = {
    km: {
        km: 1,
        m: 1000,
        mi: 0.621371,
        yd: 1093.6133,
        ft: 3280.8399
    },
    m: {
        km: 0.001,
        m: 1,
        mi: 0.000621371,
        yd: 1.0936133,
        ft: 3.2808399
    },
    mi: {
        km: 1.60934,
        m: 1609.34,
        mi: 1,
        yd: 1760,
        ft: 5280
    },
    yd: {
        km: 0.0009144,
        m: 0.9144,
        mi: 0.000568182,
        yd: 1,
        ft: 3
    },
    ft: {
        km: 0.0003048,
        m: 0.3048,
        mi: 0.000189394,
        yd: 0.3333333,
        ft: 1
    }
};

convertButton.addEventListener('click', (e) => {
    e.preventDefault();
    const distance = parseFloat(distanceInput.value);
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;

    if (isNaN(distance) || distance <= 0) {
        resultParagraph.textContent = 'Please enter a valid distance.';
        return;
    }

    const convertedDistance = distance * conversionRates[fromUnit][toUnit];
    resultParagraph.textContent = `${distance} ${fromUnit} is equal to ${convertedDistance.toFixed(4)} ${toUnit}`;
});

// Add event listener to clear button
clearButton.addEventListener('click', () => {
    // Clear input fields
    distanceInput.value = '';
    fromUnitSelect.value = '';
    toUnitSelect.value = '';

    // Clear result paragraph
    resultParagraph.textContent = '';
});