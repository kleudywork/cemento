if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let d={};const r=e=>a(e,f),n={module:{uri:f},exports:d,require:r};s[f]=Promise.all(c.map((e=>n[e]||r(e)))).then((e=>(i(...e),d)))}}define(["./workbox-17c5f633"],(function(e){"use strict";e.setCacheNameDetails({prefix:"quasar-project"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.611fba78.js",revision:"7a18b64dd0ca92bdfe8382409e5bf6aa"},{url:"assets/CalidadPage.32b0a8d5.css",revision:"66a0b44799da61d868c4a20301143418"},{url:"assets/CalidadPage.cb98daa6.js",revision:"01881edc20bc42d83ab0d28adf55b3fe"},{url:"assets/ComunicacionPage.42f5c866.css",revision:"31ee197b8afb0eff8567a6dfc1ebe2ca"},{url:"assets/ComunicacionPage.c81f74ed.js",revision:"81fbac3bcda232cdafd8d5585ff0f036"},{url:"assets/ContactoPage.269a6b23.css",revision:"b1c22eb9a051d6865233e22bf6e665ae"},{url:"assets/ContactoPage.43fdcf54.js",revision:"f818443076c5f5ce6a37287788439eeb"},{url:"assets/EnfoqueEstrategico.081dbfbb.js",revision:"ebf562fe48c71adbbc8fdba5e537058a"},{url:"assets/EnfoqueEstrategico.fef35aaa.css",revision:"8fb3390932ab2e8e017f341fcf0ac6dd"},{url:"assets/ErrorNotFound.0d63625f.js",revision:"6d9f8d217b077450aac07eb94376bb44"},{url:"assets/EventosPage.a596c881.css",revision:"4b74df6ef3e1281c9c20567dfde99a4f"},{url:"assets/EventosPage.e8ec1338.js",revision:"6c301e9f8c96b92accf7a35732f9c6c8"},{url:"assets/fastclick.8a4a8267.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.83be7b2f.woff2",revision:"393b5d8b3fd798486652801f3ee8c6ea"},{url:"assets/index.2247de72.js",revision:"631b3cce9b0b22954b9f7bfbb98c0427"},{url:"assets/index.876ae21a.css",revision:"386e6906bfeeb6d894e66bd6ee961d53"},{url:"assets/IndexPage.6357d61f.js",revision:"7d3a17d7b3df1e1fda93e26b8da1e4cc"},{url:"assets/IndexPage.9f205175.css",revision:"c923e763f662e4aee5464163d32f9956"},{url:"assets/InstitucionPage.a851e70c.js",revision:"f44ebd7d35f8d16a7420ca173553d099"},{url:"assets/InstitucionPage.c451ab07.css",revision:"a11d464b1753ff926e87993519151448"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/logo.03ccb245.png",revision:"8e75e4d80dd42cf3e353128bd5479965"},{url:"assets/MainLayout.7484fdb1.css",revision:"7e6b56fbd3d3bd180b6b21133524760f"},{url:"assets/MainLayout.ded17ff6.js",revision:"41ab9bbab78b20cf3c4fa3da729ceb48"},{url:"assets/MedioAmbientePage.a1d36617.js",revision:"c345e576a3647b49fa5d9e2ef624b6ac"},{url:"assets/MedioAmbientePage.cb7280d0.css",revision:"2a8b47a827d3efc64c220efad05127c0"},{url:"assets/OrganizacionesPage.77bca06d.js",revision:"8f779615a08c9cc5b0dc1bbb46dcc290"},{url:"assets/OrganizacionesPage.893781d3.css",revision:"b7ed53c523538d4e791dfa087e25a5eb"},{url:"assets/ProductosPage.2bf7343f.js",revision:"022e31031e009cdb147cf1ca915a469f"},{url:"assets/ProductosPage.6eaae05f.css",revision:"ae76758c0d77790023c0ad362d130928"},{url:"assets/PublicacionesPage.0e343573.css",revision:"8159b876b25ee2a7ab7039f1a53862ec"},{url:"assets/PublicacionesPage.9546ddbb.js",revision:"bfd78bc7dda43384cf22caca398e3ee6"},{url:"assets/QBtn.195d1988.js",revision:"8175363cc3adc215145d2bf06695bc46"},{url:"assets/QImg.713208de.js",revision:"1cec424b59f0f7a51b07cd4de3dae9cc"},{url:"assets/QSpinner.969c860b.js",revision:"2a058d20065147e6e3d920442e2eb125"},{url:"assets/saco-azul.973d9f57.png",revision:"dd5f9addad6d8a3ac08404d1b7b38551"},{url:"assets/saco-rojo.1d40c109.png",revision:"74c59053c1fe5a4069cd1bd8f352b38d"},{url:"assets/SeguridadInformaticaPage.b4830972.css",revision:"61c144563f21caa784c2849645980529"},{url:"assets/SeguridadInformaticaPage.ec41f363.js",revision:"1e97e3009c50150099b96fee46ff4d29"},{url:"assets/SeguridadSaludPage.e1045c4e.js",revision:"c9dd7d73ff778acef3a233577dd819c6"},{url:"assets/SeguridadSaludPage.e8de2731.css",revision:"a5c995a88a4229a45c2f400ff712fa89"},{url:"assets/use-dark.98c33d37.js",revision:"977e0585d1e6726bd452d11d07fbe770"},{url:"assets/VerEventoPage.4947ef7b.js",revision:"8b1d48c778fc5546a04ae8a9f87c517a"},{url:"assets/VerEventoPage.a8311228.css",revision:"9074080b0ac9708d0b15c6b58be577eb"},{url:"assets/VerPublicacionPage.04a99b35.js",revision:"b2cb23fc2549a631ca48bb01c0ad282f"},{url:"assets/VerPublicacionPage.f66830bc.css",revision:"3282fe9fd4d5f37c22bd284185f75eca"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"2e987e4b8acc906a00a0983164dad585"},{url:"manifest.json",revision:"455e7fd8accdab48ffca011cb46f6e1c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
