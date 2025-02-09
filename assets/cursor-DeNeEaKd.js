document.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("div");t.id="cursor",t.className="cursor",document.body.appendChild(t);const M=`
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_21_2)">
                <rect width="50" height="50" fill="none"/>
                <path d="M48.223 25.5917C46.7176 27.2579 43.6203 30.4087 39.5229 33.1367C35.4176 35.8699 30.389 38.125 25 38.125C19.611 38.125 14.5824 35.8699 10.4771 33.1367C6.37968 30.4087 3.28243 27.2579 1.77702 25.5917C1.49641 25.2812 1.49641 24.8438 1.77702 24.5333C3.28243 22.8671 6.37968 19.7163 10.4771 16.9883C14.5824 14.2551 19.611 12 25 12C30.389 12 35.4176 14.2551 39.5229 16.9883C43.6203 19.7163 46.7176 22.8671 48.223 24.5333C48.5036 24.8438 48.5036 25.2812 48.223 25.5917Z" stroke="#181A19" stroke-width="2" stroke-linejoin="round"  fill="#e7e4d7"/>
                <circle id="iris" cx="25" cy="25" r="10" fill="#1d3557"/>
            </g>
            <defs>
                <clipPath id="clip0_21_2">
                    <rect width="50" height="50" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    `;t.innerHTML=M;const l=t.querySelector("#iris");let r=0,o=0,e=25,s=25,a=0,d=0;const D=.1,u=.2;let m=!1,f=0;const X=16;document.addEventListener("mousemove",i=>{const n=Date.now();if(n-f<X)return;f=n;const c=i.clientX,v=i.clientY;a=c,d=v,m=!0});function g(){m&&(r+=(a-r)*D,o+=(d-o)*D,t.style.left=`${r-25}px`,t.style.top=`${o-25}px`);const i=a-(r+25),n=d-(o+25),c=Math.sqrt(i*i+n*n),w=Math.min(c,4),Y=i/c*w,y=n/c*w;if(e+=(Y-e)*u,s+=(y-s)*u,l.setAttribute("cx",25+e),l.setAttribute("cy",25+s),!m){const C=a-(r+25),h=d-(o+25),p=Math.sqrt(C*C+h*h),x=Math.min(p,4),A=C/p*x,b=h/p*x;e+=(A-e)*u,s+=(b-s)*u,l.setAttribute("cx",25+e),l.setAttribute("cy",25+s)}m=!1,requestAnimationFrame(g)}g()});
