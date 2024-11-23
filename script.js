

document.querySelector('.js-curtain').addEventListener('click', function(){
    this.style.bottom = "100vh";
})

var lampSwitchElement = document.querySelector('.js-lamp-switch');
var lampIsOn = false;

lampSwitchElement.addEventListener('mousedown', function(){
    this.style.top = "50px";
})

var lightElement = document.querySelector('.js-lamp-light');
lampSwitchElement.addEventListener('mouseup', function(){
    this.style.top = '30px';
    lampIsOn = !lampIsOn;
    console.log(lampIsOn);

    if(lampIsOn)
    {
        lightElement.style.opacity = '0.5';
    }
    else
    {
        lightElement.style.opacity = '0';
    }
})




