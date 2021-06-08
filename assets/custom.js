//$(window).load(function() {
////    $('body').append("<div class='pgloader'><div class='loadbg'></div></div>");
//    $('.pgloader').fadeOut();
//});


/***is character validation***/
function isCharacter(event) {
    var regex = new RegExp("^[a-zA-Z ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if(event.charCode != 0){
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    }
}

/***is email validation***/
function isEmail(event) {
    var regex = new RegExp("^[a-zA-Z@-_0-9.]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    var charCodeForKey = event.charCode ? event.charCode : event.which;
    if(charCodeForKey == '94' || charCodeForKey == '92'){
      event.preventDefault();
      return false;
    }else if(event.charCode != 0){
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    }

}
$(document).ready(function(){
    $(document).on('keyup', '.email', function(e){
        var spaceRegex = /^[^-\s]+$/;
        var charRegex = /^[a-zA-Z@-_0-9.]+$/;
        var value = $(this).val();
        if(value.length <= 1){
            if(!(value.match(spaceRegex))){
                $(this).val( value.substring(0, value.length - 1) );
            }else{
                if(!(value.match(charRegex))){
                    $(this).val( value.substring(0, value.length - 1) );
                }else{
                    value.replace(/[\[\]\^']+/g, '');
                    $(this).val( value );
                }
                $(this).val($(this).val().replace(/[\[\]\^']+/g, ''));
            }
        }else{
            if(!(value.match(charRegex))){
                 //var newValue = value.replace(/[^a-z\d\s]+/gi, "");
                 var newValue = value.replace(/[^a-zA-Z@-_0-9.\s]+/gi, "");
                 newValue.replace(/[-]/g,'');
                 newValue.replace(/[^\w\s]/gi, '')
                 $(this).val( newValue );
                // $(this).val( value.substring(0, value.length - 1) );
            }else{
                $(this).val($(this).val().replace(/[\[\]\^']+/g, ''));
            }
        }
    });

    $(document).on('keyup', '.onlyNum', function(e){
        var spaceRegex = /^[^-\s]+$/;
        var charRegex = /^[0-9]+$/;
        var value = $(this).val();
        if(value.length <= 1){
            if(!(value.match(spaceRegex))){
                $(this).val( value.substring(0, value.length - 1) );
            }else{
                if(!(value.match(charRegex))){
                    $(this).val( value.substring(0, value.length - 1) );
                }
            }
        }else{
            if(!(value.match(charRegex))){
                 value.substring(0, value.length - 1);
                 var newValue = value.replace(/[^0-9]+/g, "");
                 $(this).val( newValue );
            }
        }
    });

});
$(document).on('keyup', '.removeSpace', function(e){
    var spaceRegex = /^[^-\s]+$/;
    var value = $(this).val();
    if(!(value.match(spaceRegex))){
        $(this).val( value.substring(0, value.length - 1) );
    }else{
        if(!(value.match(spaceRegex))){
            $(this).val( value.substring(0, value.length - 1) );
        }
    }
});

$(document).ready(function() {
    $(document).on('keyup', '.nameSpace', function(e) {
        var spaceRegex = /^[^-\s]+$/;
        var charRegex = /^[a-zA-Z. \s]+$/;
        var value = $(this).val().trim();
        if (value.length <= 1) {
            if (!(value.match(spaceRegex))) {
                $(this).val(value.substring(0, value.length - 1));
            } else {
                if (!(value.match(charRegex))) {
                    $(this).val(value.substring(0, value.length - 1));
                }
            }
        } else {
            if (!(value.match(charRegex))) {
                //var newValue = value.replace(/[^a-z\d\s]+/gi, "");
                var newValue = value.replace(/[^a-z.\s]+/gi, "");
                value.replace(/[-]/g, '');
                $(this).val(newValue);
                // $(this).val( value.substring(0, value.length - 1) );
            }
        }
    });
});

function getLikeCount(urls){
    var pagenames = urls; //document.location.pathname.match(/[^\/]+$/)[0];
//    alert(pagenames);
    $.ajax({
        'async': false,
        'type': "POST",
        'url': "../../form-submissions.php",
        'data': 'getLoadLikeCount=getLoadLikeCount&pagename='+pagenames,
        'success': function (data) {
            if(data == 'reviewed'){
                $('.likeCountMsg').html('Already Reviewed');
            }else if(data == 'failed'){
                $('.likeCountMsg').html('Some Error Occured');
            }else{
                $('.stampLikeCount').html('( '+data+' likes)');
            }
        }
    });
}

$(function () {
    window.onload = function() {
        var url = window.location.href;
        if(url.indexOf('blog/') > 0){
            var res = url.split("blog/");
            var ress = res[1].split("/");
            var pagename = ress[0];
            var urls = pagename;
        }else{
            var pagenames = document.location.pathname.match(/[^\/]+$/)[0];
            var urls = pagenames;
        }

        getLikeCount(urls);
    };

    if (document.cookie.indexOf("visited") >= 0) {
        $(".pgloader").fadeOut('slow');
    }
    else {
        // set a new cookie..
        var cookieExpiry = new Date();
        cookieExpiry.setTime(cookieExpiry.getTime() + (8 * 3600 * 1000)); // 8 hours
        document.cookie = "visited=yes; expires=" + cookieExpiry.toGMTString();
        $(".pgloader").show().delay('2000').fadeOut('slow');
    }
});
//$(function(){
//    $('.try-again a').click(function(){
//        window.history.back();
//    });
//});

$(function(){

    var url = window.location.href;
    if(url.indexOf('our-works') > 0){
        $("#header").load("../../assets/include/header.html");
    }else{
        $("#header").load("assets/include/header.html");
    }
    if(url.indexOf('our-works') > 0){
        $("#footer").load("../../assets/include/footer.html");
    }else{
        $("#footer").load("assets/include/footer.html");
    }
    if(url.indexOf('our-works') > 0){
        $("#launch-project").load("../../assets/include/launch-project.html");
    }else{
        $("#launch-project").load("assets/include/launch-project.html", function(){
            if($(window).width() <= 736){
                $(".mobilenumber").prop("type", "tel");
            }
        });
    }
    if(url.indexOf('our-works') > 0){
        //console.log('inside our work.');
         $("#rating").load("../../assets/include/rating.html",function(){
            function process() {
                var data="getrating=getrating";
                var avgRating = null;
                $.ajax({
                    'async': false,
                    'type': "POST",
                    'global': false,
                    'dataType': 'html',
                    'url': "../../form-submissions.php",
                    'data': data,
                    'success': function (datas) {
    //                    console.log('check'+datas);
                        avgRating = parseFloat(datas).toFixed(2);
                    }
                });
                return avgRating;
            }
            $(".rateyo").rateYo({
                halfStar: true,
                rating    : process()
            }).on("rateyo.set", function (e, data) {
    //            console.log(data);
                $('#txtRating').val(data.rating);
            });
         });
    }else{
        //console.log('inside else.');
        $("#rating").load("assets/include/rating.html",function(){
            function process() {
                var data="getrating=getrating";
                var avgRating = null;
                $.ajax({
                    'async': false,
                    'type': "POST",
                    'global': false,
                    'dataType': 'html',
                    'url': "form-submissions.php",
                    'data': data,
                    'success': function (datas) {
    //                    console.log('check'+datas);
                        avgRating = parseFloat(datas).toFixed(2);
                    }
                });
                return avgRating;
            }
            $(".rateyo").rateYo({
                halfStar: true,
                rating    : process()
            }).on("rateyo.set", function (e, data) {
    //            console.log(data);
                $('#txtRating').val(data.rating);
            });
        });
    }

    $('.menu #toggle').addClass('menu-img');

	//facebook share for client detail pg
	if($('.fb-share-button').lenght > 0){
		var url = window.location.href;
		$('.fb-share-button').attr('data-href', url);
		$('.fb-xfbml-parse-ignore').attr('href', 'https://www.facebook.com/sharer/sharer.php?u='+url);
	}

	//twitter share for client detail pg
	if($('.twitter-sharer').length > 0){
		var url = window.location.href;
		var url = 'http://twitter.com/share?text=PostboxCommunications Work&url='+url
		$('.twitter-sharer').attr('onclick', 'window.open("'+url+'","mywindow","width=800,height=500,top=100,left=400; return false;")');
	}

//	setTimeout(function(){ console.log($("iframe").contents().find('body').find(".pluginCountTextDisconnected")); }, 3000);

	//like count for client detail pg
//	$('.red-stamp').click(function(){
//		var url = window.location.href;
//		var pagename = document.location.pathname.match(/[^\/]+$/)[0];
//
//		$.ajax({
//			'async': false,
//			'type': "POST",
//			'url': "../../form-submissions.php",
//			'data': 'getIpAddress=getIpAddress',
//			'success': function (data) {
//				$('<div></div>').attr('id', 'ipAddress').appendTo('body').html(data);
//				var ipAddress = $('#ipAddress').text();
////				console.log(ipAddress);
//				$.ajax({
//					'async': false,
//					'type': "POST",
//					'url': "../../form-submissions.php",
//					'data': 'ipAddress='+ipAddress+'&pagename='+pagename,
//					'success': function (data) {
////						var ipAddress = $('#ipAddress').text();
//						console.log(data);
//						if(data == 'reviewed'){
//							$('.likeCountMsg').html('Alreday Reviewed');
//						}else if(data == 'failed'){
//							$('.likeCountMsg').html('Some Error Occured');
//						}else{
//							$('.stampLikeCount').html('( '+data+' likes)');
//						}
//					}
//				});
//			}
//		});
//	});

    //like count for client detail pg
    $('.red-stamp').click(function(){
        var url = window.location.href;
        var res = url.split("blog/");
        var ress = res[1].split("/");

        var pagename = ress[0];
            $.ajax({
                    'async': false,
                    'type': "POST",
                    'url': "../../form-submissions.php",
                    'data': 'getIpAddress=getIpAddress',
                    'success': function (data) {
                            $('<div></div>').attr('id', 'ipAddress').appendTo('body').html(data);
                            var ipAddress = $('#ipAddress').text();
//				console.log(ipAddress);
                            $.ajax({
                                    'async': false,
                                    'type': "POST",
                                    'url': "../../form-submissions.php",
                                    'data': 'ipAddress='+ipAddress+'&pagename='+pagename,
                                    'success': function (data) {
//						var ipAddress = $('#ipAddress').text();
                                            //console.log(data);
                                            if(data == 'reviewed'){
                                                $('.likeCountMsg').html('Already Reviewed');
                                            }else if(data == 'failed'){
                                                $('.likeCountMsg').html('Some Error Occured');
                                            }else{
                                                $('.stampLikeCount').html('( '+data+' likes)');
                                            }
                                    }
                            });
                    }
            });
    });

    $('.blog-profile-inner-html').click(function(){
        var pagename = document.location.pathname.match(/[^\/]+$/)[0];
            $.ajax({
                    'async': false,
                    'type': "POST",
                    'url': "../../form-submissions.php",
                    'data': 'getIpAddress=getIpAddress',
                    'success': function (data) {
                            $('<div></div>').attr('id', 'ipAddress').appendTo('body').html(data);
                            var ipAddress = $('#ipAddress').text();
//				console.log(ipAddress);
                            $.ajax({
                                    'async': false,
                                    'type': "POST",
                                    'url': "../../form-submissions.php",
                                    'data': 'ipAddress='+ipAddress+'&pagename='+pagename,
                                    'success': function (data) {
//						var ipAddress = $('#ipAddress').text();
//                                            console.log(data);
                                            if(data == 'reviewed'){
                                                $('.likeCountMsg').html('Already Reviewed');
                                            }else if(data == 'failed'){
                                                $('.likeCountMsg').html('Some Error Occured');
                                            }else{
                                                $('.stampLikeCount').html('( '+data+' likes)');
                                            }
                                    }
                            });
                    }
            });
    });

});

if($('.swiper-container').lenght > 0){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'horizontal'
    });
}


//if($(document).find('.swiper-testimonial').lenght > 0){
//var swiper = new Swiper('.swiper-testimonial', {
//    spaceBetween: 0,
//    slidesPerView: 3,
//    nextButton: '.swiper-button-next',
//    prevButton: '.swiper-button-prev',
//    speed:1500
//});

//$('.swiper-container').animate({
//    scrollTop: $(window.location.hash).offset().top
//});
//job opening slider js end//


/***Backward Path for image as Pages inside Folder***/
//$(function () {
//    var url = window.location.href;
//    var backPath = '../../';
//    Array.prototype.forEach.call(document.querySelectorAll("img.abs_path"), function(link) {
//        if(url.indexOf('our-works') > 0){
//            link.src = backPath + link.getAttribute("src");
//        }else{
//            link.src = link.getAttribute("src");
//        }
//    });
//    Array.prototype.forEach.call(document.querySelectorAll("img.jssocials-share-logo"), function(link) {
//        if(url.indexOf('our-works') > 0){
//            link.src = backPath + link.getAttribute("src");
//        }else{
//            link.src = link.getAttribute("src");
//        }
//    });
//});


/* all pages zooming disabled and fabicon */
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
$(window).load(function () {
    var url = window.location.href;
    if(url.indexOf('our-works') > 0){
        $(document).find('head').append('<link rel="shortcut icon" href="../../assets/images/favicon.ico" type="image/x-icon">');
    }else{
        $(document).find('head').append('<link rel="shortcut icon" href="assets/images/favicon.ico" type="image/x-icon">');
    }
});

if($(window).width() <= 736){
    $(".mobilenumber").prop("type", "tel");
}


/* All pages mobile right side logo  */
//if($(window).width() <= 736){
//$(window).load(function(){
$(document).ready(function(){
    $('.nav-header .tittle:first').addClass('headbreadcrum');
//    $('.nav-header .container').append('<div class="mpbclogo">'+
//    '<a href="index.html">'+
//    '<img src="assets/images/pbc-logo.png" />'+
//    '</a></div>');
    var url = window.location.href;
    if(url.indexOf('our-works') > 0){
        $('.nav-header .container').append('<div class="mpbclogo">'+
    '<a href="../../index.html">'+
    '<img src="../../assets/images/pbc-logo.png" />'+
    '</a></div>');
    }else{
        $('.nav-header .container').append('<div class="mpbclogo">'+
    '<a href="index.html">'+
    '<img src="assets/images/pbc-logo.png" />'+
    '</a></div>');
    }
});
//}

//desktop menu js
$("#toggle").click(function() {
    $(this).toggleClass("open");
    $("#menu").toggleClass("opened");
});

$(function() {
    var url = window.location.href;
    var backPath = '';
//    if(url.indexOf('/blog/page/') > 0){
//        backPath = "../../";
//    }else if(url.indexOf('/blog/') > 0){
//        backPath = "../../";
//    }else if(url.indexOf('/blog') > 0){
//        backPath = "../";
//    }else if(url.indexOf('our-works') > 0){
//        backPath = "../../";
//    }

    if(url.indexOf('/blog/') > 0){
        var lastPathChar = url.slice(-6);
        if(url.indexOf('/blog/page/') > 0){
            backPath = "../../../";
        }else if(lastPathChar.indexOf('blog') > 0 || url.indexOf('/blog/page') > 0){
            backPath = "../";
        }else{
            backPath = "../../";
        }
    }else if(url.indexOf('our-works') > 0){
        backPath = "../../";
    }

//    $('#toggle').on('click', function(){
    setInterval(function(){
        if($('#toggle').hasClass("open")){
            $('#toggle').attr('src', backPath + 'assets/images/menu/menu-close.png');
        }else{
            $('#toggle').attr('src', backPath + 'assets/images/menu-icon.png');
        }
    },100);
//    });
});

// all services page mobile link change
if ($(window).width() <= 736) {
     $('.brd-id-projt').find('.clienticno .btndetail').attr("href", "portfolio.html");
}

//maxlenght script start
//$(function() {
//    max_length = $("#txtContactUs").attr("maxlength");
//    $("#txtContactUs").attr("onkeypress", "if(this.value.length >= max_length) return false;");
//});


//client page js start
$(document).ready(function(){
    if($(window).width() >= 736){
        $('.clients li').click(function(){
            var imgpath = $(this).find("a").attr("data-extra");
            var pagelink = $(this).find("a").attr("link-extra");
            var quotecontent = $(this).find("a").attr("content-extra");
            $(this).addClass("client-active");
            if(!$(this).hasClass('noBanner')){
                $(".clients-banner").css({"background" : 'url('+imgpath+') center center no-repeat', "background-size":"cover"});
                $("html, body").animate({ scrollTop: 0 }, 600);
            }
            $(".link-extra").find('a').attr("href", pagelink);
//            $(".banner-txt p").html(quotecontent)
            return false;
        });
    }


   function alignContent() {
        var windowHeight = $(window).height();

        $('.content-resizer').each(function() {
            contentHei(function($){
        $(window).on("load",function(){
            $(".content").mCustomScrollbar();
        });
    })(jQuery);ght = $(this).height();
            $(this).css('top', (windowHeight / 2) - (contentHeight / 2));
        });

        $('.alt-img').html($("#img-example").attr('src'));
    }
    // Execute the function
    alignContent();
    // Bind the function to the window.onresize
    $(window).bind("resize", function() {
        alignContent();
    });


    $('.mydiv').hide();
    $(document).on('click','#rate_click',function() {
//    $("#rate_click").click(function() {
        var $slider = $('.mydiv');
        $slider.fadeIn().animate({
            right: parseInt($slider.css('right'),10) == -200 ? 0 : -200
        });
        if($slider.css('right') >= '0'){
//            console.log('right 0');
            $('.rateyo.jq-ry-container').css('pointer-events', 'none');
            $('.web-rate ').animate({right: "0px"});
        }else if($slider.css('right') >='-200'){
//            console.log('right -200');
            $('.rateyo.jq-ry-container').css('pointer-events', 'auto');
            $('.web-rate ').animate({right: "108px"});
        }
    });

    /***Contact Form Validation Start***/
    $('#contactForm').submit(function() {
        $('.contactWaiting, .contactSuccess, .contactFailure').hide()
        $('.contact_error').remove();
        $('.requiredField').css('border-color','#c9c5c1');
        $('#ddlService').css('color','#c9c5c1');
        $('#ddlService').parent().css('border-color','#c9c5c1');
        $('.requiredField').removeClass('inputError');
        var hasError = false;
        $('.requiredField').each(function() {
            if($.trim($(this).val()) == '') {
                if($(this).hasClass('selectField') > 0){
                    var labelText = $(this).attr('name');
                    $(this).parent().append('<span class="contact_error">Please select a '+labelText+'.</span>');
                    hasError = true;
                }else{
                    var labelText = $(this).attr('name');
                    $(this).parent().append('<span class="contact_error">Please enter '+labelText+'.</span>');
                    hasError = true;
                }
            }else if($(this).hasClass('sp-character')) {
                var charReg = /^\w+( \w+)*$/;
                if(!charReg.test($.trim($(this).val()))) {
                    var labelText = $(this).attr('name');
                    $(this).parent().append('<span class="contact_error">Please enter a valid '+labelText+'.</span>');
                    hasError = true;
                }
            }else if($(this).hasClass('mobilenumber')) {
                var mobileReg = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
                if(!mobileReg.test($.trim($(this).val()))) {
                    var labelText = $(this).attr('name');
                    $(this).parent().append('<span class="contact_error">Please enter a valid '+labelText+'.</span>');
                    hasError = true;
                }
            }else if($(this).hasClass('email')) {
                var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                if(!emailReg.test($.trim($(this).val()))) {
                    var labelText = $(this).attr('name');
                    $(this).parent().append('<span class="contact_error">Please enter a valid '+labelText+'.</span>');
                    hasError = true;
                }
            }else if($('#txtfile').val() !== '') {
                var file = $('#txtfile').val();
                var fields = file.split(".");
                if($("#txtfile")[0].files.length > 3){
                    $('#txtfile').parent().append('<span class="contact_error">You can select maximum 3 files</span>');
                    hasError = true;
                }else{
                    var files = $("#txtfile")[0].files;
                    for (i = 0; i < files.length; i++)
                    {
                        var size = files[i].size/1024;
                        if (size > 2000){ //2000kb is 2MB
                            $('#txtfile').parent().append('<span class="contact_error">File size should be less than 2 MB</span>');
                            hasError = true;
                        }
                    }
                }
            }
        });
        if(hasError == false){
            $('.contactWaiting').show().css({"color": "orange"});
            var name = $('#txtName').val();
            var email = $('#txtEmail').val();
            var contact = $('#txtContactUs').val();
            var service = $('#ddlService').val();
            var message = $('#txtmessage').val().replace(/\n/g, '');
            var file = $('#txtfile').val();
            var data="name="+name+"&email="+email+"&contact="+contact+"&service="+service+"&message="+message+"&file="+file;

            var formData = new FormData($(this)[0]);

            $.ajax({
                type: "post",
                crossDomain: "true",
                async: false,
                 cache: false,
                contentType: false,
                enctype: 'multipart/form-data',
                processData: false,
                url : "https://www.postboxcommunications.com/apps/Social/enquiry/postboxcommunications/contact-us.php",
                data: formData,
                beforeSend: function(){ },
                success: function(data){
                    
                    if(data == 'success') {
                        $('#txtName, #txtEmail, #txtContactUs, #ddlService, #txtmessage, #txtfile').val('');
                        $('.contactWaiting, .contactFailure').hide()
                        $('.contactSuccess').show().css({"color": "green"});
                    }else if(data == 'dataerror') {
                        $('.contactWaiting, .contactSuccess').hide()
                        $('#contactDataFailure').show().css({"color": "red"});
                    }else{
                        $('.contactWaiting, .contactSuccess').hide()
                        $('#contactFailure').show().css({"color": "red"});
                    }
                }
            });

        }

        return false;
    });
    /***Contact Form Validation End***/

});

$(document).ready(function () {
    size_li = $("#home li").size();
    x=9;
    $('#home li:lt('+x+')').show();
    $('.loadimg').click(function () {
        x= (x+3 <= size_li) ? x+3 : size_li;
        $('#home li:lt('+x+')').show();
    });
});

$(document).ready(function () {
    client_li = $(".client-list ul li").size();
    y=12;
    $('.client-list ul li:lt('+y+')').slideDown();
    $('.loadimg').click(function () {
        var inc = y+12;
        y= (inc <= client_li) ? y+12 : client_li;
        setTimeout(function(){
            $('.client-list ul li:lt('+y+')').slideDown();
            $('.client-list').scroll();
            if($('.client-list ul.clients:last-child  li:last-child ').is(':visible')){
                $('.portfolio-loadingimg').hide();
            }
         }, 500);

    });
    $('#toggle').click(function(){
        var url = window.location.href;
        if(url.indexOf('blog') > 0){
            if ( $("#menu").hasClass("opened") ) {
                $("body").css('overflow','scroll');
            }else{
                $("body").css('overflow-y','hidden');
            }
        }else{
            if ( $("#menu").hasClass("opened") ) {
                $("body").css('overflow','hidden');
            }else{
                $("body").css('overflow-y','scroll');
            }
        }
    });
    $(".click-service a").click(function(){
        $(this).hide();
        $(".services-menu").fadeIn('slow').css("visibility","visible");
    });
    $(".services-close-btn").click(function(){
         $(".services-menu").fadeOut('slow');
        $(".click-service a").fadeIn('slow');
//        $(".services-bg.header-space").css('min-height','578px');
    });






    /***rating form submit***/
    $(document).on('click','#btnRatingSubmit',function(){
//        var ratingVal = $('#ratingdata').val();
        $('.error').remove();
        var hasError = false;
        $('.requiredData').each(function() {
            if($.trim($(this).val()) == '') {
                var labelText = $(this).attr('name');
                $(this).parent().append('<span class="error">Please enter '+labelText+'.</span>');
                hasError = true;
            }else if($(this).hasClass('mobilenumber')) {
                var mobileReg = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
                if(!mobileReg.test($.trim($(this).val()))) {
                    var labelText = $(this).attr('name');
                    $(this).parent().append('<span class="error">Please enter a valid '+labelText+'.</span>');
                    hasError = true;
                }
            }else if($(this).hasClass('email')) {
                var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                if(!emailReg.test($.trim($(this).val()))) {
                    var labelText = $(this).attr('name');
                    $(this).parent().append('<span class="error">Please enter a valid '+labelText+'.</span>');
                    hasError = true;
                }
            }
        });

        if(hasError == false){
            $('.msgbox').html('Sending Rating....Please wait!!!');
            var name = $('#txtName').val();
            var email = $('#txtEmail').val();
            var contact = $('#txtContact').val();
            var message = $('#txtComment').val();
            var rating = $('#txtRating').val();
            var data="name="+name+"&email="+email+"&contact="+contact+"&rating="+rating+"&message="+message+"&type=star-rating";

            if(rating == ''){
                $('.msgbox').html('Please give a Rating !');
                return false;
            }
            $.ajax({
                type: "post",
                crossDomain: "true",
                url : "form-submissions.php",
                data: data,
                dataType :'html',
                success: function(result){
                    if(result == 'success') {
                        $('.msgbox').html('Submitting..Please Wait!!');
                        $.ajax({
                            type: "post",
                            crossDomain: "true",
                            url : "https://www.postboxcommunications.com/apps/Social/enquiry/postboxcommunications/rating.php",
                            data: data,
                            dataType :'html',
                            beforeSend: function(){ },
                            success: function(data){
                                //console.log(data);
                                $('#txtName, #txtEmail, #txtContact, #txtRating, #txtComment').val('');
                                $('.msgbox').html('Rating has been submitted!').css({"color": "green"});;
                                setTimeout(function(){ $('.msgbox').html(''); }, 10000);
                            }
                        });
//                        $('#txtName, #txtEmail, #txtContact, #txtRating, #txtComment').val('');
//                        $('.msgbox').html('Rating has been submitted!');
//                        setTimeout(function(){ $('.msgbox').html(''); }, 10000);
                    }else if(data == 'dataerror') {
                        $('#txtName, #txtEmail, #txtContact, #txtRating, #txtComment').val('');
                        $('.msgbox').html('Please fill the required data!').css({"color": "red"});;
                    }else if(result == 'rated'){
                        $('#txtName, #txtEmail, #txtContact, #txtRating, #txtComment').val('');
                        $('.msgbox').html('You have already Rated our website!').css({"color": "red"});;
                        //setTimeout(function(){ $('.msgbox').html(''); }, 10000);
                    }else{
                        $('#txtName, #txtEmail, #txtContact, #txtRating, #txtComment').val('');
                        $('.msgbox').html('Sorry some error occured. Please try again!').css({"color": "red"});;
                        //setTimeout(function(){ $('.msgbox').html(''); }, 10000);
                    }
                }
            });

        }

        return false;
    });
    /***rating form submit end***/

    /***portfolio breadcrum change on filter click ***/
    $('.simplefilter li').click(function(){
        var data = $(this).text().toLowerCase();
        $('.portid').html(data);
    });
    /***portfolio breadcrum change on filter click end***/

    /*******all pages heading first letter put in span tag start******/
    $(document).ready(function(){
        $('.title-name').addClass('fw-title');
        var string = $.trim($('.title-name h2').text());
        var totalString ="";
        var splitArray = string.split(' ');
        for (i = 0; i < splitArray.length; i++) {
            firstLetter = splitArray[i].charAt(0);
            otherChar = splitArray[i].substring(1);
            newWord = "<span class='fwTitle'>"+firstLetter+"</span>"+otherChar;
            splitArray[i] = newWord;
//
        }
        newString = splitArray.toString().replace(",", " ");
        var checkFileName =  location.pathname.substr(location.pathname.lastIndexOf("/")+1);
        if(checkFileName !== "" &&  checkFileName !== 'index.html'){
            imageTag = $('.title-name h2').html().match(/<[^>]+>/)[0]
            $('.title-name h2').html(newString+" "+imageTag);
        }
        $('.subtitle').addClass('fw-subtitle');
        var liCount = $('.subtitle li').length;
        $('.subtitle li a').each(function(){
            var string2 = $.trim($(this).text());
            var totalString2 ="";
            splitArray2 = string2.split(' ');
            for (i = 0; i < splitArray2.length; i++) {
                firstLetter = splitArray2[i].charAt(0);
                otherChar = splitArray2[i].substring(1);
                newWord = "<span class='fwSubtitle'>"+firstLetter+"</span>"+otherChar;
                splitArray2[i] = newWord;
            }
            var newString = splitArray2.toString().replace(/,/g , " ");
            $(this).html(newString);
        });
    });
    /*******all pages heading first letter put in span tag ends******/

    //filter css start//
    $('.filter ul li').each(function(){
        var id = $(this).attr('id');
        if(id == 'Btn-whatBePrpose'){
            $(this).find('a').addClass('filter-active');
            $('#whatBePrpose').show(function(){
                if($('.tracker-individual-container').length <= 0){
                    var carousel = $("#carousel").featureCarousel({
                    });

                    $("#but_prev").click(function () {
                      carousel.prev();
                    });
                    $("#but_pause").click(function () {
                      carousel.pause();
                    });
                    $("#but_start").click(function () {
                      carousel.start();
                    });
                    $("#but_next").click(function () {
                      carousel.next();
                    });
                }
            });
            return false;
        }else if(id == 'Btn-creatives'){
            $(this).find('a').addClass('filter-active');
            $('#creatives').show(function(){
                var swiper = new Swiper('.swiper-testimonial', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    slidesPerView: 1,
                    autoplay:false,
                    speed:1500,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    // Responsive breakpoints
                    breakpoints: {
                      // when window width is <= 320px
                      320: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 5
                      },
                      // when window width is <= 480px
                      480: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 20
                      },
                      // when window width is <= 640px
                      640: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 30
                      },
                      // when window width is <= 768px
                      768: {
                        slidesPerView: 2,
                        spaceBetweenSlides: 10
                      }
                    }
                });
            });
            return false;
        }else if(id == 'Btn-Mobile'){
            $(this).find('a').addClass('filter-active');
            $('#Mobile').show(function(){
                var swiper = new Swiper('.swiper-testimonial', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    slidesPerView: 2,
                    autoplay:false,
                    speed:1500,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    // Responsive breakpoints
                    breakpoints: {
                      // when window width is <= 320px
                      320: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 5
                      },
                      // when window width is <= 480px
                      480: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 20
                      },
                      // when window width is <= 640px
                      640: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 30
                      },
                      // when window width is <= 768px
                      768: {
                        slidesPerView: 2,
                        spaceBetweenSlides: 10
                      }
                    }
                });
            });
            return false;
        }
    });
    $('#Btn-whatBePrpose').click(function(){
        $('.filter ul li a').removeClass('filter-active');
        $(this).find('a').addClass('filter-active');
        $('#whatBePrpose').show(function(){
            if($('.tracker-individual-container').length <= 0){
                var carousel = $("#carousel").featureCarousel({
                });

                $("#but_prev").click(function () {
                  carousel.prev();
                });
                $("#but_pause").click(function () {
                  carousel.pause();
                });
                $("#but_start").click(function () {
                  carousel.start();
                });
                $("#but_next").click(function () {
                  carousel.next();
                });
            }
        });
//        $('#Mobile, #Video, #creatives').hide();
         $('html, body').animate({
                scrollTop: $("#whatBePrpose").offset().top - 50
            }, 1000);

    });
    $('#Btn-Mobile').click(function(){
        $('.filter ul li a').removeClass('filter-active');
        $(this).find('a').addClass('filter-active');
        $('#Mobile').show(function(){
            var swiper = new Swiper('.swiper-testimonial', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                slidesPerView: 2,
                autoplay:false,
                speed:1500,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                // Responsive breakpoints
                breakpoints: {
                  // when window width is <= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetweenSlides: 5
                  },
                  // when window width is <= 480px
                  480: {
                    slidesPerView: 1,
                    spaceBetweenSlides: 20
                  },
                  // when window width is <= 640px
                  640: {
                    slidesPerView: 1,
                    spaceBetweenSlides: 30
                  },
                  // when window width is <= 768px
                  768: {
                    slidesPerView: 2,
                    spaceBetweenSlides: 10
                  }
                }
            });
        });
//        $('#whatBePrpose, #Video, #creatives').hide();

        $('html, body').animate({
                scrollTop: $("#Mobile").offset().top - 50
            }, 1000);
    });
    $('#Btn-Video').click(function(){
        $('.filter ul li a').removeClass('filter-active');
        $(this).find('a').addClass('filter-active');
        $('#Video').slideToggle();
//        $('#Mobile, #whatBePrpose, #creatives').hide();

        $('html, body').animate({
                scrollTop: $("#Video").offset().top - 50
            }, 1000);
    });
    $('#Btn-creatives').click(function(){
        $('.filter ul li a').removeClass('filter-active');
        $(this).find('a').addClass('filter-active');
        $('#creatives').show(function(){
            var swiper = new Swiper('.swiper-testimonial', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                slidesPerView: 2,
                autoplay:false,
                speed:1500,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                // Responsive breakpoints
                breakpoints: {
                  // when window width is <= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetweenSlides: 5
                  },
                  // when window width is <= 480px
                  480: {
                    slidesPerView: 1,
                    spaceBetweenSlides: 20
                  },
                  // when window width is <= 640px
                  640: {
                    slidesPerView: 1,
                    spaceBetweenSlides: 30
                  },
                  // when window width is <= 768px
                  768: {
                    slidesPerView: 2,
                    spaceBetweenSlides: 10
                  }
                }
            });
        });
