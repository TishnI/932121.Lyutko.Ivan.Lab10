

document.querySelector('.js-curtain').addEventListener('click', function(){
    this.style.bottom = "100vh";
})

var lampTopElement = document.querySelector('.js-lamp-top');
var lampSwitchElement = document.querySelector('.js-lamp-switch');
var sceneElement = document.querySelector('.js-scene');
var lampIsOn = false;

lampTopElement.addEventListener('mousedown', function(){
    lampSwitchElement.style.top = '50px';
});

lampSwitchElement.addEventListener('mousedown', function(){
    this.style.top = "50px";
});

const lightOn = () =>
{
    lampSwitchElement.style.top = '30px';
    lampIsOn = !lampIsOn;

    if(lampIsOn)
    {
        lightElement.style.opacity = '0.5';
        sceneElement.style.opacity = '1';
    }
    else
    {
        lightElement.style.opacity = '0';
        sceneElement.style.opacity = '0';
    }
}

var lightElement = document.querySelector('.js-lamp-light');
lampSwitchElement.addEventListener('mouseup', lightOn);
lampTopElement.addEventListener('mouseup', lightOn);

var hatElement = document.querySelector('.js-hat');
var birdElement = document.querySelector('.js-bird');
var rabbitElement = document.querySelector('.js-rabbit');
var ItsRabbit = true;
var canShowFocus = true;

const showFocus = (target) =>
{
    target.style.top = '-120px';
    canShowFocus = true;
}

hatElement.addEventListener('click', function(){

    if(!canShowFocus) return;
    if(!lampIsOn) return;
    if(ItsRabbit)
    {
        birdElement.style.top = '0';
        setTimeout(showFocus, 500, rabbitElement);
    }
    else
    {
        rabbitElement.style.top = '0px';
        setTimeout(showFocus, 500, birdElement);
    }

    ItsRabbit = !ItsRabbit;
    canShowFocus = false;
})

const hideAnimal = (e) => {
    e.style.top = '0';
    ItsRabbit = !ItsRabbit;
}

rabbitElement.addEventListener('click', function()
{
    this.style.top = '0';
});
birdElement.addEventListener('click', function()
{
    this.style.top = '0';
});


