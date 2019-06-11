//check off specific todos by clicking
$('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');
});

//把已完成事項刪除
$('ul').on('click', 'span', function(event) {
    $(this).parent().fadeOut(1000, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

//新增新的事項
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        var newTodoText = $(this).val();
        $(this).val('');
        //create a new li and add to ul
        $('ul').append("<li><span><i class='fa fa-trash'></i></span>" + newTodoText + "</li>");
    }
});

$('.fa-plus').on('click', function() {
    $("input[type='text']").fadeToggle();
});