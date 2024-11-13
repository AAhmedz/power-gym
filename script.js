// img scrool
const scrolImg  =   [
     
    
    'url("./assets/6.png")',  
  'url("./assets/pexels-photo-2780762.png")',  
    'url("./assets/pexels-photo-176782.png")',  
    'url("./assets/g3.png")',  
    // 'url("./assets/")',  
    // 'url("./assets/")',  
    // 'url("./assets/")',  
    
   
    
    'url("./assets/heroImage.png")',  
    
];
let behind = 0;
function changeIMG(){
 document.querySelector('.home-img').style.backgroundImage = scrolImg [behind];
 behind = (behind + 1) % scrolImg.length; 
} 
 setInterval( changeIMG, 6050);
// 6.5s 
document.querySelector('.next').addEventListener('click',  changeIMG);
function changeIMGBack(){
 document.querySelector('.home-img').style.backgroundImage = scrolImg [behind];
 behind = (behind + 4) % scrolImg.length; 
} 
document.querySelector('.back').addEventListener('click',  changeIMGBack);

changeIMG();
changeIMGBack();
// #2\
let menu=document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menu.onclick=() => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Loss','Weight Lifting', 'Running'],
    typeSpeed: 60,
    backspeed: 60,
    backDelay:1000,
    loop:true,

  });