//afvinken van todos
$("ul").on("click", "li", function(){
   $(this).toggleClass("completed")
});

//Delete functie
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Invoer nieuwe tekst
$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
      var todoText = $(this).val();
      $(this).val("");
      $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});

$("#plus").click(function(){
	$("input[type='text']").fadeToggle();
});