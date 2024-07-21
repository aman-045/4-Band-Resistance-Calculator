function calcResistance() {
    const select1 = document.getElementById('select1');
    const select2 = document.getElementById('select2');
    const select3 = document.getElementById('select3');
    const select4 = document.getElementById('select4');

    const firstBand = select1.selectedIndex;
    const secondBand = select2.selectedIndex;
    const thirdBand = select3.selectedIndex;
    const tolerance = select4.options[select4.selectedIndex].text.split('-')[1].trim();

    const resistanceValue = ((firstBand * 10) + secondBand) * Math.pow(10, thirdBand);
    const result = `${resistanceValue}Ω ± ${tolerance}`;

    document.getElementById('result').innerText = result;
}