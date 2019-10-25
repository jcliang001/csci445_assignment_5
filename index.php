<!DOCTYPE html>
<html lang="en">
<head>
 <title>JC's Website</title>
 <meta charset="UTF-8">
 <meta name="description" content="This is the website about me">
 <meta name="keywords" content="HTML,CSS,XML,JavaScript">
 <meta name="author" content="Jiancong Liang">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <link rel="stylesheet" type="text/css" href="csci445.css" />
</head>

<body>
 <div id="wrapper">

  <?php 
  $current_file_name = basename($_SERVER['PHP_SELF']);
  $current_path_name = realpath(dirname(__FILE__));
  
  include("templateHeader.php");?>
 
 <section>
   <h2>Hello!</h2>
    <article>
      <h3>CSCI445</h3>
     This is the website that displaying my finished assignments for CSCI445. If you have any things want me to improve feel free to contact me. My personal contact info is at the bottom of this page.
   </article>
 </section>


</div>
<footer>
<p>&#169; Copy right 2019 Jiancong Liang - My school email address <a href="mailto:jiancongliang@mymail.mines.com">jiancongliang@mymail.mines.com</a></p>
</footer>
<div class="validation_image">
      <img src="images/css.png" alt="css's picture">
      <img src="images/html5.png" alt="html5's picture">
      <img src="images/wcag2A.png" alt="wcag2A's picture">
  </div>
</body>
</html>