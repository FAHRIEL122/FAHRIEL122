const cursor=document.querySelector('.cursor-glow');
if(cursor&&matchMedia('(pointer:fine)').matches){addEventListener('pointermove',e=>{cursor.style.left=`${e.clientX}px`;cursor.style.top=`${e.clientY}px`})}
const words=['STUDENT DEVELOPER','FULL-STACK ENTHUSIAST','UI / UX EXPLORER','HARDWARE & SYSTEMS','BUILDING THE FUTURE'];
const typed=document.querySelector('#typed');let wi=0,ci=0,deleting=false;
function typeLoop(){if(!typed)return;const w=words[wi];typed.textContent=deleting?w.slice(0,ci--):w.slice(0,ci++);if(!deleting&&ci>w.length){deleting=true;setTimeout(typeLoop,1200);return}if(deleting&&ci<0){deleting=false;wi=(wi+1)%words.length;ci=0}setTimeout(typeLoop,deleting?38:70)}typeLoop();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
const root=document.documentElement;
if(matchMedia('(pointer:fine)').matches){addEventListener('pointermove',e=>{root.style.setProperty('--mx',`${e.clientX}px`);root.style.setProperty('--my',`${e.clientY}px`)})}
document.querySelectorAll('.project').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${y*-2}deg) rotateY(${x*2}deg) translateY(-7px)`});card.addEventListener('pointerleave',()=>card.style.transform='')});
