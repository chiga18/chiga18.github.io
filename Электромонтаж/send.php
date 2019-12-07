<?php
$tel = $_POST['tel'];
$tel = htmlspecialchars($tel);
$tel = urldecode($tel);
$tel = trim($tel);

if (mail("denis.chigarev@bk.ru", "Заявка с формы", "Телефон:".$tel." \r\n"))
 {   
       
     echo '<script>
     alert( "Спасибо, Ваша заявка принята!");
    location.href= "http://tmp.t987866c.beget.tech/elektro-montaj/";
  </script>';


} else {
    echo "при отправке сообщения возникли ошибки";
}


?>