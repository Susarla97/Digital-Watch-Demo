

// Digital Watches

//india Watch

let indianWatch = function(){
    let zoneOptions = {timeZone : 'Asia/Kolkata'};
    let indianDate = new Date().toLocaleDateString('en-US',zoneOptions);
    let indianTime = new Date().toLocaleTimeString('en-US',zoneOptions);
    document.querySelector('#india-date').innerText = indianDate;
    document.querySelector('#india-time').innerText = indianTime;
};

setInterval(indianWatch,1000);

// usa Watch

let americaWatch = function(){
    let zoneOptions ={timeZone : 'America/New_York'};
    let usaDate = new Date().toLocaleDateString('en-US', zoneOptions);
    let usaTime = new Date().toLocaleTimeString('en-US',zoneOptions);
    document.querySelector('#usa-date').innerText=usaDate;
    document.querySelector('#usa-time').innerText=usaTime;
};
setInterval(americaWatch,1000);

//china Watch

let chinaWatch = function(){
    let zoneOptions ={timeZone : 'Asia/Shanghai'};
    let chinaDate = new Date().toLocaleDateString('en-US',zoneOptions);
    let chinaTime = new Date().toLocaleTimeString('en-US',zoneOptions);
    document.querySelector('#china-date').innerText=chinaDate;
    document.querySelector('#china-time').innerText=chinaTime;

};
setInterval(chinaWatch,1000);

// multiplication

let calculate =()=>{
    let theNumber = document.querySelector('#given-number').innerText;
    let theMultiplier = document.querySelector('#second-number').innerText;
    let theFinalMath = theNumber * theMultiplier;
    document.querySelector('#result').innerText=theFinalMath;

}

let numberEl = document.querySelector('#number');

numberEl.addEventListener('keyup', function(){
    let theNum = numberEl.value;
    document.querySelector('#given-number').innerText = theNum;
    calculate();
});

let rangeEl = document.querySelector('#range');
rangeEl.addEventListener('input',function(){
    let theRange = rangeEl.value;
    document.querySelector('#second-number').innerText = theRange;
    calculate();
});
 
// Addition

let addEl = document.querySelector('#sub-number');

addEl.addEventListener('keyup', function(){
    let theNum = addEl.value;
    document.querySelector('#given-sub').innerText = theNum;
    additionCalculate();
});

let rangeE = document.querySelector('#sub-range');
rangeE.addEventListener('input',function(){
    let theRange = rangeE.value;
    document.querySelector('#second-sub').innerText = theRange;
    additionCalculate();
});


let additionCalculate =()=>{
    let theNumber = document.querySelector('#given-sub').innerText;
    let theMultiplier = document.querySelector('#second-sub').innerText;
    let theFinalMath = theNumber - theMultiplier ;
    document.querySelector('#finalsub').innerText=theFinalMath;

}
















