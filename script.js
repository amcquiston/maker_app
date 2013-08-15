// List

$(document).ready(function() {
    
    $(document).keypress(function(e) {
        if(e.which == 13) {
            var toAdd = $('input[name=MAKER]').val();
            $('#list').prepend('<li class="item">' + toAdd + '<div class="remove">x</div></li>');
            $('#MAKER').val('');
            e.preventDefault();
        }
    });
    
    $('li').live('click', function(){
        $(this).toggleClass('done');
    });
    
	$('.remove').live('click', function(){
        $(this).parent().remove();
    });
    
});



// Throw

function print(toAdd) {
    if(typeof toAdd.name == 'undefined') {
        throw 'The task name is missing!'
    } else if (typeof toAdd.complete == 'undefined') {
        throw 'The task status is missing!'
    } else {
        console.log('print this out as a fancy list item with a check next to it if toAdd.complete is true.');
    }
}