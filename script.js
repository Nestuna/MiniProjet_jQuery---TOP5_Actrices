$(document).ready(function(){
    var $mainMenuItems = $('#main-menu ul').children('li'),
        totalMainMenuItems = $mainMenuItems.length,
        openedIndex =  -1,

        init = function() {

            $mainMenuItems.children('.images').click(function(){
                
                var newIndex = $(this).parent().index();
                $item = mainMenuItems.eq(newIndex);
                
            });
        };

});