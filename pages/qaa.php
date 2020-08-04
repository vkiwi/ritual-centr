<!DOCTYPE html>
<html lang="ru" xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ритуал центр | Ритуальные услуги</title>
  <link rel="stylesheet" href="../css/reset.css">
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../css/slider.css">
  <link rel="stylesheet" href="../css/menu.css">
  <link rel="icon" href="../images/icon.png">
  <script src="../js/modernizr.js"></script>
  <link media="screen" href="../demo/styles/demo.css" type="text/css" rel="stylesheet" />

  <!-- ВСЕ ЧТО НИЖЕ ДЛЯ ГАЛЕРЕИ -->
  <script type='text/javascript' src='../gallery/unitegallery/js/jquery-11.0.min.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-common-libraries.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-functions.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-thumbsgeneral.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-thumbsstrip.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-touchthumbs.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-panelsbase.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-strippanel.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-gridpanel.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-thumbsgrid.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-tiles.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-tiledesign.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-avia.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-slider.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-sliderassets.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-touchslider.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-zoomslider.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-video.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-gallery.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-lightbox.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-carousel.js'></script>
  <script type='text/javascript' src='../gallery/unitegallery/js/ug-api.js'></script>
  <link rel='stylesheet' href='../gallery/unitegallery/css/unite-gallery.css' type='text/css' />
  <script type='text/javascript' src='../gallery/unitegallery/themes/default/ug-theme-default.js'></script>
  <link rel='stylesheet' href='../gallery/unitegallery/themes/default/ug-theme-default.css' type='text/css' />

</head>

<body>
  <div class="top" id="top">
    <a class="top-phone" href="tel:+7 920 926-09-57">+7 920 926-09-57</a>
    <a class="top-phone" href="tel:+7 (4922) 37-01-02">+7 (4922) 37-01-02</a>
  </div>
  <!--ХЕДЕР-->
  <?php include 'header.php' ?>

  <main>
    <!--НАВИГАЦИЯ-->
    <?php include 'navigation.php' ?>


    <div class="general generalQaa">
      <div class="general-background">
        <div class="container">
          <h1>~ Раздел в разработке ... ~</h1>


        </div>
      </div>
    </div><!-- general -->

  </main>

 <!-- ФУТЕР -->
 <?php include 'footer.php' ?>

  <!-- МОДАЛЬНОЕ ОКНО ДЛЯ ОТЗЫВА -->
  <div class="modal" id="modal">
    <div class="modal-dialog request modal-dialog__request">
      <button class="modal-dialog__close" id="close">&times;</button>
      <h4 class="modal-dialog__title">Пожалуйста, напишите свой отзыв о нас и мы добавим его на сайт в ближайшее время.
      </h4>
      <!-- <div class="request modal-dialog__request"> -->
      <h2 class="request__header">оставьте отзыв</h2>
      <form action="mail.php" method="POST" id="brif-form-modal">
        <div class="brif-form">
          <input type="text" name="user_name" class="brif-input" placeholder="Ваше имя" required>
        </div>
        <div class="brif-form">
          <textarea class="brif-input-review" required name="user_message" type="text"
            placeholder="Ваш отзыв"></textarea>
        </div>
        <button class="callMe-button">Отправить</button>
      </form>
      <!-- </div> -->
    </div>
    <!-- /.modal-dialog -->
  </div>

  <!-- Не знаю почему, но без этой ссылки перестаёт работать кнопка прокрутки страницы наверх -->
  <a style="display: none;" href="#0" class="cd-add" id="button">Добавить отзыв</a>

  <script type="text/javascript">
    jQuery(document).ready(function () {

      jQuery("#gallery").unitegallery();
      jQuery("#gallery2").unitegallery();
      jQuery("#gallery3").unitegallery();

    });
  </script>

  <script src="js/jquery-2.1.1.js"></script>
  <script src="js/masonry.pkgd.min.js"></script>
  <script src="js/jquery.flexslider-min.js"></script>
  <script src="../js/main.js"></script>
  <script src="js/jquery.validate.min.js"></script>
  <script src="js/jquery.maskedinput.min.js"></script>
  <script src="../js/slider.js"></script>

</body>

</html>