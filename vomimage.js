(function($){
    $(document).ready(function() {

        // Initialisation
        $('#vomimage img:not([src])').hide();
        var allImg = $('#vomimage img');
        allImg.draggable();
        
        // Popups position
        var $window = $(window),
            docw = $window.width(),
            doch = $window.height();
        allImg.each(function() {
            var $this = $(this),
//            imgw = $this.width(),
//            imgh = $this.height();
            imgw = "200",
            imgh = "200";
            posx = ((Math.random() * (docw - imgw)-40).toFixed()) ;
            posy = ((Math.random() * (doch - imgh)+ 40).toFixed());
            $(this).css({
                'left':posx+'px',
                'top':posy+'px'
            });
        });

        // Display piles of images (feed button)
        $('#feed').click(function(){
            var emptyImg = $('#vomimage img:not([src])');
            for (var i=0; i < 4; i++) {
                im = $(emptyImg[i]);
                dsrc = im.attr('data-src');
                im.attr('src', dsrc);
                im.fadeIn(300);
            }
            if (emptyImg === 0){
                $('#feed').html('empty')
            }
        });


    });
})(jQuery);
