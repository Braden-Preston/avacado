(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,n){e.exports=n.p+"static/media/logo.a3be3064.svg"},253:function(e,t,n){e.exports=n(437)},435:function(e,t,n){},436:function(e,t,n){},437:function(e,t,n){"use strict";n.r(t);var a,r,c,o,i,l,s,p=n(0),u=n.n(p),m=n(21),d=n.n(m),h=n(24),b=n(22),g=n(47),f=n(46),E=n(48),y=n(13),v=n(440),O=n(442),j=n(439),k=n(443),w=n(438),x=n(59),D=n.n(x),A=n(116),F=n(74),S=n(29),I=(n(260),{apiKey:"AIzaSyCjrBdg6dqb9OZ42tCmDtim2kfzscYH0N0",authDomain:"avacado-c3185.firebaseapp.com",databaseURL:"https://avacado-c3185.firebaseio.com",projectId:"avacado-c3185",storageBucket:"avacado-c3185.appspot.com",messagingSenderId:"841336252991"}),R=n(117),B=n.n(R),C=n(49),W=function(){function e(t,n,a){Object(h.a)(this,e),this.measurement=void 0,this.portion=void 0,this.name=void 0,this.portion=t,this.measurement=n,this.name=a}return Object(b.a)(e,[{key:"get",value:function(e){if(this[e])return this[e];throw new Error('Could not return property "'.concat(e,'" for Ingredient'))}},{key:"set",value:function(e,t){var n=this[e];if(!n)throw new Error('"'.concat(e,'" is not a valid property key'));if(typeof n!==typeof t)throw new Error('"'.concat(t,'" is not of required type [').concat(typeof n,"]"));this[e]=t}}]),e}(),z=n(164),P=function(){function e(t,n,a,r,c){Object(h.a)(this,e),this.id=void 0,this.ingredients=void 0,this.name=void 0,this.description=void 0,this.instructions=void 0,this.id=t,this.name=n,this.ingredients=a,this.instructions=r,this.description=c||""}return Object(b.a)(e,[{key:"addIngredient",value:function(e){this.ingredients.push(e)}},{key:"removeIngredient",value:function(e){return{removed:this.ingredients.splice(e,1)[0],ingredients:this.ingredients}}},{key:"setIngredients",value:function(e){Object(z.isArray)(e)?this.ingredients=e:this.ingredients=[e]}}]),e}(),N=n(4);n(316);B.a.initializeApp(I),Object(C.c)({firebase:B.a});var T,H=new W(1,"cup","cocoa"),q=new W(2,"pinch","cinnamon"),L=(new W(3,"tbsp","nutmeg"),new P("ID","Hot Cocoa",[H,q],"Pepare with love! :)","A warm morning delight"),new P("ID","Madagascar Cofee",[H,q],"Shaken not stirred","Very nice stuff!"),{}),M=(a=N.e.bound,r=N.e.bound,c=N.e.bound,o=function(){function e(t){Object(h.a)(this,e),Object(F.a)(this,"recipeBook",i,this),Object(F.a)(this,"recipes",l,this),Object(F.a)(this,"currentDocID",s,this);var n=t||L;for(var a in n)n.hasOwnProperty(a)&&(this[a]=n[a])}return Object(b.a)(e,[{key:"currentDocument",get:function(){return new C.b("users/".concat("3SRvQoY7u0E7WA1qUCpz","/recipeBook/",this.currentDocID))}},{key:"recipes2",get:function(){var e=new Array;return this.recipeBook.docs.map(function(t){var n=t.data,a=n.name,r=n.ingredients,c=n.instructions,o=n.description;e.push(new P(t.id,a,r,c,o))}),e}}]),Object(b.a)(e,[{key:"setDocID",value:function(e){this.currentDocID=e}},{key:"addRecipe",value:function(){var e=Object(A.a)(D.a.mark(function e(t){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.recipeBook.add({name:"Madagascar Cofee",instructions:"Shaken not stirred",description:"Very nice stuff!"});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}},e,this,[[0,5]])}));return function(t){return e.apply(this,arguments)}}()},{key:"deleteAllRecipes",value:function(){var e=Object(A.a)(D.a.mark(function e(t){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{this.recipes.map(function(e){e.delete()})}catch(t){console.error(t)}case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),i=Object(S.a)(o.prototype,"recipeBook",[N.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new C.a("users/".concat("3SRvQoY7u0E7WA1qUCpz","/recipeBook"))}}),l=Object(S.a)(o.prototype,"recipes",[N.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.recipeBook.docs}}),s=Object(S.a)(o.prototype,"currentDocID",[N.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"ID"}}),Object(S.a)(o.prototype,"currentDocument",[N.f],Object.getOwnPropertyDescriptor(o.prototype,"currentDocument"),o.prototype),Object(S.a)(o.prototype,"recipes2",[N.f],Object.getOwnPropertyDescriptor(o.prototype,"recipes2"),o.prototype),Object(S.a)(o.prototype,"setDocID",[a],Object.getOwnPropertyDescriptor(o.prototype,"setDocID"),o.prototype),Object(S.a)(o.prototype,"addRecipe",[r],Object.getOwnPropertyDescriptor(o.prototype,"addRecipe"),o.prototype),Object(S.a)(o.prototype,"deleteAllRecipes",[c],Object.getOwnPropertyDescriptor(o.prototype,"deleteAllRecipes"),o.prototype),o),U=n(165),Y=n.n(U),Q=n(14),J=n(441),V=n(11),K=n.n(V),X=Object(Q.withStyles)(function(e){return Object(Q.createStyles)({root:{boxSizing:"border-box",position:"absolute",minHeight:"100vh",maxHeight:"100vh",minWidth:"100vw",maxWidth:"100vw",overflow:"scroll"}})})(Object(y.c)(function(e){var t=e.children,n=e.classes,a=e.id;return u.a.createElement("div",{id:a,className:n.root},t)})),Z=n(118),$=Object(y.c)(function(e){var t=e.store,n=e.match;return u.a.createElement(w.a,{path:"".concat(n.path,"/:mode"),children:function(e){return u.a.createElement(_,Object.assign({},e,{store:t,match:n,id:n.params.id,mode:e.match&&e.match.params.mode}))}})}),_=Object(Q.withStyles)(function(e){return Object(Q.createStyles)({root:{border:"1px solid blue"},input:{padding:20,transition:"all 0.5s ease-in-out 0s",".edit &":{paddingTop:40,color:"green"},".bake &":{padding:60,color:"dodgerblue",transition:"all 0.5s ease-in-out 0s"}},edit:{color:"green !important"},bake:{color:"blue !important"}})})(Object(y.c)(function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).recipe=new C.b("users/".concat("3SRvQoY7u0E7WA1qUCpz","/recipeBook/",n.props.match.params.id)),n.todoStore=Object(N.n)(["cat","cat","cat"]),n.recipeForm=Object(N.n)({name:"",description:"",instructions:"",ingredients:""}),n.resetForm=function(){for(var e in console.log("reset"),n.recipeForm)n.recipeForm.hasOwnProperty(e)&&(n.recipeForm[e]="")},n.handleAddTodo=function(){n.todoStore.push("cat")},n}return Object(E.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.recipe,t=this.recipeForm,n=this.props,a=n.match,r=n.classes,c=n.mode,o=n.id,i=this.recipe.data;i.name,i.instructions,i.ingredients,i.description;return console.log("MODE",c),console.log([Object(N.r)(t)]),u.a.createElement(X,{id:"Recipe-".concat(o)},e.isLoading&&u.a.createElement(Z.a,{disableShrink:!0}),u.a.createElement(te,{match:a,mode:c,resetForm:this.resetForm}),u.a.createElement(ne,{match:a,mode:c}),u.a.createElement(ae,{match:a}),u.a.createElement("div",{className:K()(r.root,c)}," ",u.a.createElement("div",{key:o,style:{marginTop:16,padding:16,minWidth:300,textAlign:"left",maxWidth:500,background:"lightgrey",lineHeight:.3}},u.a.createElement(p.Fragment,null,u.a.createElement("p",null,o),u.a.createElement(G,{classes:r,mode:c,recipe:e,recipeForm:t,value:"name",resetForm:this.resetForm}),u.a.createElement(G,{classes:r,mode:c,recipe:e,recipeForm:t,value:"description",resetForm:this.resetForm}),u.a.createElement(G,{classes:r,mode:c,recipe:e,recipeForm:t,value:"ingredients",resetForm:this.resetForm}),u.a.createElement(G,{classes:r,mode:c,recipe:e,recipeForm:t,value:"instructions",resetForm:this.resetForm}),u.a.createElement("p",null,"Ingredients"),u.a.createElement("button",{onClick:this.handleAddTodo},"Add")))))}}]),t}(p.Component))),G=Object(y.c)(function(e){var t=e.classes,n=e.mode,a=e.recipe,r=e.recipeForm,c=e.value;return u.a.createElement("div",{className:t.input},"edit"!==n&&u.a.createElement("p",null,a.data[c]),u.a.createElement(ee,{recipeForm:r,recipe:a,mode:n,value:c}))}),ee=Object(y.c)(function(e){var t=e.recipeForm,n=e.recipe,a=e.mode,r=e.value;return u.a.createElement(p.Fragment,null,"edit"===a&&u.a.createElement(Z.b,{variant:"filled",value:""===t[r]?n.data[r]:t[r],onChange:function(e){t[r]=e.target.value}}))}),te=Object(y.c)(function(e){var t=e.match,n=e.mode,a=e.resetForm;return u.a.createElement("p",{style:{position:"fixed",top:16,minWidth:60,textAlign:"center",padding:8,right:16,background:"grey"},onClick:function(){console.log("clicked"),a()}},u.a.createElement(j.a,{to:"".concat(t.url).concat("edit"===n?"":"/edit")},"edit"===n?"Done":"Edit"))}),ne=Object(y.c)(function(e){var t=e.match,n=e.mode;return u.a.createElement("p",{style:{position:"fixed",top:"30vh",minWidth:60,textAlign:"center",padding:8,left:"50%",transform:"translateX(-50%)",background:"grey"}},u.a.createElement(j.a,{to:"".concat(t.url).concat("bake"===n?"":"/bake")},"bake"===n?"All Done!":"Bake"))}),ae=Object(y.c)(function(e){var t=e.match;return u.a.createElement("div",{style:{position:"fixed",bottom:30,zIndex:9999,left:20,padding:10,borderRadius:4,boxShadow:"0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)",listStylePosition:"inside",background:"lightgrey",paddingTop:0,paddingBottom:0}},t.params&&u.a.createElement("li",null,u.a.createElement(j.a,{to:"/recipes/".concat(t.params.category)},"Back")),u.a.createElement("li",null,u.a.createElement(j.a,{to:"".concat(t.url,"/edit")},"Edit")),u.a.createElement("li",null,u.a.createElement(j.a,{to:"".concat(t.url,"/bake")},"Bake")),u.a.createElement("li",null,u.a.createElement(j.a,{to:"".concat(t.url)},"Done")))}),re=Object(y.c)(function(e){var t=e.store,n=e.match,a=t.recipes,r=t.addRecipe,c=t.deleteAllRecipes;return u.a.createElement(X,{id:"[".concat(n.params.category,"] Recipes")},u.a.createElement("button",{onClick:function(){return r()},style:{background:"grey"}},"Add Recipe"),u.a.createElement("button",{onClick:function(){return c()},style:{background:"grey"}},"Delete All Recipes"),u.a.createElement("li",null,u.a.createElement(j.a,{to:"/recipes".concat("/breakfast")},"Breakfast")),u.a.createElement("li",null,u.a.createElement(j.a,{to:"/recipes".concat("/lunch")},"Lunch")),u.a.createElement("li",null,u.a.createElement(j.a,{to:"/recipes".concat("/dinner")},"Dinner")),u.a.createElement("li",null,u.a.createElement(j.a,{to:"/recipes".concat("/snack")},"Snacks")),a.map(function(e){return u.a.createElement(ce,Object.assign({key:e.id},{rec:e,match:n}))}))}),ce=Object(y.c)(function(e){var t=e.rec,n=(e.query,e.match),a=t.data;return u.a.createElement(j.a,{to:"/recipes/".concat(n.params.category,"/").concat(t.id)},u.a.createElement("div",{key:t.id,style:{marginTop:16,padding:16,minWidth:300,textAlign:"left",maxWidth:500,background:"lightgrey",lineHeight:.3}},u.a.createElement("p",null,"".concat(t.id,":")),u.a.createElement("p",null,"\t ".concat(a.name)),u.a.createElement("p",null,"\t ".concat(a.description)),u.a.createElement("p",null,"    ".concat(a.ingredients)),u.a.createElement("p",null,"    ".concat(a.instructions))))}),oe=function(e){return Object(Q.createStyles)({root:{color:"red !important",background:"red"},paper:{},button:{}})},ie=Object(y.b)("store")(Object(Q.withStyles)(oe)(Object(y.c)(function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.store,n=e.match,a=e.location;return u.a.createElement(X,{id:"Recipe Book"},u.a.createElement(k.a,{location:a},u.a.createElement(w.a,{exact:!0,path:"".concat(n.path,"/:category"),render:function(e){var n=e.match;return u.a.createElement(re,{store:t,match:n})}}),u.a.createElement(w.a,{path:"".concat(n.path,"/:category/:id"),render:function(e){var n=e.match;return u.a.createElement($,{store:t,match:n})}}),u.a.createElement(le,{match:n,route:"/breakfast"})))}}]),t}(p.Component)))),le=Object(Q.withStyles)(oe)(Object(y.c)(function(e){var t=e.match,n=e.route;return u.a.createElement(w.a,{exact:!0,path:"".concat(t.path),render:function(e){var t=e.match;return u.a.createElement(J.a,{to:"".concat(t.path).concat(n)})}})})),se=new M(L),pe=Object(y.c)(T=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){n(435),n(436)}},{key:"render",value:function(){return u.a.createElement(y.a,{store:se},u.a.createElement(v.a,null,u.a.createElement(ue,null)))}}]),t}(p.Component))||T,ue=Object(O.a)(function(e){var t=e.location;e.match;return u.a.createElement(X,{id:"App"},u.a.createElement("ul",{style:{position:"fixed",bottom:0,zIndex:9999,right:20,padding:10,borderRadius:4,boxShadow:"0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)",listStylePosition:"inside",background:"lightgrey",paddingTop:0,paddingBottom:0,fontSize:12}},u.a.createElement("li",null,u.a.createElement(j.a,{to:"/"},"Home")),u.a.createElement("li",null,u.a.createElement(j.a,{to:"/recipes"},"Recipes")),u.a.createElement("li",null,u.a.createElement(j.a,{to:"/planner"},"Planner")),u.a.createElement("li",null,u.a.createElement(j.a,{to:"/timer"},"Timer")),u.a.createElement("li",null,u.a.createElement(j.a,{to:"/settings"},"Settings"))),u.a.createElement("div",{style:{position:"fixed",bottom:0,color:"dodgerblue",background:"lightgrey"}},t.pathname),u.a.createElement(k.a,{location:t},u.a.createElement(w.a,{exact:!0,path:"/",component:function(){return u.a.createElement("div",{className:"Welcome"},u.a.createElement("header",{className:"App-header"},u.a.createElement("img",{src:Y.a,className:"App-logo",alt:"logo"}),u.a.createElement("p",null,"Welcome to Avacado"),u.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}),u.a.createElement(w.a,{path:"/recipes",component:ie}),u.a.createElement(w.a,{render:function(){return u.a.createElement(p.Fragment,null,u.a.createElement("h1",null,"404"),u.a.createElement("h4",null,"Page not found."))}})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(u.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[253,1,2]]]);
//# sourceMappingURL=main.81d57586.chunk.js.map