$(function(){
    $(document).ready(function(){
        $('#lastName, #firstName').on('focus', function(){
            $(this).css('border', '1px solid green');
        });
        $('#lastName, #firstName').on('blur', function(){
            $(this).css('border', '1px solid red')
        });
    });
});
