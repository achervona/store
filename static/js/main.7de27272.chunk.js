(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"title":"\u0428\u0430\u043c\u043f\u0443\u043d\u044c","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.","images":["image1.jpg","image2.jpg"],"price":200,"volumes":[100,200,300],"colors":[{"id":1,"name":"\u041a\u0440\u0430\u0441\u043d\u044b\u0439","value":"red"},{"id":2,"name":"\u0417\u0435\u043b\u0435\u043d\u044b\u0439","value":"green"},{"id":3,"name":"\u0421\u0438\u043d\u0438\u0439","value":"blue"},{"id":4,"name":"\u0416\u0435\u043b\u0442\u044b\u0439","value":"yellow"}]},{"id":2,"title":"\u0428\u0430\u043c\u043f\u0443\u043d\u044c","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.","images":["image3.jpg"],"price":200,"volumes":[100,200,300],"colors":[{"id":1,"name":"\u041a\u0440\u0430\u0441\u043d\u044b\u0439","value":"red"},{"id":2,"name":"\u0417\u0435\u043b\u0435\u043d\u044b\u0439","value":"green"},{"id":3,"name":"\u0421\u0438\u043d\u0438\u0439","value":"blue"},{"id":4,"name":"\u0416\u0435\u043b\u0442\u044b\u0439","value":"yellow"}]}]')},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),a=c.n(i),r=c(9),o=c.n(r),s=(c(16),c(17),c(8)),u=c(3),d=c(4),l=c(6),m=c(5),p=(c(18),c(2)),j=c.n(p),b=(c(19),function(e){Object(l.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(u.a)(this,c);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={isOpen:!1},e.toggle=function(){e.setState((function(e){return{isOpen:!e.isOpen}}))},e}return Object(d.a)(c,[{key:"render",value:function(){var e=this,t=this.props,c=t.colors,i=t.selectedColor,a=t.selectColor;return Object(n.jsxs)("div",{className:"color-picker",children:[Object(n.jsx)("button",{type:"button",name:"button",className:"color-picker__button button",onClick:this.toggle,children:i.name||"\u0426\u0432\u0435\u0442"}),this.state.isOpen&&Object(n.jsx)("ul",{className:"color-picker__list",children:c.map((function(t){return Object(n.jsx)("li",{className:j()("color-picker__list-item",{"color-picker__list-item--selected":i.value===t.value}),onClick:function(){a(t),e.toggle()},children:t.name},t.id)}))})]})}}]),c}(a.a.PureComponent)),h=function(e){Object(l.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(u.a)(this,c);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={quantity:1,volume:e.props.volumes[0],color:"",isButtonPressed:!1,isIconClicked:!1},e.increaseQuantity=function(){e.setState((function(e){return{quantity:e.quantity+1}}))},e.decreaseQuantity=function(){e.state.quantity<=1||e.setState((function(e){return{quantity:e.quantity-1}}))},e.selectVolume=function(t){e.setState({volume:t})},e.selectColor=function(t){e.setState({color:t})},e}return Object(d.a)(c,[{key:"render",value:function(){var e=this,t=this.props,c=t.id,i=t.title,a=t.description,r=t.images,o=t.price,s=t.volumes,u=t.colors,d=this.state,l=d.quantity,m=d.volume,p=d.color;return Object(n.jsxs)("div",{className:"product-card product-list__card",children:[Object(n.jsxs)("div",{className:"product-card__top",children:[Object(n.jsx)("div",{className:"product-card__new-mark",children:"new"}),Object(n.jsx)("div",{className:"product-card__img-block",children:r.map((function(e,t){return Object(n.jsx)("img",{src:"".concat("/images/").concat(e),alt:"Product",className:j()("product-card__img",{"product-card__img--secondary":t>0})},e)}))}),Object(n.jsx)("div",{className:j()("product-card__icon",{"product-card__icon--clicked":this.state.isIconClicked}),onClick:function(){return e.setState((function(e){return{isIconClicked:!e.isIconClicked}}))}})]}),Object(n.jsx)("div",{className:"product-card__title",children:i}),Object(n.jsx)("p",{className:"product-card__description",children:a}),Object(n.jsxs)("div",{className:"product-card__select-block",children:[Object(n.jsx)(b,{selectedColor:p,colors:u,selectColor:this.selectColor}),Object(n.jsx)("p",{className:"product-card__price",children:"".concat(o," \u0433\u0440\u043d")})]}),Object(n.jsx)("div",{className:"product-card__radio-block",children:s.map((function(t){return Object(n.jsxs)("div",{className:"product-card__radio-item",children:[Object(n.jsx)("input",{id:"".concat(c).concat(t),type:"radio",name:"radio".concat(c),value:t,className:"product-card__radio",onChange:function(){return e.selectVolume(t)},checked:m===t}),Object(n.jsxs)("label",{htmlFor:"".concat(c).concat(t),className:"product-card__radio-label",children:[Object(n.jsx)("div",{children:Object(n.jsx)("div",{})}),"".concat(t," \u043c\u043b")]})]},t)}))}),Object(n.jsxs)("div",{className:"product-card__buttons",children:[Object(n.jsxs)("div",{className:"product-card__quantity-change",children:[Object(n.jsx)("button",{type:"button",name:"decrease",className:"product-card__quantity-change-item product-card__quantity-change-item--left",onClick:this.decreaseQuantity,children:"-"}),Object(n.jsx)("div",{className:"product-card__quantity-change-item",children:l}),Object(n.jsx)("button",{type:"button",name:"increase",className:"product-card__quantity-change-item product-card__quantity-change-item--right",onClick:this.increaseQuantity,children:"+"})]}),Object(n.jsx)("button",{type:"button",className:j()("product-card__button",{"product-card__button--pressed":this.state.isButtonPressed}),onClick:function(){return e.setState((function(e){return{isButtonPressed:!e.isButtonPressed}}))},children:"\u041a\u0443\u043f\u0438\u0442\u044c"})]})]})}}]),c}(a.a.PureComponent),_=(c(20),function(e){var t=e.products;e.productsImages;return Object(n.jsx)("div",{className:"product-list",children:t.map((function(e){return Object(i.createElement)(h,Object(s.a)(Object(s.a)({},e),{},{key:e.id}))}))})}),v=c(10);var O=function(){return Object(n.jsx)("div",{className:"app",children:Object(n.jsx)(_,{products:v})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),a(e),r(e)}))};o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),g()}],[[21,1,2]]]);
//# sourceMappingURL=main.7de27272.chunk.js.map