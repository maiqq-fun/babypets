module.exports=function seed(B){const now=Date.now(),put=(n,o)=>{(B.STORE[n]=B.STORE[n]||{})[o.id]=o};
 put('players',{id:'p1',nick:'阿麥',houseId:'h1',code:'MH-AAAA',pin:'1111',createdAt:now-9e8,game:{coins:5000,tickets:3,lv:8,xp:0,bag:{}}});
 put('players',{id:'p2',nick:'小花',houseId:'h2',code:'MH-BBBB',pin:'2222',createdAt:now-9e8,game:{coins:800,tickets:0,lv:3,xp:0,bag:{}}});
 const T=(id,item,x,y)=>({id,item,x,y});
 put('houses',{id:'h1',name:'阿麥家',slot:1,style:1,pw:'1234',room:'basic1',owned:['basic1'],poops:[],poopAt:now,gifts:[],toys:[T('t1','ball',300,950),T('t2','yarn',500,1000),T('t3','duck',650,1050)],
   floor2:1,room2:'basic1',toys2:[T('u1','box',300,1000),T('u2','cushion',450,1000),T('u3','ball',600,1050),T('u4','yarn',350,1100)],inn:{at:now-6*3600e3},
   show:{room:'basic',rooms:['basic'],cabs:{wood:1,noir:1},pos:['wood','',''],it:[[],[],[],[],[],[]],wo:{'cb:cat':1}},farm:{n:4,p:[{c:'tomato',at:now-3600e3,w:[]},null,null,null,null,null]},createdAt:now});
 put('houses',{id:'h2',name:'小花家',slot:2,style:2,pw:'5678',room:'basic2',owned:['basic2'],poops:[],poopAt:now,gifts:[],toys:[T('v1','ball',300,950),T('v2','duck',500,1000)],floor2:1,room2:'basic1',toys2:[T('w1','box',400,1000)],createdAt:now});
 put('pets',{id:'pet1',houseId:'h1',name:'咪咪',species:'cat',trait:'高冷',lastFed:now});
 put('pets',{id:'pet2',houseId:'h2',name:'旺旺',species:'dog',trait:'活潑',lastFed:now});
 put('meta',{id:'island',adminId:'p1',econV:0});
}
