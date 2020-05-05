$(document).ready(function(){
    console.log("Page chargée.");

    // VARIABLES GLOBALES
    var $mainMenuItems = $('#main-menu ul').children('li');
        totalMainMenuItems = $mainMenuItems.length,
        openedIndex =  -1;

    // FONCTIONS    
    function init() {

        $mainMenuItems.children('.images').click(function(){
            console.log("Image cliquée");

            var newIndex = $(this).parent().index(),
                $item = $mainMenuItems.eq(newIndex);

            if (openedIndex === newIndex) {
                animateItem($item, false, 250)
                openedIndex = -1;
            }
            else {
                if (validIndex(newIndex)) {
                    var $item_toClose = $mainMenuItems.eq(openedIndex);
                    animateItem($item_toClose, false, 250);
                    
                    animateItem($item, true, 250);
                    openedIndex = newIndex;        
                }
            }
        });
    };

    function validIndex(indexToCheck) {

        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
    }
    
    function animateItem($item, toOpen, speed) {

        var $colorImage = $item.find('.color'),
            itemParam = toOpen ? {width:'420px'} : {width:'140px'}, 
            colorImageParam = toOpen ? {left:0} : {left:'140px'};

        $colorImage.animate(colorImageParam, speed);
        $item.animate(itemParam, speed);
    }

    // PROGRAMME
    init();

});