import{N as p,_ as a,a as o,b as u,i as c}from"./chunk-ZC7KW5BE.js";var m=class r{transform(t){if(t==null||t==="")return"";let i=Number(t);return isNaN(i)?"":new Intl.NumberFormat("de-DE").format(i)}static \u0275fac=function(i){return new(i||r)};static \u0275pipe=a({name:"dotSeparator",type:r,pure:!0,standalone:!0})};var g=class r{transform(t,i){if(i==="price"){if(Array.isArray(t))return t.reduce((n,s)=>n+s.quantity*s.price,0);let e=t;return e.price*e.quantity}else return Array.isArray(t)?t.reduce((n,s)=>n+s.quantity,0):t.price}static \u0275fac=function(i){return new(i||r)};static \u0275pipe=a({name:"total",type:r,pure:!0,standalone:!0})};var h=class r{selectingDishes=new c([{id:1,title:"G\xE0 Vi\xEAn H\xE0nh T\xE2y S\u1ED1t Kem",description:"Su\u1EA5t g\xE0 d\xE0nh cho 1-2 ng\u01B0\u1EDDi. G\u1ED3m g\xE0 vi\xEAn chi\xEAn quy\u1EC7n c\xF9ng s\u1ED1t kem b\xE9o ng\u1EADy.",price:18e4,priceOutdated:199e3,avatar:"images/dishes/pic01.jpg",categoryId:2,status:"AVAILABLE",quantity:2},{id:2,title:"G\xE0 S\u1ED1t Ng\u1ECDt",description:"Su\u1EA5t g\xE0 d\xE0nh cho 1-2 ng\u01B0\u1EDDi. G\u1ED3m 5 mi\u1EBFng g\xE0 chi\xEAn gi\xF2n c\xF9ng s\u1ED1t ng\u1ECDt \u0111\u1ED9c quy\u1EC1n nh\xE0 No...",price:17e4,priceOutdated:null,avatar:"images/dishes/pic02.jpg",categoryId:2,status:"AVAILABLE",quantity:1},{id:3,title:"G\xE0 L\u1EAFc Ph\xF4 Mai",description:"Su\u1EA5t g\xE0 d\xE0nh cho 1-2 ng\u01B0\u1EDDi. G\u1ED3m 5 mi\u1EBFng g\xE0 chi\xEAn gi\xF2n l\u1EAFc c\xF9ng b\u1ED9t ph\xF4 mai m\u1ECBn th\u01A1m...",price:18e4,priceOutdated:null,avatar:"images/dishes/pic03.jpg",categoryId:2,status:"AVAILABLE",quantity:3}]);orderedDishes=new c([]);updateSelectingDishes(t,i){let e=JSON.parse(JSON.stringify(this.selectingDishes.value)),n=e.findIndex(s=>s.id===t.id);n!==-1?(e[n].quantity+=i,e[n].quantity===0&&e.splice(n,1)):e.push(u(o({},t),{quantity:1})),this.selectingDishes.next(e)}static \u0275fac=function(i){return new(i||r)};static \u0275prov=p({token:r,factory:r.\u0275fac,providedIn:"root"})};export{m as a,g as b,h as c};
