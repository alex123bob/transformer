var Template = Template || {};

Template.contactEntry = [
	'<div class="stimulus"></div>',
	'<div class="response">',
		'<div class="slickCt">',
			'<div class="questionCt autoplay slider">',
				'<div class="text_option">Listen.</div>',
				'<div class="text_option">Stand up.</div>',
				'<div class="text_option">Raise your hand.</div>',
				'<div class="text_option">Be quiet.</div>',
				'<div class="text_option">Sit down.</div>',
			'</div>',
			'<div class="questionCt autoplay slider">',
				'<div class="text_option"></div>',
				'<div class="text_option"></div>',
				'<div class="text_option"></div>',
				'<div class="text_option"></div>',
				'<div class="text_option"></div>',
			'</div>',
			'<div class="questionCt autoplay slider">',
				'<div class="text_option"></div>',
				'<div class="text_option"></div>',
				'<div class="text_option"></div>',
				'<div class="text_option"></div>',
				'<div class="text_option"></div>',
			'</div>',
		'</div>',
	'</div>'
].join('\n');

$(function (){
	$('.carrier').append(Template.contactEntry);
	$('.stimulus').css('background', 'url(./image/mediaresources/test1.png) no-repeat center center');
	$('.response>.slickCt').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		// autoplaySpeed: 2000,
		// prevArrow: false,
		// nextArrow: false,
		dots: true,
		touchThreshold: 200,
		swipe: false,
		mobileFirst: true
	});

	$('.response>.slickCt').on('beforeChange', function (){
	});
});