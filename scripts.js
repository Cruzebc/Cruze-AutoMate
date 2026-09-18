(function(){
  const phone='MjU0NzE3MDMzODUx';
  const decode=s=>atob(s);
  const waNumber=decode(phone);
  const makeMessage=service=>`Hello Cruze Technologies, I would like to request the ${service} service. Please provide more information and pricing.`;
  document.querySelectorAll('.whatsapp-btn').forEach(a=>{a.addEventListener('click',e=>{e.preventDefault();const service=a.dataset.service||'General Inquiry';window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(makeMessage(service))}`,'_blank','noopener');});});

  const nav=document.getElementById('nav'), menu=document.getElementById('menu');
  menu.addEventListener('click',()=>nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

  const defaults={title:'Get Your Professional Website Today!',text:'Modern · Responsive · Affordable',button:'Learn More',image:''};
  const title=document.getElementById('adTitle'), text=document.getElementById('adText'), button=document.getElementById('adButton'), advert=document.getElementById('advert');
  let ads=[defaults,{title:'Launch Your Digital Business',text:'Professional solutions · Clear pricing · Direct support',button:'Request Service',image:''},{title:'Need Technical Help?',text:'Get practical IT assistance from Cruze Technologies',button:'Chat With Cruze',image:''}];
  let idx=0;
  try{const saved=JSON.parse(localStorage.getItem('cruze-advert'));if(saved){ads[0]={...defaults,...saved}}}catch(e){}
  function renderAd(){const ad=ads[idx];title.innerHTML=ad.title.replace(/\n/g,'<br>');text.textContent=ad.text;button.textContent=ad.button+'  →';button.href='#services';if(ad.image){advert.style.backgroundImage=`linear-gradient(90deg,#071c2cdd,#071827dd),url(${ad.image})`;advert.style.backgroundSize='cover';}else{advert.style.backgroundImage='';}document.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===idx));}
  document.getElementById('prevAd').onclick=()=>{idx=(idx+ads.length-1)%ads.length;renderAd()};
  document.getElementById('nextAd').onclick=()=>{idx=(idx+1)%ads.length;renderAd()};renderAd();

  const modal=document.getElementById('adModal');
  document.getElementById('adminAd').onclick=()=>{document.getElementById('adTitleInput').value=ads[0].title;document.getElementById('adTextInput').value=ads[0].text;document.getElementById('adButtonInput').value=ads[0].button;modal.classList.add('show');modal.setAttribute('aria-hidden','false')};
  document.getElementById('closeModal').onclick=()=>modal.classList.remove('show');
  document.getElementById('resetAd').onclick=()=>{localStorage.removeItem('cruze-advert');ads[0]={...defaults};idx=0;renderAd();modal.classList.remove('show')};
  document.getElementById('saveAd').onclick=()=>{const file=document.getElementById('adImageInput').files[0];const save=image=>{ads[0]={title:document.getElementById('adTitleInput').value||defaults.title,text:document.getElementById('adTextInput').value||defaults.text,button:document.getElementById('adButtonInput').value||defaults.button,image:image||''};localStorage.setItem('cruze-advert',JSON.stringify(ads[0]));idx=0;renderAd();modal.classList.remove('show')};if(file){const r=new FileReader();r.onload=()=>save(r.result);r.readAsDataURL(file)}else save(ads[0].image)};
  modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('show')});
})();
