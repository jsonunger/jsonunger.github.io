(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);n(67),n(102);var a=n(0),r=n.n(a),o=n(64),i=n.n(o),s=(n(108),n(1)),l=n(2),c=n(4),u=n(3),p=n(5),h=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("footer",null,r.a.createElement("p",null,"Made using ",r.a.createElement("a",{href:"https://facebook.github.io/create-react-app"},"Create React App"),". The repo is available on ",r.a.createElement("a",{href:"https://github.com/jsonunger/jsonunger.github.io"},"GitHub"),".")))}}]),t}(a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.toggle,n=e.property;return r.a.createElement("span",{onClick:t,className:"".concat(t?"clickable ":"","property")},n)}}]),t}(a.Component),m=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).checkIfUrl=function(e){return/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})$/i.test(e)},n.checkIfEmail=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(e)},n.getValue=function(e){if("string"===typeof e){if(n.checkIfUrl(e))return r.a.createElement("a",{href:e,target:"_blank"},e);if(n.checkIfEmail(e))return r.a.createElement("a",{href:"mailto:".concat(e),target:"_blank"},e)}return e},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.property,a=e.comma,o=this.getValue(t);return r.a.createElement("div",null,n?r.a.createElement(g,{property:n}):null,n?":":null," ",r.a.createElement("span",{className:typeof t},'"',o,'"'),a?",":null)}}]),t}(a.Component),d=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.toggle,n=e.show;return r.a.createElement("div",{className:"toggle clickable",onClick:t},r.a.createElement("strong",null,n?"+":"-"))}}]),t}(a.Component),y=function(e){var t=e.names,n=e.toggle;return r.a.createElement("em",{className:"clickable",onClick:n},t.length?t.join(", "):"...")},f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={show:!1},n.toggle=function(){n.setState(function(e){return{show:!e.show}})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,n=e.value,a=e.property,o=e.comma,i=[],s=[];return n.forEach(function(e,n,a){var o,l={value:e};if(Array.isArray(e))o=r.a.createElement(t,Object.assign({},l,{comma:n!==a.length-1}));else if("object"===typeof e){var c=e[Object.keys(e)[0]];s.push(c),o=r.a.createElement(b,Object.assign({},l,{comma:n!==a.length-1,title:c}))}else o=r.a.createElement(m,Object.assign({},l,{comma:n!==a.length-1}));i.push(r.a.createElement("li",{key:n},o))}),r.a.createElement("div",null,a?r.a.createElement(g,{toggle:this.toggle,property:a}):null,a?":":null,r.a.createElement(d,{show:!this.state.show,toggle:this.toggle})," ","["," ",this.state.show?r.a.createElement("ul",{className:"array collapsible"},i):r.a.createElement(y,{names:s,toggle:this.toggle})," ","]",o?",":null)}}]),t}(a.Component),b=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={show:!1},n.toggle=function(){n.setState(function(e){return{show:!e.show}})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.open,n=e.property;(t||"about"===n)&&this.setState({show:!0})}},{key:"render",value:function(){var e=[];this.props.value.default&&delete this.props.value.default;var n=this.props,a=n.value,o=n.property,i=n.title,s=n.comma;return Object.keys(a).forEach(function(n,o,i){var s,l=a[n];if(Array.isArray(l))s=r.a.createElement(f,{value:l,property:n,comma:o!==i.length-1});else if("object"===typeof l){var c=l[Object.keys(l)[0]];s=r.a.createElement(t,{value:l,property:n,comma:o!==i.length-1,title:c})}else s=r.a.createElement(m,{value:l,property:n,comma:o!==i.length-1});e.push(r.a.createElement("li",{key:o},s))}),r.a.createElement("div",null,o?r.a.createElement(g,{toggle:this.toggle,property:o}):null,o?":":null,r.a.createElement(d,{show:!this.state.show,toggle:this.toggle})," ","{"," ",this.state.show?r.a.createElement("ul",{className:"obj collapsible"},e):r.a.createElement("em",{className:"clickable",onClick:this.toggle},i)," ","}",s?",":null)}}]),t}(a.Component),w=n(65),k=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"margins"},r.a.createElement(b,{value:w,open:!0})),r.a.createElement(h,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e){e.exports={about:{name:"Jason Unger",email:"jason@jsonunger.com",phone:"(914) 584-5745",location:"New York, NY",github:"https://github.com/jsonunger",linkedin:"http://linkedin.com/in/jasonunger"},skills:[{level:"proficient",tools:["JavaScript","Node","Express","Angular","Shell Scripting","React","MongoDB","Mongoose","PostgreSQL","Sequelize","Git","HTML"]},{level:"working_knowledge",tools:["OAuth","Docker","DigitalOcean","Webpack","jQuery","CSS/SCSS","Data Structures","Twitter Bootstrap","Material Design","Test-Driven Development","Heroku","Cryptography","3rd-Party APIs"]},{level:"some_experience",tools:["Web Sockets","Angular 2","ThreeJS","OimoJS"]}],projects:[{project:"VIZIT",role:"Fullstack Developer",repo_url:"https://github.com/hannahwood/vizit",deployed_url:"http://vizit.tech",date:"May 2016",details:["Educational tool for code visualization and debugging, powered by Python Tutor parsing software","Utilized MEAN stack, Docker, and Material design for initial build","Responsible for integrating backend code-parsing technology and fullstack user experience"]},{project:"3D Cornhole",role:"Co-Developer",repo_url:"https://github.com/icclany/stackathon",date:"Apr 2016",award:"Nerd Cred",details:["Rendered a functional Cornhole board utilizing Three.js for 3D rendering, THREEx game extensions, and Oimo.js as the physics engine","Implemented round-by-round scoring by tracking mesh locations in physical space"]},{project:"Stirvo",role:"Backend Developer",repo_url:"https://github.com/icclany/tessel-hackathon",date:"Mar 2016",award:"Real-World Interaction",details:["Utilized Tessel modules and Twilio to automatically stir coffee and update user seamlessly","Responsible for building the back-end using Node, Express, and Tessel"]}],professional_experience:[{company:"Rocketrip",company_url:"https://www.rocketrip.com/",roles:[{role:"Front End Engineer",dates:"Feb 2018 - Present"},{role:"Junior Front End Engineer",dates:"Nov 2016 - Feb 2018"}]},{company:"Fullstack Academy of Code",company_url:"https://www.fullstackacademy.com/",roles:[{role:"Teaching Fellow",dates:"Jun - Sep 2016",responsibilities:["Mentor a group of 6 students by conducting code reviews, holding weekly group and one-on-one meetings, and pair programming","Develop and lead full reviews of key curriculum prior to major milestone checkpoints","Complete approximately 20 help tickets per week to get students through code blocks","Maintain and improve functionality of the school\u2019s learning management system","Conduct 2-3 admissions interviews per week for prospective Fullstack Academy students"]}]},{company:"Interlude Ltd.",company_url:"https://interlude.fm/",roles:[{role:"Marketing & Insights Associate",dates:"Jan 2015 - Jan 2016",responsibilities:["Established new full-time position","Implemented project analytics for future creative decisions","Responsible for management-level post-mortem analyses of biggest projects","Coordinated hiring processes of undergraduate interns"]},{role:"Undergraduate Business Intern",dates:"Oct 2014 - Jan 2015",responsibilities:["Produced content for various company social media platforms","Provided background research and competitive analysis for weekly business meetings"]}]},{company:"Sony Music Entertainment",company_url:"https://sonymusic.com/",roles:[{role:"Digital Product Development Intern",dates:"May - Aug 2012",responsibilities:["Determined audience target segments for third-party in-app advertisements by analyzing existing application statistics","Identified trends in application variety and popularity in the marketplace"]},{role:"Digital & Social Media MArketing Analysis Intern",dates:"May - Aug 2012",responsibilities:["Managed and maintained social media accounts for over 100 musical artists","Analyzed previous post performance to optimize future"]}]}],education:[{school:"Fullstack Academy of Code",graduation_date:"May 2016",summary:"Immersive three-month software developer bootcamp focusing on JavaScript and the MEAN stack"},{school:"Washington University in St. Louis",graduation_date:"May 2014",summary:"Bachelor of Science in Applied Science in Systems Science Engineering, Second Major in Marketing"}]}},66:function(e,t,n){e.exports=n(110)}},[[66,2,1]]]);
//# sourceMappingURL=main.d2b53856.chunk.js.map