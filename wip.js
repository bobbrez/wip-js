$(document).ready(function() {

  var wip_status = [0, 0, 0, 0, 0, 0, 0, 0, 0 ,0];

  jQuery.expr[':'].regex = function(elem, index, match) {
      var matchParams = match[3].split(','),
          validLabels = /^(data|css):/,
          attr = {
              method: matchParams[0].match(validLabels) ? 
                          matchParams[0].split(':')[0] : 'attr',
              property: matchParams.shift().replace(validLabels,'')
          },
          regexFlags = 'ig',
          regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
      return regex.test(jQuery(elem)[attr.method](attr.property));
  }

  wipit = function(e, index) {
    switch(wip_status[index]){
      case 0:
        e.addClass('highlight');
        e.removeClass('hidden');
        break;
      case 1:
        e.addClass('hidden');
        break;
      default:
        e.removeClass('hidden');
        e.removeClass('highlight');
    }
    wip_status[index] = (wip_status[index] + 1) % 3;
  }

  $('html').keydown(function(e) {
    if(e.ctrlKey) {
      element = null;
      index = 0;

      console.log(e.which);

      if(e.which > 47 && e.which < 58) {
        index = e.which - 48;
        element = $('.wip_' + index);
      }

      if(e.which === 87){
        element = $('.wip');
      }

      if(e.which === 80){
        element = $('.piw');
      }

      if(element) {
        wipit(element, index);
      }
    }
  });

  $(':regex(class,^wip_[1-9])').addClass('wip');
  $(':regex(class,^piw_[1-9])').addClass('piw');
});
