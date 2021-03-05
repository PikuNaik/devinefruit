jQuery.noConflict();
jQuery(document).ready(function($){
								
							
function lightboxPhoto() {
	
	jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
			animationSpeed:'fast',
			slideshow:5000,
			theme:'light_rounded',
			show_title:false,
			overlay_gallery: false
		});
	
	}
	
		if(jQuery().prettyPhoto) {
	
		lightboxPhoto(); 
			
	}
	
	
if (jQuery().quicksand) {

 	// Clone applications to get a second collection
	var $data = $(".portfolio-area").clone();
	
	//NOTE: Only filter on the main portfolio page, not on the subcategory pages
	$('.portfolio-categ li').click(function(e) {
		$(".filter li").removeClass("active");	
		$(".filter li").removeClass("logo");
		$(".filter li").removeClass("smedia");
		$(".filter li").removeClass("brand");
		$(".filter li").removeClass("print");
		// Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
		var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
		
		if (filterClass == 'all') {
			var $filteredData = $data.find('.portfolio-item2');
		} else {
			var $filteredData = $data.find('.portfolio-item2[data-type=' + filterClass + ']');
		}
		$(".portfolio-area").quicksand($filteredData, {
			duration: 600,
			adjustHeight: 'auto'
		}, function () {

				lightboxPhoto();
						});		

		if(filterClass == 'cat-item-1')
		{
			$(this).addClass("logo");
		}
		else if(filterClass == 'cat-item-2')
		{
			$(this).addClass("smedia");
		}
		else if(filterClass == 'cat-item-3')
		{
			$(this).addClass("brand");
		}
		else if(filterClass == 'cat-item-4')
		{
			$(this).addClass("print");
		}
		else
		{
			$(this).addClass("active");
		}
		return false;
	});
	
}//if quicksand

});