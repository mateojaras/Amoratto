"use strict";(self.webpackChunkAmoratto=self.webpackChunkAmoratto||[]).push([[405],{3405:function(a,e,t){t.r(e),t.d(e,{default:function(){return p}});var n=t(2791),i=t(184),s=function(a){var e=a.categories,n=a.name,s=(a.price,a.image),r=void 0===s?"":s;return(0,i.jsx)("div",{className:"card_container",children:(0,i.jsxs)("div",{className:"card_grid",children:[(0,i.jsx)("div",{className:"image_container",children:(0,i.jsx)("img",{src:r||t(5589),alt:""})}),(0,i.jsxs)("div",{className:"information_grid",children:[(0,i.jsx)("div",{className:"categories",children:(0,i.jsx)("h3",{children:e})}),(0,i.jsx)("div",{className:"name_product",children:(0,i.jsx)("h2",{children:n})}),(0,i.jsx)("div",{className:"btn"})]})]})})},r=t(8152),c=t(5671),o=t(3144),d=t(4569),l=t.n(d),u="https://api.alegra.com/api/v1/",v={headers:{Authorization:"Basic bWF0ZW8uamFyYW1pbGxvcUB1ZGVhLmVkdS5jbzoxNjU4NmUyMTBiZWQ2MmRmNWI4NQ=="}},g=new(function(){function a(){(0,c.Z)(this,a)}return(0,o.Z)(a,[{key:"getListOfProducts",value:function(a,e){return l().get("".concat(u,"items/?start=").concat(a,"&limit=10&metadata=true&query=").concat(e),v)}},{key:"getListOfCategories",value:function(){return l().get("".concat(u,"item-categories?start=0&limit=20"),v)}}]),a}()),h=function(a){var e=a.setTextFilter,t=a.searchByText,s=(0,n.useState)(),c=(0,r.Z)(s,2),o=c[0],d=c[1];(0,n.useEffect)((function(){g.getListOfCategories().then((function(a){d(a.data)}))}),[]);var l=(0,n.useState)(!1),u=(0,r.Z)(l,2),v=u[0],h=u[1];return(0,i.jsxs)("div",{className:"filter_grid",children:[(0,i.jsx)("input",{className:"search_products",type:"text",placeholder:"Buscar Producto...",onChange:function(a){return e(a.target.value)}}),(0,i.jsx)("button",{className:"button",onClick:t,children:"Buscar"}),(0,i.jsxs)("div",{className:"categories_grid",children:[(0,i.jsx)("span",{className:"name_Category",children:"Categorias"}),null===o||void 0===o?void 0:o.map((function(a){return(0,i.jsxs)("label",{className:"container_category",children:[(0,i.jsx)("input",{type:"radio",checked:v,onClick:function(){return h(!v)},onChange:function(){}}),(0,i.jsx)("i",{}),(0,i.jsx)("span",{className:"radio_category",children:a.name})]},a.id)}))]})]})},m=t(8820),f=function(a){var e,t=a.pagination,n=a.changePagination;return(0,i.jsxs)("div",{className:"pages_container",children:[t.pages[0]>0&&(0,i.jsx)("a",{href:"##",onClick:function(){return n(t.pages[0]-1)},children:(0,i.jsx)(m.CF5,{})}),null===(e=t.pages)||void 0===e?void 0:e.map((function(a){return(0,i.jsx)("a",{href:"##",onClick:function(){return n(a)},children:a+1},a)})),t.pages[3]!==t.totalPages&&(0,i.jsx)("a",{href:"##",onClick:function(){return n(t.pages[0]+1)},children:(0,i.jsx)(m.Td4,{})})]})},x=function(){return(0,i.jsx)("div",{className:"spinner"})},p=function(){var a=function(){var a=(0,n.useState)(),e=(0,r.Z)(a,2),t=e[0],i=e[1],s=(0,n.useState)(!0),c=(0,r.Z)(s,2),o=c[0],d=c[1],l=(0,n.useState)(),u=(0,r.Z)(l,2),v=u[0],h=u[1],m=(0,n.useState)({start:0,totalPages:0,pages:[0]}),f=(0,r.Z)(m,2),x=f[0],p=f[1];(0,n.useEffect)((function(){j(x.start)}),[]);var j=function(a,e){d(!0),g.getListOfProducts(a,e||"").then((function(e){var t,n,s,r,c;d(!1),i(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data),p({start:a,totalPages:(null===e||void 0===e||null===(n=e.data)||void 0===n||null===(s=n.metadata)||void 0===s?void 0:s.total)/10,pages:N((null===e||void 0===e||null===(r=e.data)||void 0===r||null===(c=r.metadata)||void 0===c?void 0:c.total)/10,a)})})).catch((function(a){return console.log(a)}))},N=function(a,e){var t=[],n=e/10;if(a>n+3)for(var i=n;i<n+3;i++)t.push(i);return t};return{listProducts:t,pagination:x,loading:o,changePagination:function(a){j(10*a)},setTextFilter:h,searchByText:function(){j(x.start,v)}}}(),e=a.listProducts,t=a.pagination,c=a.loading,o=a.changePagination,d=a.setTextFilter,l=a.searchByText;return(0,i.jsx)("div",{className:"dashboard_container",children:(0,i.jsxs)("div",{className:"dashboard_grid",children:[(0,i.jsx)("div",{className:"dashboard_filter",children:(0,i.jsx)(h,{setTextFilter:d,searchByText:l})}),(0,i.jsx)("div",{className:"dashboard_products",children:(0,i.jsxs)("div",{className:"dashboard_container_products",children:[!c&&(0,i.jsx)("div",{className:"dashboard_products_grid",children:null===e||void 0===e?void 0:e.map((function(a,e){var t,n,r;return(0,i.jsx)(s,{categories:null===a||void 0===a||null===(t=a.itemCategory)||void 0===t?void 0:t.name,name:null===a||void 0===a?void 0:a.name,price:null===a||void 0===a||null===(n=a.price[0])||void 0===n?void 0:n.price,image:null!==a&&void 0!==a&&a.images?null===a||void 0===a||null===(r=a.images[0])||void 0===r?void 0:r.url:""},e)}))}),c&&(0,i.jsx)("div",{className:"spinner_container",children:(0,i.jsx)(x,{})}),!c&&(0,i.jsx)(f,{pagination:t,changePagination:o})]})})]})})}},5589:function(a,e,t){a.exports=t.p+"static/media/no_image.3f37e96d8d04d1e67452.jpg"}}]);
//# sourceMappingURL=405.1144bb8a.chunk.js.map