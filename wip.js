(function($) {
  $.wip = function(options) {

    // Thanks to James Padolsey for regex parsing
    // original source: http://james.padolsey.com/javascript/regex-selector-for-jquery/
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

    get_status = function(e){
      if(!e.hasClass('hidden') && e.hasClass('highlight')){
        return 'highlighted';
      }

      if(e.hasClass('hidden') && !e.hasClass('highlight')){
        return 'hidden';
      }

      return 'normal';
    }

    var status = 0;
    update = function(e){
      switch(get_status(e)){
        case 'normal':
          e.removeClass('hidden');
          e.addClass('highlight');
          break;
        case 'highlighted':
          e.addClass('hidden');
          e.removeClass('highlight');
          break;
        default:
          e.removeClass('hidden');
          e.removeClass('highlight');
      }

      status = (status + 1) % 3;
    }

    $('html').keydown(function(e) {
      if(e.ctrlKey) {
        console.log(e.which);
        if(e.which === 87){
          update($('.wip'));
        }

        if(e.which === 80){
          update($('.piw'));
        }

        if(!e.shiftKey && (e.which > 47 && e.which < 58)) {
          index = e.which - 48;
          update($('.wip_' + index));
        }

        if(e.shiftKey && (e.which > 47 && e.which < 58)) {
          index = e.which - 48;
          update($('.piw_' + index));
        }
      }
    });

    $(':regex(class,^wip_[1-9])').addClass('wip');
    $(':regex(class,^piw_[1-9])').addClass('piw');

  }
})( jQuery );
