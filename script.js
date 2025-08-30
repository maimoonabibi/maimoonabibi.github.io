/* -----------------------
   Basic interactivity:
   - mobile hamburger
   - tabs for portfolio
   - simple tab enter animation
-------------------------*/

// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger && hamburger.addEventListener('click', () => {
  if (nav.style.display === 'flex') {
    nav.style.display = '';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '12px';
    nav.style.background = 'rgba(7,10,20,0.95)';
    nav.style.padding = '12px';
    nav.style.borderRadius = '8px';
  }
});

/* PORTFOLIO TABS */
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

function setActiveTab(name) {
  tabButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === name));
  tabPanels.forEach(panel => {
    if (panel.dataset.panel === name) {
      panel.classList.remove('hidden');
      panel.animate([{opacity:0, transform:'translateY(12px)'}, {opacity:1, transform:'translateY(0)'}], {duration:400, easing:'ease-out'});
    } else {
      panel.classList.add('hidden');
    }
  });
}

// default
setActiveTab('projects');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => setActiveTab(btn.dataset.tab));
});

/* SMOOTH SCROLL for nav links */
document.querySelectorAll('.nav-link').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const href = a.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* Small polish: close mobile nav when clicking a link */
document.querySelectorAll('#nav a').forEach(link=>{
  link.addEventListener('click', ()=> {
    if (window.innerWidth < 900) {
      nav.style.display = '';
    }
  });
});

/* OPTIONAL: make orb icons pause orbit on hover (performance tweak) */
document.querySelectorAll('.orb-item').forEach(item=>{
  item.addEventListener('mouseenter', ()=> item.style.animationPlayState = 'paused');
  item.addEventListener('mouseleave', ()=> item.style.animationPlayState = 'running');
});
