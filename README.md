# Vomimage

Punk image gallery.

## How it works
Vomimage reads, displays and loads the content of an image folder. User just needs to click on a fat button.

## Demo

You can <a href="http://lab.raphaelbastide.com/tools/vomimage/demo/">try vomimage online</a>.

## Requirement

- PHP5
- Vomimage doesn't need any database

## Customize
In index.php change the directory you want to browse images from

    $directory = "images/";

### Params
In vomimage.js

- bunch // Number of images called on click
- maxRound // Maximum click number before hiding first images
- fadeInSpeed
- fadeOutSpeed
- hideOnDblclick // Hide on double click
- imgRotation // If true, images are displayed with a angle
- endText // Text displayed when list is over
- customImgSize // If true, define a custom size for images
 - mimgw // Maximum image width 
 - mimgh // Maximum image height
 - enlargeOnClick

## In use

* [http://aude-debout.fr/shoes/](http://aude-debout.fr/shoes/)
* [http://afk.spintank.fr/](http://afk.spintank.fr/)
* [http://nicolaschoye.com/blog/](http://nicolaschoye.com/blog/)
* [http://lab.raphaelbastide.com/tools/vomimage/](http://lab.raphaelbastide.com/tools/vomimage/)

## License

This project is under <a href="http://raphael.mit-license.org/">MIT License</a>
