import{S as b,i as w,s as y,e as m,x as v,c as p,a as d,y as g,d as h,b as _,g as $,z as x,r as k,p as I,C as D,t as u,h as f,G as c,n as R}from"../../chunks/index-cc3949c1.js";import{p as P}from"../../chunks/jobs-e09f476a.js";import{P as T}from"../../chunks/PowerTable-2a1754c9.js";function C(i){let t,s,n,e,a,r;return{c(){t=m("div"),s=u("This is a custom text that"),n=m("br"),e=u(" will be shown when there are"),a=m("br"),r=u(" no rows to display"),this.h()},l(l){t=p(l,"DIV",{slot:!0});var o=d(t);s=f(o,"This is a custom text that"),n=p(o,"BR",{}),e=f(o," will be shown when there are"),a=p(o,"BR",{}),r=f(o," no rows to display"),o.forEach(h),this.h()},h(){_(t,"slot","noResults")},m(l,o){$(l,t,o),c(t,s),c(t,n),c(t,e),c(t,a),c(t,r)},p:R,d(l){l&&h(t)}}}function E(i){let t,s,n;return s=new T({props:{ptData:P,ptInstructs:i[0],$$slots:{noResults:[C]},$$scope:{ctx:i}}}),{c(){t=m("div"),v(s.$$.fragment),this.h()},l(e){t=p(e,"DIV",{class:!0});var a=d(t);g(s.$$.fragment,a),a.forEach(h),this.h()},h(){_(t,"class","MuonW PowerTable")},m(e,a){$(e,t,a),x(s,t,null),n=!0},p(e,[a]){const r={};a&2&&(r.$$scope={dirty:a,ctx:e}),s.$set(r)},i(e){n||(k(s.$$.fragment,e),n=!0)},o(e){I(s.$$.fragment,e),n=!1},d(e){e&&h(t),D(s)}}}function B(i){return[[{key:"id",title:"ID"},{key:"first_name",title:"First Name"},{key:"last_name",title:"Last Name"},{key:"company",title:"Company",filterPhrase:"Google"},{key:"department",title:"Department"},{key:"job",title:"Job"}]]}class V extends b{constructor(t){super(),w(this,t,B,E,y,{})}}export{V as default};
