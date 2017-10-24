$(function() {
  $("form#transportation").submit(function(event) {
    event.preventDefault();

    $("#work-responses").show();
    $("input:checkbox[name=work]:checked").each(function(){
      var workMode = $(this).val();
      $("#work-responses").append(workMode + "<br>");
    });

    $("#fun-responses").show();
    $("input:checkbox[name=fun]:checked").each(function(){
      var funMode = $(this).val();
      $("#fun-responses").append(funMode + "<br>");
    });
    $("#transportation").hide();
  });
});
