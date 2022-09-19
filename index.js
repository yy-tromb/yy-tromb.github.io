let pageCaches={};

const openMenuBtn=document.getElementById("openMenuBtn");
const openMenuBtn_span=openMenuBtn.getElementsByTagName("span")[0];
const navEle=document.getElementsByTagName("nav")[0];

openMenuBtn.addEventListener("click",e=>{
  if(navEle.style.marginRight==="-30vw"){
    navEle.style.marginRight="0";
  }else{
    navEle.style.marginRight="-30vw";
  }
  
});
openMenuBtn.onmouseover=()=>openMenuBtn_span.style.backgroundColor="rgb(100,100,100)"
openMenuBtn.onmouseout=e=>openMenuBtn_span.style.backgroundColor="var(--theme-color)";
