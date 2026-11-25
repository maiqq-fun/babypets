// 珠珠台物理核心（遊戲和模擬共用）
function ppMake(P){
  const W=360,H=560,R=5.5,PR=3.2,G=900;
  const pins=[];
  // 釘子：交錯排列，中間留出風車通道
  for(let r=0;r<13;r++){const y=120+r*28,off=r%2?0:17;for(let x=36+off;x<=W-36;x+=34){
    if(r>=9&&Math.abs(x-W/2)<26)continue;   // 開花洞上方留空
    pins.push({x,y})}}
  // 開花洞旁邊的導引釘
  pins.push({x:W/2-22,y:418},{x:W/2+22,y:418},{x:W/2-9,y:484},{x:W/2+9,y:484});   // 大放送洞上方兩根擋釘
  // 洞：x0..x1 在 y 那條線上接住
  const pockets=[
    {k:'side',x0:60-P.sw,x1:60+P.sw,y:300,pay:P.side},
    {k:'side',x0:W-60-P.sw,x1:W-60+P.sw,y:300,pay:P.side},
    {k:'tulip',x0:W/2-P.tw,x1:W/2+P.tw,y:440,pay:P.tulip},
    {k:'low',x0:85-P.lw,x1:85+P.lw,y:476,pay:P.low},
    {k:'low',x0:W-85-P.lw,x1:W-85+P.lw,y:476,pay:P.low},
    {k:'jack',x0:W/2-P.jw,x1:W/2+P.jw,y:500,pay:0},
  ];
  return {W,H,R,PR,G,pins,pockets};
}
// 一顆珠：power 0..1 → 從頂部哪裡落下；回傳 {k,pay}
function ppStep(M,b,dt,st){
  b.vy+=M.G*dt;b.x+=b.vx*dt;b.y+=b.vy*dt;
  if(b.x<M.R+8){b.x=M.R+8;b.vx=Math.abs(b.vx)*.6}
  if(b.x>M.W-M.R-8){b.x=M.W-M.R-8;b.vx=-Math.abs(b.vx)*.6}
  for(const p of M.pins){const dx=b.x-p.x,dy=b.y-p.y,d2=dx*dx+dy*dy,rr=M.R+M.PR;if(d2<rr*rr&&d2>0.01){const d=Math.sqrt(d2),nx=dx/d,ny=dy/d;b.x=p.x+nx*rr;b.y=p.y+ny*rr;
    const vn=b.vx*nx+b.vy*ny;if(vn<0){b.vx-=1.55*vn*nx;b.vy-=1.55*vn*ny;b.vx+=(Math.random()-.5)*40}}}
  const open=st&&st.tulipOpen>0,fever=st&&st.fever>0;
  // v2.95：碰到畫出來的洞（含珠子半徑）就算進洞，看起來進了就一定有分
  for(const q of M.pockets){const w=q.k==='tulip'&&open?14:0,j=q.k==='jack',x0=j?q.x0-3:q.x0-w-M.R*.5,x1=j?q.x1+3:q.x1+w+M.R*.5,y0=j?q.y-2:q.y-2-M.R*.6,y1=j?q.y+10:q.y+14;
    if(b.x>x0&&b.x<x1&&b.y>y0&&b.y<y1)return q}
  b.py=b.y;
  if(b.y>M.H-20)return {k:'out',pay:0};
  return null}
function ppLaunch(M,power){const x=40+power*(M.W-80)+(Math.random()-.5)*24;return {x,y:60,vx:(Math.random()-.5)*60,vy:40,py:60}}
if(typeof module!=='undefined')module.exports={ppMake,ppStep,ppLaunch};
