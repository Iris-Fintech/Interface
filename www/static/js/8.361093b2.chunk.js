(this["webpackJsonphugiris-nft"]=this["webpackJsonphugiris-nft"]||[]).push([[8],{133:function(n,t,r){"use strict";t.a={chainId:"1",rpc_url1:"https://mainnet.infura.io/v3/3bb2facc1ba34c21ac433006dea3015d",rpc_url2:"https://mainnet.infura.io/v3/32cc1fd7fe8d4ad5aa6e4c2a18e90839",backend_url:"https://hugiris.de.r.appspot.com"}},134:function(n,t,r){"use strict";r.d(t,"a",(function(){return c}));var i=r(118),e=Object(i.b)({name:"modalShow",initialState:{show:!1},reducers:{changeState:function(n){n.show=!n.show}}}),c=e.actions.changeState;t.b=e.reducer},165:function(n,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return d}));var i=r(386),e=r.n(i),c=r(133);if(!c.a.rpc_url1||!c.a.rpc_url2)throw Error("ETH_RPC_URLs is undefined");var a=[c.a.rpc_url1,c.a.rpc_url2],o=function(){var n=e()(a);if(void 0!==n)return n};if(void 0===c.a.chainId)throw new Error("BSC_CHAIN_ID is undefined");var u=c.a.chainId,d=function(){return parseInt(u,10)}},184:function(n,t,r){"use strict";r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return h}));var i=r(147),e=r(185),c=r(186),a=r.n(c),o=r(165),u=Object(o.b)(),d=Object(o.a)();if(void 0===u)throw new Error("URL Type Error: should be string");if(NaN===d)throw new Error("Invalid Numneric Error: should be a valid number");var f=new i.a({supportedChainIds:[d]});f.handleChainChanged=function(n){if(n!=d)return localStorage.removeItem("_iris_fintech_"),void f.emitDeactivate();f.emitUpdate({chainId:n,provider:window.BinanceChain}),window.location.reload()};var s=new e.b({rpc:{1:u},bridge:"https://bridge.walletconnect.org",qrcode:!0,pollingInterval:12e3}),h=function(n){return new a.a(n)}},226:function(n,t,r){"use strict";r.d(t,"b",(function(){return c}));var i=r(118),e=Object(i.b)({name:"triedEager",initialState:{tried:!1},reducers:{setState:function(n,t){n.tried=t.payload}}}),c=e.actions.setState;t.a=e.reducer},275:function(n,t){},277:function(n,t){},278:function(n,t){},283:function(n,t){},292:function(n,t){},293:function(n,t){},301:function(n,t){},302:function(n,t){},311:function(n,t){},312:function(n,t){},353:function(n,t){},354:function(n,t){},359:function(n,t){},361:function(n,t){},375:function(n,t){},378:function(n,t){},382:function(n,t){},938:function(n,t,r){"use strict";r.r(t);r(0);var i=r(76),e=r(446),c=r(184),a=r(118),o=r(134),u=r(226),d=Object(a.a)({reducer:{modalShow:o.b,triedEager:u.a}}),f=r(6);t.default=function(n){var t=n.children;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(e.a,{store:d,children:Object(f.jsx)(i.b,{getLibrary:c.a,children:t})})})}}}]);
//# sourceMappingURL=8.361093b2.chunk.js.map