import{S as x,i as I,s as P,e as m,x as k,c as h,a as f,y as T,d,b as _,g as $,z as j,r as y,p as C,C as R,t as g,k as V,h as w,m as S,G as u,R as D,n as E,T as A,Z as J}from"../../chunks/index-cc3949c1.js";import{P as M}from"../../chunks/PowerTable-2a1754c9.js";function O(l){let t,e,n,o,a,s,c,b;return{c(){t=m("div"),e=m("div"),n=g("Import sample data"),o=V(),a=m("div"),s=g("Export current data"),this.h()},l(r){t=h(r,"DIV",{slot:!0});var i=f(t);e=h(i,"DIV",{"data-name":!0});var v=f(e);n=w(v,"Import sample data"),v.forEach(d),o=S(i),a=h(i,"DIV",{"data-name":!0});var p=f(a);s=w(p,"Export current data"),p.forEach(d),i.forEach(d),this.h()},h(){_(e,"data-name","item"),_(a,"data-name","item"),_(t,"slot","settings")},m(r,i){$(r,t,i),u(t,e),u(e,n),u(t,o),u(t,a),u(a,s),c||(b=[D(e,"click",l[3]),D(a,"click",l[4])],c=!0)},p:E,d(r){r&&d(t),c=!1,A(b)}}}function B(l){let t,e;return{c(){t=m("div"),e=g("\u24D8 Follow the instructions to populate this example table."),this.h()},l(n){t=h(n,"DIV",{slot:!0});var o=f(t);e=w(o,"\u24D8 Follow the instructions to populate this example table."),o.forEach(d),this.h()},h(){_(t,"slot","noResults")},m(n,o){$(n,t,o),u(t,e)},p:E,d(n){n&&d(t)}}}function F(l){let t,e,n,o={ptData:l[1],ptOptions:l[2],$$slots:{noResults:[B],settings:[O]},$$scope:{ctx:l}};return e=new M({props:o}),l[5](e),{c(){t=m("div"),k(e.$$.fragment),this.h()},l(a){t=h(a,"DIV",{class:!0});var s=f(t);T(e.$$.fragment,s),s.forEach(d),this.h()},h(){_(t,"class","MuonW PowerTable")},m(a,s){$(a,t,s),j(e,t,null),n=!0},p(a,[s]){const c={};s&2&&(c.ptData=a[1]),s&64&&(c.$$scope={dirty:s,ctx:a}),e.$set(c)},i(a){n||(y(e.$$.fragment,a),n=!0)},o(a){C(e.$$.fragment,a),n=!1},d(a){a&&d(t),l[5](null),R(e)}}}function N(l,t,e){let n,o=[],a={rowsPerPage:20,checkboxColumn:!0,segments:{topBar:["settings","search","pagination"],pTable:["table"],bottomBar:["dropdown","stats","pagination"]}};function s(r){n.closeMenu(r),fetch("https://raw.githubusercontent.com/muonw/powertable/main/src/data/jobs.json").then(i=>i.json()).then(i=>e(1,o=i))}function c(r){n.closeMenu(r);let i=n.getData().data;var v="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(i)),p=document.createElement("a");p.setAttribute("href",v),p.setAttribute("download","PowerTable_current_data.json"),document.body.appendChild(p),p.click(),p.remove()}function b(r){J[r?"unshift":"push"](()=>{n=r,e(0,n)})}return[n,o,a,s,c,b]}class G extends x{constructor(t){super(),I(this,t,N,F,P,{})}}export{G as default};
