(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);n(77),n(111);var a=n(0),r=n.n(a),o=n(28),i=n.n(o),s=(n(117),n(3)),c=n(4),l=n(6),u=n(5),p=n(7),d=n(1),h=n(2);function m(){var e=Object(d.a)(["\n    margin-bottom: 0;\n"]);return m=function(){return e},e}function g(){var e=Object(d.a)(["\n    padding: 8px;\n"]);return g=function(){return e},e}function f(){var e=Object(d.a)(["\n    background-color: white;\n    opacity: 0.95;\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n    font-size: 12px;\n"]);return f=function(){return e},e}var b=h.b.div(f()),y=h.b.footer(g()),v=h.b.p(m()),w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(b,null,r.a.createElement(y,null,r.a.createElement(v,null,"Made using ",r.a.createElement("a",{href:"https://facebook.github.io/create-react-app"},"Create React App"),". The repo is available on ",r.a.createElement("a",{href:"https://github.com/jsonunger/jsonunger.github.io"},"GitHub"),".")))}}]),t}(a.Component),k=n(29);function j(){var e=Object(d.a)(["\n            cursor: pointer;\n        "]);return j=function(){return e},e}function E(){var e=Object(d.a)(["\n    font-weight: bold;\n\n    ","\n"]);return E=function(){return e},e}var O=h.b.span(E(),function(e){return e.onClick&&Object(h.a)(j())}),x=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.property,n=Object(k.a)(e,["property"]);return r.a.createElement(O,n,t)}}]),t}(a.Component);function A(){var e=Object(d.a)(["\n        color: ",";\n    "]);return A=function(){return e},e}function S(){var e=Object(d.a)(["\n    ","\n"]);return S=function(){return e},e}var M={string:"green",number:"blue",boolean:"firebrick"},I=h.b.span(S(),function(e){return Object(h.a)(A(),M[e.primitiveType])}),z=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).checkIfUrl=function(e){return/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})$/i.test(e)},n.checkIfEmail=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(e)},n.getValue=function(e){if("string"===typeof e){if(n.checkIfUrl(e))return r.a.createElement("a",{href:e,target:"_blank"},e);if(n.checkIfEmail(e))return r.a.createElement("a",{href:"mailto:".concat(e),target:"_blank"},e)}return e},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.property,a=e.comma,o=this.getValue(t);return r.a.createElement("div",null,n?r.a.createElement(x,{property:n}):null,n?":":null," ",r.a.createElement(I,{primitiveType:typeof t},'"',o,'"'),a?",":null)}}]),t}(a.Component);function C(){var e=Object(d.a)(["\n    padding-right: 8px;\n    padding-left: 8px;\n    position: absolute;\n    top: 1px;\n    left: -1.5em;\n    cursor: pointer;\n    user-select: none;\n    -webkit-user-select: none;\n"]);return C=function(){return e},e}var D=h.b.div(C()),R=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.showExpandIcon,n=Object(k.a)(e,["showExpandIcon"]);return r.a.createElement(D,n,r.a.createElement("strong",null,t?"+":"-"))}}]),t}(a.Component);function J(){var e=Object(d.a)(["\n    list-style-type: none;\n    padding: 0px;\n    margin: 0px 0px 0px 24px;\n    margin-left: 1.5em;\n\n    @media (min-width: 768px) {\n        margin-left: 2em;\n    }\n"]);return J=function(){return e},e}var T=h.b.ul(J());function F(){var e=Object(d.a)(["\n    position: relative;\n"]);return F=function(){return e},e}var L=h.b.li(F());function Z(){var e=Object(d.a)(["\n            cursor: pointer;\n        "]);return Z=function(){return e},e}function B(){var e=Object(d.a)(["\n    ","\n"]);return B=function(){return e},e}var U=h.b.em(B(),function(e){return e.onClick&&Object(h.a)(Z())}),W=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={show:!1},n.toggle=function(){n.setState(function(e){return{show:!e.show}})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,n=e.value,a=e.property,o=e.comma,i=[],s=[];return n.forEach(function(e,n,a){var o,c={value:e};if(Array.isArray(e))o=r.a.createElement(t,Object.assign({},c,{comma:n!==a.length-1}));else if("object"===typeof e){var l=e[Object.keys(e)[0]];s.push(l),o=r.a.createElement(N,Object.assign({},c,{comma:n!==a.length-1,title:l}))}else o=r.a.createElement(z,Object.assign({},c,{comma:n!==a.length-1}));i.push(r.a.createElement(L,{key:n},o))}),r.a.createElement("div",null,a?r.a.createElement(x,{onClick:this.toggle,property:a}):null,a?":":null,r.a.createElement(R,{showExpandIcon:!this.state.show,onClick:this.toggle})," ","["," ",this.state.show?r.a.createElement(T,null,i):r.a.createElement(U,{onClick:this.toggle},s.length?s.join(", "):"...")," ","]",o?",":null)}}]),t}(a.Component),N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={show:!1},n.toggle=function(){n.setState(function(e){return{show:!e.show}})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.open,n=e.property;(t||"about"===n)&&this.setState({show:!0})}},{key:"render",value:function(){var e=[],n=this.props,a=n.value,o=n.property,i=n.title,s=n.comma;return Object.keys(a).forEach(function(n,o,i){var s,c=a[n];if(Array.isArray(c))s=r.a.createElement(W,{value:c,property:n,comma:o!==i.length-1});else if("object"===typeof c){var l=c[Object.keys(c)[0]];s=r.a.createElement(t,{value:c,property:n,comma:o!==i.length-1,title:l})}else s=r.a.createElement(z,{value:c,property:n,comma:o!==i.length-1});e.push(r.a.createElement(L,{key:o},s))}),r.a.createElement("div",null,o?r.a.createElement(x,{onClick:this.toggle,property:o}):null,o?":":null,r.a.createElement(R,{showExpandIcon:!this.state.show,onClick:this.toggle})," ","{"," ",this.state.show?r.a.createElement(T,null,e):r.a.createElement(U,{onClick:this.toggle},i)," ","}",s?",":null)}}]),t}(a.Component),Q=n(74);function P(){var e=Object(d.a)(["\n    margin: 8px;\n\n    @media (max-width: 767px) {\n        margin-right: 12px;\n    }\n"]);return P=function(){return e},e}var G=h.b.div(P()),H=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement(G,null,r.a.createElement(N,{value:Q,open:!0,title:"Jason's JSON Resume"})),r.a.createElement(w,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e){e.exports={about:{name:"Jason Unger",email:"jason@jsonunger.com",phone:"(914) 584-5745",location:"New York, NY",github:"https://github.com/jsonunger",linkedin:"http://linkedin.com/in/jasonunger"},skills:[{level:"proficient",tools:["JavaScript","GraphQL","React","Redux","TypeScript","Node","Express","Webpack","Gulp","SQL","MySQL","PostgreSQL","MongoDB","Python","Django","Web Scraping"]},{level:"working_knowledge",tools:["Angular 1.x","HTML","(S)CSS","jQuery","Flow","Chrome Extensions","Shell Scripting","Twitter Bootstrap","Material Design","Amazon AWS","Heroku"]},{level:"some_experience",tools:["Docker","OAuth","Web Sockets","Angular","Ruby on Rails"]}],professional_experience:[{company:"Rocketrip",company_url:"https://www.rocketrip.com/",roles:[{role:"Front End Engineer",dates:"February 2018 - Present",responsibilities:["Designed and developed the GraphQL interfacing and UX for a new user management system","Established official protocol for building GraphQL resolvers and mutations above REST endpoints","Worked with Product and Design to establish a variety of A/B and multivariate tests aimed at improving platform adoption","Upgraded the core component library to be written in TypeScript, adding necessary custom type definitions as needed for third-party libraries that were published in the official @types directory"]},{role:"Junior Front End Engineer",dates:"November 2016 - February 2018",responsibilities:["Overhauled the organization\u2019s core component library across all client-facing applications given an updated style guide, and re-skinned all necessary pages or views to match the new UI","Remodeled the rewards store, including migrating to a new partner API, developing the GraphQL interfacing for the entire domain, and building the user experience on the client-side","Assembled system to parse and normalize scraped data from online booking tool, combining HTML parsing, form data, and web storage values"]}]},{company:"Fullstack Academy of Code",company_url:"https://www.fullstackacademy.com/",roles:[{role:"Teaching Fellow",dates:"June - September 2016",responsibilities:["Mentor a group of 6 students by conducting code reviews, holding weekly group and one-on-one meetings, and pair programming","Develop and lead full reviews of key curriculum prior to major milestone checkpoints","Complete approximately 20 help tickets per week to get students through code blocks","Maintain and improve functionality of the school\u2019s learning management system","Conduct 2-3 admissions interviews per week for prospective Fullstack Academy students"]}]},{company:"Interlude Ltd.",company_url:"https://interlude.fm/",roles:[{role:"Marketing & Insights Associate",dates:"January 2015 - January 2016",responsibilities:["Established new full-time position","Implemented project analytics for future creative decisions","Responsible for management-level post-mortem analyses of biggest projects","Coordinated hiring processes of undergraduate interns"]},{role:"Undergraduate Business Intern",dates:"October 2014 - January 2015",responsibilities:["Produced content for various company social media platforms","Provided background research and competitive analysis for weekly business meetings"]}]},{company:"Sony Music Entertainment",company_url:"https://sonymusic.com/",roles:[{role:"Digital Product Development Intern",dates:"May - August 2012",responsibilities:["Determined audience target segments for third-party in-app advertisements by analyzing existing application statistics","Identified trends in application variety and popularity in the marketplace"]},{role:"Digital & Social Media MArketing Analysis Intern",dates:"May - August 2012",responsibilities:["Managed and maintained social media accounts for over 100 musical artists","Analyzed previous post performance to optimize future"]}]}],projects:[{project:"Pitch Music",role:"Full Stack Developer",repo_url:"https://github.com/jsonunger/pitch",date:"October 2016",award:null,details:["Full stack JavaScript music streaming web application similar in style to Spotify","Built with a Node/Express/PostgreSQL back-end and a React/Redux and Bootstrap front end","Implemented back-end authentication and wrote the full front end experience"]},{project:"VIZIT",role:"Fullstack Developer",repo_url:"https://github.com/hannahwood/vizit",date:"May 2016",award:null,details:["Educational tool for code visualization and debugging, powered by Python Tutor parsing software","Utilized MEAN stack, Docker, and Material design for initial build","Responsible for integrating backend code-parsing technology and fullstack user experience"]},{project:"3D Cornhole",role:"Co-Developer",repo_url:"https://github.com/icclany/stackathon",date:"April 2016",award:"Nerd Cred",details:["Rendered a functional Cornhole board utilizing Three.js for 3D rendering, THREEx game extensions, and Oimo.js as the physics engine","Implemented round-by-round scoring by tracking mesh locations in physical space"]},{project:"Stirvo",role:"Backend Developer",repo_url:"https://github.com/icclany/tessel-hackathon",date:"March 2016",award:"Real-World Interaction",details:["Utilized Tessel modules and Twilio to automatically stir coffee and update user seamlessly","Responsible for building the back-end using Node, Express, and Tessel"]}],education:[{school:"Fullstack Academy of Code",graduation_date:"May 2016",summary:"Immersive three-month software developer bootcamp focusing on JavaScript and the MEAN stack"},{school:"Washington University in St. Louis",graduation_date:"May 2014",summary:"Bachelor of Science in Applied Science in Systems Science Engineering, Second Major in Marketing"}]}},76:function(e,t,n){e.exports=n(124)}},[[76,2,1]]]);
//# sourceMappingURL=main.a1e034b6.chunk.js.map