//        $('#Mobile, #whatBePrpose, #Video').hide();

//        setInterval(function(){
            $('html, body').animate({
                scrollTop: $("#creatives").offset().top - 50
            }, 1000);
//        }, 1000);
    });

    $('input').on('blur', function(){
        //console.log($(this).val());
        let parentId = $(this).parents('form').attr('id');
        if($(this).val() == ""){
            if(parentId != 'contactForm'){
                if( $(this).parents('.mobwd').find('.input-group').next('span').hasClass('form_error') == false){
                    if($(this).hasClass('reqResume') > 0){
                        var labelText = $(this).attr('name');
                        $(this).parent().parent().parent().parent().append('<span class="form_error">Please Upload your '+labelText+'.</span>');
                    }else{
                        var labelText = $(this).attr('name');
                        $(this).parent().parent().append('<span class="form_error">Please enter '+labelText+'.</span>');
                    }
                }
            }else{
                if( $(this).parents('.left-col').find('span').hasClass('contact_error') == false || $(this).parents('.right-col').find('span').hasClass('contact_error') == false){
                    if($(this).hasClass('contactFile') > 0){
                    }else{
                        var labelText = $(this).attr('name');
                        $(this).parent().append('<span class="contact_error">Please enter '+labelText+'.</span>');
                    }
                }
            }
        }else{
            $(this).parent().parent().find('.form_error').remove();
        }
    })

    $('input').on('keyup', function(){
        //console.log($(this).val());
        if($(this).val() != ""){
            $(this).parent().parent().find('.form_error').remove();
        }
    })


    /***Job form submit***/
    //apply direct
    $('.formSubmit').click(function(){
        $('.careerWaiting, .careerSuccess, .careerFailure').hide()
        $('.form_error').remove();
        var formName = $(this).parents('.jobForm').attr('id');

        var hasError = false;
        $('#'+formName+ ' .requiredField').each(function() {
            if($.trim($(this).val()) == '') {
                if($(this).hasClass('selectField') > 0){
                    var labelText = $(this).attr('name');
                    $(this).parent().parent().append('<span class="form_error">Please select a '+labelText+' option.</span>');
                    hasError = true;
                }if($(this).hasClass('reqResume') > 0){
                    var labelText = $(this).attr('name');
                    $(this).parent().parent().parent().append('<span class="form_error">Please Upload your '+labelText+'.</span>');
                    hasError = true;
                }else{
                    var labelText = $(this).attr('name');
                    $(this).parent().parent().append('<span class="form_error">Please enter '+labelText+'.</span>');
                    hasError = true;
                }
            }else if($(this).hasClass('reqResume')) {
                var valid = /^.*\.(doc|docx|DOC|DOCX|pdf|PDF|txt|TXT)$/;
                if(!valid.test($.trim($(this).val()))) {
                    var labelText = $(this).attr('name');
                    $(this).parent().parent().parent().append('<span class="form_error">The uploaded file is invalid. Allowed types: PDF, DOCX.</span>');
                    hasError = true;
                }
            }else if($(this).hasClass('sp-character')) {
                var charReg = /^\w+( \w+)*$/;
                if(!charReg.test($.trim($(this).val()))) {
                    var labelText = $(this).attr('name');
                    $(this).parent().parent().append('<span class="form_error">Please enter a valid '+labelText+'.</span>');
                    hasError = true;
                }
            }else if($(this).hasClass('mobilenumber')) {
                var mobileReg = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
                if(!mobileReg.test($.trim($(this).val()))) {
                    var labelText = $(this).attr('name');
                    $(this).parent().parent().append('<span class="form_error">Please enter a valid '+labelText+'.</span>');
                    hasError = true;
                }
            }else if($(this).hasClass('email')) {
                var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                if(!emailReg.test($.trim($(this).val()))) {
                    var labelText = $(this).attr('name');
                    $(this).parent().parent().append('<span class="form_error">Please enter a valid '+labelText+'.</span>');
                    hasError = true;
                }
            }
        });

        if(hasError == false){
            $('.careerWaiting').show().css({"color": "orange", "display": "block"});
            $('#overlayText').text('Sending.. Please Wait!!');
            $('#overlayArea').show();
            
            var post = $('#'+formName).find('#status').val();
            $('#'+formName).prepend($('<input type="hidden" id="jobstatus" name="jobstatus" value="'+post+'"/>'));

            var formElement = document.querySelector('form#'+formName);
            var formData = new FormData(formElement);

            $.ajax({
                type: "post",
                crossDomain: "true",
                async: false,
                cache: false,
                contentType: false,
                enctype: 'multipart/form-data',
                processData: false,
                url : "https://www.postboxcommunications.com/apps/Social/enquiry/postboxcommunications/job.php",
                data: formData,
                beforeSend: function(){ },
                success: function(data){
                    if(data == 'success') {
                        
                        var name = $('#fullName').val().split(" ");
                        if(name.length >= 3){
                            var firstName = name[0];
                            var middleName = name[1];
                            var lastName = name[2];
                        }else{
                            var firstName = name[0];
                            var middleName = "";
                            var lastName = name[1];
                        }
                        var hrmsData = {
                            "ID": "",
                            "FirstName": firstName,
                            "MiddleName": middleName,
                            "LastName": lastName,
                            "MobileNo": $('#phone').val(),
                            "Email": $('#emailID').val(),
                            "ApplyForPostion": $('#job_position_id').val(),
                            "FinalStatus": "",
                            "CreatedBy": "U1",
                            "ResumeTitle": "",
                            "ResumeUrl": "",
                            "Gender": "",
                            "TelephoneNo": "",
                            "DateOfBirth": "",
                            "WorkExperience": "",
                            "AnnualSalary": "",
                            "MaritalStatus": "",
                            "StatusForFresher": "",
                            "CurrentLocation": "",
                            "PrefredLocation": "",
                            "CallStatus": "",
                            "CallTime": "",
                            "ExpectedSalary": "",
                            "NoticePeriod": "",
                            "MonthlySalary": "",
                            "Address1Line1": "",
                            "Address1Line2": "",
                            "Area1": "",
                            "PostalCode1": "",
                            "Address2Line1": "",
                            "Address2Line2": "",
                            "Area2": "",
                            "PostalCode2": "",
                            "Refrence": "",
                            "RefrenceName": "",
                            "Comment": "",
                            "UGCourse": "",
                            "PGCourse": "",
                            "PostPGCourses": "",
                            "AdditionalCourses": "",
                            "EmploymentDetail": "",
                            "GraduateCourse": "",
                            "City": "",
                            "CurrentLoction": "",
                            "PreferredLocation": "",
                            "CurrentDesignation": "",
                            "CurrentEmployer": "",
                            "PostalCode": "",
                            "Area": "",
                            "DOB": "",
                            "PostalAddress": "",
                            "UGCourseFromExcel": "",
                            "PGCourseFromExcel": "",
                            "PostPGCourseFromExcel": "",
                            "DuplicateStatus": "",
                            "AddressID": "",
                            "CommutingProblem": "",
                            "PlannedOccassion": "",
                            "AppliedEarlier": ""
                        }
                        
                        $.ajax({
                            url: 'https://hr.primosuits.in/demo/api/Leads/InsertLeads',
                            type: 'post',
                            dataType: 'json',
                            contentType: 'application/json',
                            data: JSON.stringify(hrmsData),
                            success: function (data) {
                                $('#fullName, #emailID, #phone, #resume, .input-large').val('');
                                $('.careerWaiting, .careerFailure').hide()
                                $('.careerSuccess').show().css({"color": "green", "display": "block"});
                                $('#overlayText').text('Your enquiry has been submitted!!'); 
                                $('#overlayArea').show();
                            },
                        });
                        $('#fullName, #emailID, #phone, #resume, .input-large').val('');
                        $('.careerWaiting, .careerFailure').hide()
                        $('.careerSuccess').show().css({"color": "green", "display": "block"});
                        $('#overlayText').text('Your enquiry has been submitted!!'); 
                        $('#overlayArea').show();
                        
                    }else if(data == 'dataerror') {
                        $('.careerWaiting, .careerSuccess').hide()
                        $('#careerDataFailure').show().css({"color": "red"});
                        $('#overlayText').text('Please fill the required data.') 
                        $('#overlayArea').show();
                    }else if(data == 'alreadyApplied') {
                        $('.careerWaiting, .careerSuccess').hide()
                        $('#alreadyApplied').show().css({"color": "red"});
                        $('#overlayText').text('You have already applied in last 3 months.') 
                        $('#overlayArea').show();
                    }else{
                        $('.careerWaiting, .careerSuccess').hide()
                        $('#careerFailure').show().css({"color": "red", "display": "block"});
                        $('#overlayText').text('Sorry some error occured..Please try again later!!') 
                        $('#overlayArea').show();
                    }
                }
            });

        }

        return false;

    });

    //apply via linkedin
    var path = window.location.pathname.split("/").pop();
    $('.career-linkedin a').attr("href","assets/include/process.php?path="+path);
    $('.career-linkedin a').click(function(event){
//           event.preventDefault();
//        var jobType = $(this).parents('.jobForm').find('#status').val();
//        $('.positionApplied').val(jobType);
//        var loc = $(this).attr("href");
//        window.open(loc, 'href');
//           window.open($(this).attr("href"), "popupWindow", "width=400,height=600,scrollbars=yes");
    });

