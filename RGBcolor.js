let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let colorText = document.querySelector("#color-text");
    let randomColor = getRandomColor();
    colorText.innerText = randomColor;
    let colorBox = document.querySelector("#color-box");
    colorBox.style.backgroundColor = randomColor;
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 256); // Changed to 256 for inclusive range
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}