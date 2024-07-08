const firstValue = document.getElementById('first-value'),
secondValue = document.getElementById('second-value'),
thirdValue = document.getElementById('third-value'),
fourthValue = document.getElementById('fourth-value'),
pFirstValue = document.getElementById('population-value-1'),
pSecondValue = document.getElementById('population-value-2'),
n = new Intl.NumberFormat('en-US',{
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
})


let i=0,
j=0,
k=147,
l=0,
a=0,
b=0,
o,p,q,r,c,d;

const firstValueCount = () => {
    if(i < 15000){
        i = i + 75;
        firstValue.textContent = n.format(i);
        if(firstValue.textContent === "15,000"){
            firstValue.textContent = "15,000 +";
        }
    } else {
        clearInterval(o)
        o = null;
    }
}, secondValueCount = () => {
    if(j < 23000){
        j = j + 100;
        secondValue.textContent = n.format(j);
        if(secondValue.textContent === "23,000"){
            secondValue.textContent = "23,000 +";
        }
    } else {
        clearInterval(p)
        p = null;
    }
}, thirdValueCount = () => {
    if(k > 2){
        k = k - 1;
        if(k === 1){
            thirdValue.textContent = `${n.format(k)}st`;
        } else if(k===2){
            thirdValue.textContent = `${n.format(k)}nd`
        } else if(k===3){
            thirdValue.textContent = `${n.format(k)}rd`;
        } else {
            thirdValue.textContent = `${n.format(k)}th`;
        }
    } else {
        clearInterval(q)
        q = null;
    }
}, fourthValueCount = () => {
    if(l < 4){
        l = l + 1;
        fourthValue.textContent = `0${n.format(l)}`;
    } else {
        clearInterval(r)
        r = null;
    }
}, pFirstValueCount = () => {
    if(a < 15459){
        a = a + 63.1;
        pFirstValue.textContent = n.format(a);
        if(pFirstValue.textContent === "15,460"){
            pFirstValue.textContent = "15,459";            
        }
    } else {
        clearInterval(c)
        c = null;
    }
}, pSecondValueCount = () => {
    if(b < 21000){
        b = b + 105;
        pSecondValue.textContent = n.format(b);
    } 
    else {
        clearInterval(d)
        d = null;
    }
}


//CURRENTLY USING INTERSECTION OBSERVER API FOR THE AUTOMATIC COUNTER

let options={
    root:null,
    rootMargin:"0px",
    threshold: buildThreshold(),
}
let count = 0,fCount = 0;
let observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            if((entry.target.dataset.identity === "accreditation") && (entry.intersectionRatio > 0.2)){
                count ++;
                if(count === 1){
                    firstValue.textContent = "0";
                    secondValue.textContent = "0";
                    thirdValue.textContent = "147th";
                    fourthValue.textContent = "01";
                    accreditationCounter()
                }
                observer.unobserve(entry.target)
            }
            if((entry.target.dataset.identity === "population-counter") && (entry.intersectionRatio > 0.2)){
                fCount ++;
                if(fCount === 1){
                    pFirstValue.textContent = "0";
                    pSecondValue.textContent = "0";
                    populationCounter()
                }
                observer.unobserve(entry.target)
            } 
        } 
        else {
            if(entry.target.dataset.identity === "accreditation"){
                i=0,
                j=0,
                k=147,
                l=0,
                count = 0;
            }
            if(entry.target.dataset.identity === "population-counter"){
                a=0,
                b=0,
                fCount = 0;
            }
        }
})
}, options);
let counterElements = document.querySelectorAll('#accreditation-section-container,.population-content-wrapper')
counterElements.forEach(counterElement=>{
    observer.observe(counterElement)
})

function buildThreshold(){
    let threshold = [];
    let step = 20;

    for(let i = 1.0; i <= step; i++){
        let ratio = i / step;
        threshold.push(ratio);
    }

    threshold.push(0);
    return threshold;
}


//A DELAY FUNCTION FOR SCROLL TRIGGERED EVENTS 

// function debounce(func, wait = 100, immediate = true) {
//     let timeout;
//     return function() {
//       let context = this, args = arguments;
//       let later = function(e) {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//       };
//       let callNow = immediate && !timeout;
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//       if (callNow) func.apply(context, args);
//     };
// }

// INITIALLY USED A CUSTOM SCROLL TRIGGERED FUNCTION FOR THE AUTOMATIC COUNTER 

// const accreditationSection = document.getElementById('accreditation-section-container'),
// populationSection = document.getElementById('population-section-wrapper')
// window.addEventListener('scroll',debounce(function(e){
//     const threshold = 100;
//     const scrolledTo = window.scrollY + window.innerHeight;
//     const isReachBottom = document.body.scrollHeight - threshold <= scrolledTo;
//     if((accreditationSection.offsetTop - threshold) > window.scrollY){
//         accreditationCounter()
//     }
//     if(((populationSection.offsetTop + populationSection.offsetHeight) < scrolledTo) || (isReachBottom)){
//         populationCounter()
//     } 
//     if(((accreditationSection.offsetTop + accreditationSection.offsetHeight) <= window.scrollY) || ((accreditationSection.offsetTop - accreditationSection.offsetHeight) > scrolledTo)){
//         i=0;
//         j=0;
//         k=147;
//         l=0;
//     }
//     const isReachAbovePopulation = populationSection.offsetTop >= scrolledTo;
//     if((isReachAbovePopulation)){
//         a=0;
//         b=0;
//     }
// }))




//COUNTER FUNCTIONS
var t = 10,
tw = 12,
f = 15,
fh = 500;
function accreditationCounter(){    
        o = setInterval(()=>{
            firstValueCount()
        },t);
        p = setInterval(()=>{
            secondValueCount()
        },t);
        q = setInterval(()=>{
            thirdValueCount()
        },f);
        r = setInterval(()=>{
            fourthValueCount()
        },fh);
}
function populationCounter(){
        c = setInterval(()=>{
            pFirstValueCount()
        },t)
        d = setInterval(()=>{
            pSecondValueCount()
        },tw)
}



