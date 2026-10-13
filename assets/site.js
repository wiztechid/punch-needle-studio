const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});nav.addEventListener('click',e=>{if(e.target.closest('a')){menu.setAttribute('aria-expanded','false');nav.classList.remove('open')}})}
const filters=[...document.querySelectorAll('[data-filter]')],cards=[...document.querySelectorAll('[data-family]')],empty=document.querySelector('.empty');
filters.forEach(button=>button.addEventListener('click',()=>{const family=button.dataset.filter;let count=0;filters.forEach(x=>x.setAttribute('aria-pressed',String(x===button)));cards.forEach(card=>{const show=family==='all'||card.dataset.family.split(' ').includes(family);card.hidden=!show;if(show)count++});if(empty)empty.classList.toggle('show',count===0)}));
const requestedFamily=new URLSearchParams(location.search).get('family');
if(requestedFamily){const requestedButton=filters.find(button=>button.dataset.filter===requestedFamily);if(requestedButton)requestedButton.click()}
