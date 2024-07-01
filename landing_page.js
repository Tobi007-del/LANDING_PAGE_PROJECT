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
        if(firstValue.innerHTML === "15,000"){
            firstValue.innerHTML = "15,000 +";
        }
    } else {
        clearInterval(o)
        o = null;
    }
}, secondValueCount = () => {
    if(j < 23000){
        j = j + 100;
        secondValue.innerHTML = n.format(j);
        if(secondValue.innerHTML === "23,000"){
            secondValue.innerHTML = "23,000 +";
        }
    } else {
        clearInterval(p)
        p = null;
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
        q = null;
    }
}, fourthValueCount = () => {
    if(l < 4){
        l = l + 1;
        fourthValue.innerHTML = `0${n.format(l)}`;
    } else {
        clearInterval(r)
        r = null;
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
        c = null;
    }
}, pSecondValueCount = () => {
    if(b < 21000){
        b = b + 105;
        pSecondValue.innerHTML = n.format(b);
    } else {
       clearInterval(d)
       d = null;
    }
}

function debounce(func, wait = 100, immediate = true) {
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



window.addEventListener('scroll',debounce(function(e){
    const threshold = 100;
    const footerThreshold = footerSection.offsetHeight - 100;
    const scrolledTo = window.scrollY + window.innerHeight;
    const isReachBottom = document.body.scrollHeight - footerThreshold <= scrolledTo;
    if((accreditationSection.offsetTop - threshold) > window.scrollY){
        console.log(`First event listener speaking: ${(accreditationSection.offsetTop - threshold) > window.scrollY}`)
        counter()
    }
    if(((footerSection.offsetTop) < window.scrollY) || (isReachBottom)){
        console.log(`First event listener speaking for the idiot footer: ${((footerSection.offsetTop) < window.scrollY) || (isReachBottom)}`)
        console.log("calling the footer counter function at the moment")
        footerCounter()
    } 
    if((accreditationSection.offsetTop + 162) <= window.scrollY){
        console.log(`Second event listener speaking: ${(accreditationSection.offsetTop + 162) < window.scrollY}`)
        i=0;
        j=0;
        k=0;
        l=0;
    }
    const isReachAboveFooter = document.body.scrollHeight - footerSection.offsetHeight >= scrolledTo;
    if((isReachAboveFooter)){
        console.log(`Third event listener speaking: ${isReachAboveFooter}`)
        a=0;
        b=0;
    }
}))




async function counter(){
    let  counterPromise = new Promise(function(resolve,reject){
        o = setInterval(()=>{
            firstValueCount()
        },10);
        p = setInterval(()=>{
            secondValueCount()
        },10);
        q = setInterval(()=>{
            thirdValueCount()
        },500);
        r = setInterval(()=>{
            fourthValueCount()
        },250);
        resolve("all intervals have been set boss")
    }).then(function(value){
        console.log(`Promise finished with value: ${value}`)
    })
}

const footerCounter = () => {
    const footerCounterPromise = new Promise(function(resolve){
        c = setInterval(()=>{
            pFirstValueCount()
        })
        d = setInterval(()=>{
            pSecondValueCount()
        })
        resolve("all footer counter intervals have been set boss")
    }).then(function(value){
        console.log(`Footer promise finished with value: ${value}`)
    })
}