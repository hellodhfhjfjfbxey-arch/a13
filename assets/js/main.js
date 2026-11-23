(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
function hands(p,h,m,s,sm){var H=$(p+'-h'),M=$(p+'-m'),S=$(p+'-s');if(!H)return;var c=H.getAttribute('x1');var o=c+'px '+c+'px';[H,M,S].forEach(function(e){e.style.transformOrigin=o;});H.style.transform='rotate('+(h%12*30+m/2)+'deg)';M.style.transform='rotate('+(m*6+s/10)+'deg)';S.style.transform='rotate('+(s*6)+'deg)';}
function p2(n){return String(n).padStart(2,'0');}
(function tick(){var d=new Date(),s=d.getSeconds()+(rm?0:d.getMilliseconds()/1000),m=d.getMinutes(),h=d.getHours();hands('hd',h,m,s);hands('ph',h,m,s);hands('rg',h,m,s);
 var t=$('hr-t');if(t)t.textContent=p2(h)+':'+p2(m)+':'+p2(Math.floor(s));var n=$('hd-now');if(n)n.textContent=p2(h)+':'+p2(m);
 var af=$('arc-f');if(af){var p=Math.max(0,Math.min(1,(h+m/60-6)/12));af.style.strokeDasharray=(p*100).toFixed(1)+' 100';var a=Math.PI*(1-p);var sn=$('arc-s');sn.setAttribute('cx',200+190*Math.cos(a));sn.setAttribute('cy',200-190*Math.sin(a));sn.style.fill=(h<6||h>=18)?'#C3CADB':'#F6D58A';}
 requestAnimationFrame(tick);})();
var hd=$('hr-d');if(hd)hd.textContent=new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'});
var dy=document.querySelector('.hv-dy');if(dy){var fi=[].slice.call(dy.querySelectorAll('.hv-dy-v figure')),tx=[].slice.call(dy.querySelectorAll('.hv-dy-t')),db=$('dy-b');function dp(){if(innerWidth<=1060)return;var r=dy.getBoundingClientRect(),p=Math.max(0,Math.min(.999,-r.top/(dy.offsetHeight-innerHeight))),k=Math.floor(p*4);fi.forEach(function(f,i){f.classList.toggle('on',i===k);});tx.forEach(function(t,i){t.classList.toggle('on',i===k);});db.style.width=(p*100)+'%';}addEventListener('scroll',dp,{passive:true});dp();}
var zc=$('zn-c');if(zc){var sel=[$('z0'),$('z1'),$('z2')];function hm(z){var f=new Intl.DateTimeFormat('en-GB',{timeZone:z,hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).formatToParts(new Date()),o={};f.forEach(function(x){o[x.type]=x.value;});return [(+o.hour)%24,+o.minute,+o.second];}
 function off(z){var a=hm(z),u=new Date(),uh=u.getUTCHours()+u.getUTCMinutes()/60,v=a[0]+a[1]/60-uh;if(v>12)v-=24;if(v<-12)v+=24;return v;}
 function mini(id){var h='';for(var k=0;k<12;k++)h+='<line x1="60" y1="8" x2="60" y2="16" transform="rotate('+(k*30)+' 60 60)" stroke="#D9C29A" stroke-width="3"/>';return '<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="56" fill="#0A1020" stroke="#2A3550" stroke-width="2"/>'+h+'<line id="'+id+'h" x1="60" y1="64" x2="60" y2="32" stroke="#F4F0E8" stroke-width="5" stroke-linecap="round"/><line id="'+id+'m" x1="60" y1="66" x2="60" y2="18" stroke="#F4F0E8" stroke-width="3" stroke-linecap="round"/><line id="'+id+'s" x1="60" y1="70" x2="60" y2="14" stroke="#E0785A" stroke-width="1.5"/><circle cx="60" cy="60" r="4" fill="#D9C29A"/></svg>';}
 function build(){zc.innerHTML=sel.map(function(s,i){return '<div class="hv-ck">'+mini('mc'+i)+'<b id="mt'+i+'"></b><span>'+s.options[s.selectedIndex].text+'</span><br><span class="dn" id="md'+i+'"></span></div>';}).join('');strip();}
 function strip(){var o=sel.map(function(s){return off(s.value);}),u=new Date().getUTCHours(),h='',ok=0;for(var x=0;x<24;x++){var good=o.every(function(v){var l=((x+v)%24+24)%24;return l>=8&&l<20;});if(good)ok++;h+='<i class="'+(good?'ok':'')+(x===u?' now':'')+'" data-h="'+x+'"></i>';}$('zn-s').innerHTML=h;
  $('zn-n').textContent=ok?'Teal hours (shown in UTC across the bar) are between 8:00 and 20:00 in all three cities: '+ok+' hours a day. The outlined hour is now.':'There is no hour when all three cities are between 8:00 and 20:00. Try a nearer city.';}
 function upd(){sel.forEach(function(s,i){var a=hm(s.value);$('mt'+i).textContent=p2(a[0])+':'+p2(a[1]);var d=$('md'+i);var day=a[0]>=7&&a[0]<19;d.textContent=day?'Daytime':'Night';d.className='dn '+(day?'d':'n');var H=$('mc'+i+'h'),M=$('mc'+i+'m'),S=$('mc'+i+'s');[H,M,S].forEach(function(e){e.style.transformOrigin='60px 60px';});H.style.transform='rotate('+(a[0]%12*30+a[1]/2)+'deg)';M.style.transform='rotate('+(a[1]*6)+'deg)';S.style.transform='rotate('+(a[2]*6)+'deg)';});}
 sel.forEach(function(s){s.addEventListener('change',function(){build();upd();});});build();upd();setInterval(upd,1000);setInterval(strip,60000);}
var fw=$('ft-w');if(fw){var sty=0,bs=[].slice.call(document.querySelectorAll('#ft-s button'));function ft(){var w=+fw.value,base=w<15?[33,36]:w<16?[34,38]:w<17?[36,39]:w<18?[38,41]:w<19?[39,42]:w<20?[40,44]:[42,46],adj=[-2,0,2][sty],a=base[0]+adj,b=base[1]+adj,lug=Math.round(w*2.75),sw=a<36?18:a<41?20:22;
 $('ft-wo').textContent=w+' cm';$('ft-o1').innerHTML=a+'&ndash;'+b+' mm';$('ft-o2').textContent=lug+' mm';$('ft-o3').textContent=sw+' mm';$('ft-wr').setAttribute('rx',(w*8.2).toFixed(0));var r=((a+b)/2)*1.05;$('ft-c').setAttribute('r',r.toFixed(1));$('ft-d').setAttribute('r',(r*.8).toFixed(1));
 $('ft-n').textContent=['Dress watches look best a little smaller and slimmer, so they slide under a cuff.','An everyday watch sits in the middle of the range and suits most outfits.','Sports and dive watches wear larger thanks to their bezels and thicker cases.'][sty]+' Treat these as a starting point and try a watch on if you can.';}
 bs.forEach(function(b){b.addEventListener('click',function(){sty=+b.getAttribute('data-v');bs.forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});ft();});});fw.addEventListener('input',ft);ft();}
