$(document).ready(function() {
  var $items = $(".items ul").find(".item");
  var $buttons = $(".buttons");
  var tagged = {};

  $items.each(function() {
    var item = this;
    var tags = $(this).data('tags');

    if (tags) {
      tags.split(",").forEach(function(tag) {
        if (tagged[tag] == null)
          tagged[tag] = [];
        tagged[tag].push(item);
      });
    }

  });

  $('<button>all</button>').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
    $items.hide().show();
  }).appendTo($buttons).addClass('active');

  $.each(tagged, function(tag) {
    var $button = $('<button>' + tag + '</button>');
    $button.on('click', function() {
      $button.addClass('active').siblings().removeClass('active');
      $items.hide().filter(tagged[tag]).show();
    }).appendTo($buttons);
  });

});