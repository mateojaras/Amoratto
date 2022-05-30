"use strict";(self.webpackChunkAmoratto=self.webpackChunkAmoratto||[]).push([[929],{9929:function(a,e,t){t.r(e),t.d(e,{default:function(){return g}});var n=t(7899),i=t(8152),s=t(2791),r=t(7995),c=t(184),o=function(a){var e=a.setTextFilter,t=a.searchByText,n=a.searchByCategory,o=(0,s.useState)(),d=(0,i.Z)(o,2),l=d[0],u=d[1];(0,s.useEffect)((function(){r.Z.getListOfCategories().then((function(a){u(a.data)}))}),[]);var g=(0,s.useState)(),v=(0,i.Z)(g,2),h=v[0],m=v[1];return(0,c.jsxs)("div",{className:"filter_grid",children:[(0,c.jsx)("input",{className:"search_products",type:"text",placeholder:"Buscar Producto...",onChange:function(a){return e(a.target.value)}}),(0,c.jsx)("button",{className:"button",onClick:t,children:"Buscar"}),(0,c.jsxs)("div",{className:"categories_grid",children:[(0,c.jsx)("span",{className:"name_Category",children:"Categorias"}),null===l||void 0===l?void 0:l.map((function(a){return(0,c.jsxs)("label",{className:"container_category",children:[(0,c.jsx)("input",{type:"radio",checked:h===a.id,onClick:function(){m(a.id),n(a.id)},onChange:function(){}}),(0,c.jsx)("i",{}),(0,c.jsx)("span",{className:"radio_category",children:a.name})]},a.id)}))]})]})},d=t(8820),l=function(a){var e,t=a.pagination,n=a.changePagination;return(0,c.jsxs)("div",{className:"pages_container",children:[t.pages[0]>0&&(0,c.jsx)("a",{href:"##",onClick:function(){return n(t.pages[0]-1)},children:(0,c.jsx)(d.CF5,{})}),null===(e=t.pages)||void 0===e?void 0:e.map((function(a){return(0,c.jsx)("a",{href:"##",onClick:function(){return n(a)},children:a+1},a)})),t.pages[3]!==t.totalPages&&(0,c.jsx)("a",{href:"##",onClick:function(){return n(t.pages[0]+1)},children:(0,c.jsx)(d.Td4,{})})]})},u=function(){return(0,c.jsx)("div",{className:"spinner"})},g=function(){var a=function(){var a=(0,s.useState)(),e=(0,i.Z)(a,2),t=e[0],n=e[1],c=(0,s.useState)(!0),o=(0,i.Z)(c,2),d=o[0],l=o[1],u=(0,s.useState)(),g=(0,i.Z)(u,2),v=g[0],h=g[1],m=(0,s.useState)(),f=(0,i.Z)(m,2),x=f[0],p=f[1],j=(0,s.useState)({start:0,totalPages:0,pages:[0]}),N=(0,i.Z)(j,2),y=N[0],_=N[1];(0,s.useEffect)((function(){C(y.start)}),[]);var C=function(a,e,t){l(!0),r.Z.getListOfProducts(a,e||"",t||"").then((function(e){var t,i,s,r,c;l(!1),n(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data),_({start:a,totalPages:(null===e||void 0===e||null===(i=e.data)||void 0===i||null===(s=i.metadata)||void 0===s?void 0:s.total)/10,pages:b((null===e||void 0===e||null===(r=e.data)||void 0===r||null===(c=r.metadata)||void 0===c?void 0:c.total)/10,a)})})).catch((function(a){return console.log(a)}))},b=function(a,e){var t=[],n=e/10;if(a>n+3)for(var i=n;i<n+3;i++)t.push(i);return t};return{listProducts:t,pagination:y,loading:d,changePagination:function(a){C(10*a,v,x)},setTextFilter:h,searchByText:function(){C(y.start,v,x)},searchByCategory:function(a){C(y.start,v,a),p(a)}}}(),e=a.listProducts,t=a.pagination,d=a.loading,g=a.changePagination,v=a.setTextFilter,h=a.searchByText,m=a.searchByCategory;return(0,c.jsx)("div",{className:"dashboard_container",children:(0,c.jsxs)("div",{className:"dashboard_grid",children:[(0,c.jsx)("div",{className:"dashboard_filter",children:(0,c.jsx)(o,{setTextFilter:v,searchByText:h,searchByCategory:m})}),(0,c.jsx)("div",{className:"dashboard_products",children:(0,c.jsxs)("div",{className:"dashboard_container_products",children:[!d&&(0,c.jsx)("div",{className:"dashboard_products_grid",children:null===e||void 0===e?void 0:e.map((function(a,e){var t,i,s;return(0,c.jsx)(n.M,{categories:null===a||void 0===a||null===(t=a.itemCategory)||void 0===t?void 0:t.name,name:null===a||void 0===a?void 0:a.name,price:null===a||void 0===a||null===(i=a.price[0])||void 0===i?void 0:i.price,image:null!==a&&void 0!==a&&a.images?null===a||void 0===a||null===(s=a.images[0])||void 0===s?void 0:s.url:""},e)}))}),d&&(0,c.jsx)("div",{className:"spinner_container",children:(0,c.jsx)(u,{})}),!d&&(0,c.jsx)(l,{pagination:t,changePagination:g})]})})]})})}},7899:function(a,e,t){t.d(e,{M:function(){return i}});t(2791);var n=t(184),i=function(a){var e=a.categories,i=a.name,s=(a.price,a.image),r=void 0===s?"":s;return(0,n.jsx)("div",{className:"card_container",children:(0,n.jsxs)("div",{className:"card_grid",children:[(0,n.jsx)("div",{className:"image_container",children:(0,n.jsx)("img",{src:r||t(5589),alt:""})}),(0,n.jsxs)("div",{className:"information_grid",children:[(0,n.jsx)("div",{className:"categories",children:(0,n.jsx)("h3",{children:e})}),(0,n.jsx)("div",{className:"name_product",children:(0,n.jsx)("h2",{children:i})}),(0,n.jsx)("div",{className:"btn"})]})]})})}},7995:function(a,e,t){var n=t(5671),i=t(3144),s=t(4569),r=t.n(s),c="https://api.alegra.com/api/v1/",o={headers:{Authorization:"Basic bWF0ZW8uamFyYW1pbGxvcUB1ZGVhLmVkdS5jbzoxNjU4NmUyMTBiZWQ2MmRmNWI4NQ=="}},d=function(){function a(){(0,n.Z)(this,a)}return(0,i.Z)(a,[{key:"getListOfProducts",value:function(a,e,t){return r().get("".concat(c,"items/?start=").concat(a,"&limit=10&metadata=true&query=").concat(e,"&idItemCategory=").concat(t),o)}},{key:"getListOfCategories",value:function(){return r().get("".concat(c,"item-categories?start=0&limit=20"),o)}}]),a}();e.Z=new d},5589:function(a,e,t){a.exports=t.p+"static/media/no_image.3f37e96d8d04d1e67452.jpg"}}]);
//# sourceMappingURL=929.6b4cee43.chunk.js.map