var rr=$('rg-r');if(rr&&!rm){var sc=rr.closest('.hv-rg');function rg(){var r=sc.getBoundingClientRect(),p=(innerHeight-r.top)/(innerHeight+r.height);rr.style.transform='rotate('+(p*120-60).toFixed(1)+'deg)';[].forEach.call(rr.querySelectorAll('img,.hv-rg-i>svg'),function(i){i.style.transform='rotate('+(-(p*120-60)).toFixed(1)+'deg)';});}addEventListener('scroll',rg,{passive:true});rg();}
var gs=[].slice.call(document.querySelectorAll('.hv-gs'));if(gs.length&&$('ga-h')){var L=["12 o'clock","3 o'clock","6 o'clock","9 o'clock","12 o'clock"];['ga-h','ga-m','ga-s'].forEach(function(i){$(i).style.transformOrigin='160px 160px';$(i).style.transition='transform .9s cubic-bezier(.2,.7,.2,1)';});function gp(){var k=0;gs.forEach(function(s,i){if(s.getBoundingClientRect().top<innerHeight*.45)k=i;});var h=[0,3,6,9,12][k];$('ga-h').style.transform='rotate('+(h*30)+'deg)';$('ga-m').style.transform='rotate('+(k*360)+'deg)';$('ga-s').style.transform='rotate('+(k*90)+'deg)';$('ga-l').textContent=L[k];}addEventListener('scroll',gp,{passive:true});gp();}
var rl=$('rl-d');if(rl){function rp(){var a=document.querySelector('.hv-pr article'),r=a.getBoundingClientRect(),p=Math.max(0,Math.min(1,-r.top/(r.height-innerHeight*.6)));rl.style.top='calc('+(p*100)+'% - 8px)';}addEventListener('scroll',rp,{passive:true});rp();}
})();
