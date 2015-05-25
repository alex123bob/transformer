var Template = Template || {};

Template.contactEntry = [
	'<div class="stimulus"></div>',
	'<div class="response">',
		'<div class="slickCt">',
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
	$('.response>.slickCt').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		// autoplaySpeed: 2000,
		prevArrow: false,
		nextArrow: false,
		dots: true,
		touchThreshold: 200
	});
});