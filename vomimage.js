(function($){
    $(document).ready(function() {

        var bunch    = 4, // Number of images called on click
            maxRound = 5, // Maximum click number before hiding first images
            fadeInSpeed = 300,
            fadeOutSpeed = 300,
            imgw = 200, // Maximum image width 
            imgh = 200; // Maximum image height

        // Initialisation
        $('#vomimage img:not([src])').hide();
        var allImg = $('#vomimage img');
        allImg.draggable();
        
        // Images position
        var $window = $(window),
            docw = $window.width(),
            doch = $window.height();
        allImg.each(function() {
            var $this = $(this);
            $this.css({'max-width':imgw+'px','max-height':imgh+'px'});
            posx = ((Math.random() * (docw - imgw)-40).toFixed());
            posy = ((Math.random() * (doch - imgh)+ 40).toFixed());
            $this.css({
                'left':posx+'px',
                'top':posy+'px'
            });
        });

        // Display piles of images (feed button)
        var j = 0;
        $('#feed').click(function(){
            var emptyImg = $('#vomimage img:not([src])');
            var visibleImg = $('#vomimage img:[src]');
            var vImg = visibleImg.not('.hidden');
            for (var i=0; i < 4; i++) {
                im = $(emptyImg[i]);
                dsrc = im.attr('data-src');
                im.attr('src', dsrc);
                im.fadeIn(fadeInSpeed);
            }
            j++;
            if (j >= maxRound){
                for (var k = 0; k < bunch; k++) {
                    im = $(vImg[k]);
                    im.fadeOut(fadeOutSpeed);
                    im.addClass('hidden');
                }
            }
        });
    });
})(jQuery);
