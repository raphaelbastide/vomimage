# Vomimage

Junk image gallery.

## How it works
Vomimage reads, displays and load the content of an image folder simlpy by clicking on a fat button. This project needs to be cleaned but works fine.

## Customize
Chose the directory you want to browse images from in index.php
    $directory = "images/";

### Params
In vomimage.js

- bunch // Number of images called on click
- maxRound // Maximum click number before hiding first images
- fadeInSpeed
- fadeOutSpeed
- hideOnDblclick // Hide on double click
- customImgSize // If true, define a custom size for images
 - mimgw // Maximum image width 
 - mimgh // Maximum image height