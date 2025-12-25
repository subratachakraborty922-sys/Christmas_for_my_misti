// MUSIC BUTTON
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");
musicBtn.addEventListener("click", ()=>{
  if(music.paused){music.play(); musicBtn.textContent="🔊 Playing...";}
  else{music.pause(); musicBtn.textContent="🎵 Play Music";}
});

// REVEAL GIFT + CONFETTI
document.getElementById("openGiftBtn").addEventListener("click", ()=>{
  document.getElementById("reveal").classList.remove("hidden");
  music.play();
  launchConfetti();
});

// IMAGE CAROUSEL
let index=0;
setInterval(()=>{
  let pics=document.querySelectorAll(".carousel img");
  pics[index].classList.remove("active");
  index=(index+1)%pics.length;
  pics[index].classList.add("active");
},2500);

// SNOW ANIMATION
const canvas=document.getElementById("snow");
const ctx=canvas.getContext("2d");
canvas.width=innerWidth; canvas.height=innerHeight;
let snow=[];
for(let i=0;i<100;i++){snow.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*3+1,d:Math.random()*1})}
function drawSnow(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="white"; ctx.beginPath();
  for(let i=0;i<snow.length;i++){
    let s=snow[i];
    ctx.moveTo(s.x,s.y); ctx.arc(s.x,s.y,s.r,0,Math.PI*2,true);
  } ctx.fill();
  updateSnow();
}
function updateSnow(){
  for(let i=0;i<snow.length;i++){
    let s=snow[i]; s.y+=s.d; if(s.y>canvas.height){s.y=0;}
  }
}
setInterval(drawSnow,20);

// CONFETTI
function launchConfetti(){
  for(let i=0;i<50;i++){
    const conf=document.createElement("div");
    conf.className="confetti";
    conf.style.left=Math.random()*100+"vw";
    conf.style.animationDuration=Math.random()*2+2+"s";
    document.body.appendChild(conf);
    setTimeout(()=>conf.remove(),4000);
  }
}