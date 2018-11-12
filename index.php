<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css">
    <meta charset="utf-8">
    <title>game of henks</title>
  </head>
  <body>
    <div class="menu">
      <?php
        $phppath = $_SERVER['DOCUMENT_ROOT'] . "/portfolio/php/";
        include_once($phppath . "/menu.php");
        print($phppath);
      ?>
    </div>
    <br>
    <br>
    <div id="container">
      <canvas id="canvas" width="512" height="512"></canvas>
    </div>
    <button type="button" id="button">start</button>
    <script src="bs.js"></script>
  </body>
</html>
