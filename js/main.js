// HEADER + media query

const img = document.getElementById('img');
const imgContainer = document.getElementById('img-container');

const txt = document.getElementById('txt');
const txtContainer = document.getElementById('txt-container');

const btnOption = document.getElementById('btnOption');
const btnLight = document.getElementById('btnLight');
const btnDark = document.getElementById('btnDark');

const header = document.getElementById('header');
const cancel = document.getElementById('cancel');



// // Modo oscuro --HEADER ICONOS 


btnOption.addEventListener('click', () =>{
    if(btnOption.checked){
        document.body.classList.add('light');
        imgContainer.classList.add('light-aside');
        txtContainer.classList.add('light-aside');
        header.classList.add('light-header');
        img.classList.add('button-light');
        txt.classList.add('button-light');
        btnLight.classList.add('button-light');
        btnDark.classList.add('button-light');

        btnLight.style.visibility = 'hidden';
        btnDark.style.visibility = 'visible';
    }else{
        document.body.classList.remove('light');
        imgContainer.classList.remove('light-aside');
        txtContainer.classList.remove('light-aside');
        header.classList.remove('light-header');
        img.classList.remove('button-light');
        txt.classList.remove('button-light');
        btnLight.classList.remove('button-light');
        btnDark.classList.remove('button-light');

        btnDark.style.visibility = 'hidden';
        btnLight.style.visibility = 'visible';
    }
})


/// MEDIA QUERY

var mediaqueryList = window.matchMedia("(max-width: 1300px)");

function txtFunction(mediaqueryListx) {
    if (mediaqueryList.matches) { 
       txtContainer.style.display = 'block';
       cancel.style.display = 'block';
       cancel.style.zIndex = '1000';
   }
}

txt.addEventListener('click', (e) =>{
    e.preventDefault();
    imgContainer.style.visibility = 'hidden';
    txtContainer.style.visibility = 'visible';

    txtFunction(mediaqueryList);
})



function imgFunction(mediaqueryListx) {
    if (mediaqueryList.matches) { 
       imgContainer.style.display = 'block';
       cancel.style.display = 'block';
       cancel.style.zIndex = '1000';
   }
}

img.addEventListener('click', (e) =>{
    e.preventDefault();
    txtContainer.style.visibility = 'hidden';
    imgContainer.style.visibility = 'visible';

    imgFunction(mediaqueryList);
})

cancel.addEventListener('click', ()=>{
       imgContainer.style.display = 'none';
       txtContainer.style.display = 'none';
       cancel.style.display = 'none';

})



// FUNCIONALIDAD EDICIÓN DE TEXTO


const topText = document.getElementById('top-text');
const botText = document.getElementById('bot-text');

const firstText = document.getElementById('first-text');
const topCheck = document.getElementById('top-check');

const secondText = document.getElementById('second-text');
const botCheck = document.getElementById('bot-check');

const option = document.getElementById('option');

const inputSize = document.getElementById('input-size');

const left = document.getElementById('left');
const center = document.getElementById('center');
const right = document.getElementById('right');

const color = document.getElementById('color');
const background = document.getElementById('background');
const transparent = document.getElementById('transparent');

const borderDark = document.getElementById('border-dark');
const borderLight = document.getElementById('border-light');
const borderVoid = document.getElementById('border-void');

const padding = document.getElementById('padding');

const lineHeight = document.getElementById('lineHeight');

const download = document.getElementById('download');
const mainSection = document.getElementById('main-section');


// 

topText.addEventListener('keyup', ()=>{
    firstText.innerHTML = topText.value;
})
botText.addEventListener('keyup', ()=>{
    secondText.innerHTML = botText.value;
})

topCheck.addEventListener('click', () =>{
    if(topCheck.checked){
        firstText.style.display = 'none';
        imgEdit.style.height = '250px';
    }else{
        firstText.style.display = 'block';
    }
})
botCheck.addEventListener('click', () =>{
    if(botCheck.checked){
        secondText.style.display = 'none';
        imgEdit.style.height = '250px';
    }else{
        secondText.style.display = 'block';
    }
})


option.addEventListener('change', () =>{
    firstText.style.fontFamily = `${option.value}`;
    secondText.style.fontFamily = `${option.value}`;
})


inputSize.addEventListener('change', () =>{
    firstText.style.fontSize = `${inputSize.value}px`;
    secondText.style.fontSize = `${inputSize.value}px`;
})


left.addEventListener('click', (e) =>{
    e.preventDefault();
    firstText.style.textAlign = 'left';
    secondText.style.textAlign = 'left';
})
center.addEventListener('click', (e) =>{
    e.preventDefault();
    firstText.style.textAlign = 'center';
    secondText.style.textAlign = 'center';
})
right.addEventListener('click', (e) =>{
    e.preventDefault();
    firstText.style.textAlign = 'right';
    secondText.style.textAlign = 'right';
})


color.addEventListener('change', (e) =>{
    e.preventDefault();
    firstText.style.color = `${color.value}`;
    secondText.style.color = `${color.value}`;
})
background.addEventListener('change', (e) =>{
    e.preventDefault();
    firstText.style.backgroundColor = `${background.value}`;
    secondText.style.backgroundColor = `${background.value}`;
})
const back = document.getElementById('back');
transparent.addEventListener('click', (e) =>{
    if(transparent.checked){
        firstText.style.backgroundColor = `${background.value}`;
        secondText.style.backgroundColor = `${background.value}`;
        firstText.style.position = 'relative';
        secondText.style.position = 'relative';
        back.style.position = 'relative';
        imgEdit.style.height = '220px'
    }else{
        firstText.style.backgroundColor = 'transparent';
        secondText.style.backgroundColor = 'transparent';
        firstText.style.position = 'absolute';
        firstText.style.top = '0';
        back.style.position = 'absolute';
        secondText.style.position = 'absolute';
        secondText.style.bottom = '0';
        imgEdit.style.height = '380px';
    }
})