//    $('.apply-via-linkedin').click(function(){
//        $('.linkedin_error').remove();
//        var formName = $(this).parents('.jobForm').attr('id');
//
//
//        var hasError = false;
//        $('#'+formName+ ' .requiredField').each(function() {
//            console.log($(this).val());
//            if($.trim($(this).val()) == '') {
//                if($(this).hasClass('reqResume') > 0){
//                    var labelText = $(this).attr('name');
//                    labelText = labelText.substring(0, labelText.length - 2);
//                    $(this).parents('.sumit-resume').append('<span class="linkedin_error">Please upload your '+labelText+'.</span>');
//                    $(this).parents('.sumit-resume').css('padding-bottom','15px');
//                    hasError = true;
//                }else{
//                    var labelText = $(this).attr('name');
//                    labelText = labelText.substring(0, labelText.length - 2);
//                    $(this).parents('.sumit-resume').append('<span class="linkedin_error">Please enter '+labelText+'.</span>');
//                    $(this).parents('.sumit-resume').css('padding-bottom','15px');
//                    hasError = true;
//                }
//            }else if($(this).hasClass('reqResume')) {
//                var valid = /^.*\.(doc|docx|DOC|DOCX|pdf|PDF|txt|TXT)$/;
//                if(!valid.test($.trim($(this).val()))) {
//                    var labelText = $(this).attr('name');
//                    labelText = labelText.substring(0, labelText.length - 2);
//                    $(this).parents('.sumit-resume').append('<span class="linkedin_error">Please upload valid '+labelText+'.</span>');
//                    $(this).parents('.sumit-resume').css('padding-bottom','15px');
//                    hasError = true;
//                }
//            }
//        });
//        console.log(hasError);
//
//        if(hasError == false){
//            $('.job_success').html('Sending....Please wait!!!');
//
//            var formElement = document.querySelector('form#'+formName);
//            var formData = new FormData(formElement);
//
//            $.ajax({
//                type: "post",
//                crossDomain: "true",
//                url : "form-submissions.php",
//                data: data,
//                dataType :'html',
//                success: function(result){
//                    if(result == 'success') {
//
//                    }else{
//
//                    }
//                }
//            });
//
//        }
//
//        return false;
//    });
    /***Job form submit end***/

    /***Profile Download form submit***/
    $('.profile-download, .profile-skip').click(function(){
        var typeSelected = $(this).attr('class');

        $('.profile_error').remove();
        var formName = $(this).parents('.profileForm').attr('id');

        if(typeSelected == 'profile-download'){
            var hasError = false;
            $('#'+formName+ ' .requiredField').each(function() {
                if($.trim($(this).val()) == '') {
                    if($(this).hasClass('selectField') > 0){
                        var labelText = $(this).attr('name');
                        $(this).parent().append('<span class="profile_error">Please select a '+labelText+' option.</span>');
                        $(this).parent().css('padding-bottom','15px');
                        hasError = true;
                    }if($(this).hasClass('reqResume') > 0){
                        var labelText = $(this).attr('name');
                        $(this).parent().parent().append('<span class="profile_error">Please Upload your '+labelText+'.</span>');
                        $(this).parent().parent().css('padding-bottom','15px');
                        hasError = true;
                    }else{
                        var labelText = $(this).attr('name');
                        $(this).parent().append('<span class="profile_error">Please enter '+labelText+'.</span>');
                        $(this).parent().css('padding-bottom','15px');
                        hasError = true;
                    }
                }else if($(this).hasClass('reqResume')) {
                    var valid = /^.*\.(doc|docx|DOC|DOCX|pdf|PDF|txt|TXT)$/;
                    if(!valid.test($.trim($(this).val()))) {
                        var labelText = $(this).attr('name');
                        $(this).parent().parent().append('<span class="profile_error">Please Uplad valid '+labelText+'.</span>');
                        $(this).parent().parent().css('padding-bottom','15px');
                        hasError = true;
                    }
                }else if($(this).hasClass('sp-character')) {
                    var charReg = /^\w+( \w+)*$/;
                    if(!charReg.test($.trim($(this).val()))) {
                        var labelText = $(this).attr('name');
                        $(this).parent().append('<span class="profile_error">Please enter a valid '+labelText+'.</span>');
                        $(this).parent().css('padding-bottom','15px');
                        hasError = true;
                    }
                }else if($(this).hasClass('mobilenumber')) {
                    var mobileReg = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
                    if(!mobileReg.test($.trim($(this).val()))) {
                        var labelText = $(this).attr('name');
                        $(this).parent().append('<span class="profile_error">Please enter a valid '+labelText+'.</span>');
                        $(this).parent().css('padding-bottom','15px');
                        hasError = true;
                    }
                }else if($(this).hasClass('email')) {
                    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    if(!emailReg.test($.trim($(this).val()))) {
                        var labelText = $(this).attr('name');
                        $(this).parent().append('<span class="profile_error">Please enter a valid '+labelText+'.</span>');
                        $(this).parent().css('padding-bottom','15px');
                        hasError = true;
                    }
                }
            });
        }else{
            var hasError = false;
            $('#'+formName+ ' .requiredField').each(function() {
                $(this).parent().css('padding-bottom','0px');
            });
        }

        if(hasError == false){
            $('.profile-success').html('downloading....Please wait!!!');

            if(typeSelected == 'profile-download'){
                $('#'+formName+ ' .requiredField').parent().css('padding-bottom','0px');

                var name = $('#'+formName).find('#fullName').val();
                var email = $('#'+formName).find('#emailID').val();
                var phone = $('#'+formName).find('#phone').val();
                var message = $('#'+formName).find('#message').val();

                var data="name="+name+"&email="+email+"&phone="+phone+"&message="+message+"&download-click=1&profile-download=profile-download";

                var formElement = document.querySelector('form#'+formName);
                var formData = new FormData(formElement);

                $.ajax({
                    type: "post",
                    crossDomain: "true",
                    url : "form-submissions.php",
                    data: data,
                    dataType :'html',
                    success: function(result){
                        if(result == 'success') {

                            $.ajax({
                                type: "post",
                                crossDomain: "true",
                                async: false,
                                cache: false,
                                contentType: false,
                                enctype: 'multipart/form-data',
                                processData: false,
                                url : "https://www.postboxcommunications.com/apps/Social/enquiry/postboxcommunications/service.php",
                                data: formData,
                                beforeSend: function(){ },
                                success: function(data){
                                    if(data == 'success') {
                                        $('#fullName, #emailID, #phone, #message').val('');
                                        $('.profile-success').html('');
                                        $('#profileForm').hide();
                                        $('.successful_download').fadeIn();
//                                        window.location.href = 'uploads/file.doc';
                                        document.getElementById('downloadProfile').click();
                                    }else{
                                        $('#fullName, #emailID, #phone, #message').val('');
                                        $('.profile-success').html('Sorry some error occured. Please try again later!');
                                    }
                                }
                            });

                        }else{
                            $('#fullName, #emailID, #phone, #message').val('');
                            $('.profile-success').html('Sorry some error occured. Please try again later!');
                        }
                    }
                });

            }else{
                var data="skip-click=1&profile-download=profile-download";

                $.ajax({
                    type: "post",
                    crossDomain: "true",
                    url : "form-submissions.php",
                    data: data,
                    dataType :'html',
                    success: function(result){
                        if(result == 'success') {
                            $('#fullName, #emailID, #phone, #message').val('');
                            $('.profile-success').html('');
                            $('#profileForm').hide();
                            $('.successful_download').fadeIn();
//                            window.location.href = 'uploads/file.doc';
                            document.getElementById('downloadProfile').click();
                        }else{
                            $('#fullName, #emailID, #phone, #message').val('');
                            $('.profile-success').html('Sorry some error occured. Please try again later!');
                        }
                    }
                });
            }
        }

        return false;

    });

    setInterval(function(){
        if($('#DownloadProfile:visible').length == 0){
            $('#profileForm').show();
            $('.successful_download').hide();
        }
    }, 1000);
    /***Profile Download form submit end***/

    $(document).on('scroll',function(){
        if($(window).width() > 736){
            var url = window.location.href;
            if(url.indexOf('job-opening.html') == -1){
                if($(this).scrollTop() > 1){
                    $('header').addClass('sticky');
                }   else{
                    $('header').removeClass('sticky');
                }
            }
        }
    });
    //flite js top start here//
    $(function() {
        //Initialize filterizr with default options
        if($('.filtr-container').length > 0){
            $('.filtr-container').filterizr();
        }
//        $('.industry-filters li').click(function(){
//            var dataFilterVal = $(this).attr('data-filter');
//            $(".mobslider [data-category]").hide();
//            $(".mobslider [data-category=" + dataFilterVal + "]").show();
//        });
    });
    //flite js top End here//

 });


 function isNumber(evt) {
       evt = (evt) ? evt : window.event;
       var charCode = (evt.which) ? evt.which : evt.keyCode;
       if (charCode > 31 && (charCode < 48 || charCode > 57)) {
           return false;
       }
       return true;
   }


(function($){
     if($('.mcustomscroll').length > 0){
        $(window).on("load",function(){
            $(".mcustomscroll").mCustomScrollbar();
        });
     }
})(jQuery);


$(document).on('click', '.popgetlink', function(event){
    event.stopPropagation();
    var listboxwidth = $(this).next('.commonlistbox').width();
    $(this).next('.commonlistbox').width(listboxwidth);
    var currentslide = $(this).next('.commonlistbox');
    $('.commonlistbox').not(currentslide).hide();
    currentslide.fadeToggle();
});
$(document).click(function(){
    if($('.commonlistbox').is(':visible')){
        $('.commonlistbox').hide();
    }
});
$('.getlist li').click(function(){
    $('.commonlistbox').hide();
    if($('.getyour-quote-popup').length > 0) {
        $(this).parents('.block-center').parent().next('div').fadeIn();
    }
    var livalue = $(this).text();
    var outputValue = $(this).parents('.commonlistbox').prev('.getlink');
    $(this).addClass('active').siblings().removeClass('active');
    outputValue.text(livalue);
});

$(document).on('click', '#overlayArea', function(){
   $('#overlayArea').hide(); 
});


//Clients login search area for All pages
new UISearch( document.getElementById( 'sb-search' ) );
