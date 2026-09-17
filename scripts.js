const CRUZE_DOWNLOAD_URL="#";
const root=document.documentElement,theme=document.getElementById('theme');
if(localStorage.getItem('cruze-theme')==='light')root.classList.add('light');
function sync(){theme.textContent=root.classList.contains('light')?'☾':'☼'}sync();theme.onclick=()=>{root.classList.toggle('light');localStorage.setItem('cruze-theme',root.classList.contains('light')?'light':'dark');sync()};
const menu=document.getElementById('menu'),nav=document.getElementById('nav');menu.onclick=()=>{nav.classList.toggle('open');if(nav.classList.contains('open')){nav.style.display='flex';nav.style.position='absolute';nav.style.top='76px';nav.style.left='14px';nav.style.right='14px';nav.style.padding='16px';nav.style.background='var(--panel)';nav.style.border='1px solid var(--line)';nav.style.borderRadius='15px';nav.style.flexDirection='column'}else nav.removeAttribute('style')};
const dl=document.getElementById('downloadBtn');if(dl&&CRUZE_DOWNLOAD_URL!=='#')dl.href=CRUZE_DOWNLOAD_URL;
