(this.webpackJsonponefuture=this.webpackJsonponefuture||[]).push([[0],{123:function(e,t,a){e.exports=a(410)},127:function(e,t,a){},128:function(e,t,a){},410:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(15),c=a.n(i),r=(a(127),a(115)),o=a(116),l=a(122),m=a(121),u=(a(128),a(129),a(17)),h=a(18),d=(a(134),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentWillMount",value:function(){this.state={partner:"Pursuit Volley",curPage:"home",pageTitle:"Home",showSidebarWords:"hidden"},this.getCurrentPage=this.getCurrentPage.bind(this),this.showFullSidebar=this.showFullSidebar.bind(this),this.shrinkSidebar=this.shrinkSidebar.bind(this)}},{key:"switchWindows",value:function(e){switch(e){case"home":this.setState({curPage:"home"});break;case"profile":this.setState({curPage:"profile"});break;case"library":this.setState({curPage:"library"});break;case"videos":this.setState({curPage:"videos"});break;case"messages":this.setState({curPage:"messages"});break;case"podcasts":this.setState({curPage:"podcasts"});break;case"settings":this.setState({curPage:"settings"});break;case"about":this.setState({curPage:"about"})}}},{key:"getCurrentPage",value:function(){switch(this.state.curPage){case"home":return n.a.createElement("h2",null,"home content");case"profile":return n.a.createElement("h2",null,"profile content");case"library":return n.a.createElement("h2",null,"library content");case"videos":return n.a.createElement("h2",null,"videos content");case"messages":return n.a.createElement("h2",null,"messages content");case"podcasts":return n.a.createElement("h2",null,"podcasts content");case"settings":return n.a.createElement("h2",null,"settings content");case"podcasts":return n.a.createElement("h2",null,"about content")}}},{key:"showFullSidebar",value:function(){var e=this;setTimeout((function(){e.setState({showSidebarWords:""})}),200)}},{key:"shrinkSidebar",value:function(){this.setState({showSidebarWords:"hidden"})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"app"},n.a.createElement("div",{className:"row content"},n.a.createElement("div",{className:"sidebar",onMouseEnter:this.showFullSidebar,onMouseLeave:this.shrinkSidebar},n.a.createElement("div",{onClick:function(){return e.switchWindows("home")},className:"custom-nav-item"}," ",n.a.createElement("img",{id:"sidebar-logo",src:"https://placehold.it/500x500"}),n.a.createElement("span",{className:this.state.showSidebarWords})," "),n.a.createElement("div",{className:"nav-separator"}),n.a.createElement("div",{onClick:function(){return e.switchWindows("profile")},className:("profile"==this.state.curPage?"active-nav ":"")+"custom-nav-item"},n.a.createElement(u.a,{className:"sidebar-icon",icon:h.g}),n.a.createElement("span",{className:this.state.showSidebarWords}," Josh Mullaney")),n.a.createElement("div",{onClick:function(){return e.switchWindows("home")},className:("home"==this.state.curPage?"active-nav ":"")+"custom-nav-item"},n.a.createElement(u.a,{className:"sidebar-icon",icon:h.d}),n.a.createElement("span",{className:this.state.showSidebarWords}," Home")),n.a.createElement("div",{onClick:function(){return e.switchWindows("library")},className:("library"==this.state.curPage?"active-nav ":"")+"custom-nav-item"},n.a.createElement(u.a,{className:"sidebar-icon",icon:h.a}),n.a.createElement("span",{className:this.state.showSidebarWords}," Library")),n.a.createElement("div",{onClick:function(){return e.switchWindows("videos")},className:("videos"==this.state.curPage?"active-nav ":"")+"custom-nav-item"},n.a.createElement(u.a,{className:"sidebar-icon",icon:h.h}),n.a.createElement("span",{className:this.state.showSidebarWords}," Your Videos")),n.a.createElement("div",{onClick:function(){return e.switchWindows("messages")},className:("messages"==this.state.curPage?"active-nav ":"")+"custom-nav-item"},n.a.createElement(u.a,{className:"sidebar-icon",icon:h.c}),n.a.createElement("span",{className:this.state.showSidebarWords}," Messages")),n.a.createElement("div",{onClick:function(){return e.switchWindows("podcasts")},className:("podcasts"==this.state.curPage?"active-nav ":"")+"custom-nav-item"},n.a.createElement(u.a,{className:"sidebar-icon",icon:h.e}),n.a.createElement("span",{className:this.state.showSidebarWords}," Podcasts")),n.a.createElement("div",{className:"nav-separator"}),n.a.createElement("div",{onClick:function(){return e.switchWindows("settings")},className:("settings"==this.state.curPage?"active-nav ":"")+"custom-nav-item"},n.a.createElement(u.a,{className:"sidebar-icon",icon:h.b}),n.a.createElement("span",{className:this.state.showSidebarWords}," Settings")),n.a.createElement("div",{onClick:function(){return e.switchWindows("about")},className:("about"==this.state.curPage?"active-nav ":"")+"custom-nav-item"},n.a.createElement(u.a,{className:"sidebar-icon",icon:h.f}),n.a.createElement("span",{className:this.state.showSidebarWords}," About Us"))),n.a.createElement("div",{className:"title-wrapper"},n.a.createElement("h2",{className:"current-title"},"OneFuture | Powered by PursuitVolley")),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"page-content"},this.getCurrentPage()))))}}]),a}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[123,1,2]]]);
//# sourceMappingURL=main.af2de296.chunk.js.map