/*!
* jquery.countup.js 1.0.3
*
* Copyright 2016, Adrián Guerra Marrero http://agmstudio.io @AGMStudio_io
* Released under the MIT License
*
* Date: Oct 27, 2016
*/
(function(a){a.fn.countUp=function(b){var c=a.extend({time:2000,delay:10},b);return this.each(function(){var f=a(this);var d=c;var e=function(){if(!f.data("counterupTo")){f.data("counterupTo",f.text())}var j=parseInt(f.data("counter-time"))>0?parseInt(f.data("counter-time")):d.time;var o=parseInt(f.data("counter-delay"))>0?parseInt(f.data("counter-delay")):d.delay;var g=j/o;var p=f.data("counterupTo");var r=[p];var s=/[0-9]+,[0-9]+/.test(p);p=p.replace(/,/g,"");var n=/^[0-9]+$/.test(p);var h=/^[0-9]+\.[0-9]+$/.test(p);var k=h?(p.split(".")[1]||[]).length:0;for(var m=g;m>=1;m--){var l=parseInt(Math.round(p/g*m));if(h){l=parseFloat(p/g*m).toFixed(k)}if(s){while(/(\d+)(\d{3})/.test(l.toString())){l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2")}}r.unshift(l)}f.data("counterup-nums",r);f.text("0");var q=function(){f.text(f.data("counterup-nums").shift());if(f.data("counterup-nums").length){setTimeout(f.data("counterup-func"),o)}else{delete f.data("counterup-nums");f.data("counterup-nums",null);f.data("counterup-func",null)}};f.data("counterup-func",q);setTimeout(f.data("counterup-func"),o)};f.waypoint(e,{offset:"100%",triggerOnce:true})})}})(jQuery);