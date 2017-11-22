$(document).ready(function() {
  $('form').submit(function(event) {
    var value = $('input').val();
    $('.todo-list').prepend('<li>' + value + '</li>');
    $('input').val('');
    event.preventDefault();
  });

  $('h1').click(function() {
    $(this).after('<h2>Desde mac</h2>')
  })
});
