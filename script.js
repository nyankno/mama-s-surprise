// ===================== helpers =====================
const $ = (sel) => document.querySelector(sel);

function showScreen(id){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===================== MUSIC =====================
const musicBtn = $("#musicBtn");
const bgMusic = $("#bgMusic");

async function startMusic(){
  try{
    if(bgMusic.paused){
      await bgMusic.play();
      musicBtn.classList.add("on");
    }
  }catch{
    // Some phones are strict, but click gesture should usually allow it
  }
}

musicBtn.addEventListener("click", async () => {
  try{
    if(bgMusic.paused){
      await bgMusic.play();
      musicBtn.classList.add("on");
    }else{
      bgMusic.pause();
      musicBtn.classList.remove("on");
    }
  }catch{
    alert("Tap again to allow music ❤️");
  }
});

// ===================== CANVAS SPARKLES =====================
const canvas = $("#sparkles");
const ctx = canvas.getContext("2d");
let W=0, H=0;

function resize(){
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const sparkles = Array.from({length: 110}, () => ({
  x: Math.random()*W,
  y: Math.random()*H,
  r: 0.6 + Math.random()*1.9,
  a: 0.15 + Math.random()*0.75,
  vx: (-0.35 + Math.random()*0.7),
  vy: (-0.25 + Math.random()*0.6)
}));

function draw(){
  ctx.clearRect(0,0,W,H);
  for(const s of sparkles){
    s.x += s.vx; s.y += s.vy;
    if(s.x<0) s.x=W; if(s.x>W) s.x=0;
    if(s.y<0) s.y=H; if(s.y>H) s.y=0;

    ctx.globalAlpha = s.a;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
    ctx.fillStyle = "#fff";
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  requestAnimationFrame(draw);
}
draw();

// ===================== HEARTS =====================
const heartsLayer = $("#hearts-layer");
const heartEmojis = ["❤️","💙","💗","💞","💘","💕","💓","❤️‍🔥"];

function spawnHeart(){
  const el = document.createElement("div");
  el.className = "heart";
  el.textContent = heartEmojis[Math.floor(Math.random()*heartEmojis.length)];
  el.style.left = `${Math.random() * window.innerWidth}px`;
  el.style.bottom = `-40px`;

  const duration = 5.5 + Math.random()*5.5;
  el.style.animationDuration = `${duration}s`;

  const size = 14 + Math.random()*26;
  el.style.fontSize = `${size}px`;

  heartsLayer.appendChild(el);
  setTimeout(() => el.remove(), duration*1000);
}
setInterval(spawnHeart, 360);

// ===================== PETALS / FLOWERS =====================
const petalsLayer = $("#petals-layer");
const petals = ["🌸","🌺","🌷","💐","🌹","🌼"];

function spawnPetal(){
  const el = document.createElement("div");
  el.className = "petal";
  el.textContent = petals[Math.floor(Math.random()*petals.length)];
  el.style.left = `${Math.random() * window.innerWidth}px`;
  el.style.top = `-80px`;

  const duration = 7 + Math.random()*7;
  el.style.animationDuration = `${duration}s`;

  const size = 16 + Math.random()*22;
  el.style.fontSize = `${size}px`;

  petalsLayer.appendChild(el);
  setTimeout(() => el.remove(), duration*1000);
}
setInterval(spawnPetal, 900);

// ===================== BUTTERFLIES =====================
const butterfliesLayer = $("#butterflies-layer");
const butterflyEmojis = ["🦋","🦋","🦋","✨🦋","🦋✨"];

function spawnButterfly(){
  const el = document.createElement("div");
  el.className = "butterfly";
  el.textContent = butterflyEmojis[Math.floor(Math.random()*butterflyEmojis.length)];

  const y = 20 + Math.random()*60;
  el.style.top = `${y}vh`;

  const duration = 9 + Math.random()*7;
  el.style.animationDuration = `${duration}s`;

  const size = 18 + Math.random()*18;
  el.style.fontSize = `${size}px`;

  butterfliesLayer.appendChild(el);
  setTimeout(() => el.remove(), duration*1000);
}
setInterval(spawnButterfly, 2400);

// ===================== TYPEWRITER (SLOWER ~0.7x) =====================
const typeEl = $("#typeText");
let typingTimer = null;

// Detailed letter
const loveLetter = `Mama 🥹💙

There are some people that enter your life and change it…
And there are some people that become your life.

You are both to me.

When I had nothing… absolutely nothing…
When I was sleeping on the floor, wearing one old cloth, and the world looked like it was closing in…
You did not look at me with pity.
You did not look at me with shame.
You looked at me with pride.

You saw greatness in me when I was still trying to find myself.

Mama, you fed me when I could not feed myself.
You supported me when I had nothing to offer.
You loved me when I didn’t even know how to love properly.

You never mocked my struggles.
You never treated me like I was “less”.
Instead… you prayed for me.
You believed in me.
You stood by me like a backbone that never breaks.

I remember the day we were asked to fast for 24 hours in church…
Even when you were not feeling fine…
Even when your body was weak…
You still came with me.
You still fasted with me.
You still stood beside me.

That kind of love is rare.
That kind of heart is gold.

And even when my character was not sweet…
Even when I acted nonchalant…
Even when I was stubborn and somehow annoying 🙄😅
You still stayed.
You still cared.
You still chose me.

When I’m having a bad day…
When life feels heavy…
Whenever I think of you, my mood brightens.
It’s like my soul remembers hope again.

Mama, you are my peace.
You are my comfort.
You are my safe place.
You are that gentle strength that keeps me standing.

Sometimes I sit down and ask myself…
“What did I do to deserve this kind of woman?”
Because honestly…
I don’t deserve you.
But I am grateful God gave me you.

You loved me when I was just potential.
You respected me when I had no proof.
You were proud of me before success ever showed up.

Mama… you are not just my girlfriend.
You are my answered prayer.
You are my blessing.
You are my favor.
You are my “God remembered me” in human form 😭💙

So today, Valentine…
I want you to feel it deeply:

I appreciate you.
I honor you.
I cherish you.
I value your heart.

And I want this love to reach the end.
Not seasonal.
Not temporary.
Not for play.

Forever.

From your Emmanuel…
Your Cherish 💙❤️`;

// Prayer
const prayerMessage = `Mama  💙🙏✨

Now… let me pray for you.

May God reward you for every silent sacrifice you made for me 😭
May heaven remember every tear you cried for my future and turn it into loud joy.

The same way you stood by me when I had nothing…
May God stand by you in every situation.

You will never lack.
You will never beg.
You will never cry alone again.

Every time you chose me…
Heaven will choose you.
Every time you prayed for me…
Angels will fight for you.

You will eat the fruit of your kindness.
You will enjoy the reward of your patience.
You will see the success you prayed for with your own eyes.

As I rise, you will rise beside me.
As I win, you will win with me.
As I become great, you will be honored.

And me too… I promise to love you better.
I promise to grow.
I promise to protect your heart.
I promise to be soft with you the way you have been soft with me 🥹💙

Mama… thank you for loving me when I was only “potential”.
Thank you for feeding me.
Thank you for standing with me.
Thank you for being my backbone.

I love you deeply 😭❤️

Forever yours,
Your Cherish 💙✨`;

// slower typing: increase ms interval (bigger = slower)
const BASE_SPEED = 92; // was ~34–36. This is ~0.65x speed (slower and readable)

function typeWriter(text, speed=BASE_SPEED){
  clearInterval(typingTimer);
  typeEl.textContent = "";
  let i = 0;

  typingTimer = setInterval(() => {
    typeEl.textContent += text[i] || "";
    i++;

    const ch = text[i-1];

    // natural pauses (also slowed)
    if (ch === "." || ch === "!" || ch === "?") {
      clearInterval(typingTimer);
      setTimeout(() => {
        typeWriter(text.slice(i), speed);
      }, 340);
      return;
    }
    if (ch === "\n") {
      clearInterval(typingTimer);
      setTimeout(() => {
        typeWriter(text.slice(i), speed);
      }, 240);
      return;
    }

    if(i >= text.length) clearInterval(typingTimer);
  }, speed);
}

// ===================== FLOW =====================
const glowHeart = $("#glowHeart");

$("#openHeartBtn").addEventListener("click", async () => {
  // 1) start music immediately on this click
  await startMusic();

  // 2) go to letter screen
  showScreen("#letter");
  glowHeart.classList.remove("on");

  // burst FX
  for(let i=0;i<22;i++) setTimeout(spawnHeart, i*60);
  for(let i=0;i<10;i++) setTimeout(spawnPetal, i*120);

  typeWriter(loveLetter, BASE_SPEED);
});

$("#replayBtn").addEventListener("click", () => {
  glowHeart.classList.remove("on");
  typeWriter(loveLetter, BASE_SPEED);
});

$("#nextBtn").addEventListener("click", () => {
  // glow effect when prayer starts
  glowHeart.classList.add("on");

  // more alive on prayer start
  for(let i=0;i<30;i++) setTimeout(spawnHeart, i*45);
  for(let i=0;i<18;i++) setTimeout(spawnPetal, i*90);
  setTimeout(spawnButterfly, 200);
  setTimeout(spawnButterfly, 1000);

  typeWriter(prayerMessage, BASE_SPEED + 6);
});

// ===================== Finale =====================
$("#shareBtn").addEventListener("click", async () => {
  const msg =
`Happy Valentine Mama 💙❤️🥹
I made this for you because you are my answered prayer.
Thank you for loving me when I had nothing.
Forever your Cherish ✨`;

  try{
    await navigator.clipboard.writeText(msg);
    alert("Copied! Paste it on WhatsApp 💌");
  }catch{
    prompt("Copy this message:", msg);
  }
});

$("#restartBtn").addEventListener("click", () => {
  glowHeart.classList.remove("on");
  showScreen("#intro");
});


/* ===================== FADE SLIDER (up to 4 pics) ===================== */
(function initFadeSlider(){
  const slider = document.querySelector("#photoSlider");
  if(!slider) return;

  const slides = [...slider.querySelectorAll(".slide")];
  const dotsWrap = document.querySelector("#sliderDots");

  if(slides.length <= 1) return;

  let idx = 0;
  let timer = null;

  // build dots
  if(dotsWrap){
    dotsWrap.innerHTML = "";
    slides.forEach((_, i) => {
      const d = document.createElement("span");
      d.className = "dot" + (i === 0 ? " active" : "");
      d.addEventListener("click", () => goTo(i, true));
      dotsWrap.appendChild(d);
    });
  }

  function setActive(newIdx){
    slides.forEach((s, i) => s.classList.toggle("active", i === newIdx));
    if(dotsWrap){
      [...dotsWrap.children].forEach((d, i) => d.classList.toggle("active", i === newIdx));
    }
    idx = newIdx;
  }

  function goTo(newIdx, userAction=false){
    setActive(newIdx);
    if(userAction){
      restart(); // if she taps dots, restart timing so it feels smooth
    }
  }

  function next(){
    const n = (idx + 1) % slides.length;
    setActive(n);
  }

  function start(){
    // slow fade: 6.5s per image (adjust if you want)
    timer = setInterval(next, 6500);
  }

  function stop(){
    if(timer) clearInterval(timer);
    timer = null;
  }

  function restart(){
    stop();
    start();
  }

  // pause on press/hold (mobile friendly)
  slider.addEventListener("touchstart", stop, {passive:true});
  slider.addEventListener("touchend", restart, {passive:true});
  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", restart);

  start();
})();
    

showScreen("#intro");
