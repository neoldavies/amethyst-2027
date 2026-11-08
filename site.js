const menuButton=document.querySelector('.menu-button'),mobileNav=document.querySelector('.mobile-nav');
function closeMenu(){mobileNav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}
menuButton.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mobileNav.classList.contains('open')){closeMenu();menuButton.focus()}});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu()});
const themeButton=document.querySelector('.theme-button');function themeLabel(){const dark=document.documentElement.classList.contains('dark');themeButton.setAttribute('aria-pressed',String(dark));themeButton.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode')}
themeButton.addEventListener('click',()=>{document.documentElement.classList.toggle('dark');try{localStorage.setItem('amethyst-theme',document.documentElement.classList.contains('dark')?'dark':'light')}catch(e){}themeLabel()});themeLabel();
const gallery=document.querySelector('#gallery-track');document.querySelectorAll('[data-scroll]').forEach(b=>b.addEventListener('click',()=>gallery.scrollBy({left:Number(b.dataset.scroll)*265,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})));
document.querySelectorAll('[data-open-price]').forEach(a=>a.addEventListener('click',()=>{document.querySelectorAll('.price-category').forEach(d=>{d.open=d.querySelector('summary').textContent.includes(a.dataset.openPrice)})}));
// Each category stays open until the visitor chooses to close it.
document.querySelector('#copyright-year').textContent=Math.max(2027,new Date().getFullYear());
