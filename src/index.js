const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');


startBtnRef.addEventListener('click', () => { 
    
    const index = setInterval(() => document.body.style.background = `${colors[randomIntegerFromInterval(0, colors.length)]}`, 1000)
    startBtnRef.setAttribute("disabled", false)
    stopBtnRef.addEventListener('click', stopColorChange)
    function stopColorChange() { 
        clearInterval(index)
        startBtnRef.removeAttribute("disabled")
        stopBtnRef.removeEventListener('click', stopColorChange)
    }
}) 

// startBtnRef.addEventListener('click', () => { 
//     if(startBtnRef.getAttribute('clicked')) return
//     const index = setInterval(() => document.body.style.background = `${colors[randomIntegerFromInterval(0, colors.length)]}`, 1000)
//     startBtnRef.setAttribute('clicked', true)
//     stopBtnRef.addEventListener('click', stopColorChange)
//     function stopColorChange() { 
//         clearInterval(index)
//         startBtnRef.removeAttribute('clicked')
//         stopBtnRef.removeEventListener('click', stopColorChange)
//     }
// }) 
    


