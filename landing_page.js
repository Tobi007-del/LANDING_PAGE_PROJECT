const firstValue = document.getElementById('first-value'),
secondValue = document.getElementById('second-value'),
thirdValue = document.getElementById('third-value'),
fourthValue = document.getElementById('fourth-value'),
pFirstValue = document.getElementById('population-value-1'),
pSecondValue = document.getElementById('population-value-2');

const accreditationSection = document.getElementById('accreditation-section-container'),
footerSection = document.getElementById('footer-section-container')

const n = new Intl.NumberFormat('en-US',{
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
})

var i = 0,
j=0,
k=0,
l=0,
a=0,
b=0,
o,p,q,r,c,d;
const firstValueCount = () => {
    if(i < 15000){
        i = i + 75;
        firstValue.innerHTML = n.format(i);
    } else {
        clearInterval(o)
    }
}, secondValueCount = () => {
    if(j < 23000){
        j = j + 100;
        secondValue.innerHTML = n.format(j);
    } else {
        clearInterval(p)
    }
}, thirdValueCount = () => {
    if(k < 2){
        k = k + 1;
        if(k === 1){
            thirdValue.innerHTML = `${n.format(k)}st`;
        } else if(k===2){
            thirdValue.innerHTML = `${n.format(k)}nd`
        } else if(k===3){
            thirdValue.innerHTML = `${n.format(k)}rd`;
        } else {
            thirdValue.innerHTML = `${n.format(k)}th`;
        }
    } else {
        clearInterval(q)
    }
}, fourthValueCount = () => {
    if(l < 4){
        l = l + 1;
        fourthValue.innerHTML = `0${n.format(l)}`;
    } else {
        clearInterval(r)
    }
}, pFirstValueCount = () => {
    if(a < 15459){
        a = a + 63.1;
        pFirstValue.innerHTML = n.format(a);
        if(pFirstValue.innerHTML === "15,460"){
            pFirstValue.innerHTML = "15,459";            
        }
    } else {
        clearInterval(c)
    }
}, pSecondValueCount = () => {
    if(b < 21000){
        b = b + 105;
        pSecondValue.innerHTML = n.format(b);
    } else {
       clearInterval(d)
    }
}

function debounce(func, wait = 1000, immediate = true) {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function(e) {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

window.onload = () =>{
    counter()
}

window.addEventListener('scroll',debounce(function(e){
    if((accreditationSection.offsetTop - document.body.scrollTop) < window.scrollY){
       counter()
    }
    else {
        console.log(i)
        i=0;
        j=0;
        k=0;
        l=0;
    }
    if((footerSection.offsetTop - document.body.scrollTop) < window.scrollY){
        footerCounter()
    } 
    else {
        a = 0;
        b = 0;
    }
}))

const counter = () => {
    o = setInterval(()=>{
        firstValueCount()
    },10)
    p = setInterval(()=>{
        secondValueCount()
    },10)
    q = setInterval(()=>{
        thirdValueCount()
    },500)
    r = setInterval(()=>{
        fourthValueCount()
    },250)
}

const footerCounter = () => {
    c = setInterval(()=>{
        pFirstValueCount()
    })
    d = setInterval(()=>{
        pSecondValueCount()
    })
}