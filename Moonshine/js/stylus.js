var stickyNav = new Waypoint.Sticky({
  element: $('.site-nav')[0],
	direction: 'down right',
	stuckClass: 'stuck',
	wrapper: false
});

var stickyHeader = new Waypoint.Sticky({
  element: $('.site-header')[0],
	direction: 'down right',
	stuckClass: 'stuck',
	wrapper: false
});

/* Scroll Highlights and Actives */
$(function() {
  var sections = $('section');
  var navigation_links = $('nav a');
  var font_demo = $('.font-demo');

  sections.waypoint({
    handler: function(event, direction) {
      var active_section;
      active_section = $(this);
      active_id = active_section[0].element.id;
      active_element = active_section[0].element;

      if (direction === 'up') active_section = active_section.prev();

      var active_link = $('nav a[href="#' + active_id + '"]');

      console.log(active_id);

      navigation_links.parent().removeClass('selected');
      active_link.parent().addClass('selected');

      sections.removeClass('current');
      $('#' + active_id).addClass('current');

      window.location.hash = active_id;

      $('.site-header h1').html(function() {
        var name = $('#' + active_id).data('title');
        return name
      })
    }
  });

  navigation_links.on('click', function(event) {
    event.preventDefault();
    $.scrollTo(
      $(this).attr("href"),
      {
        duration: 500,
        //offset: { 'left':0, 'top':-0.15*$(window).height() }
      }
    );
  });

  for (var i = 100; i < 900; i+=200) {
  	var line = $('<p>').text('The quick brown fox jumps over the lazy dog.').css('font-weight', i);
  	font_demo.append(line);
  	font_demo.append(line.clone().css('font-style', 'italic'));
  };
});

$(document).ready(function() {
	//Color swatch section
	$('.colorbox').on('click', function(event) {
		event.preventDefault();
		$(this).find('input').show().focus();
		$(this).find('span').hide();
	});
	$('.colorbox input').on('change', function(event) {
		event.preventDefault();
		$(this).siblings('.swatch').css('background-color', $(this).val());
		$(this).siblings('span').text($(this).val());
	});
	$('.colorbox input').on('blur', function(event) {
		$(this).hide();
		$(this).siblings('span').show();
	});
	//Font demo section
	$('.font-demo h2').on('click',function(event) {
		$(this).hide();
		$(this).siblings('input').show().focus();
	});
	$('.font-demo input').on('change',function(event) {
		$(this).parents('.font-demo').css('font-family', $(this).val());
		$(this).hide();
		$(this).siblings('h2').text($(this).val()).show();
	});
});
