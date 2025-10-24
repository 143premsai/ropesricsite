
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!prefersReduced){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}
function animateCount(el, to, dur=900){
  const start = performance.now(), from = 0;
  function tick(now){ const p=Math.min(1,(now-start)/dur); el.textContent=Math.floor(from+(to-from)*p).toLocaleString(); if(p<1) requestAnimationFrame(tick); }
  requestAnimationFrame(tick);
}
document.querySelectorAll('[data-count]').forEach(el=>animateCount(el, +el.dataset.count));
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{ const id=a.getAttribute('href').slice(1); const el=document.getElementById(id); if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'});} });
});
