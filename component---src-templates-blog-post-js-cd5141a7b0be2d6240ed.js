(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,a){"use strict";a("0mN4");var r=a("vjGk"),i=a("q1tI"),n=a.n(i),s=a("9eSz"),l=a.n(s),o=a("p3AD");a("owHl");t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author;t._;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(o.a)(2.5)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(o.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",{style:{margin:"auto 0"}},"Written by"," ",n.a.createElement("a",{className:"icon-link",href:"https://github.com/tinyhhj",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("strong",null,a))))}},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),s=r(a("XEEL")),l=r(a("uDP2")),o=r(a("j8BX")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=u(e),a=f(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var A=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+s+l+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(L,(0,o.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},L=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=A(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,I=e.loading,A=e.draggable,N=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,o.default)({opacity:N?1:0,transition:z?"opacity "+b+"ms":"none"},l),V="boolean"==typeof h?"lightgray":h,x={transitionDelay:b+"ms"},k=(0,o.default)({opacity:this.state.imgLoaded?0:1},z&&x,{},l,{},f),R={title:t,alt:this.state.isVisible?"":a,style:k,className:p,itemProp:v};if(g){var U=g,P=U[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),V&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&x)}),P.base64&&d.default.createElement(C,{src:P.base64,spreadProps:R,imageVariants:U,generateSources:w}),P.tracedSVG&&d.default.createElement(C,{src:P.tracedSVG,spreadProps:R,imageVariants:U,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(U),d.default.createElement(L,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:I,draggable:A})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:I},P,{imageVariants:U}))}}))}if(m){var T=m,q=T[0],G=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete G.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},V&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:V,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},z&&x)}),q.base64&&d.default.createElement(C,{src:q.base64,spreadProps:R,imageVariants:T,generateSources:w}),q.tracedSVG&&d.default.createElement(C,{src:q.tracedSVG,spreadProps:R,imageVariants:T,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(T),d.default.createElement(L,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:I,draggable:A})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:I},q,{imageVariants:T}))}}))}return null},t}(d.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),j=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});N.propTypes={resolutions:z,sizes:j,fixed:c.default.oneOfType([z,c.default.arrayOf(z)]),fluid:c.default.oneOfType([j,c.default.arrayOf(j)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var V=N;t.default=V},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,l=function(e,t,a,r){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},vjGk:function(e){e.exports=JSON.parse('{"data":{"avatar":{"id":"4e724ad8-fa1a-5aa2-a460-4b32607bb35a","childImageSharp":{"id":"67cf6651-e342-5853-b294-8d79d1ec0b6c","fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAACE4AAAhOAFFljFgAAAEtUlEQVQ4y4VUa0zTVxS/VFxGluzTFreZuQz0Ay8zFhmVAIIgMioDBEEYRZ4tQaCFOhnQIvKWp4W2vMpjUF4FyrMCpWUZyKPbZGPC6jRmgIpuyfy0jay29+z+/wiaObeT3JzT0/P73d8557YIPWdh7h/QPpz4CM8PGegfFu/LtAj3cLKg4mjvj1CYhxN6qXkftkY+5IyWZqJApj0NSvBztUv0d8s85+PSEnzUIXCnNuioA/29u+2BF4nWhiXowXjjMxV+rrSymBPMxPOBniA44wu8IC84d8IFSAdajr8b3Uak1xHGvyr7SVmB7l9rYBi6SxHbe7uIqDl41sPJmMRyB9KaMcaXaSSfTf5ONnDK2dZwysX+NarupNMhmuNOfxUR1YA2ydm1x7oWlB7iaUnFxx2tLwQx7SGQ6WAkowAv+/cgwc8Fl3MDjSedDoKzzdvHqDo323cZt/sqLDYnmhj3rzVuK747KH6HKAx+XrWzzVsVnoTE2+HAk8/OeOGePC4eLRfgW8pKEz/YHcgAaUL+6WN7X2h5ub1wP5nh1vpIrWK5vYBD5fa//kpsrJcDdF3imGbqRfhXjRw0sku4ryrbNFjABVGkT/UO/kvxBatHGrkdUZkyK7m4h04utRXEbKpl8HiqEX4ZvRrMtH7D9So3AMYkIiwTpeDfpr/A+m4xfK2UPllpz4fxct6PFG61s/jI3f7KWSLIvDYik2/Pbl5FP4HOLLbrtCQb5IKzcboqXnD355FwozXf9Lt+EC8rSsHQX4v/0KvwYvNlUBWdT6YwK4rCnzdGZX8uNIqidluOZUfShGHcjDeTuBzwYwXQxS1CjkFdxoMHmlazqliE6/kpphtdYlAUZ/ywiw1hrUcF+9OrrSvNs+y6GIbQmFpNb0fZ0+NrMBhAJpPlN8qbP55f1EO/vNasqsjE33bW4BVVE9Y2lZg1Y0MwpdUNsT+NsJPWNUC1uGacwivamhlpuaUIdXd304RNTU2spaUlKCwsLNJoNDObm5uwvnHPdOWyEIq4IVCeHApCQSpe27gH16/PQnFxcfbMzFcwPDw0QuEfPXzISE/nI9TW1kYTSiSSwOnpaWhtbb01Nzf3l16vx6urq7D03fdYIq7G1eVX8PzCIpAc1ul0QAR8o9VqoaWlRUrhu7q66DeM6urqaMKysrJP1Go1LCws4ImJCRCLxUA8Xrl5E9bXN2CNHDISTNX09vaaSReYHCgqKuJSeKlUuqeyshKhkpISmjArK8u9s7MThoaGQCgU3k5ISJB3dHTA1NSUmVwC+sVFoBTV1NRgQgIUMekGSN1hCk8wjOjoaIQEAsH2X1Z4uFVubq42IyPjjqOj4/t8Pj+CtAUqlco4OTlJtYlJbK6qqoL4+HidSCSCnJychZ2Nx8XFPfu1cDicndBy3759VlSQnJwcTzYOSqVyi6g2EkXGvr6+rfr6eiCXpTKZTLvQ0NBDT8VY7JLl5eXRPjExkU4CAO3T0tJCKMLBwUGgZkUtYnh4mFoG8Hi8pB18TEzMTv12gsViITabTcdRUVGUdIunF+wlizmuUCiEAwMDEkIsJU+soLa2NigpKenVgIAAqgt6/mSO6D8tNTUV/Z+9rOZv3D5tKOOYrp8AAAAASUVORK5CYII=","width":50,"height":50,"src":"/static/a41e0fa910dc1109f4998ffd9b0f4c44/000d3/profile.png","srcSet":"/static/a41e0fa910dc1109f4998ffd9b0f4c44/000d3/profile.png 1x,\\n/static/a41e0fa910dc1109f4998ffd9b0f4c44/bc2a0/profile.png 1.5x,\\n/static/a41e0fa910dc1109f4998ffd9b0f4c44/89cf4/profile.png 2x"}}},"site":{"id":"Site","siteMetadata":{"author":"tinyhhj"}}}}')},yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));a("91GP");var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("6Gk8"),l=a("Bl7J"),o=a("vrFN"),d=a("p3AD");var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,c=a.next;return i.a.createElement(l.a,{location:this.props.location,title:t},i.a.createElement(o.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),i.a.createElement("article",null,i.a.createElement("header",null,i.a.createElement("h1",{style:{marginTop:Object(d.a)(1),marginBottom:0}},e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1)})},e.frontmatter.date)),i.a.createElement("section",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}),i.a.createElement("footer",null,i.a.createElement(s.a,null))),i.a.createElement("nav",null,i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,r&&i.a.createElement(n.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),i.a.createElement("li",null,c&&i.a.createElement(n.Link,{to:c.fields.slug,rel:"next"},c.frontmatter.title," →")))))},r}(i.a.Component);t.default=c;var u="2868899261"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-cd5141a7b0be2d6240ed.js.map