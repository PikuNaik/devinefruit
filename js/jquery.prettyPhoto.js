(function(a){a.prettyPhoto={version:"3.0"};a.fn.prettyPhoto=function(d){d=jQuery.extend({animation_speed:"fast",slideshow:false,autoplay_slideshow:false,opacity:0.8,show_title:true,allow_resize:true,default_width:500,default_height:344,counter_separator_label:"/",theme:"facebook",hideflash:false,wmode:"opaque",autoplay:true,modal:false,overlay_gallery:true,keyboard_shortcuts:true,changepicturecallback:function(){},callback:function(){},markup:'<div class="pp_pic_holder">       <div class="ppt"> </div>       <div class="pp_top">        <div class="pp_left"></div>        <div class="pp_middle"></div>        <div class="pp_right"></div>       </div>       <div class="pp_content_container">        <div class="pp_left">        <div class="pp_right">         <div class="pp_content">          <div class="pp_loaderIcon"></div>          <div class="pp_fade">           <a href="#" class="pp_expand" title="Expand the image">Expand</a>           <div class="pp_hoverContainer">            <a class="pp_next" href="#">next</a>            <a class="pp_previous" href="#">previous</a>           </div>           <div id="pp_full_res"></div>           <div class="pp_details clearfix">            <p class="pp_description"></p>            <a class="pp_close" href="#">Close</a>            <div class="pp_nav">             <a href="#" class="pp_arrow_previous">Previous</a>             <p class="currentTextHolder">0/0</p>             <a href="#" class="pp_arrow_next">Next</a>            </div>           </div>          </div>         </div>        </div>        </div>       </div>       <div class="pp_bottom">        <div class="pp_left"></div>        <div class="pp_middle"></div>        <div class="pp_right"></div>       </div>      </div>      <div class="pp_overlay"></div>',gallery_markup:'<div class="pp_gallery">         <a href="#" class="pp_arrow_previous">Previous</a>         <ul>          {gallery}         </ul>         <a href="#" class="pp_arrow_next">Next</a>        </div>',image_markup:'<img id="fullResImage" src="" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',inline_markup:'<div class="pp_inline clearfix">{content}</div>',custom_markup:""},d);var i=this,h=false,s,m,n,o,r,u,e=a(window).height(),x=a(window).width(),f;doresize=true,scroll_pos=v();a(window).unbind("resize").resize(function(){l();q()});if(d.keyboard_shortcuts){a(document).unbind("keydown").keydown(function(y){if(typeof $pp_pic_holder!="undefined"){if($pp_pic_holder.is(":visible")){switch(y.keyCode){case 37:a.prettyPhoto.changePage("previous");break;case 39:a.prettyPhoto.changePage("next");break;case 27:if(!settings.modal){a.prettyPhoto.close()}break}return false}}})}a.prettyPhoto.initialize=function(){settings=d;if(a.browser.msie&&parseInt(a.browser.version)==6){settings.theme="light_square"}t(this);if(settings.allow_resize){a(window).scroll(function(){l()})}l();set_position=jQuery.inArray(a(this).attr("href"),pp_images);a.prettyPhoto.open();return false};a.prettyPhoto.open=function(y){if(typeof settings=="undefined"){settings=d;if(a.browser.msie&&a.browser.version==6){settings.theme="light_square"}t(y.target);pp_images=a.makeArray(arguments[0]);pp_titles=(arguments[1])?a.makeArray(arguments[1]):a.makeArray("");pp_descriptions=(arguments[2])?a.makeArray(arguments[2]):a.makeArray("");isSet=(pp_images.length>1)?true:false;set_position=0}if(a.browser.msie&&a.browser.version==6){a("select").css("visibility","hidden")}if(settings.hideflash){a("object,embed").css("visibility","hidden")}g(a(pp_images).size());a(".pp_loaderIcon").show();if($ppt.is(":hidden")){$ppt.css("opacity",0).show()}$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);$pp_pic_holder.find(".currentTextHolder").text((set_position+1)+settings.counter_separator_label+a(pp_images).size());$pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position]));(settings.show_title&&pp_titles[set_position]!=""&&typeof pp_titles[set_position]!="undefined")?$ppt.html(unescape(pp_titles[set_position])):$ppt.html(" ");movie_width=(parseFloat(b("width",pp_images[set_position])))?b("width",pp_images[set_position]):settings.default_width.toString();movie_height=(parseFloat(b("height",pp_images[set_position])))?b("height",pp_images[set_position]):settings.default_height.toString();if(movie_width.indexOf("%")!=-1||movie_height.indexOf("%")!=-1){movie_height=parseFloat((a(window).height()*parseFloat(movie_height)/100)-150);movie_width=parseFloat((a(window).width()*parseFloat(movie_width)/100)-150);h=true}else{h=false}$pp_pic_holder.fadeIn(function(){imgPreloader="";switch(w(pp_images[set_position])){case"image":imgPreloader=new Image();nextImage=new Image();if(isSet&&set_position>a(pp_images).size()){nextImage.src=pp_images[set_position+1]}prevImage=new Image();if(isSet&&pp_images[set_position-1]){prevImage.src=pp_images[set_position-1]}$pp_pic_holder.find("#pp_full_res")[0].innerHTML=settings.image_markup;$pp_pic_holder.find("#fullResImage").attr("src",pp_images[set_position]);imgPreloader.onload=function(){s=k(imgPreloader.width,imgPreloader.height);_showContent()};imgPreloader.onerror=function(){alert("Image cannot be loaded. Make sure the path is correct and image exist.");a.prettyPhoto.close()};imgPreloader.src=pp_images[set_position];break;case"youtube":s=k(movie_width,movie_height);movie="http://www.youtube.com/v/"+b("v",pp_images[set_position]);if(settings.autoplay){movie+="&autoplay=1"}toInject=settings.flash_markup.replace(/{width}/g,s.width).replace(/{height}/g,s.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case"vimeo":s=k(movie_width,movie_height);movie_id=pp_images[set_position];var A=/http:\/\/(www\.)?vimeo.com\/(\d+)/;var z=movie_id.match(A);movie="http://player.vimeo.com/video/"+z[2]+"?title=0&byline=0&portrait=0";if(settings.autoplay){movie+="&autoplay=1;"}vimeo_width=s.width+"/embed/?moog_width="+s.width;toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,s.height).replace(/{path}/g,movie);break;case"quicktime":s=k(movie_width,movie_height);s.height+=15;s.contentHeight+=15;s.containerHeight+=15;toInject=settings.quicktime_markup.replace(/{width}/g,s.width).replace(/{height}/g,s.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case"flash":s=k(movie_width,movie_height);flash_vars=pp_images[set_position];flash_vars=flash_vars.substring(pp_images[set_position].indexOf("flashvars")+10,pp_images[set_position].length);filename=pp_images[set_position];filename=filename.substring(0,filename.indexOf("?"));toInject=settings.flash_markup.replace(/{width}/g,s.width).replace(/{height}/g,s.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+"?"+flash_vars);break;case"iframe":s=k(movie_width,movie_height);frame_url=pp_images[set_position];frame_url=frame_url.substr(0,frame_url.indexOf("iframe")-1);toInject=settings.iframe_markup.replace(/{width}/g,s.width).replace(/{height}/g,s.height).replace(/{path}/g,frame_url);break;case"custom":s=k(movie_width,movie_height);toInject=settings.custom_markup;break;case"inline":myClone=a(pp_images[set_position]).clone().css({width:settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline clearfix"></div></div>').appendTo(a("body"));s=k(a(myClone).width(),a(myClone).height());a(myClone).remove();toInject=settings.inline_markup.replace(/{content}/g,a(pp_images[set_position]).html());break}if(!imgPreloader){$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject;_showContent()}});return false};a.prettyPhoto.changePage=function(y){currentGalleryPage=0;if(y=="previous"){set_position--;if(set_position<0){set_position=0;return}}else{if(y=="next"){set_position++;if(set_position>a(pp_images).size()-1){set_position=0}}else{set_position=y}}if(!doresize){doresize=true}a(".pp_contract").removeClass("pp_contract").addClass("pp_expand");j(function(){a.prettyPhoto.open()})};a.prettyPhoto.changeGalleryPage=function(y){if(y=="next"){currentGalleryPage++;if(currentGalleryPage>totalPage){currentGalleryPage=0}}else{if(y=="previous"){currentGalleryPage--;if(currentGalleryPage<0){currentGalleryPage=totalPage}}else{currentGalleryPage=y}}itemsToSlide=(currentGalleryPage==totalPage)?pp_images.length-((totalPage)*itemsPerPage):itemsPerPage;$pp_pic_holder.find(".pp_gallery li").each(function(z){a(this).animate({left:(z*itemWidth)-((itemsToSlide*itemWidth)*currentGalleryPage)})})};a.prettyPhoto.startSlideshow=function(){if(typeof f=="undefined"){$pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function(){a.prettyPhoto.stopSlideshow();return false});f=setInterval(a.prettyPhoto.startSlideshow,settings.slideshow)}else{a.prettyPhoto.changePage("next")}};a.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function(){a.prettyPhoto.startSlideshow();return false});clearInterval(f);f=undefined};a.prettyPhoto.close=function(){clearInterval(f);$pp_pic_holder.stop().find("object,embed").css("visibility","hidden");a("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed,function(){a(this).remove()});$pp_overlay.fadeOut(settings.animation_speed,function(){if(a.browser.msie&&a.browser.version==6){a("select").css("visibility","visible")}if(settings.hideflash){a("object,embed").css("visibility","visible")}a(this).remove();a(window).unbind("scroll");settings.callback();doresize=true;m=false;delete settings})};_showContent=function(){a(".pp_loaderIcon").hide();$ppt.fadeTo(settings.animation_speed,1);projectedTop=scroll_pos.scrollTop+((e/2)-(s.containerHeight/2));if(projectedTop<0){projectedTop=0}$pp_pic_holder.find(".pp_content").animate({height:s.contentHeight},settings.animation_speed);$pp_pic_holder.animate({top:projectedTop,left:(x/2)-(s.containerWidth/2),width:s.containerWidth},settings.animation_speed,function(){$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(s.height).width(s.width);$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed);if(isSet&&w(pp_images[set_position])=="image"){$pp_pic_holder.find(".pp_hoverContainer").show()}else{$pp_pic_holder.find(".pp_hoverContainer").hide()}if(s.resized){a("a.pp_expand,a.pp_contract").fadeIn(settings.animation_speed)}if(settings.autoplay_slideshow&&!f&&!m){a.prettyPhoto.startSlideshow()}settings.changepicturecallback();m=true});c()};function j(y){$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility","hidden");$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed,function(){a(".pp_loaderIcon").show();y()})}function g(y){if(set_position==y-1){$pp_pic_holder.find("a.pp_next").css("visibility","hidden");$pp_pic_holder.find("a.pp_next").addClass("disabled").unbind("click")}else{$pp_pic_holder.find("a.pp_next").css("visibility","visible");$pp_pic_holder.find("a.pp_next.disabled").removeClass("disabled").bind("click",function(){a.prettyPhoto.changePage("next");return false})}if(set_position==0){$pp_pic_holder.find("a.pp_previous").css("visibility","hidden").addClass("disabled").unbind("click")}else{$pp_pic_holder.find("a.pp_previous.disabled").css("visibility","visible").removeClass("disabled").bind("click",function(){a.prettyPhoto.changePage("previous");return false})}(y>1)?a(".pp_nav").show():a(".pp_nav").hide()}function k(z,y){resized=false;p(z,y);imageWidth=z,imageHeight=y;if(((u>x)||(r>e))&&doresize&&settings.allow_resize&&!h){resized=true,fitting=false;while(!fitting){if((u>x)){imageWidth=(x-200);imageHeight=(y/z)*imageWidth}else{if((r>e)){imageHeight=(e-200);imageWidth=(z/y)*imageHeight}else{fitting=true}}r=imageHeight,u=imageWidth}p(imageWidth,imageHeight)}return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(r),containerWidth:Math.floor(u)+40,contentHeight:Math.floor(n),contentWidth:Math.floor(o),resized:resized}}function p(z,y){z=parseFloat(z);y=parseFloat(y);$pp_details=$pp_pic_holder.find(".pp_details");$pp_details.width(z);detailsHeight=parseFloat($pp_details.css("marginTop"))+parseFloat($pp_details.css("marginBottom"));$pp_details=$pp_details.clone().appendTo(a("body")).css({position:"absolute",top:-10000});detailsHeight+=$pp_details.height();detailsHeight=(detailsHeight<=34)?36:detailsHeight;if(a.browser.msie&&a.browser.version==7){detailsHeight+=8}$pp_details.remove();n=y+detailsHeight;o=z;r=n+$ppt.height()+$pp_pic_holder.find(".pp_top").height()+$pp_pic_holder.find(".pp_bottom").height();u=z}function w(y){if(y.match(/youtube\.com\/watch/i)){return"youtube"}else{if(y.match(/vimeo\.com/i)){return"vimeo"}else{if(y.indexOf(".mov")!=-1){return"quicktime"}else{if(y.indexOf(".swf")!=-1){return"flash"}else{if(y.indexOf("iframe")!=-1){return"iframe"}else{if(y.indexOf("custom")!=-1){return"custom"}else{if(y.substr(0,1)=="#"){return"inline"}else{return"image"}}}}}}}}function l(){if(doresize&&typeof $pp_pic_holder!="undefined"){scroll_pos=v();titleHeight=$ppt.height(),contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width();projectedTop=(e/2)+scroll_pos.scrollTop-(contentHeight/2);$pp_pic_holder.css({top:projectedTop,left:(x/2)+scroll_pos.scrollLeft-(contentwidth/2)})}}function v(){if(self.pageYOffset){return{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset}}else{if(document.documentElement&&document.documentElement.scrollTop){return{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft}}else{if(document.body){return{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft}}}}}function q(){e=a(window).height(),x=a(window).width();if(typeof $pp_overlay!="undefined"){$pp_overlay.height(a(document).height())}}function c(){if(isSet&&settings.overlay_gallery&&w(pp_images[set_position])=="image"){itemWidth=52+5;navWidth=(settings.theme=="facebook")?58:38;itemsPerPage=Math.floor((s.containerWidth-100-navWidth)/itemWidth);itemsPerPage=(itemsPerPage<pp_images.length)?itemsPerPage:pp_images.length;totalPage=Math.ceil(pp_images.length/itemsPerPage)-1;if(totalPage==0){navWidth=0;$pp_pic_holder.find(".pp_gallery .pp_arrow_next,.pp_gallery .pp_arrow_previous").hide()}else{$pp_pic_holder.find(".pp_gallery .pp_arrow_next,.pp_gallery .pp_arrow_previous").show()}galleryWidth=itemsPerPage*itemWidth+navWidth;$pp_pic_holder.find(".pp_gallery").width(galleryWidth).css("margin-left",-(galleryWidth/2));$pp_pic_holder.find(".pp_gallery ul").width(itemsPerPage*itemWidth).find("li.selected").removeClass("selected");goToPage=(Math.floor(set_position/itemsPerPage)<=totalPage)?Math.floor(set_position/itemsPerPage):totalPage;if(itemsPerPage){$pp_pic_holder.find(".pp_gallery").hide().show().removeClass("disabled")}else{$pp_pic_holder.find(".pp_gallery").hide().addClass("disabled")}a.prettyPhoto.changeGalleryPage(goToPage);$pp_pic_holder.find(".pp_gallery ul li:eq("+set_position+")").addClass("selected")}else{$pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave");$pp_pic_holder.find(".pp_gallery").hide()}}function t(y){theRel=a(y).attr("data-gal");galleryRegExp=/\[(?:.*)\]/;isSet=(galleryRegExp.exec(theRel))?true:false;pp_images=(isSet)?jQuery.map(i,function(D,C){if(a(D).attr("data-gal").indexOf(theRel)!=-1){return a(D).attr("href")}}):a.makeArray(a(y).attr("href"));pp_titles=(isSet)?jQuery.map(i,function(D,C){if(a(D).attr("data-gal").indexOf(theRel)!=-1){return(a(D).find("img").attr("alt"))?a(D).find("img").attr("alt"):""}}):a.makeArray(a(y).find("img").attr("alt"));pp_descriptions=(isSet)?jQuery.map(i,function(D,C){if(a(D).attr("data-gal").indexOf(theRel)!=-1){return(a(D).attr("title"))?a(D).attr("title"):""}}):a.makeArray(a(y).attr("title"));a("body").append(settings.markup);$pp_pic_holder=a(".pp_pic_holder"),$ppt=a(".ppt"),$pp_overlay=a("div.pp_overlay");if(isSet&&settings.overlay_gallery){currentGalleryPage=0;toInject="";for(var A=0;A<pp_images.length;A++){var B=new RegExp("(.*?).(jpg|jpeg|png|gif)$");var z=B.exec(pp_images[A]);if(!z){classname="default"}else{classname=""}toInject+="<li class='"+classname+"'><a href='#'><img src='"+pp_images[A]+"' width='50' alt='' /></a></li>"}toInject=settings.gallery_markup.replace(/{gallery}/g,toInject);$pp_pic_holder.find("#pp_full_res").after(toInject);$pp_pic_holder.find(".pp_gallery .pp_arrow_next").click(function(){a.prettyPhoto.changeGalleryPage("next");a.prettyPhoto.stopSlideshow();return false});$pp_pic_holder.find(".pp_gallery .pp_arrow_previous").click(function(){a.prettyPhoto.changeGalleryPage("previous");a.prettyPhoto.stopSlideshow();return false});$pp_pic_holder.find(".pp_content").hover(function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()},function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()});itemWidth=52+5;$pp_pic_holder.find(".pp_gallery ul li").each(function(C){a(this).css({position:"absolute",left:C*itemWidth});a(this).find("a").unbind("click").click(function(){a.prettyPhoto.changePage(C);a.prettyPhoto.stopSlideshow();return false})})}if(settings.slideshow){$pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>');$pp_pic_holder.find(".pp_nav .pp_play").click(function(){a.prettyPhoto.startSlideshow();return false})}$pp_pic_holder.attr("class","pp_pic_holder "+settings.theme);$pp_overlay.css({opacity:0,height:a(document).height(),width:a(document).width()}).bind("click",function(){if(!settings.modal){a.prettyPhoto.close()}});a("a.pp_close").bind("click",function(){a.prettyPhoto.close();return false});a("a.pp_expand").bind("click",function(C){if(a(this).hasClass("pp_expand")){a(this).removeClass("pp_expand").addClass("pp_contract");doresize=false}else{a(this).removeClass("pp_contract").addClass("pp_expand");doresize=true}j(function(){a.prettyPhoto.open()});return false});$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click",function(){a.prettyPhoto.changePage("previous");a.prettyPhoto.stopSlideshow();return false});$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click",function(){a.prettyPhoto.changePage("next");a.prettyPhoto.stopSlideshow();return false});l()}return this.unbind("click").click(a.prettyPhoto.initialize)};function b(e,d){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var c="[\\?&]"+e+"=([^&#]*)";var g=new RegExp(c);var f=g.exec(d);return(f==null)?"":f[1]}})(jQuery);