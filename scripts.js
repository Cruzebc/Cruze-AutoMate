const menu=document.querySelector(".menu"),nav=document.querySelector(".nav nav");
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

// Replace this with your real APK URL when you publish a release.
const APK_URL="";
document.getElementById("downloadBtn").addEventListener("click",e=>{
  if(!APK_URL){e.preventDefault();alert("Your Cruze AutoMate download link has not been added yet. Edit APK_URL in scripts.js when your APK is ready.");}
});