(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{103:function(e,a,t){},153:function(e,a,t){},154:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),o=t.n(l),c=(t(102),t(103),t(27)),s=t(28),m=t(30),i=t(29),u=t(155),d=t(156),E=t(157),f=t(8),h=t(158),p=t(159),g=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-dark"}))},b="http://localhost:3001/",N=t(19);function v(e){return r.a.createElement(N.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement("div",{className:"card",key:e.dish.id},r.a.createElement(f.b,{to:"/menu/".concat(e.dish.id)},r.a.createElement(u.a,{width:"100%",src:b+e.dish.image,alt:e.dish.name}),r.a.createElement(d.a,null,r.a.createElement(E.a,null,e.dish.name)))))}var O=function(e){var a=e.dishes.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},r.a.createElement(v,{dish:e}))}));return e.isLoading?r.a.createElement(g,null):e.err?r.a.createElement("div",null,r.a.createElement("h4",null,e.err)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null," You are Here ")),r.a.createElement("div",{className:"col-12"},r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(f.b,{to:"/home"},"Home")),r.a.createElement(p.a,null,"Menu")))),r.a.createElement("div",{className:"row"},a))},y=t(95),w=t(160),k=t(183),L=t(161),j=t(162),D=t(163),x=t(164),S=t(165),M=t(166),C=t(167),T=t(10);function R(e){var a=Object(n.useState)(!1),t=Object(y.a)(a,2),l=t[0],o=t[1],c=function(){return o(!l)},s=e.cmt.map((function(e){return r.a.createElement(N.Fade,{in:!0},r.a.createElement("div",{key:e.id,className:"m-4"},r.a.createElement("div",null,e.comment),r.a.createElement("div",null,r.a.createElement("cite",null,"--",e.author," ,",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))))))}));return r.a.createElement("div",null,r.a.createElement(N.Stagger,{in:!0},s),r.a.createElement(w.a,{className:"btn-primary-outline m-2",onClick:c},r.a.createElement("i",{className:"fa fa-pencil"})," ","Submit Comment"),r.a.createElement(k.a,{isOpen:l,toggle:c},r.a.createElement(L.a,{toggle:c}," ",r.a.createElement("strong",null," Submit Comment ")),r.a.createElement(j.a,null,r.a.createElement(T.LocalForm,{model:"value",onSubmit:function(a){return t=a,c(),console.log(t),void e.postcomment(e.dish.id,t.rating,t.name,t.comment);var t},addcomment:e.addcomment,dish:e.dish},r.a.createElement(D.a,{className:"form-check",htmlFor:"rating"},"Rating"),r.a.createElement(T.Control.select,{model:".rating",name:"rating",id:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")),r.a.createElement(D.a,{className:"form-check",htmlFor:"name"},"Name"),r.a.createElement(T.Control.text,{className:"form-control",placeholder:"Your Name...",name:"name",model:".name",id:"name",validators:{max:function(e){return!(e&&e.length>15)},min:function(e){return!(e&&e.length<2)}},validateOn:"blur"}),r.a.createElement(T.Errors,{model:".name",show:"touched",className:"text-danger",messages:{max:"Name should be less than 16 characters",min:"Name should be more than two characters "}}),r.a.createElement(D.a,{className:"form-check",htmlFor:"comment"},"Comment"),r.a.createElement(T.Control.textarea,{className:"form-control",model:".comment",for:"comment",id:"comment",rows:"5"}),r.a.createElement(w.a,{className:"btn-info mt-3",type:"submit"},"Submit"))),r.a.createElement(x.a,null,r.a.createElement(w.a,{className:"btn-primary",onClick:c},"Close"))))}function F(e){return r.a.createElement(N.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(S.a,null,r.a.createElement(u.a,{top:!0,src:b+e.dish.image,alt:e.dish.name}),r.a.createElement(M.a,null,r.a.createElement(E.a,null,e.dish.name),r.a.createElement(C.a,null,e.dish.description))))}var A=function(e){return e.isLoading?r.a.createElement(g,null):e.errMess?r.a.createElement("div",null,r.a.createElement("h4",null,e.errMess)):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null," You are Here ")),r.a.createElement("div",{className:"col-12"},r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(f.b,{to:"/home"},"Home")),r.a.createElement(p.a,null,r.a.createElement(f.b,{to:"/menu"},"Menu")),r.a.createElement(p.a,null,e.dish.name)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement(F,{dish:e.dish})),r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement(R,{cmt:e.comments,dish:e.dish,postcomment:e.postcomment}))))},I=t(39),_=t(168),H=t(169),P=t(170),q=t(171),Y=t(172),W=t(173),G=t(174),U=t(175),B=t(176),K=t(177),z=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(I.a)(n)),n.toggleModal=n.toggleModal.bind(Object(I.a)(n)),n.handleLogin=n.handleLogin.bind(Object(I.a)(n)),n}return Object(s.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{dark:!0,expand:"md",className:"fixed-top"},r.a.createElement("div",{className:"container"},r.a.createElement(H.a,{onClick:this.toggleNav}),r.a.createElement(P.a,{className:"ml-auto",href:"/"},"Ristorante Con Fusion"),r.a.createElement(q.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(Y.a,{navbar:!0},r.a.createElement(W.a,null,r.a.createElement(f.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg mr-1"}),"Home")),r.a.createElement(W.a,null,r.a.createElement(f.c,{className:"nav-link",to:"/about"},r.a.createElement("span",{className:"fa fa-info fa-lg mr-1"}),"About Us")),r.a.createElement(W.a,null,r.a.createElement(f.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg mr-1"}),"Menu")),r.a.createElement(W.a,null,r.a.createElement(f.c,{className:"nav-link",to:"/contact"},r.a.createElement("span",{className:"fa fa-addres-card fa-lg mr-1"}),"Contact Us"))),r.a.createElement(Y.a,{className:"ml-auto",navbar:!0},r.a.createElement(W.a,null,r.a.createElement(w.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante ConFusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(k.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(L.a,{toggle:this.toggleModal},"Login"),r.a.createElement(j.a,null,r.a.createElement(U.a,{onSubmit:this.handleLogin},r.a.createElement(B.a,null,r.a.createElement(D.a,{htmlFor:"username"},"Username"),r.a.createElement(K.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(B.a,null,r.a.createElement(D.a,{htmlFor:"password"},"Password"),r.a.createElement(K.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(B.a,{check:!0},r.a.createElement(D.a,{check:!0},r.a.createElement(K.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember me")),r.a.createElement(w.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(n.Component);var J=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(f.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/about"},"About Us")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/contact"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},$=t(11),Z=t(178);function Q(e){return console.log("these are the props"),console.log(e),e.isLoading?r.a.createElement(g,null):e.err?r.a.createElement("div",null,r.a.createElement("h4",null,e.err)):r.a.createElement(N.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(S.a,null,r.a.createElement(u.a,{src:b+e.item.image,alt:e.item.name}),r.a.createElement(M.a,null,r.a.createElement(E.a,null,e.item.name),e.item.designation?r.a.createElement(Z.a,null,e.item.designation):null,r.a.createElement(C.a,null,e.item.description))))}var V=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(Q,{item:e.dish,isLoading:e.dishesLoading,err:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(Q,{item:e.promotion,isLoading:e.promosLoading,err:e.promosErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(Q,{item:e.leader,isLoading:e.leadersloading,err:e.leaderErrMess}))))},X=t(179),ee=t(180),ae=function(e){return e&&e.length},te=function(e){return function(a){return a&&a.length<=e}},ne=function(e){return function(a){return a&&a.length>=e}},re=function(e){return e&&/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},le=function(e){return/^\d+$/.test(e)},oe=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null," You are Here ")),r.a.createElement("div",{className:"col-12"},r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(f.b,{to:"/home"},"Home")),r.a.createElement(p.a,null,"Contact Us")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send US Your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(T.Form,{model:"user",onSubmit:function(a){e.props.postfeedback(a.feedback,a.firstname+" "+a.lastname,a.email,a.ContactType,a.TelNo,a.agree),e.props.handlereset()}},r.a.createElement(X.a,{className:"form-group"},r.a.createElement(D.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(ee.a,{md:10},r.a.createElement(T.Control.text,{model:"user.firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:ae,maxlength:te(15),minlength:ne(2)}})),r.a.createElement(T.Errors,{model:"user.firstname",show:"touched",className:"text-danger col-md-10 offset-md-2",messages:{required:" this is a required field",maxlength:" max length should be 12",minlength:" min length should be 2"}})),r.a.createElement(X.a,{className:"form-group"},r.a.createElement(D.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(ee.a,{md:10},r.a.createElement(T.Control.text,{model:"user.lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:ae,maxlength:te(15),minlength:ne(2)}})),r.a.createElement(T.Errors,{model:"user.lastname",show:"touched",className:"text-danger col-md-10 offset-md-2",messages:{required:" this is a required field",maxlength:" max length should be 12",minlength:" min length should be 2"}})),r.a.createElement(X.a,{className:"form-group"},r.a.createElement(D.a,{htmlFor:"tel",md:2},"Tel No."),r.a.createElement(ee.a,{md:10},r.a.createElement(T.Control.text,{model:"user.TelNo",id:"tel",name:"tel",placeholder:"Telephone Number",className:" form-control",validators:{required:ae,maxlength:te(15),minlength:ne(2),isNum:le}})),r.a.createElement(T.Errors,{model:"user.TelNo",show:"touched",className:"text-danger col-md-10 offset-md-2",messages:{required:" this is a required field",maxlength:" max length should be 12",minlength:" min length should be 2",isNum:" telephone number should contain only number"}})),r.a.createElement(X.a,{className:"form-group"},r.a.createElement(D.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(ee.a,{md:10},r.a.createElement(T.Control.text,{model:"user.email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:ae,isEmail:re}})),r.a.createElement(T.Errors,{model:"user.email",show:"touched",className:"text-danger col-md-10 offset-md-2",messages:{required:" this is a required field",isEmail:" invalid email"}})),r.a.createElement(X.a,{className:"form-group"},r.a.createElement(ee.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(D.a,{check:!0},r.a.createElement(T.Control.checkbox,{model:"user.agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(ee.a,{md:{size:3,offset:1}},r.a.createElement(T.Control.select,{model:"user.ContactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel"),r.a.createElement("option",null,"Email")))),r.a.createElement(X.a,{className:"form-group"},r.a.createElement(D.a,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(ee.a,{md:10},r.a.createElement(T.Control.textarea,{model:"user.feedback",id:"message",name:"message",placeholder:"Your Feedback",rows:"6",className:"form-control",required:!0}))),r.a.createElement(X.a,{className:"form-group"},r.a.createElement(ee.a,{md:{size:10,offset:2}},r.a.createElement(w.a,{type:"submit",disabled:!1},"  Submit Feedback")))))))}}]),t}(n.Component),ce=t(181),se=t(182);function me(e){var a=e.leaders.map((function(e){return r.a.createElement(N.Fade,{in:!0},r.a.createElement(ce.a,null,r.a.createElement(ce.a,{left:!0,className:"mr-4"},r.a.createElement(ce.a,{className:"img-thumbnail",object:!0,src:b+e.image,alt:e.name})),r.a.createElement(ce.a,{body:!0},r.a.createElement(ce.a,{heading:!0},r.a.createElement("p",null,"Leader ",e.name)),r.a.createElement("h6",null,e.designation),r.a.createElement("p",null,e.description))))}));return e.isLoading?r.a.createElement(g,null):r.a.createElement(N.Stagger,{in:!0},r.a.createElement(ce.a,{list:!0},a))}var ie=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,"You are Here")),r.a.createElement("div",{className:"col-12"},r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(f.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"About Us"))),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(S.a,null,r.a.createElement(se.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(M.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(S.a,null,r.a.createElement(M.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(me,{leaders:e.leaders,isLoading:e.leadersLoading}))))},ue=t(23),de=t(34),Ee=t.n(de),fe=function(){return{type:"DISH_LOADING"}},he=function(e){return{type:"ADD_DISH",payload:e}},pe=function(e){return{type:"DISH_FAILED",payload:e}},ge=function(){return{type:"PROMOS_LOADING"}},be=function(e){return{type:"ADD_PROMOS",payload:e}},Ne=function(e){return{type:"PROMOS_FAILED",payload:e}},ve=function(e){return{type:"ADD_COMMENTS",payload:e}},Oe=function(e){return{type:"COMMENTS_FAILED",payload:e}},ye=t(57),we=t(89),ke=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPromos(),this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchleaders()}},{key:"render",value:function(){var e=this;console.log(this.props);return r.a.createElement("div",{className:"App"},r.a.createElement(z,null),r.a.createElement("div",{className:"container"},r.a.createElement(ye.a,null,r.a.createElement(we.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement($.d,null,r.a.createElement($.b,{path:"/home",component:function(){return r.a.createElement(V,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.err,promotion:e.props.promotions.promos.filter((function(e){return e.featured}))[0],leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.err,leadersloading:e.props.leaders.isLoading,leaderErrMess:e.props.leaders.err})}}),r.a.createElement($.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(O,{dishes:e.props.dishes.dishes,isLoading:e.props.dishes.isLoading,err:e.props.dishes.err})}}),r.a.createElement($.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(A,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.err,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),postcomment:e.props.postcomment})}}),r.a.createElement($.b,{path:"/contact",component:function(){return r.a.createElement(oe,{handlereset:e.props.handlereset,postfeedback:e.props.postfeedback})}}),r.a.createElement($.b,{path:"/about",component:function(){return r.a.createElement(ie,{leaders:e.props.leaders.leaders,leadersLoading:e.props.leaders.isLoading})}}),r.a.createElement($.a,{to:"/home"}))))),r.a.createElement(J,null))}}]),t}(n.Component),Le=Object($.g)(Object(ue.connect)((function(e){return{leaders:e.leaders,promotions:e.promotions,dishes:e.dishes,comments:e.comments}}),(function(e){return{postcomment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),Ee()(b+"comments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l),credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("ERROR : "+e.statusText+e.statusText);throw a.response=e,console.log(a),a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("post comments "+e.message),alert("your comment was not posted: Error "+e.message)}))}}(a,t,n,r))},fetchDishes:function(){e((function(e){return e(fe(!0)),Ee()(b+"dishes").then((function(e){if(e.ok)return e;var a=new Error("ERROR : "+e.statusText+e.statusText);throw a.response=e,console.log(a),a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(he(a))})).catch((function(a){return e(pe(a.message))}))}))},handlereset:function(){e(T.actions.reset("user"))},fetchComments:function(){e((function(e){return Ee()(b+"comments").then((function(e){if(e.ok)return e;var a=new Error("ERROR : "+e.statusText+e.statusText);throw a.response=e,console.log(a),a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ve(a))})).catch((function(a){return e(Oe(a))}))}))},fetchPromos:function(){e((function(e){return e(ge(!0)),Ee()(b+"promotions").then((function(e){if(e.ok)return e;var a=new Error("ERROR : "+e.statusText+e.statusText);throw a.response=e,console.log(a),a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(be(a))})).catch((function(a){return e(Ne(a.message))}))}))},fetchleaders:function(){e((function(e){return e({type:"LEADERS_LOADING"}),Ee()(b+"leaders").then((function(e){if(e.ok)return e;var a=new Error("ERROR :"+e.status+e.statusText);throw a.response=e,a}),(function(e){throw console.log("ERROR : "+e.message),new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e({type:"ADD_LEADERS",payload:a})})).catch((function(a){return e(function(e){return{type:"LEADERS_FAILED",payload:e}}(a))}))}))},postfeedback:function(a,t,n,r,l,o){return e(function(e,a,t,n,r,l){return function(o){Ee()(b+"feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,feedack:e,agree:l,conType:n,email:t,Telephone:r}),credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("ERROR : "+e.status+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){alert("Your feedback is successfully submitted with the following credentials :"+JSON.stringify(e))})).catch((function(e){alert("Sorry, Your feedback was not submitted due to the following error : \n"+e.message)}))}}(a,t,n,r,l,o))}}}))(ke)),je=t(7),De=t(20),xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,err:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISH":return Object(je.a)(Object(je.a)({},e),{},{isLoading:!1,err:null,dishes:a.payload});case"DISH_LOADING":return Object(je.a)(Object(je.a)({},e),{},{isLoading:!0,err:null,dishes:[]});case"DISH_FAILED":return Object(je.a)(Object(je.a)({},e),{},{isLoading:!1,err:a.payload,dishes:[]});default:return e}},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,err:null,promos:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(je.a)(Object(je.a)({},e),{},{isLoading:!1,err:null,promos:a.payload});case"PROMOS_FAILED":return Object(je.a)(Object(je.a)({},e),{},{isLoading:!1,err:a.payload,promos:[]});case"PROMOS_LOADING":return Object(je.a)(Object(je.a)({},e),{},{isLoading:!0,err:null,promos:[]});default:return e}},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,err:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(je.a)(Object(je.a)({},e),{},{isLoading:!1,err:null,comments:a.payload});case"COMMENTS_FAILED":return Object(je.a)(Object(je.a)({},e),{},{isLoading:!1,err:a.payload});case"ADD_COMMENT":var t=a.payload;return console.log(e),Object(je.a)(Object(je.a)({},e),{},{isLoading:!1,comments:e.comments.concat(t),err:null});default:return e}},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,err:null,leaders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_LEADERS":return Object(je.a)(Object(je.a)({},e),{},{isLoading:!1,err:null,leaders:a.payload});case"LEADERS_FAILED":return Object(je.a)(Object(je.a)({},e),{},{isLoading:!1,err:a.payload,leaders:[]});case"LEADERS_LOADING":return Object(je.a)(Object(je.a)({},e),{},{isLoading:!0,err:null,leaders:[]});default:return e}},Te=t(92),Re=t(93),Fe=t.n(Re),Ae={firstname:"",lastname:"",TelNo:"",email:"",agree:!1,ContactType:"Tel",feedback:""},Ie=t(94),_e=Object(De.createStore)(Object(De.combineReducers)(Object(je.a)({dishes:xe,promotions:Se,comments:Me,leaders:Ce},Object(T.createForms)({user:Ae}))),Object(Ie.composeWithDevTools)(Object(De.applyMiddleware)(Te.a,Fe.a))),He=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(ue.Provider,{store:_e},r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(Le,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(151),t(152),t(153);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(He,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,a,t){e.exports=t(154)}},[[97,1,2]]]);
//# sourceMappingURL=main.815c71cc.chunk.js.map