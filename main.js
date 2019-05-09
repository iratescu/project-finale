$('.textarea').on('keyup',() =>{
  $('.preview').html($('.textarea').val())
})

$('.font-options').on('change', event =>{
  var preview = $('.preview');
  
  preview.css('font-family', $(event.currentTarget).val())
  preview.prev().css('font-family', $(event.currentTarget).val())
})

$('.font-weight').on('change', event =>{
  $('.preview').css('font-weight',$(event.currentTarget).val())
  $('.title').css('font-weight', $('.font-weight').val())
})

$('.fontsize').on('keyup', () =>{
  $('.preview').css('font-size', $('.fontsize').val()+'px')
    $('.title').css('font-size', $('.fontsize').val()+'px')
})
