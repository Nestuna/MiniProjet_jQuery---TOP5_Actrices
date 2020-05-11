$(document).ready(function(){
    console.log("Page chargée.");

    // VARIABLES GLOBALES
    var $mainMenuItems = $('#main-menu ul').children('li'),
        $buttonItems = $('.button'),
        totalMainMenuItems = $mainMenuItems.length,
        openedIndex =  0;

    // FONCTIONS    
    function init() {
    // Fonction d'initialisation du programme

    bindEvents(); // On charge les évenements d'animation

    if (validIndex(openedIndex)){
        // Animation de l'item à l'arrivée dans la page
            var $item_Init = $mainMenuItems.eq(openedIndex);
            animateItem($item_Init, 750);
        }
    }

    function bindEvents() {
    // Fonction de mise en place des gestionnaires d'évenements
        $mainMenuItems.children('.images').click(function(){   
            
            checkAndAnimate($(this).parent().index());
        });

        $buttonItems.click(function(event){

            checkAndAnimate($(this).index());
        });
    }
    
    function checkAndAnimate(index) {
        // Fonction principale d'évenements d'animations
        // Verifie d'abord l'index donnée, et effectue les actions correspondantes.
        var newIndex = index,
                $item = $mainMenuItems.eq(newIndex);

        if (openedIndex === newIndex) {
            animateItem($item, false, 250) // On ferme l'item selectionné
            openedIndex = -1;
        }
        else {
            if (validIndex(newIndex)) { // Si un item est ouvert (sinon -1)
                var $item_toClose = $mainMenuItems.eq(openedIndex);
                animateItem($item_toClose, false, 250); // On ferme l'item ouvert
                
                animateItem($item, true, 250); // On ouvre l'item selectionné
                openedIndex = newIndex;        
            }
        }
    } 
    
    function validIndex(indexToCheck) {
    // Verifie si l'index fait partie de la liste
    // Permet de verifier si un item est ouvert, tout en securisant le code

        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
    }
    
    function animateItem($item, toOpen, speed) {
    // Fonction d'ouverture/fermeture d'un item

        var $colorImage = $item.find('.color'),
            itemParam = toOpen ? {width:'420px'} : {width:'140px'}, 
            colorImageParam = toOpen ? {left:0} : {left:'140px'};

        $colorImage.animate(colorImageParam, speed);
        $item.animate(itemParam, speed);
    }

    // PROGRAMME
    init();

});