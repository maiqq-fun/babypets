const {ppMake,ppStep,ppLaunch}=require('./pp_core.js');
const P=JSON.parse(process.argv[2]);const M=ppMake(P);const N=+process.argv[3]||20000;
function play(power){let paid=0,won=0,st={tulipOpen:0,fever:0},cnt={};
  for(let i=0;i<N;i++){paid++;const b=ppLaunch(M,power);let q=null,t=0;while(!q&&t<8){q=ppStep(M,b,1/120,st);t+=1/120}
    q=q||{k:'out',pay:0};cnt[q.k]=(cnt[q.k]||0)+1;
    let pay=q.pay;if(st.fever>0){pay+=q.k==='out'?0:P.fx;st.fever--}
    if(q.k==='tulip')st.tulipOpen=P.topen;else if(st.tulipOpen>0)st.tulipOpen--;
    if(q.k==='jack'){pay+=P.jack;st.fever=P.fn}
    won+=pay}
  return {rtp:+(won/paid).toFixed(3),cnt}}
const out=[];for(const pw of (process.argv[4]||'0,.15,.3,.5,.7,.85,1').split(',').map(Number))out.push([pw,play(pw)]);
out.forEach(([p,r])=>console.log(p,r.rtp,JSON.stringify(r.cnt)));
