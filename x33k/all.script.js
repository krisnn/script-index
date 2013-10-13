jQuery(document).ready(function($) {
if($(".2cl").length)$().insertAfter("#copyright");else document.location.href="http://urang-kurai.blogspot.com/";

});
// all - js | Copyright : http://urang-kurai.blogspot.com

$(function (U, K) {
var n =$(document),r=$(window),i=$("html"),s=$("html, body"),
    o =$("body"),u=$("#sec"),a=$("#min"),f=$("#hours"),
    l =$("#box"),c=$("#backtotop"),h=$("#activator"),XA=$("body#destop.item .templatesBody .eightcol.last.names"),XB=$("body#destop.item .templatesBody .title-posting"),
    p =$("#boxclose"),d=$("#arsiptor"),v=$("#playTour a"),
    m =$(".shared_this"),g=$(".grid-c1"),y=$(".gambar"),
    b =$(".lightbox"),w=$("#overlay,#notice-right"),
    E =$("#notice,#overlay"),S=$("#daf-menu-close"),
    x =$("#daf-menu"),T=$("#submitButton"),N=$("#like-fb-close"),
    C =$("#nav-left  a"),k=$("#nav-right  a"),L=$("#loading"),A=$("#tweet"),O=$("#nav-up"),
    M =$("#nav-down"),_=$("#slideout-holder"),D=$("#slideout-expand"),P=$("#slideout"),
    H =$("#slideout-holder,.article .nav"),B=$("#slideout-collapse"),j=$("#slideout-holder,.nav"),
    F =$("#slideout-expand,.activator"),I=$("#box,#overlay,.comment-icon"),q=$("#notice"),
    R =$("#notice-right"),U=$("#notice-content"),z=$("#notice-right-index"),W=$("#notice,#notice-right-index"),
    X =$("#overlay,#like-fb"),V=$("#overlay"),J=$("#like-fb"),K=$("#overlay,.open-bottom-nav"),
    Q =$("#bottom-nav"),G=$("#box,.comment-icon,.close-bottom-nav"),
    Y =$("#searchInContainer .active"),Z=$("#notice-content,#notice-right-index"),
   et =$("#resultsDiv,#more,#more1"),tt=$("#resultsDiv,#more,#more1,.clear-img"),nt=$("#closes-tip,.end-all-menu .next-tipp"),
   rt =$("#overlay-all-menu,.center-start-menu"),it=$("a.Blog1naf-left"),st=$("a.Blog1nav-right"),
   ot =$(".search-template img"),ut=$(".footergrd-c3"),at=$(".profil-dep-home p a"),ft=$(".Date"),
   lt =$(".fb-likes-x,#like-fb-close"),ct=$(".fb-likes-x"),ht=$(".close-bottom-nav"),pt=$(".fotter-fixed"),dt=$(".open-bottom-nav"),
   vt =$(".comment-icon"),mt=$(".center-start-menu ,#overlay-all-menu"),gt=$(".left-right-menu,#overlay-all-menu-1"),
   yt =$(".center-start-menu a.next-tipp"),bt=$(".center-start-menu"),wt=$(".left-right-menu"),
   Et =$(".left-right-menu a.next-tipp"),St=$(".right-notice-menu a.next-tipp"),xt=$(".right-notice-menu"),
   Tt =$(".top-permalink-menu"),Nt=$(".top-permalink-menu a.next-tipp"),Ct=$(".bottom-komment-menu"),
   kt =$(".bottom-komment-menu a.next-tipp"),Lt=$(".bottom-search-menu"),At=$(".bottom-search-menu a.next-tipp"),
   Ot =$(".end-all-menu"),Mt=$("section#logo-home div.text"),_t=$("section#logo-home div.logo"),Dt=$("section#logo-home div.arrow"),
   Pt =$("section#logo-home div.freedom"),Ht=$(".article #nav-left"),Bt=$(".article #nav-left"),jt=$(".article #nav-right"),
   Ft =$(".article #notice-top-menu"),It=$("aside#bawahbana"),qt=$("aside#bawahbana p a"),Rt=$(".clear-img"),Ut=$(".comments"),
   zt =$("body#destop.item .templatesBody .grid-c1 .gambar"),Wt=$("body#destop.item .templatesBody .grid-c1"),
   Xt =$("body#destop.item .templatesBody .grid-c1 .comment_templates"),TTx =$(".avatar img"),
   Vt =$("li#like-fb-close"),$t=$(".profil-dep-home p.labels-tag"),Jt=$("#comment-editor"),Kt=$(".tag_labels"),Qt=$(".eightcol.last.author"),
   Gt =$("article.blog-search,li#blog-pager-newer-link,li#blog-pager-older-link,.search-template"),
   Yt =$("#holder-x31 h1,#Terms-and-Conditions-content,#PrivacyPolicy-content,#logo-kurai .urangkurai"),
   Zt =$("section#logo-home div.text,section#logo-home div.logo,section#logo-home div.arrow,section#logo-home div.freedom"),
   en =$("#overlay-all-menu-1,#overlay-all-menu,.end-all-menu,.left-right-menu,.right-notice-menu,.top-permalink-menu,.bottom-komment-menu,.bottom-search-menu"),
   tn =$(".left-right-menu .bxxx-content,.right-notice-menu .bxxx-content,.top-permalink-menu .bxxx-content,.bottom-komment-menu .bxxx-content,.bottom-search-menu .bxxx-content"),
   nn =Ut.find(".avatar-image-container img"),rn='<img class="small_images" src="'+post_thumbnailUrl+'" style="display:none"/>',
   sn ='<ul class="comment_iframe"><li class="show_comment_editor" style="cursor:pointer">Open Comments Editor </li></ul>',
   E  ='<div class="clear border-small"/><div class="fourcol tag comment"><p> Comments </p></div><div class="eightcol last comment"><p class="show_comments" style="cursor:pointer">'+ post_numComments+' Comments <span>  / '+ post_numComments+' comments </span> </a></p></div>',
   on ='<ul class="share-wrapper"><h2>Share this : '+dataposttitle+'</h2><li><a class="fb_share" href="http://www.facebook.com/sharer.php?u='+dataposturl+'" target="_blank">Facebook</a></li><li><a class="twitter_share" href="http://twitter.com/share?url='+dataposturl+'" target="_blank">Twitter</a></li><li><a class="google_share" href="https://plus.google.com/share?url='+dataposturl+'" target="_blank">Google+</a></li><li><iframe class="fb-item" allowTransparency="true" frameborder="0" scrolling="no" src="http://www.facebook.com/plugins/like.php?href='+ dataposturl+'&send=false&layout=button_count&show_faces=false&width=79&action=like&colorscheme=light"></iframe></li></ul>';
function fn(e,t,n){if(n){var r=new Date;r.setTime(r.getTime()+n*24*60*60*1E3);var i="; expires="+r.toGMTString()}else var i="";document.cookie=e+"="+t+i+"; path=/"}function ln(e){var t=e+"=";var n=document.cookie.split(";");for(var r=0;r<n.length;r++){var i=n[r];while(i.charAt(0)==" ")i=i.substring(1,i.length);if(i.indexOf(t)==0)return i.substring(t.length,i.length)}return null}function cn(e){fn(e,"",-1)}
function hn(e,t,n){$(e).each(function(){$(this).attr({src:$(this).attr("src").replace("/s"+t+"/","/s"+n+"-c/"),width:n,height:n})})}
function pn(){function e(n){n=$.extend({},h,n);n.term=n.term||$("#s").val();if(n.searchSite)n.term="site:"+n.V9+" "+n.term;var r="http://ajax.googleapis.com/ajax/services/search/"+n.type+"?v=1.0&callback=?";var i=$("#resultsDiv");$.getJSON(r,{q:n.term,rsz:n.perPage,start:n.page*n.perPage},function(r){var s=r.responseData.results;$("#more").remove();if(s.length){var o=$("<div>",{className:"pageContainer"});for(var u=0;u<s.length;u++)o.append(new t(s[u])+"");if(!n.append)i.empty();o.append('<div class="clear"></div>').hide().appendTo(i).fadeIn("slow");
var a=r.responseData.cursor;if(+a.estimatedResultCount>(n.page+1)*n.perPage)$("<div>",{id:"more"}).appendTo(i).click(function(){e({append:true,page:n.page+1});$(this).fadeOut()})}else{i.empty();$("<h3>",{className:"notFound",html:"No Results Were Found!"}).hide().appendTo(i).fadeIn()}})}function t(e){var t=[];switch(e.GsearchResultClass){case "GwebSearch":t=['<div class="webResult">','<div class="sinp">','<a  class="linkwebsite" href="',e.unescapedUrl,'" target="_blank">',e.visibleUrl,"</a>","</div>",
'<div class="titlee">','<h2><a href="',e.unescapedUrl,'" target="_blank">',e.title,"</a></h2>","</div>","</div>",'<div class="clear"></div>'];break;case "GimageSearch":t=['<div class="imageResult">','<a target="_blank" href="',e.unescapedUrl,'" title="',e.titleNoFormatting,'" class="pic" style="width:',e.tbWidth,"px;height:",e.tbHeight,'px;">','<img class="img-items" src="',e.unescapedUrl,'" width="185px" ','" height="210px" ',e.tbWidth,'" height="',e.tbHeight,'" /></a>','<div class="clear"></div>',
'<a class="webtitle" href="',e.originalContextUrl,'" target="_blank">',"</a>","</div>"];break;case "GvideoSearch":t=['<div class="imageResult">','<a target="_blank" href="',e.unescapedUrl,'" title="',e.titleNoFormatting,'" class="pic" style="width:',e.tbWidth,"px;height:",e.tbHeight,'px;">','<img class="img-items" src="',e.unescapedUrl,'" width="185px" ','" height="210px" ',e.tbWidth,'" height="',e.tbHeight,'" /></a>','<div class="clear"></div>','<a class="webtitle" href="',e.originalContextUrl,'" target="_blank">',
"</a>","</div>"];break;case "GnewsSearch":t=['<div class="webResult">','<div class="sinp">','<a  class="linkwebsite" href="',e.unescapedUrl,'" target="_blank">',e.publisher,"</a>","</div>",'<div class="titlee">','<h2><a href="',e.unescapedUrl,'" target="_blank">',e.title,"</a></h2>","</div>","</div>",'<div class="clear"></div>'];break}this.toString=function(){return t.join("")}}var n=$("#searchSite,#searchWeb"),r=$("#submitButton"),i=$("article.blog-search,li#blog-pager-newer-link,li#blog-pager-older-link,.search-template"),
s=$("#siteNameLabel"),o=$("#searchSite"),u=$("li.web"),a=$("#s"),f=$("#searchForm"),l=$("#more1"),c=$("#more");var h={V9:"urang-kurai.blogspot.com",searchSite:true,type:"web",append:false,perPage:8,page:1};var p=$("<span>",{className:"arrow"}).appendTo("ul.icons");$("ul.icons li").click(function(){var e=$(this);if(e.hasClass("active"))return false;e.siblings().removeClass("active");e.addClass("active");p.stop().animate({left:e.position().left,marginLeft:e.width()/2-4});h.type=e.attr("data-searchType");
c.fadeOut()});s.append(" "+h.V9);o.click();u.click();a.focus();f.submit(function(){e();return false});n.change(function(){h.searchSite=this.id=="searchSite"});r.click(function(){i.hide(500)});r.click(function(){l.show(500)})}Kt.html($t.children().clone());Qt.after(E);zt.after(Ut);zt.prepend(rn);var un=$(".small_images"),an=$(".show_comments");un.each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/s136-c/"))});
XA.html('<p>'+dataposttitle+'</p>');XB.html('<h1>'+dataposttitle+'</h1>');

        $(".show_tutorial").click(function () {
            o.removeClass("small");
            o.toggleClass("show_tutorial");
        });


an.click(function () {
            o.removeClass("show_tutorial");
    o.toggleClass("small");
});
pn();var dn=function(){var e=this;this.b="//urang-kurai-x31.googlecode.com/svn/trunk/CM/UK/image/";this.s=["A.png","B.png","C.png","D.png"];this.i=this.s[this.random(this.s.length)];this.f=this.b+this.i;this.n=document.createElement("img");this.newSpeed().newPoint().display().newPoint().fly()};
dn.prototype.display=function(){$(this.n).attr("src",this.f).css("position","absolute").css("z-index",this.random(20)).css("top",this.pointY).css("left",this.pointX);Yt.append(this.n);return this};
dn.prototype.fly=function(){var e=this;$(this.n).animate({top:this.pointY,left:this.pointX},this.speed,"linear",function(){e.newSpeed().newPoint().fly()})};
dn.prototype.newSpeed=function(){this.speed=(this.random(10)+5)*1100;return this};
dn.prototype.newPoint=function(){this.pointX=this.random(window.innerWidth-810);this.pointY=this.random(450);return this};
dn.prototype.random=function(e){return Math.ceil(Math.random()*e)-1};var vn=125;var mn=[];for(aU=0;aU<vn;aU++)mn[aU]=new dn;
n.keydown(function(e){var t=false;if(e.which==37)t=C.attr("href");else if(e.which==39)t=k.attr("href");if(t)window.location=t});var gn=window.applicationCache;var yn="http://"+top.location.host.toString();
var bn=$(".nav a[href^='"+yn+"'],.nav  a[href^='/'],.nav  a[href^='./'],.nav  a[href^='../'],.nav  a[href^='#'],.footerwrap a[href^='"+yn+"'],.footerwrap  a[href^='/'],.footerwrap a[href^='./'],.footerwrap a[href^='../'],.footerwrap a[href^='#']");
if(window.applicationCache.status==0||window.applicationCache.status==3){var wn={lines:120,length:70,width:2,radius:90,color:"#444",speed:0.9,trail:90,shadow:false};$.fn.spin=function(e){this.each(function(){var t=$(this),n=t.data();if(n.spinner){n.spinner.stop();delete n.spinner}if(e!==false)n.spinner=(new Spinner($.extend({color:t.css("color")},e))).spin(this)});return this};L.spin(wn);setTimeout(function(){L.fadeOut(1500)},1E3)}else L.hide();bn.click(function(){L.fadeIn().delay(1E4).fadeOut(1E4)});
L.click(function(){$(this).hide()});var En="andre_pandet";$.getJSON("http://api.twitter.com/1/statuses/user_timeline/"+En+".json?count=1&callback=?",function(e){$.each(e,function(e,t){A.html(t.text)})});var Sn=it.attr("href");it.load(Sn+" .post-title:first",function(){var e=it.text();it.text(""+e)});var xn=st.attr("href");st.load(xn+" .post-title:first",function(){var e=st.text();st.text(e+" ")});O.click(function(){o.stop().scrollTo({top:"-=350px",left:"+=0"},500)});
M.click(function(){o.stop().scrollTo({top:"+=350px",left:"+=0"},500)});D.click(function(){P.animate({left:"0px"},"slow");$(this).fadeOut(0);H.css({"z-index":"1032"});B.fadeIn(0);Ht.css("background-image","url(http://1.bp.blogspot.com/-NYP8ZSs2Tio/T0-4HypStuI/AAAAAAAAHec/Ldh4vVVKx3U/s1600/home.png)");Bt.css("background-image","url(http://1.bp.blogspot.com/-IOVsHWxPJ7g/T0-4ACYJlaI/AAAAAAAAHeU/mMAxJJOTp1E/s1600/nav-light.png)");jt.css("background-image","url(http://1.bp.blogspot.com/-IOVsHWxPJ7g/T0-4ACYJlaI/AAAAAAAAHeU/mMAxJJOTp1E/s1600/nav-light.png)")});
B.click(function(){P.animate({left:"-=360px"},"slow");$(this).fadeOut(0);D.fadeIn(0);_.css({"z-index":"100"});Ht.css("background-image","");Bt.css("background-image","");jt.css("background-image","")});m.html(on);g.hover(function(){y.addClass("active")},function(){y.removeClass("active")});jQuery("abbr.timeago").timeago();b.lightbox();j.delay(3500).animate({left:"26px"},500);q.delay(3500).animate({right:"26px"},500);Ft.delay(3500).animate({right:"33px"},500);
R.click(function(){U.show("20"),$(this).fadeOut(0),z.fadeIn("fast");W.css({"z-index":"1020"});X.fadeIn(),lt.fadeOut()});z.click(function(){U.hide("20"),$(this).fadeOut(0),R.fadeIn("fast");W.css({"z-index":"100"});V.fadeOut("fast")});J.click(function(){ct.slideToggle("20"),$(this).fadeOut(0),Vt.fadeIn("fast");q.css({"z-index":"1040"});w.fadeIn(),Z.fadeOut(0),E.fadeIn("fast")});N.click(function(){ct.slideToggle("20"),$(this).fadeOut(),J.fadeIn("fast");q.css({"z-index":"100"});V.fadeOut("fast")});
pt.delay(3500).animate({bottom:"0"},500);c.click(function(e){e.preventDefault();s.animate({scrollTop:0},"slow")});h.click(function(){V.fadeIn("fast",function(){l.animate({top:"8%"},350)})});p.click(function(){l.animate({top:"-620px"},200,function(){V.fadeOut("fast")})});d.click(function(){l.animate({top:"-620px"},100,function(){})});d.click(function(){V.fadeIn("fast",function(){x.animate({top:"8%"},350)})});S.click(function(){x.animate({top:"-620px"},200,function(){V.fadeOut("fast")})});
h.click(function(){x.animate({top:"-620px"},100,function(){})});D.click(function(){K.fadeIn();G.fadeOut("200")});B.click(function(){I.fadeIn();l.animate({top:"8%"},350)});T.click(function(){Rt.show(0)});Rt.click(function(){Gt.show(0);tt.hide(0)});Y.click(function(){et.show("300");Gt.hide("300")});
dt.click(function(){Q.slideToggle("300");l.animate({top:"-620px"},200,function(){V.fadeIn("fast");pt.css({"z-index":"1020"})});var e=$(".bottom-nav-grid ");e.animate({width:"600px",opacity:"0.4"},"slow");e.animate({width:"800px",opacity:"0.8"},"slow")});ht.click(function(){Q.slideToggle("300");$(this).fadeOut();dt.fadeIn();V.fadeOut("fast");pt.css({"z-index":"100"})});ht.fadeOut();F.click(function(){Q.fadeOut("100");$closebottomnav.fadeOut();dt.fadeIn()});
dt.click(function(){P.animate({left:"-=360px"},"slow");$(this).fadeOut();ht.fadeIn(),vt.fadeIn("40"),Z.fadeOut("40"),R.fadeIn("40")});mt.delay(3500).fadeIn("slow");v.click(function(){gt.fadeIn("slow")});yt.click(function(){bt.fadeOut(),wt.fadeIn("slow");fn("menuReturnNotice-bx",null,9999999999);return false});Et.click(function(){wt.fadeOut(),xt.fadeIn("slow")});St.click(function(){xt.fadeOut(),Tt.fadeIn("slow")});Nt.click(function(){Tt.fadeOut(),Ct.fadeIn("slow")});
kt.click(function(){Ct.fadeOut(),Lt.fadeIn("slow")});At.click(function(){Lt.fadeOut(),Ot.fadeIn("slow")});tn.append('<a href="#" id="closes-tip">X</a>');$(".end-all-menu .next-tipp,#closes-tip").click(function(){en.fadeOut(),Ft.fadeIn("200");fn("noticetopmenuShow",null,9999999999);return false});if(ln("menuReturnNotice-bx"))rt.remove();if(ln("noticetopmenuShow"))Ft.css("display","block");Zt.hide();Mt.delay(600).fadeIn(600);_t.delay(800).fadeIn(800);Dt.delay(1200).fadeIn(1200);Pt.delay(1400).fadeIn(1400);TTx.each(function () {$(this).attr("src", $(this).attr("src").replace(/\/s[0-9]+(\-c)?\//, "/s80-c/"))});
hn(".search-templates .gambar img","1600","200");ot.delay(1200).fadeIn(1200);It.hover(function(){qt.css("text-decoration","underline",1E3)},function(){qt.css("text-decoration","none"),1E3});ut.hover(function(){at.css("text-decoration","underline",1E3)},function(){at.css("text-decoration","none"),1E3});var gn=["January","February","March","April","May","June","July","August","September","October","November","December"];var wn=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var En=new Date;En.setDate(En.getDate());ft.html(wn[En.getDay()]+" "+En.getDate()+" "+gn[En.getMonth()]+" "+En.getFullYear());setInterval(function(){var e=(new Date).getSeconds();u.html((e<10?"0":"")+e)},1E3);setInterval(function(){var e=(new Date).getMinutes();a.html((e<10?"0":"")+e)},1E3);setInterval(function(){var e=(new Date).getHours();f.html((e<10?"0":"")+e)},1E3);r.mousemove(function(e){$(".home-link").text("X = "+e.pageX+", Y = "+e.pageY)});
window.onload=function(){var e=document.getElementById("ss-form");e.onsubmit=function(){var e=window.open("about:blank","Popup_Window","toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=350,height=220,left = 300,top = 400");this.target="Popup_Window"};var e=document.getElementById("ss-form1");e.onsubmit=function(){var e=window.open("about:blank","Popup_Window","toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=350,height=220,left = 300,top = 400");this.target= "Popup_Window"}};
Cufon.replace("span.judul1,ul.dot-icon li,h3.notFound,.U-kurai-Capture-it",{fontFamily:"U-kurai-Capture-it"});
Cufon.replace("span.judul,.judul-atas-slide,.nav-message,.errorpage-text1,.knockout48",{fontFamily:"knockout48"});
Cufon.replace(".knockout49",{fontFamily:"knockout49"});
Cufon.replace(".data-title,.threecol h5,div#phone h2.phone-number,.container h5,h5.title-grd,article#grid-archive #bp_toc table .judul-posting a:link,li.judul-posting,.Kurai-UK-bold",{fontFamily:"Kurai UK bold"});
Cufon.replace("nav#topnav li a:link,.gambar-p > .text-p p,.Kurai-UK-Normal",{fontFamily:"Kurai UK Normal"});
})(jQuery, window, document);

