const fs=require('fs'),path=require('path'),crypto=require('crypto');
const file=path.join(__dirname,'kisanconnect-data.json');
const now=()=>new Date().toISOString();
const initial={users:[],centers:[
{id:1,name:'Kurnool Procurement Hub',district:'Kurnool',crop:'Paddy',opening:'08:00',closing:'18:00',capacity:180,queue:42,status:'Open'},
{id:2,name:'Adoni Farmer Center',district:'Kurnool',crop:'Cotton',opening:'08:30',closing:'17:30',capacity:140,queue:27,status:'Open'},
{id:3,name:'Nandyal Procurement Center',district:'Nandyal',crop:'Maize',opening:'09:00',closing:'18:00',capacity:160,queue:19,status:'Open'},
{id:4,name:'Dhone Agri Hub',district:'Kurnool',crop:'Groundnut',opening:'08:00',closing:'17:00',capacity:110,queue:12,status:'Open'},
{id:5,name:'Pattikonda Agri Center',district:'Kurnool',crop:'Paddy',opening:'08:30',closing:'17:00',capacity:120,queue:8,status:'Open'}
],tokens:[],prices:[
{id:1,crop:'Paddy',market:'Kurnool APMC',price:2360,unit:'₹/quintal',change:1.8,updated_at:now()},
{id:2,crop:'Cotton',market:'Adoni Market',price:7120,unit:'₹/quintal',change:-0.7,updated_at:now()},
{id:3,crop:'Maize',market:'Nandyal Market',price:2240,unit:'₹/quintal',change:2.4,updated_at:now()},
{id:4,crop:'Groundnut',market:'Kurnool APMC',price:6280,unit:'₹/quintal',change:1.1,updated_at:now()},
{id:5,crop:'Red Gram',market:'Nandyal Market',price:6840,unit:'₹/quintal',change:-1.2,updated_at:now()},
{id:6,crop:'Sunflower',market:'Kurnool APMC',price:5900,unit:'₹/quintal',change:0.6,updated_at:now()}
],posts:[],notifications:[]};
if(!fs.existsSync(file))fs.writeFileSync(file,JSON.stringify(initial,null,2));
let data=JSON.parse(fs.readFileSync(file,'utf8'));
const save=()=>fs.writeFileSync(file,JSON.stringify(data,null,2));
const nextId=a=>a.reduce((m,x)=>Math.max(m,Number(x.id)||0),0)+1;
const hashPassword=p=>crypto.createHash('sha256').update(p).digest('hex');
if(!data.users.some(u=>u.phone==='9000000000')){data.users.push({id:nextId(data.users),name:'KisanConnect Officer',phone:'9000000000',password_hash:hashPassword('Admin@12345'),role:'officer',language:'en',created_at:now()});save();}
module.exports={db:data,save,nextId,hashPassword,safe:u=>{if(!u)return null;const {password_hash,...x}=u;return x;},now};
