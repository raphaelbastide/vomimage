<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
  "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <title>vomimage</title>
    <link rel="alternate" type="application/atom+xml" href="@root_path/?/feed/">
    <link rel="stylesheet" href="style.css" type="text/css" media="screen"> 
    <!-- 
        Vomimage is open source, fork it at http://github.com/raphaelbastide/Vomimage/
    -->
  </head>
  <body id="vomimage">
    <div id="feedholder"><button id="feed">+</button></div>
    <div>
    <?php
    $directory = "/images/*/";
    $images = glob("" . $directory . "*.*");
    $imgs = '';
    foreach($images as $image){ $imgs[] = "$image"; }
    
    $imgs = array_slice($imgs, 0, 9999);
    foreach ($imgs as $img) {
        list($width, $height, $type, $attr)= getimagesize($img); 
        echo "<img data-src='$img' width='$width' height='$height' /> \n";
    }
    ?>
    </div>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js" type="text/javascript" charset="utf-8"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="vomimage.js" type="text/javascript" charset="utf-8"></script>
  </body>
</html>