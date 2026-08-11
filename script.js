const cursor = document.querySelector('.cursor-glow');
if (cursor && window.matchMedia('(pointer:fine)').matches) {
  window.addEventListener('pointermove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
}

const words = ['STUDENT DEVELOPER','FULL-STACK ENTHUSIAST','UI / UX EXPLORER','HARDWARE & SYSTEMS'];
const typed = document.querySelector('#typed');
let wi = 0, ci = 0, deleting = false;
function typeLoop(){
  const word = words[wi];
  typed.textContent = deleting ? word.slice(0,ci--) : word.slice(0,ci++);
  if(!deleting && ci > word.length){ deleting = true; setTimeout(typeLoop, 1300); return; }
  if(deleting && ci < 0){ deleting = false; wi = (wi + 1) % words.length; ci = 0; }
  setTimeout(typeLoop, deleting ? 42 : 78);
}
typeLoop();

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelector('#year').textContent = new Date().getFullYear();
