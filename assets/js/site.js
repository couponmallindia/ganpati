
const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));}
const lightbox=document.querySelector('.lightbox');
if(lightbox){const lbImg=lightbox.querySelector('img');const close=()=>{lightbox.classList.remove('open');lbImg.src='';};document.querySelectorAll('[data-lightbox]').forEach(el=>el.addEventListener('click',()=>{lbImg.src=el.dataset.full||el.querySelector('img').src;lbImg.alt=el.querySelector('img').alt;lightbox.classList.add('open');}));lightbox.querySelector('button').addEventListener('click',close);lightbox.addEventListener('click',e=>{if(e.target===lightbox)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});}
