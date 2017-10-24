$(function() {
  $("form#transportation").submit(function(event) {
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work]:checked").each(function(){
      var workMode = $(this).val();
      $("#work-responses").append(workMode + "<br>");
    });
    $("#transportation").hide();
  });
});