borderDark.addEventListener('click', (e)=>{
    e.preventDefault();
    firstText.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
    secondText.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
})
borderLight.addEventListener('click', (e)=>{
    e.preventDefault();
    firstText.style.textShadow = '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
    secondText.style.textShadow = '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
})
borderVoid.addEventListener('click', (e)=>{
    e.preventDefault();
    firstText.style.textShadow = 'none';
    secondText.style.textShadow = 'none';
})

padding.addEventListener('change', (e)=>{
    e.preventDefault();
    firstText.style.padding = `${padding.value}px`;
    secondText.style.padding = `${padding.value}px`;
})

lineHeight.addEventListener('change', (e)=>{
    e.preventDefault();
    firstText.style.lineHeight = `${lineHeight.value}px`;
    secondText.style.lineHeight = `${lineHeight.value}px`;
    console.log(lineHeight.value);
})


//  BOTON DE DESCARGA

download.addEventListener('click', ()=>{
    domtoimage.toBlob(mainSection)
    .then(function (blob) {
        window.saveAs(blob, 'meme.png');
    });
})

// FUNCIONALIDAD EDICIÓN DE IMG


const urlImg = document.getElementById('url-img');
const getUrl = document.getElementById('get-url');
const imgEdit = document.getElementById('img-edit');

const getBackground = document.getElementById('get-background');

const selectFilter = document.getElementById('select-filter');


//


getUrl.addEventListener('keyup', (e)=>{
    e.preventDefault();
    const url = getUrl.value;
    // urlImg.setAttribute('src', url);
    imgEdit.style.backgroundImage = `url('${url}')`;
    firstText.style.margin = '0';
})
getBackground.addEventListener('change', (e) =>{
    e.preventDefault();
    imgEdit.style.backgroundColor = `${getBackground.value}`;
})
selectFilter.addEventListener('change', (e) =>{
    e.preventDefault();
    imgEdit.style.backgroundBlendMode  = `${selectFilter.value}`;
})





//filtros

const getBrightness = document.getElementById('get-brightness');
const getOpacity = document.getElementById('get-opacity');
const getContrast = document.getElementById('get-contrast'); 
const getBlur = document.getElementById('get-blur'); 
const getGrayscale = document.getElementById('get-grayscale');
const getSepia = document.getElementById('get-sepia');
const getHue = document.getElementById('get-hue');
const getInvert = document.getElementById('get-invert');
const getSaturation = document.getElementById('get-saturation');
   

///


getBrightness.addEventListener('change', (e) =>{
    e.preventDefault();
    urlImg.style.filter = `brightness(${getBrightness.value})`;
})
getOpacity.addEventListener('change', (e) =>{
    e.preventDefault();
    urlImg.style.filter = `opacity(${getOpacity.value})`;
})
getContrast.addEventListener('change', (e) =>{
    e.preventDefault();
    urlImg.style.filter = `contrast(${getContrast.value}%)`;
})
getBlur.addEventListener('change', (e) =>{
    e.preventDefault(); 
    urlImg.style.filter = `blur(${getBlur.value}px)`;
    console.log(getBlur.value);
})
getGrayscale.addEventListener('change', (e) =>{
    e.preventDefault();
    urlImg.style.filter = `grayscale(${getGrayscale.value}%)`;
})
getSepia.addEventListener('change', (e) =>{
    e.preventDefault();
    urlImg.style.filter = `sepia(${getSepia.value}%)`;
})
getHue.addEventListener('change', (e) =>{
    e.preventDefault();
    urlImg.style.filter = `hue-rotate(${getHue.value}deg)`;
})
getInvert.addEventListener('change', (e) =>{
    e.preventDefault();
    urlImg.style.filter = `invert(${getInvert.value}, 360deg)`;
})
getSaturation.addEventListener('change', (e) =>{
    e.preventDefault();
    urlImg.style.filter = `saturate(${getSaturation.value}%)`;
})




/////// BOTON DE RESET///////


const resetImg = document.getElementById('reset-img');


//

resetImg.addEventListener('click', (e) =>{
    getBackground.value = '#000000';
    imgEdit.style.backgroundColor = '#000000';

    selectFilter.value = 'unset';
    imgEdit.style.backgroundBlendMode = 'unset';

    getBrightness.value = '1';
    urlImg.style.filter = `brightness(1)`;

    getBlur.value = '1';
    urlImg.style.filter = `blur(1)`;

    getOpacity.value = '100%';
    urlImg.style.filter = `opacity(100%)`;

    getContrast.value = '0';
    urlImg.style.filter = `contrast(0)`;

    getGrayscale.value = '0';
    urlImg.style.filter = `grayscale(0)`;

    getSepia.value = '0';
    urlImg.style.filter = `sepia(0)`;

    getHue.value = '0';
    urlImg.style.filter = `hue-rotate(0)`;

    getInvert.value = '0';
    urlImg.style.filter = `invert(0)`;

    getSaturation.value = '100%';
    urlImg.style.filter = `saturation(100)`;
})


