$(document).ready(function(){
if ($('#testimonial_slideshow').length > 0) {
					$('#testimonial_slideshow').cycle({ 
						fx: 'scrollHorz',
						speed: 600,
						randomizeEffects: true, 
						timeout: 6000, 
						cleartype:  true,
                        cleartypeNoBg:  true,
                        next:'#slideNext', 
						prev:'#slidePrev'
					});
				}
		}
);			
			