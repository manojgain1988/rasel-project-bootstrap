

// show/close nav menu start

// show nav menu 

const menu = document.querySelector('.nav_menu');
const openBtn = document.querySelector('#open_menu-btn');
const closeBtn = document.querySelector('#close_menu-btn');
 
openBtn.addEventListener('click', () => {
    menu.style.display = 'flex';

    closeBtn.style.display = 'inline-block';
    openBtn.style.display = 'none';
});

// close nav menu

const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'inline-block';
};
closeBtn.addEventListener('click',closeNav);

// nav color change on scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>100);
});

// show/close nav menu end





// Typing part

var typed = new Typed(".typing",{
    strings:["Support Engineer.", "BSC Engineer.", "Travellers.", "Youtuber."],
    typeSpeed : 80,
    backSpeed : 80,
});
var typed = new Typed(".typing_2",{
    strings:["Support Engineer.", "BSC Engineer.", "Travellers.", ],
    typeSpeed : 60,
    backSpeed : 80,
}); 

// Typing part end




// Countdown part

function timeCounter(){
    var now = new Date().getTime();
var deadLine = new Date("May 12, 2024 11:59:00").getTime();

var total = deadLine - now;

var s = Math.floor(total / 1000);
var m = Math.floor(s / 60);
var h = Math.floor(m / 60);
var d = Math.floor(h / 24);

s %= 60;
m %= 60;
h %= 24; 


s =( s < 10) ? "0" + s : s;
m =( m < 10) ? "0" + m : m;
h =( h < 10) ? "0" + h : h;
d =( d < 10) ? "0" + d : d;


document.getElementById('days').innerText = d;
document.getElementById('hours').innerText = h;
document.getElementById('minutes').innerText = m;
document.getElementById('seconds').innerText = s;
}

setInterval(timeCounter ,1000);



// FAQ part Start

const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className='fa-solid fa-minus';
        }
        else{
            icon.className='fa-solid fa-plus';
        }
        

    })
});

// FAQ part Start end





// Testimonial Part Start

var testimonial = document.getElementById('testimonial');

var control1 = document.getElementById('control1');
var control2 = document.getElementById('control2');
var control3 = document.getElementById('control3');


control1.onclick=function(){
    testimonial.style.transform = "translateX(850px)";
    control1.classList.add('active');
    control2.classList.remove('active');
    control3.classList.remove('active');
}

control2.onclick=function(){
    testimonial.style.transform = "translateX(0px)";
    control1.classList.remove('active');
    control2.classList.add('active');
    control3.classList.remove('active');
}

control3.onclick=function(){
    testimonial.style.transform = "translateX(-870px)";
    control1.classList.remove('active');
    control2.classList.remove('active');
    control3.classList.add('active');
}

// Testimonial Part end



// Age calculator

let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split('T')[0];
let result = document.getElementById('result');



function calculateAge(){
let birthDate = new Date(userInput.value);

let d1 = birthDate.getDate();
let m1 = birthDate.getMonth() + 1;
let y1 = birthDate.getFullYear();

let today = new Date();

let d2 = today.getDate();
let m2 = today.getMonth() + 1;
let y2 = today.getFullYear();

let d3, m3, y3;

y3 = y2 - y1;

if(m2 >= m1){
   m3 = m2 - m1;
}
else{
    y3--;
    m3 = 12 + m2 - m1;
}

if(d2 >= d1){
    d3 = d2 - d1;
}
else{
   m3--;
   d3 = getDaysInMonth(y1, m1) + d2 - d1;   
}
if(m3 < 0){
    m3 = 11;
    y3--;
}
result.innerHTML = `You are ${y3} Yours, ${m3} Months  and ${d3} Days Olds.`;
}
function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}




// To_Top Part Start.

const toTop = document.querySelector('.to_top');

    window.addEventListener('scroll',() => {

    if(window.pageYOffset > 100){ 
        
        toTop.classList.add ('active');
    }
    else{
        toTop.classList.remove('active');
       }
})