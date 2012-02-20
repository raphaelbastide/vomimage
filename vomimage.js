(function($){
    $(document).ready(function() {

        var bunch    = 2, // Number of images called on click
            maxRound = 3, // Maximum click number before hiding first images
            fadeInSpeed  = 300,
            fadeOutSpeed = 300,
            hideOnDblclick = false, // Hide on double click
            imgRotation  = true, // If true, images are displayed with a angle
            customImgSize  = true, // If true, define a custom size for images
                mimgw = 200, // Maximum image width 
                mimgh = 200; // Maximum image height
                enlargeOnClick = true;

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
            if (customImgSize) {    
                $this.removeAttr('width').removeAttr('height');
                $this.css({'max-width':mimgw+'px','max-height':mimgh+'px'});
                posx = ((Math.random() * (docw - mimgw)-40).toFixed());
                posy = ((Math.random() * (doch - mimgh)+ 40).toFixed());
                if (enlargeOnClick){
                    var large = false;
                    $this.click(function(){
                        if (!large){
                            $this.css('max-width','').css('max-height','');
                            $this.addClass('large');
                            large = true;
                        }else{
                        $this.css({
                                'max-width':mimgw+'px',
                                'max-height':mimgh+'px'
                            });
                            $this.removeClass('large');
                            large = false;
                        }
                    });                                            
                }
            }else{
                imgw = $this.attr('width');
                imgh = $this.attr('height');
                posx = ((Math.random() * (docw - imgw)-40).toFixed());
                posy = ((Math.random() * (doch - imgh)+ 40).toFixed());
            }
            
            // Rotation
            function direction() {
                var choice = ['-', '+'];
                return choice[Math.floor(Math.random() * choice.length)];
            }
            if (imgRotation){
                var rotation = (Math.random() * 30);
                $this.css({'-webkit-transform': 'rotate(' + direction() + rotation + 'deg)', '-moz-transform': 'rotate(' + direction() + rotation + 'deg)'});
            }
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
            for (var i=0; i < bunch; i++) {
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

        // Hide on double click
        if (hideOnDblclick){
            allImg.dblclick(function(){
               $(this).hide();
            });
        }
    });
})(jQuery);
