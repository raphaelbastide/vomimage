# Vomimage

Junk image gallery.

## How it works
Vomimage reads, displays and load the content of an image folder simlpy by clicking on a fat button. This project needs to be cleaned but works fine.

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
- customImgSize // If true, define a custom size for images
- endText // Text displayed when list is over
 - mimgw // Maximum image width 
 - mimgh // Maximum image height
 - enlargeOnClick
