document.addEventListener('click',function(e){
  var b=e.target.closest('.geo-badge'),inNote=e.target.closest('.geo-note');
  if(inNote)return;
  document.querySelectorAll('.geo-row.open').forEach(function(r){if(!b||r!==b.closest('.geo-row')){r.classList.remove('open');r.querySelector('.geo-badge').setAttribute('aria-expanded','false');}});
  if(b){e.preventDefault();var r=b.closest('.geo-row'),o=r.classList.toggle('open');b.setAttribute('aria-expanded',o);}
});
document.addEventListener('keydown',function(e){if(e.key==='Escape')document.querySelectorAll('.geo-row.open').forEach(function(r){r.classList.remove('open');});});
