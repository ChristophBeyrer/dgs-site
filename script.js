(function(){
  const video=document.getElementById('bgVideo');
  const overlay=document.getElementById('logoOverlay');
  const SHOW_AT=12, DURATION=5;
  let shown=false, hideTimeout=null;
  function check(){
    if(!video)return;
    const t=video.currentTime||0;
    if(!shown && t>=SHOW_AT){
      shown=true;
      overlay.classList.add('is-visible');
      hideTimeout=setTimeout(()=>overlay.classList.remove('is-visible'), DURATION*1000);
    }
  }
  function reset(){shown=false;overlay.classList.remove('is-visible');if(hideTimeout)clearTimeout(hideTimeout);}
  if(video){video.addEventListener('timeupdate',check);video.addEventListener('seeked',check);video.addEventListener('playing',check);video.addEventListener('ended',reset);}
})();