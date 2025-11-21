
// This loader injects Tailwind via CDN for convenience (production: build CSS)
(function(){ var s=document.createElement('script'); s.src='https://cdn.tailwindcss.com'; s.onload=function(){console.log('Tailwind loaded')}; document.head.appendChild(s); })();