(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{219:function(e,t,n){(function(t){e.exports=async function(){const e=await Promise.all([n.e(1),n.e(3),n.e(2),n.e(4),n.e(21)]).then(n.t.bind(null,201,7)),c=await Promise.all([n.e(9),n.e(13),n.e(24)]).then(n.t.bind(null,53,7)),r=await Promise.all([n.e(1),n.e(3),n.e(2),n.e(4),n.e(34)]).then(n.t.bind(null,420,7)),i=await Promise.all([n.e(1),n.e(22),n.e(25)]).then(n.t.bind(null,217,7)),a=await Promise.all([n.e(2),n.e(4),n.e(17)]).then(n.t.bind(null,167,7)),o=(await n.e(18).then(n.t.bind(null,20,7))).default,s=await Promise.all([n.e(1),n.e(3),n.e(2),n.e(4),n.e(36)]).then(n.t.bind(null,305,7)),l=await n.e(60).then(n.t.bind(null,422,7)),d=await Promise.all([n.e(3),n.e(61)]).then(n.t.bind(null,96,7)),u=await Promise.all([n.e(1),n.e(40)]).then(n.t.bind(null,40,7)),y=await n.e(7).then(n.t.bind(null,216,7)),h=await n.e(5).then(n.t.bind(null,186,7)),p=function(e){return y.selectedCurrency.isPrivateKey(e)};return{isPrivateKey:p,decodePrivateKey:function(e){return p(e)?y.selectedCurrency.decodePrivateKey(e):null},getAddressWith:function(e,t){return y.selectedCurrency.getAddressWith(e,t)},getWIFForAddress:function(e,t){return y.selectedCurrency.getWIFForAddress(e,t)},isBIP38Format:function(e){return e=e.toString(),/^6P[1-9A-HJ-NP-Za-km-z]{56}$/.test(e)},BIP38EncryptedKeyToByteArrayAsync:function(e,t,n){try{n(r.decrypt(e,t,(function(e){console.log(e.percent)})).privateKey)}catch(e){n(new Error(h.get("detailalertnotvalidprivatekey")))}},BIP38PrivateKeyToEncryptedKeyAsync:function(e,t,n,c){const a=i.decode(e);c(r.encrypt(a.privateKey,n,t))},BIP38GenerateIntermediatePointAsync:function(t,n,r,i){const u=null===n||null===r;let y,h;if(u)h=y=o(8);else{h=o(4);const e=new c(4096*n+r).toByteArrayUnsigned();y=h.concat(e)}const p=s(t,h,16384,8,8,32),P=u?p:e.crypto.hash256(p.concat(y)),f=new d(P),w=a.curves.secp256k1.curve.g.mul(f).encodeCompressed(),m=[44,233,179,225,255,57,226,81];u&&(m[7]=83);let b=m.concat(y).concat(w);b=b.concat(e.crypto.hash256(b).slice(0,4)),i(l.encode(b))},BIP38GenerateECAddressAsync:function(n,c,r){const i=l.decode(n),y=83===i[7],h=i.slice(8,16),p=i.slice(16,49),P=(c?32:0)|(y?0:4),f=o(24),w=e.crypto.hash256(f),m=a.curves.secp256k1.curve.decodePoint(t.from(p)).mul(new d(w)).getEncoded(c),b=e.address.toBase58Check(e.crypto.hash160(m),0),g=e.crypto.hash256(b).slice(0,4),v=s(p,g.concat(h),1024,1,1,64);for(let e=0;e<16;++e)f[e]^=v[e];const A=u.createDecipher("aes-256-ecb",f.slice(0,16));A.setAutoPadding(!1),A.end(v.slice(16,32));const C=A.read(),k=C.slice(8,16).concat(f.slice(16,24));for(let e=0;e<16;++e)k[e]^=v[e+16];const B=u.createDecipheriv("aes-256-ecb",v.slice(32));B.setAutoPadding(!1),B.end(k);const K=B.read();let I=[1,67,P].concat(g).concat(h).concat(C.slice(0,8)).concat(K);I=I.concat(e.crypto.hash256(I).slice(0,4)),r(b,l.encode(I))},create:function(e,t,n){return y.selectedCurrency.create(e,t,n)},makeRandom:function(e){return y.selectedCurrency.makeRandom(e)},isVanitygenPossible:function(e,t){return y.selectedCurrency.isVanitygenPossible(e,t)},testVanitygenMatch:function(e,t,n){return y.selectedCurrency.testVanitygenMatch(e,t,n)}}}(),e.exports.__esModule=!0}).call(this,n(10).Buffer)}}]);