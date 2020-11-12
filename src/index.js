const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


let intervalId = null;
const refs = {
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body')
}


refs.btnStart.addEventListener('click', onColorChangeStart);
refs.btnStop.addEventListener('click', OnColorChangeStop);

refs.btnStop.disabled = true;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};



function onColorChangeStart(evt) {
    
    intervalId = setInterval(() => { refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)] }, 1000);

    refs.btnStop.disabled = false;
    refs.btnStart.disabled = true;
};

function OnColorChangeStop(evt) {
    
    clearInterval(intervalId);

    refs.btnStop.disabled = true;
    refs.btnStart.disabled = false;

}
