$(document).ready(function() {

  var wip_status = 0;

  $('html').keydown(function(e) {

    var codeForW = 87;
    if (e.ctrlKey && e.which === codeForW) {
      switch(wip_status){
        case 0:
          $('.wip').addClass('highlight');
          $('.wip').removeClass('hidden');
          break;
        case 1:
          $('.wip').addClass('hidden');
          break;
        default:
          $('.wip').removeClass('hidden');
          $('.wip').removeClass('highlight');
      }
      wip_status = (wip_status + 1) % 3;
    }
  });
});
