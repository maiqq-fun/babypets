const fs=require('fs'),vm=require('vm'),crypto=require('crypto');
const S=__dirname+'/../backend/';
function make(){
  const STORE={};const pushes=[];
  const ctx={console,Date,Math,JSON,Object,Array,String,Number,Error,Set,Map,RegExp,isNaN,parseInt,parseFloat,Promise,
    Utilities:{getUuid:()=>crypto.randomUUID(),formatDate:(d,tz,f)=>new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Taipei',year:'numeric',month:'2-digit',day:'2-digit'}).format(d)},
    LockService:{getScriptLock:()=>({tryLock:()=>true,waitLock(){},releaseLock(){}})},
    ContentService:{createTextOutput:s=>({s,setMimeType(){return this},getContent(){return s}}),MimeType:{JSON:1}},
    PropertiesService:{getScriptProperties:()=>({getProperty:k=>k==='ADMIN_PW'?'x':null,setProperty(){}})},
    Logger:{log:console.log},STORE,pushes};
  vm.createContext(ctx);
  let code=fs.readFileSync(S+'backend.gs','utf8');
  code+=`
const __c=x=>JSON.parse(JSON.stringify(x));
function all_(n){return Object.values(STORE[n]||{}).map(__c)}
function get_(n,id){if(!id)return null;const o=(STORE[n]||{})[String(id)];return o?__c(o):null}
function put_(n,o){(STORE[n]=STORE[n]||{})[String(o.id)]=__c(o)}
function delWhere_(n,t){const s=STORE[n]||{};let k=0;for(const id in s)if(t(__c(s[id]))){delete s[id];k++}return k}
function pushKey_(){return null}
function sh_(){return {getLastRow:()=>1,deleteRows(){}}}
function ss_(){return {getSheetByName:()=>null}}
function recentFeed_(){return all_("feed").slice(-80)}
function pushSend_(ids,msg){pushes.push({ids,msg})}
this.__api=(body)=>JSON.parse(doPost({postData:{contents:body}}).getContent());
this.__run=(src)=>eval(src);
`;
  vm.runInContext(code,ctx,{filename:'backend.gs'});
  return ctx;
}
module.exports={make};
