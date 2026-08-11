const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
const cursor=document.querySelector('.cursor-glow');
if(cursor&&matchMedia('(pointer:fine)').matches){addEventListener('pointermove',e=>{cursor.style.left=`${e.clientX}px`;cursor.style.top=`${e.clientY}px`})}
const words=['STUDENT DEVELOPER','FULL-STACK ENTHUSIAST','UI / UX EXPLORER','HARDWARE & SYSTEMS','BUILDING THE FUTURE'];
const typed=document.querySelector('#typed');let wi=0,ci=0,del=false;
function typeLoop(){if(!typed)return;const word=words[wi];typed.textContent=del?word.slice(0,ci--):word.slice(0,ci++);if(!del&&ci>word.length){del=true;setTimeout(typeLoop,1200);return}if(del&&ci<0){del=false;wi=(wi+1)%words.length;ci=0}setTimeout(typeLoop,del?35:65)}typeLoop();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.project').forEach(el=>observer.observe(el));
const links=document.querySelectorAll('a[href^="#"]');links.forEach(link=>link.addEventListener('click',e=>{const target=document.querySelector(link.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'})}}));
document.querySelectorAll('.project').forEach(card=>{card.addEventListener('pointermove',e=>{if(!matchMedia('(pointer:fine)').matches)return;const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${y*-1.5}deg) rotateY(${x*1.5}deg) translateY(-5px)`});card.addEventListener('pointerleave',()=>card.style.transform='')});
