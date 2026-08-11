const progress=document.querySelector('.progress');
const year=document.querySelector('#year');
if(year)year.textContent=new Date().getFullYear();
function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=max>0?`${scrollY/max*100}%`:'0%'}
addEventListener('scroll',updateProgress,{passive:true});updateProgress();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',e=>{const target=document.querySelector(link.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}}));
