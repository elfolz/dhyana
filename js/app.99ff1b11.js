(()=>{var e={2691:(e,a,o)=>{"use strict";var t=o(9242),r=o(990),s=o(9414),n=o.n(s),i=o(3396),d=o(7139);function c(e,a,o,t,r,s){const n=(0,i.up)("router-view"),c=(0,i.up)("v-icon"),l=(0,i.up)("v-btn"),u=(0,i.up)("v-snackbar"),p=(0,i.up)("banner-install-pwa"),m=(0,i.up)("banner-cookies-warning"),g=(0,i.up)("v-app");return(0,i.wg)(),(0,i.j4)(g,null,{default:(0,i.w5)((()=>[(0,i.Wm)(n),(0,i.Wm)(u,{modelValue:s.updateAvailable,"onUpdate:modelValue":a[0]||(a[0]=e=>s.updateAvailable=e),location:"top","close-delay":"60000",color:"primary",onClick:a[1]||(a[1]=e=>s.updateApp())},{actions:(0,i.w5)((()=>[(0,i.Wm)(l,{text:"",icon:""},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{icon:"cached"})])),_:1})])),default:(0,i.w5)((()=>[(0,i.Uk)(" Atualização disponível ")])),_:1},8,["modelValue"]),(0,i.Wm)(u,{modelValue:s.alert,"onUpdate:modelValue":a[3]||(a[3]=e=>s.alert=e),location:"top","close-delay":"10000",color:s.alertData.color||null,class:(0,d.C_)({"theme--light":"warning"==s.alertData.color})},{actions:(0,i.w5)((()=>[(0,i.Wm)(l,{icon:"",onClick:a[2]||(a[2]=e=>s.alert=!1)},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{icon:"clear"})])),_:1})])),default:(0,i.w5)((()=>[(0,i.Uk)((0,d.zw)(s.alertData.text)+" ",1)])),_:1},8,["modelValue","color","class"]),(0,i.Wm)(p),(0,i.Wm)(m)])),_:1})}const l=e=>((0,i.dD)("data-v-e1c97d74"),e=e(),(0,i.Cn)(),e),u=l((()=>(0,i._)("header",null,"Instale esse App no seu ceular",-1))),p=l((()=>(0,i._)("div",{class:"ios"},[(0,i.Uk)(" Adicionar à Tela de Início "),(0,i._)("span")],-1))),m=l((()=>(0,i._)("div",null,"Adicionar à tela inicial",-1)));function g(e,a,o,r,s,n){const d=(0,i.up)("v-icon");return(0,i.wg)(),(0,i.j4)(t.uT,{name:"fade"},{default:(0,i.w5)((()=>[s.show?((0,i.wg)(),(0,i.iD)("main",{key:0,onClick:a[0]||(a[0]=e=>s.show=!1),class:"banner elevation-12"},[u,"ios"==n.device.name?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i._)("div",null,[(0,i.Uk)(" Toque em "),(0,i.Wm)(d,{icon:"ios_share"}),(0,i.Uk)(" e depois em ")]),p],64)):(0,i.kq)("",!0),"android"==n.device.name?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i._)("div",null,[(0,i.Uk)(" Toque em "),(0,i.Wm)(d,{icon:"more_vert"}),(0,i.Uk)("e depois em ")]),m],64)):(0,i.kq)("",!0)])):(0,i.kq)("",!0)])),_:1})}const h=()=>{var e;const a=window.navigator.userAgent.toLowerCase(),o=navigator.standalone||window.matchMedia("(display-mode: standalone)").matches;return/windows/i.test(a)?e="windows":/macintosh/i.test(a)?e="mac":/android/i.test(a)?e="android":/iphone|ipad|ipod/i.test(a)&&(e="ios"),{name:e,standalone:o,isMobile:"android"==e||"ios"==e}},f={name:"banner-install-pwa",computed:{device(){return h()}},data(){return{show:!1}},mounted(){this.device.isMobile&&!this.device.standalone&&(this.show=!0,setTimeout((()=>{this.show=!1}),1e4))}};var v=o(89);const b=(0,v.Z)(f,[["render",g],["__scopeId","data-v-e1c97d74"]]),k=b;o(7658);const w=e=>((0,i.dD)("data-v-a9a57036"),e=e(),(0,i.Cn)(),e),y={key:0,class:"banner elevation-12"},A=w((()=>(0,i._)("p",null,"Usamos cookies para melhorar sua experiência.",-1)));function q(e,a,o,r,s,n){const c=(0,i.up)("v-icon"),l=(0,i.up)("v-btn");return(0,i.wg)(),(0,i.j4)(t.uT,{name:"fade"},{default:(0,i.w5)((()=>[s.show?((0,i.wg)(),(0,i.iD)("footer",y,[A,(0,i._)("p",null,[(0,i.Uk)("Saiba mais em "),(0,i._)("span",{onClick:a[0]||(a[0]=a=>e.$router.push("/privacy-policy").catch((e=>{})))},(0,d.zw)(n.link()),1)]),(0,i.Wm)(l,{color:"accent",onClick:n.accept},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{icon:"check"}),(0,i.Uk)("Aceitar")])),_:1},8,["onClick"])])):(0,i.kq)("",!0)])),_:1})}const S={name:"banner-cookies-warning",data(){return{show:!localStorage.getItem("cookiesPolicyAccepted")}},methods:{accept(){localStorage.setItem("cookiesPolicyAccepted","true"),this.show=!1},link(){return`${location.host}${location.pathname}#/privacy-policy`}}},_=(0,v.Z)(S,[["render",q],["__scopeId","data-v-a9a57036"]]),z=_,C={components:{bannerInstallPwa:k,bannerCookiesWarning:z},computed:{alert:{get(){return this.$store.state.alert},set(e){return this.$store.commit("setAlert",e)}},updateAvailable:{get(){return this.$store.state.updateAvailable},set(e){this.$store.commit("setUpdateAvailable",!1)}},windowResized:{get(){return this.$store.state.windowResized},set(e){return this.$store.dispatch("setWindowResized",e)}},alertData:function(){return this.$store.state.alertData}},created(){this.$auth.attempt(),window.visualViewport.onresize=()=>this.refreshPageSize(),window.visualViewport.onscroll=()=>setTimeout((()=>this.refreshPageSize()),250)},mounted(){this.refreshPageSize()},methods:{updateApp(){location.reload(!0)},refreshPageSize(){document.documentElement.style.setProperty("--vh",`${window.visualViewport.height}px`),this.isMobile=window.innerWidth<=800,this.windowResized=!0}}},P=(0,v.Z)(C,[["render",c]]),O=P;var E=o(6623);const T=(0,E.MT)({state:{authenticated:!!localStorage.getItem("accessToken"),requestNotificationPermission:null,updateAvailable:!1,alert:!1,alertData:{}},mutations:{setRequestNotificationPermission(e,a){e.requestNotificationPermission=a},setUpdateAvailable(e,a){e.updateAvailable=a},setAuthenticate(e,a){e.authenticated=a},setAlert(e,a){e.alert=a},setAlertData(e,a){e.alertData=a},setWindowResized(e,a){e.windowResized=a}},actions:{openAlert({commit:e},a){if(a.text){e("setAlertData",a),e("setAlert",!0);try{navigator.vibrate(100)}catch(o){}}},setWindowResized({commit:e},a){e("setWindowResized",a),a&&setTimeout((()=>{e("setWindowResized",!1)}),250)}}});var x=o(2483);const D=e=>((0,i.dD)("data-v-06246831"),e=e(),(0,i.Cn)(),e),W=["src"],I=D((()=>(0,i._)("strong",null,"Resumo",-1))),N=["innerHTML"],V=D((()=>(0,i._)("strong",null,"Onde fica",-1))),j=["innerHTML"],L=D((()=>(0,i._)("strong",null,"Bloqueio",-1))),$=["innerHTML"],U=D((()=>(0,i._)("strong",null,"Equilíbrio",-1))),M=["innerHTML"],F=D((()=>(0,i._)("strong",null,"Pedras",-1)));function R(e,a,o,t,r,s){const n=(0,i.up)("v-icon"),c=(0,i.up)("v-btn"),l=(0,i.up)("v-select"),u=(0,i.up)("v-card-title"),p=(0,i.up)("v-chip"),m=(0,i.up)("v-card-text"),g=(0,i.up)("v-card-actions"),h=(0,i.up)("v-card"),f=(0,i.up)("v-dialog");return(0,i.wg)(),(0,i.iD)("main",null,[(0,i._)("figure",null,[(0,i._)("img",{src:`/img/${r.settings[r.dayOfWeek].name}.svg`},null,8,W),(0,i._)("figcaption",null,(0,d.zw)(r.settings[r.dayOfWeek].name),1),(0,i._)("figcaption",null,(0,d.zw)(r.settings[r.dayOfWeek].title),1),(0,i.Wm)(c,{icon:"",onClick:a[0]||(a[0]=e=>r.dialog=!0)},{default:(0,i.w5)((()=>[(0,i.Wm)(n,{icon:"question_mark"})])),_:1})]),(0,i._)("footer",null,[(0,i.Wm)(l,{"hide-details":"",items:r.times,modelValue:r.duration,"onUpdate:modelValue":a[1]||(a[1]=e=>r.duration=e),disabled:r.loading||r.playing,variant:"outlined"},null,8,["items","modelValue","disabled"]),(0,i.Wm)(c,{icon:"",onClick:a[2]||(a[2]=e=>s.togglePlay()),loading:r.loading},{default:(0,i.w5)((()=>[(0,i.Wm)(n,{icon:r.playing?"pause":"play_arrow"},null,8,["icon"])])),_:1},8,["loading"])]),(0,i.Wm)(f,{modelValue:r.dialog,"onUpdate:modelValue":a[4]||(a[4]=e=>r.dialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,d.zw)(`${r.settings[r.dayOfWeek].name} - ${r.settings[r.dayOfWeek].title}`),1)])),_:1}),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[I,(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.settings[r.dayOfWeek].resume,((e,a)=>((0,i.wg)(),(0,i.iD)("li",{key:a,innerHTML:e},null,8,N)))),128))]),V,(0,i._)("section",{innerHTML:r.settings[r.dayOfWeek].description},null,8,j),L,(0,i._)("section",{innerHTML:r.settings[r.dayOfWeek].block},null,8,$),U,(0,i._)("section",{innerHTML:r.settings[r.dayOfWeek].balance},null,8,M),F,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.settings[r.dayOfWeek].stones,((e,a)=>((0,i.wg)(),(0,i.j4)(p,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,d.zw)(e),1)])),_:2},1024)))),256))])),_:1}),(0,i.Wm)(g,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,{variant:"text",onClick:a[3]||(a[3]=e=>r.dialog=!1)},{default:(0,i.w5)((()=>[(0,i.Wm)(n,{icon:"reply"}),(0,i.Uk)(" Voltar")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const B=[{name:"sahasrara",title:"Chakra Coronal",color:"#9966cc",frequency:"480hz",stones:["Ametista","Lolita","Flurolita"],description:"<p>Sahasrara em sânscrito significa milefólio, refere-se às mil pétalas da flor de lótus que simbolizam esse chakra.</p><p>Está localizado no topo da cabeça e sua função é espiritual. De acordo com o yoga, é graças a este centro de energia que a iluminação ocorre.</p><p>O elemento deste chakra é o pensamento que representa a manifestação de tudo ao nosso redor e a função do sahasrara é o conhecimento.</p><p>Do ponto de vista fisiológico, no entanto, o chakra da coroa está ligado à glândula pineal, também chamada epífise.</p><p>Essa glândula endócrina está localizada na base do crânio e é muito importante porque regula o funcionamento de todas as outras glândulas; portanto, se desequilibrada, haverá uma série de distúrbios no metabolismo, crescimento, equilíbrio hormonal, reprodução e muitos outros.</p>",block:"<p>Se esse chakra estiver desequilibrado, surge sentimento de solidão, perda de conexão espiritual e tendência a ser cético.</p>",balance:"<p>O chakra da coroa , ou sahasrara, é o chakra mais alto e varia dos outros chakras porque não é uma “roda” ou ponto de passagem das energias, mas uma abertura.</p><p>A postura do sirsasana convida à concentração, paz e equilíbrio - perfeito para alinhar seu chakra da coroa.</p>",resume:["<strong>Onde está:</strong> Topo da cabeça","<strong>Elemento:</strong> Pensamento","<strong>Função principal:</strong> Compreensão","<strong>Disfunções físicas:</strong> Dificuldades de aprendizagem, confusão, depressão","<strong>Glândulas:</strong> Pineal (epífise)","<strong>Cor:</strong> Violeta","<strong>Mantra:</strong> Ah"]},{name:"muladhara",title:"Chakra Básico",color:"#c80815",frequency:"256hz",stones:["Rubi","Turmalina Vermelha","Granada Vermelha"," Quartzo Vermelho"],description:"<p>O primeiro chakra está localizado na base da coluna, está associado à sobrevivência e sua cor é vermelha.</p><p>As glândulas associadas a este chakra são as supra-renais.</p><p>O elemento desse chakra é a terra, que é o estado mais condensado da matéria; na verdade, está conectada à parte sólida do corpo, como ossos, músculos e intestino grosso (por onde passa a substância sólida).</p>",block:"<p>Não curar este chakra e ignorá-lo significa não ter a base para o crescimento e, sem o seu equilíbrio, se perde as raízes.</p><p>Esse centro é responsável pelo o enraizamento, tanto físico, responsável pela saúde das pernas, quanto figurativo, porque se não está bem enraizados, corre o risco de viver nas nuvens. Muitas pessoas que não sabem o que fazer na vida provavelmente têm esse chakra perturbado e ainda não encontraram suas raízes.</p><p>Está relacionado ao medo que surge toda vez que há o sentimento de ameça ou quando a sobrevivência é comprometida.</p><p>O sentido associado é o olfato, porque é o sentido que permite perceber o elemento terra. De fato, não tem como não sentir o cheiro da terra durante uma caminhada no meio da natureza.</p><p>Se o chakra  está muito fechado, sentimento de insegurança surge, medo de perder o que tem, com pouca autoconfiança. Se aberto demais, corre o risco de ficar muito apegado a bens materiais, com ciúmes e sem nenhum tipo de medo, podendo gerar grandes riscos.</p>",balance:"<p>Postura da montanha. O chakra raiz , ou muladhara, está localizado na base da coluna vertebral. O chakra raiz canaliza a energia da terra para ajudar você a sentir mais conectado, seguro e provido.</p><p>Postura da montanha, tadasana, é ótima postura para se conectar à energia da terra, através dos quatro cantos dos pés, e convidar essa energia para cima, para nutrir todo o corpo.</p>",resume:["<strong>Onde é encontrado:</strong> Períneo, cóccix, base da coluna vertebral","<strong>Elemento:</strong> Terra","<strong>Função principal:</strong> Sobrevivência","<strong>Disfunções físicas:</strong> Problemas nas pernas, artrite, ciática, obesidade, hemorroidas","Glândulas supra-renais","<strong>Cor:</strong> Vermelho","<strong>Sentido:</strong> Olfato","<strong>Mantra:</strong> Lam"]},{name:"svadhisthana",title:"Chakra Sacro",color:"#ff6700",frequency:"288hz",stones:["Topázio Imperial","Pedra do Sol","Cornalina"],description:"<p>Svadisthana está localizado abaixo do umbigo até a altura do sacro e elemento deste chakra é a água.</p><p>É a partir desse elemento que as características desse chakra derivam, pois estão associadas ao movimento, mudança e fluxo. Se o primeiro chakra é responsável por enraizar e formar uma base sólida, o segundo tem o objetivo de deixar fluir.</p><p>Do ponto de vista fisiológico, o segundo chakra regula todos os processos em que líquidos estão envolvidos, como circulação sanguínea, produção e eliminação de urina, reprodução e sexualidade. Já no comportamental, svadhisthana influencia o prazer, a sexualidade, as emoções e até as sensações.</p><p>A cor desse elemento é laranja e o sentido associado é o sabor.</p>",block:"<p>Se este chakra é muito aberto, pode causar uma busca exagerada de prazer, não apenas prazer sexual. Se, por outro lado, esse centro é muito fechado, pode levar a dificuldades na relação intima com o outro, ciúmes, medos, desamparo e até frigidez.</p>",balance:"<p>O Chakra Sacral , ou Svadisthana, está localizado na área pélvica. Este chakra é o centro criativo, brincalhão e o lar da auto-expressão, emoções e prazer.</p><p>A postura do triângulo, Trikonasana, estimula os órgãos abdominais para promover a energia a circular dentro do chakra sacral e ajuda a permanecer ancorado no momento presente.</p>",resume:["<strong>Onde está:</strong> Altura do sacro","<strong>Elemento:</strong> Água","<strong>Função principal:</strong> Procriação, genitais, prazer, desejo","<strong>Disfunções físicas:</strong> Rigidez na região lombar das costas, problemas nas costas, disfunções do útero, problemas renais, frigidez e impotência","<strong>Glândulas:</strong> Testículos e ovários","<strong>Cor:</strong> Laranja","<strong>Sentido:</strong> Paladar","<strong>Mantra:</strong> Vam"]},{name:"manipura",title:"Chakra Umbilical",color:"#f4c430",frequency:"320hz",stones:["Jaspe Amarelo","Topázio Amarelo","Âmbar"],description:"<p>Manipura é o terceiro chakra, está localizado no plexo solar, na região do umbigo, e está associado à vontade e força.</p><p>A energia que está associada a esse centro, na verdade, é responsável pelo metabolismo, tanto no nível macroscópico, que ocorre no sistema digestivo, quanto no nível microscópico, que ocorre nas células individuais.</p><p>As glândulas associadas à manipura são o pâncreas e as supra-renais que são importantes para a digestão e para o bom funcionamento de todos os órgãos envolvidos nesse importante processo, como fígado, estômago e baço.</p><p>O elemento deste chakra é o fogo que traz luz, calor, energia e poder.</p><p>Assim como esse elemento transforma a matéria em luz e calor, o terceiro chakra transforma os dois primeiros elementos mais estáticos e passivos em energia que tende a subir.</p><p>O objetivo deste chakra é a transformação através da força de vontade. É  graças a essa qualidade que qualquer pessoa pode se libertar dos padrões mentais, mudar, adotar novos hábitos e avançar em direção a algo novo.</p><p>A cor da manipura é amarela e o sentido relacionado a ela é a visão.</p>",block:"<p>Se este chakra estiver fechado ou bloqueado, existem problemas físicos principalmente nos sistemas digestivo e psíquico relacionados à falta de força de vontade, auto-estima, autoconfiança e indecisão. Caso o manipura esteja muito ativo, tenta-se a todo custo obter poder, tem excesso de autoconfiança, podendo desenvolver arrogância e  dificuldade em ouvir os outros.</p>",balance:"<p>O chakra do plexo solar , ou manipura, conecta à energia solar para fornecer uma sensação de força de vontade, determinação e um calor interno dentro da barriga.</p><p>Como o Plexo Solar está localizado próximo ao umbigo, a postura do barco, Navasana é uma ótima postura de yoga para ajudar a ativar seu núcleo e o fogo interno.</p>",resume:["<strong>Onde está:</strong> Plexo solar","<strong>Elemento:</strong> Fogo","<strong>Função principal:</strong> vontade, poder, segurança,","<strong>Disfunções físicas:</strong> Distúrbios digestivos, diabetes, úlceras","<strong>Glândulas:</strong> Pâncreas, supra-renais","<strong>Cor:</strong> Amarelo","<strong>Sentido:</strong> Visão","<strong>Mantra:</strong> Ram"]},{name:"anahata",title:"Chakra Cardíaco",color:"#3cb371",frequency:"341hz",stones:["Quartzo Verde","Esmeralda","Turmalina Verde"],description:"<p>Anahata está localizada no nível do coração, no centro do peito e é considerada o centro de conexão entre os chakras inferiores, mais materiais e superiores, que são mais espirituais.</p><p>Esse chakra é o que governa o amor, mas é diferente do segundo chakra. O amor deste último é mais sensual, apaixonado e externo porque é voltado para uma pessoa, enquanto o do quarto chakra é puro, inconsciente e vem de dentro.</p><p>O elemento deste chakra é o ar que representa leveza, liberdade e frescor.</p><p>Os principais órgãos relacionados a esse chakra são os pulmões e o coração; na verdade, se desequilibrados, podem causar pressão, problemas cardíacos e respiratórios.</p><p>Do ponto de vista comportamental, no entanto, ele está envolvido no amor que é sentido pelos outros, mas também por si mesmos.</p><p>A glândula associada a este chakra é o timo e a cor é verde.</p>",block:"<p>Se estiver bloqueado ou muito fechado, poderá levar a dificuldades em expressar amor, em demonstrar afeto e em ter compaixão. Se, por outro lado, é muito aberto, você pode experimentar um sofrimento exagerado pelos outros ou, por coisas que não o pertencem.</p>",balance:"<p>Um Chakra do Coração equilibrado , ou Anahata, permite sentir compaixão, generosidade, respeito e conexão com os outros. O Chakra do Coração é a porta de entrada para permitir que o amor entre em nossas vidas.</p><p>A postura da lua crescente, anjaneyasana, convida o espaço do coração a se abrir para alinhar a energia do chakra do coração.</p>",resume:["<strong>Onde está:</strong> No nível do coração, no centro do peito","<strong>Elemento:</strong> Ar","<strong>Função principal:</strong> Amor e carinho","<strong>Disfunções físicas:</strong> Distúrbios cardíacos e pulmonares, problemas de pressão","<strong>Glândula:</strong> Timo","<strong>Cor:</strong> Verde","<strong>Sentido:</strong> Tato","<strong>Mantra:</strong> Yam"]},{name:"vishudda",title:"Chakra Laríngeo",color:"#00b7eb",frequency:"384hz",stones:["Água Marinha","Turquesa","Quartzo Azul","Quartzo Lavanda"],description:"<p>Visuddha em sânscrito significa purificação, é por isso que é considerado o chakra purificador.</p><p>É também chamado de chakra da garganta porque está localizado no pescoço e nos ombros.</p><p>O elemento ligado a este centro de energia é o éter, o espaço.</p><p>É o mais fino dos elementos e só podemos perceber sua manifestação que ocorre através das vibrações. Por essa razão, o sentido associado a este chakra é a audição graças ao qual percebemos o éter que vibra.</p><p>Este chakra também está associado à comunicação, à maneira de se expressar e à criatividade. A comunicação vai além dos estados físicos da matéria e é possível graças ao éter, espaço e vibrações.</p><p>As glândulas associadas a este chakra são a tireóide e a paratireóide, portanto, estão envolvidas em todos os processos regulados por essa glândula, como a regulação do cálcio, peso corporal, humor, preguiça, apetite, cansaço e sono.</p><p>Visuddha também está envolvido na saúde da garganta, pescoço e audição.</p><P>A cor associada a este chakra é azul.</P>",block:"<p>Se esse chakra é bloqueado ou funciona menos do que deveria, surgem problemas de se expressar e comunicar. As pessoas tendem a não nos ouvir, a timidez toma conta, surge o medo de dizer a própria opinião e também não há criatividade. Se, por outro lado, sua atividade é excessiva, a falar torna-se excessiva, sem perceber o que é dito.</p><p>Gargantas doloridas frequentes são um sinal de que pode haver um desequilíbrio neste chakra.</p>",balance:"<p>O chakra da garganta , ou vishuddha, é a energia que  ajuda a falar e comunicar autenticamente com nós mesmos e com os outros.</p><p>O chakra da garganta pode ter um grande impacto na originalidade, e na confiança para falar em público. Entoar mantras é uma bela prática para abrir o Chakra da Garganta e ajudar a manter a energia alinhada.</p>",resume:["<strong>Onde está:</strong> Na garganta","<strong>Elemento:</strong> Éter, espaço","<strong>Função principal:</strong> Criatividade e comunicação","<strong>Disfunções físicas:</strong> Dores de garganta frequentes, distúrbios da tireóide, problemas auditivos e pescoço frequentemente dolorido","<strong>Glândulas:</strong> Tireóide, paratireóide","<strong>Cor:</strong> azul claro","<strong>Sentido:</strong> Audição","<strong>Mantra:</strong> Ham"]},{name:"ajna",title:"Chakra Frontal",color:"#191970",frequency:"432hz",stones:["Safira","Sodalita","Quartzo Azul Intenso"],description:"<p>O nome ajna em sânscrito significa comandar, perceber, portanto, este é o chakra da percepção que por sua vez também comanda.</p><p>Esse chakra é conhecido como o chakra de comando. Através dele é possível perceber o mundo externo e refletir em imagens internas, para a própria realidade.</p><p>Ele está localizado no centro da cabeça, atrás da testa, e o elemento associado a este chakra é a luz através da qual enxerga o mundo exterior.</p><p>É também chamado de chakra do terceiro olho e refere-se ao olho da percepção que  permite ver além da realidade simples.</p><p>O ajna chakra está relacionado à glândula pituitária, localizada no centro da cabeça.</p><p>É uma glândula muito pequena, mas também muito importante, porque produz melatonina, um hormônio essencial para a  saúde que regula principalmente o sono e a vigília, mas que também está envolvido no crescimento, no sistema imunológico e no controle do estresse.</p>",block:"<p>e esse chakra está desequilibrado, é difícil confiar na intuição, a imaginação não é usada e tende a fazer escolhas que muitas vezes acabam erradas apenas por não ouvir a intuição.</p>",balance:"<p>O Chakra do Terceiro Olho , ou Ajna Chakra, está situado no ponto da testa e é conhecido como  “olho que tudo vê”, bem como o ponto da intuição e autorreflexão. Serve como orientação interior.</p><p>A postura dos golfinhos, ardha pincha mayurasana, aumenta a circulação no rosto e no cérebro, o que, por sua vez, estimula o chakra do terceiro olho.</p>",resume:["<strong>Onde fica:</strong> Centro da cabeça","<strong>Elemento:</strong> luz","<strong>Função principal:</strong> Visão, intuição","<strong>Disfunções físicas:</strong> Problemas de visão, dores de cabeça, problemas de sono","<strong>Glândulas:</strong> Pituitária","<strong>Cor:</strong> Índigo","<strong>Sentido:</strong> Visão","<strong>Mantra:</strong> Om"]}],H={data(){return{audio:null,audioCtx:null,audioSrc:null,destination:null,audioBuffer:null,wakeLockObj:null,dayOfWeek:(new Date).getDay(),duration:"00:05",times:["00:05","00:10","00:20","00:30","01:00"],settings:B,playing:!1,loading:!1,finishAt:null,dialog:!1}},created(){/[0-7]/.test(this.$route.query.chakra)&&(this.dayOfWeek=parseInt(this.$route.query.chakra)),document.documentElement.style.setProperty("--color",this.settings[this.dayOfWeek].color)},methods:{getAudio(){this.loading=!0,fetch(`/audio/${this.settings[this.dayOfWeek].frequency}.mp3`).then((e=>e.arrayBuffer())).then((e=>this.audioCtx.decodeAudioData(e))).then((e=>{this.audioBuffer=e,this.start()})).catch((e=>{console.log(e)})).finally((()=>{this.loading=!1}))},togglePlay(){this.playing?this.stop():this.play()},play(){if(this.audioCtx)return this.start();this.audio=new Audio,this.audioCtx=new AudioContext,this.audioCtx.createMediaElementSource(this.audio),this.audioBuffer?this.start():this.getAudio()},start(){this.lockScreen(),this.calcDuration(),this.playing=!0,this.destination=this.audioCtx.createMediaStreamDestination(),this.audio.srcObject=this.destination.stream,this.audio.play(),this.audioSrc=this.audioCtx.createBufferSource(),this.audioSrc.buffer=this.audioBuffer,this.audioSrc.loop=!0,this.audioSrc.connect(this.audioCtx.destination),this.audioSrc.start(0,0,this.finishAt),this.audioSrc.onended=()=>this.pause(),this.$el.classList.add("playing")},stop(){this.playing=!1,this.audio.pause(),this.audioCtx.close().finally((()=>{this.audio=void 0,this.audioCtx=void 0,this.destination=void 0})),this.wakeLockObj&&this.wakeLockObj.release(),this.$el.classList.remove("playing")},calcDuration(){let e=this.duration.split(":");this.finishAt=60*parseInt(e[0])*60+60*parseInt(e[1])},lockScreen(){if(!document.hidden)try{navigator.wakeLock.request("screen").then((e=>this.wakeLockObj=e))}catch(e){}}}},G=(0,v.Z)(H,[["render",R],["__scopeId","data-v-06246831"]]),Y=G,Q=[{path:"/privacy-policy",name:"Privacy Policy",component:()=>o.e(866).then(o.bind(o,6866))},{path:"/",name:"Home",component:Y}],Z=(0,x.p7)({history:(0,x.r5)("/"),routes:Q});({VUE_APP_GANALYTICS_ID:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_FIREBASE_ANALYTICS_ID&&(0,r.iq)(Z);const J=Z;var K=o(5734),X=o(2622);class ee{constructor(e){this.app=e}attempt(){navigator.onLine&&this.authenticated&&(this.vue.axios.get("/auth",{headers:this.headers}).catch((()=>{this.deauthenticate(!0)})),this.vue.$pushNotification.checkPermission())}authenticate(e,a="/"){localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("user",JSON.stringify(e.user)),this.vue.$store.commit("setAuthenticate",!0),this.vue.$router.push(a??"/").catch((e=>{})),this.vue.$pushNotification.checkPermission()}deauthenticate(e=!1){e||this.vue.axios.delete("/auth",{headers:this.headers}),this.vue.$store.commit("setAuthenticate",!1),localStorage.removeItem("accessToken"),localStorage.removeItem("user"),this.vue.$router.push("/login").catch((e=>{})),(0,X.w7)(K.auth)}get authenticated(){return!!localStorage.getItem("accessToken")}get user(){return JSON.parse(localStorage.getItem("user")??"{}")}get headers(){let e={};return localStorage.getItem("accessToken")&&(e["Authorization"]=`Bearer ${localStorage.getItem("accessToken")}`),e}get vue(){return this.app.config.globalProperties}}const ae={install:(e,a)=>{const o=new ee(e);e.config.globalProperties.$auth=o}};o(9773);var oe=o(8957),te=o(7711),re=o(4398),se=o(8600);function ne(){return"true"==localStorage.getItem("lightTheme")||"false"!=localStorage.getItem("lightTheme")&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches)}const ie=(0,oe.Rd)({components:re,directives:se,icons:{defaultSet:"md",aliases:te.j,sets:{md:te.md}},theme:{defaultTheme:ne()?"light":"dark",themes:{dark:{dark:!0,colors:{background:"#121212",primary:"#00ffbb",secondary:"#ffb347",accent:"#9370db",error:"#ff4040",info:"#1e90ff",success:"#3cd070",warning:"#ffdb58"}},light:{dark:!1,colors:{background:"#e6e6e6",primary:"#00ffbb",secondary:"#ffb347",accent:"#9370db",error:"#ff4040",info:"#1e90ff",success:"#3cd070",warning:"#ffdb58"}}}}});var de=o(2659);class ce{constructor(e){this.app=e}checkPermission(){navigator.permissions.query({name:"notifications"}).then((e=>{"granted"==e.state?this.getFcmToken():"prompt"==e.state&&(this.vue.$store.commit("setRequestNotificationPermission",!0),this.vue.$store.dispatch("refreshShowPromo"))}))}requestPermission(){Notification.requestPermission().then((e=>{"granted"==e&&this.getFcmToken()})).catch((e=>{this.vue.$store.commit("setRequestNotificationPermission",!1)}))}getFcmToken(){navigator.serviceWorker.ready.then((e=>(0,de.LP)(K.messaging,{vapidKey:{VUE_APP_GANALYTICS_ID:"",NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_FIREBASE_VAPID,serviceWorkerRegistration:e}).then((e=>{localStorage.getItem("fcmToken")!=e&&this.sendToServer({fcmToken:e}),localStorage.setItem("fcmToken",e),this.vue.$store.dispatch("refreshShowPromo"),this.vue.$store.commit("setRequestNotificationPermission",!1)})))).catch((e=>{}))}sendToServer(e){this.vue.axios.put("/auth/notification",e,{headers:this.vue.$auth.headers})}get vue(){return this.app.config.globalProperties}}const le={install:(e,a)=>{const o=new ce(e);e.config.globalProperties.$pushNotification=o}};var ue=o(5431);const pe=e=>{(0,ue.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){e.config.globalProperties.$store.commit("setUpdateAvailable",!0),console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}})},me=(0,t.ri)(O);me.use(ae),me.use(T),me.use(J),me.use(ie),me.use(n()),me.use(le),me.mount("#app"),pe(me),{VUE_APP_GANALYTICS_ID:"",NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_FIREBASE_ANALYTICS_ID&&me.use(r.ZP,{property:{id:{VUE_APP_GANALYTICS_ID:"",NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_FIREBASE_ANALYTICS_ID}}),J.beforeEach(((e,a,o)=>{const t=e.matched.some((e=>e.meta.ifAuth)),r=e.matched.some((e=>e.meta.elseAuth));t&&!me.config.globalProperties.$auth.authenticated?o("/login"):r&&me.config.globalProperties.$auth.authenticated?o("/"):o()})),me.config.devtools=!1},5734:()=>{}},a={};function o(t){var r=a[t];if(void 0!==r)return r.exports;var s=a[t]={exports:{}};return e[t].call(s.exports,s,s.exports,o),s.exports}o.m=e,(()=>{var e=[];o.O=(a,t,r,s)=>{if(!t){var n=1/0;for(l=0;l<e.length;l++){for(var[t,r,s]=e[l],i=!0,d=0;d<t.length;d++)(!1&s||n>=s)&&Object.keys(o.O).every((e=>o.O[e](t[d])))?t.splice(d--,1):(i=!1,s<n&&(n=s));if(i){e.splice(l--,1);var c=r();void 0!==c&&(a=c)}}return a}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[t,r,s]}})(),(()=>{o.F={},o.E=e=>{Object.keys(o.F).map((a=>{o.F[a](e)}))}})(),(()=>{o.n=e=>{var a=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(a,{a}),a}})(),(()=>{o.d=(e,a)=>{for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,t)=>(o.f[t](e,a),a)),[]))})(),(()=>{o.u=e=>"js/"+e+".4c65551a.js"})(),(()=>{o.miniCssF=e=>"css/"+e+".7bee0209.css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a)})(),(()=>{var e={},a="Dhyana:";o.l=(t,r,s,n)=>{if(e[t])e[t].push(r);else{var i,d;if(void 0!==s)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==a+s){i=u;break}}i||(d=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",a+s),i.src=t),e[t]=[r];var p=(a,o)=>{i.onerror=i.onload=null,clearTimeout(m);var r=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((e=>e(o))),a)return a(o)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),d&&document.head.appendChild(i)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,a,o,t,r)=>{var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var n=o=>{if(s.onerror=s.onload=null,"load"===o.type)t();else{var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||a,d=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=n,d.request=i,s.parentNode&&s.parentNode.removeChild(s),r(d)}};return s.onerror=s.onload=n,s.href=a,o?o.parentNode.insertBefore(s,o.nextSibling):document.head.appendChild(s),s},a=(e,a)=>{for(var o=document.getElementsByTagName("link"),t=0;t<o.length;t++){var r=o[t],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===a))return r}var n=document.getElementsByTagName("style");for(t=0;t<n.length;t++){r=n[t],s=r.getAttribute("data-href");if(s===e||s===a)return r}},t=t=>new Promise(((r,s)=>{var n=o.miniCssF(t),i=o.p+n;if(a(n,i))return r();e(t,i,null,r,s)})),r={143:0};o.f.miniCss=(e,a)=>{var o={866:1};r[e]?a.push(r[e]):0!==r[e]&&o[e]&&a.push(r[e]=t(e).then((()=>{r[e]=0}),(a=>{throw delete r[e],a})))}}})(),(()=>{var e={143:0};o.f.j=(a,t)=>{var r=o.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else{var s=new Promise(((o,t)=>r=e[a]=[o,t]));t.push(r[2]=s);var n=o.p+o.u(a),i=new Error,d=t=>{if(o.o(e,a)&&(r=e[a],0!==r&&(e[a]=void 0),r)){var s=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+a+" failed.\n("+s+": "+n+")",i.name="ChunkLoadError",i.type=s,i.request=n,r[1](i)}};o.l(n,d,"chunk-"+a,a)}},o.F.j=a=>{if(!o.o(e,a)||void 0===e[a]){e[a]=null;var t=document.createElement("link");o.nc&&t.setAttribute("nonce",o.nc),t.rel="prefetch",t.as="script",t.href=o.p+o.u(a),document.head.appendChild(t)}},o.O.j=a=>0===e[a];var a=(a,t)=>{var r,s,[n,i,d]=t,c=0;if(n.some((a=>0!==e[a]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(d)var l=d(o)}for(a&&a(t);c<n.length;c++)s=n[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(l)},t=globalThis["webpackChunkDhyana"]=globalThis["webpackChunkDhyana"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})(),(()=>{o.O(0,[143],(()=>{o.E(866)}),5)})();var t=o.O(void 0,[840,494,322,613,922,814,77,857,864,793],(()=>o(2691)));t=o.O(t)})();