(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(6441)}])},2119:function(e,t,o){"use strict";var n=o(5893),a=o(1606),r=o(204),s=o(8911),i=o(6367),l=o(1163),x=o(7294),g=o(5818);let p=e=>{let{page:t}=e,o=(0,l.useRouter)(),[p,c]=(0,x.useState)(""),d=()=>{localStorage.removeItem("email"),o.replace("./")};return(0,x.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("email")||'""')||"";e?c(e):o.replace("./")}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.k,{left:"1vw",top:"3vh",zIndex:"2",position:"absolute",justify:"center",align:"center",gap:"10px",children:["Help"===t?(0,n.jsx)(a.R,{color:"white",cursor:"pointer",onClick:()=>o.replace("/"),width:["30px","30px","40px"],boxSize:"20px"}):null,(0,n.jsx)(r.k,{align:"center",zIndex:"2",background:g.v.colors.gamePage.generateHackBtnBackground,borderRadius:"100%",fontSize:["18px","18px","22px"],fontWeight:["600","600","700"],color:"white",justify:"center",width:["30px","30px","40px"],height:["30px","30px","40px"],children:p.substring(0,1).toLocaleUpperCase()}),(0,n.jsx)(s.x,{fontSize:["18px","18px","22px"],fontWeight:["600","600","700"],zIndex:"2",fontFamily:"'Sora', sans-serif",fontStyle:"normal",lineHeight:["23px","23px","30px"],color:g.v.colors.gamePage.amountMinesTextColor,children:p})]}),(0,n.jsxs)(r.k,{position:"absolute",top:"3vh",right:"1vw",gap:"20px",children:["Home"===t?(0,n.jsx)(i.E,{src:"/images/dashboard-help-btn.png",color:"white",cursor:"pointer",onClick:()=>o.replace("/help"),title:"Aulas",width:["30px","30px","40px"]}):null,(0,n.jsx)(i.E,{zIndex:"2",src:g.v.assets.gamePage.logoutBtn,cursor:"pointer",onClick:d,title:"Sair",width:["30px","30px","40px"]})]})]})};t.Z=p},6441:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return y}});var n=o(5893),a=o(7294),r=o(204),s=o(6367),i=o(4418),l=o(295),x=o(8911),g=o(1708),p=o(9222),c=o(3838);let d=()=>{let e=[],t=0;for(let o=1;o<=5;o+=1){let o=.6>=Math.random(),n=!1;for(let a=1;a<=5;a+=1)if(t<4&&o){let o=Math.random()<=(n?.2:.4);e.push(o),o&&(t+=1,n=!0)}else e.push(!1)}return{numberOfMines:Math.floor(3*Math.random()+4)-1,diamondsCreated:t,squares:e}};var h=o(5818);let u=e=>{let{isDiamond:t,finishHack:o}=e;return(0,n.jsx)(r.k,{h:["54px","54px","78px"],w:["54px","54px","78px"],borderRadius:"10px",alignItems:"center",justifyContent:"center",background:t&&!o?h.v.colors.gamePage.diamondMineBackground:h.v.colors.gamePage.mineBackground,dropShadow:"8px 8px 30px ".concat(h.v.colors.gamePage.mineShadow),textAlign:"center",children:t&&!o?(0,n.jsx)(s.E,{filter:"drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.25))",w:h.v.components.gamePage.diamondImageWidth,src:h.v.assets.gamePage.diamond}):null==t||o?(0,n.jsx)(s.E,{w:h.v.components.gamePage.unknownMineWidth,h:"auto",src:h.v.assets.gamePage.unknownMine}):(0,n.jsx)(s.E,{h:["37px","37px","58px"],w:["40px","40px","63px"],src:h.v.assets.gamePage.mine})})},m=()=>{let e={diamondsCreated:0,numberOfMines:0,squares:[]};for(let t=0;t<25;t++)e.squares.push(null);return e};var f=(e,t)=>100*t/e,v=o(3100),k=o(743);let S=(e,t)=>{let o=t-e;return o>=60?"1:00":o<10?"0:0".concat(o.toFixed(0)):"0:".concat(o.toFixed(0))},b=e=>{let{progressTimer:t,currentTimer:o,totalTimerSec:a}=e;return(0,n.jsxs)(v.xu,{boxShadow:"lg",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",margin:"10px",borderRadius:"17px",zIndex:"2",children:[(0,n.jsx)(k.E,{w:["87px","87px","113px"],margin:"0px",padding:"0px",h:["27px","27px","35px"],borderRadius:"17px",background:h.v.colors.gamePage.progressBarBackground}),(0,n.jsx)(x.x,{fontFamily:"'Sora', sans-serif",fontStyle:"normal",fontWeight:"600",fontSize:["15px","15px","18px"],lineHeight:["18px","18px","122.5%"],position:"absolute",color:h.v.colors.gamePage.progressBarText,children:S(o,a)})]})};var w=o(1163),j=o(2119);let P=()=>{let[e,t]=(0,a.useState)(m()),[o,v]=(0,a.useState)(!1),[k,S]=(0,a.useState)(""),[P,y]=(0,a.useState)(!1),[z,I]=(0,a.useState)(0),[B,H]=(0,a.useState)(0),[C,E]=(0,a.useState)(0),[R,F]=(0,a.useState)(!1),[M,_]=(0,a.useState)(!1),T=(0,a.useRef)(30),W=(0,w.useRouter)();(0,a.useEffect)(()=>{(null==e?void 0:e.numberOfMines)&&!M&&E(12*Math.random()+87)},[e,M]);let O=()=>{_(!1),y(!0),F(!1);let e=d();for(;e.diamondsCreated<=3;)e=d();t(e)};return(0,a.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("email")||'""')||"";e?S(e):W.replace("./")}),(0,a.useEffect)(()=>{let e=setTimeout(()=>{I(f(T.current,B))},10);z>=5&&v(!1),z>=15&&F(!0),z>=100?(_(!0),y(!1),H(0),I(0),clearInterval(e)):H(B+.01)},[z,P,z]),(0,n.jsxs)(r.k,{alignItems:"center",textAlign:"center",flexDirection:"column",justify:"center",minHeight:"100vh",bgImage:"url(".concat(h.v.assets.background,")"),bgRepeat:"no-repeat",bgSize:"cover",children:[(0,n.jsx)(j.Z,{page:"Home"}),(0,n.jsx)(s.E,{width:h.v.components.gamePage.logoSidersRight.width,height:h.v.components.gamePage.logoSidersRight.height,alt:"logo-sider",right:h.v.components.gamePage.logoSidersRight.right,position:"absolute",top:["auto","auto","20%"],bottom:["15%","15%","auto"],src:h.v.assets.gamePage.logoSidersRight,zIndex:"1"}),(0,n.jsx)(s.E,{width:h.v.components.gamePage.logoSidersLeft.width,height:h.v.components.gamePage.logoSidersLeft.height,alt:"logo-sider",left:h.v.components.gamePage.logoSidersLeft.left,zIndex:"1",position:"absolute",top:h.v.components.gamePage.logoSidersLeft.top,bottom:["5%","5%","auto"],src:h.v.assets.gamePage.logoSidersLeft}),(0,n.jsxs)(r.k,{direction:"column",justify:"center",align:"center",margin:["60px 0","60px 0","20px 0 0 0"],children:[(0,n.jsx)(s.E,{width:h.v.components.gamePage.logoWidth,alt:"main-logo",src:h.v.assets.logo,marginBottom:["40px","30px","20px"]}),(0,n.jsx)(i.X,{display:M?"":"none",zIndex:"2",color:h.v.colors.gamePage.headingFinishHackTextColor,fontSize:["15px","15px","2xl"],children:"HACK FINALIZADO!"}),o?(0,n.jsxs)(r.k,{align:"center",height:["300px","300px","430px"],direction:"column",justify:"center",children:[(0,n.jsx)(l.$,{height:"60px",size:"xl",width:"60px",color:"white",thickness:"6px"}),(0,n.jsx)(x.x,{fontSize:"20px",fontWeight:"600",color:"white",children:"Gerando hack..."})]}):(0,n.jsxs)(n.Fragment,{children:[(null==e?void 0:e.numberOfMines)&&!M?(0,n.jsx)(x.x,{zIndex:"2",fontFamily:"'Sora', sans-serif",fontStyle:"normal",fontWeight:"600",fontSize:["15px","15px","xl"],lineHeight:"18px",color:h.v.colors.gamePage.amountMinesTextColor,children:"Selecionar ".concat(null==e?void 0:e.numberOfMines," Minas (").concat(C.toFixed(2),"% de\n              assertividade)")}):null,(0,n.jsx)(g.r,{zIndex:"2",padding:"10px",gap:"10px",templateColumns:"repeat(5, 1fr)",children:null==e?void 0:e.squares.map((e,t)=>(0,n.jsx)(u,{isDiamond:e,finishHack:M},t))}),P?(0,n.jsx)(b,{currentTimer:B,progressTimer:z,totalTimerSec:T.current}):null]}),P?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.z,{zIndex:"2",alignItems:"center",background:h.v.colors.gamePage.generateHackBtnBackground,borderRadius:"10px",boxShadow:"0px 0px 20px rgba(0, 0, 0, 0.15)",color:h.v.colors.gamePage.generateHackBtnTextColor,display:"flex",disabled:R,fontFamily:"'Sora', sans-serif",fontStyle:"normal",fontWeight:"600",justifyContent:"center",margin:"15px 0 10px 0",shadow:"lg",fontSize:["15px","15px","18px"],lineHeight:["18px","18px","122%"],width:["175px","175px","268px"],height:["46px","46px","52px"],_hover:{color:"black",background:h.v.colors.gamePage.generateHackBtnBackground},children:"Gerar novo hack"}),(0,n.jsx)(c.r,{zIndex:"2",alignItems:"center",background:h.v.colors.gamePage.generateHackBtnBackground,borderRadius:"10px",boxShadow:"0px 0px 20px rgba(0, 0, 0, 0.15)",color:h.v.colors.gamePage.generateHackBtnTextColor,display:"flex",fontFamily:"'Sora', sans-serif",fontStyle:"normal",fontWeight:"600",href:h.v.links.game,isExternal:!0,justifyContent:"center",margin:"0",shadow:"lg",fontSize:["15px","15px","18px"],lineHeight:["18px","18px","122%"],width:["175px","175px","268px"],height:["46px","46px","52px"],_hover:{color:"black",background:h.v.colors.gamePage.generateHackBtnBackground},children:"Acessar plataforma"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.z,{zIndex:"2",margin:"20px 0 10px 0",background:h.v.colors.gamePage.generateHackBtnBackground,borderRadius:"10px",boxShadow:"0px 0px 20px rgba(0, 0, 0, 0.15)",color:h.v.colors.gamePage.generateHackBtnTextColor,fontFamily:"'Sora', sans-serif",fontStyle:"normal",fontWeight:"600",shadow:"lg",onClick:()=>{O(),v(!0)},fontSize:["15px","15px","18px"],lineHeight:["18px","18px","122%"],width:["175px","175px","268px"],height:["46px","46px","52px"],_hover:{color:"black",background:h.v.colors.gamePage.generateHackBtnBackground},children:"Gerar HACK"}),(0,n.jsx)(c.r,{zIndex:"2",alignItems:"center",background:h.v.colors.gamePage.accessPlatformBtnBackground,borderRadius:"10px",boxShadow:"0px 0px 20px rgba(0, 0, 0, 0.15)",color:h.v.colors.gamePage.generateHackBtnTextColor,display:"flex",fontFamily:"'Sora', sans-serif",fontStyle:"normal",fontWeight:"600",fontSize:["10px","10px","14px"],height:["42px","42px","52px"],href:h.v.links.platform,isExternal:!0,justifyContent:"center",lineHeight:"122%",margin:"10px 0 10px 0",shadow:"lg",width:["160px","160px","268px"],_hover:{background:"white",color:"black"},children:"Acessar plataforma"})]})]})]})};var y=P}},function(e){e.O(0,[850,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);