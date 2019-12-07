<?php
// Загружаем данные из файла в строку
$string = file_get_contents("user.json");

// Превращаем строку в объект
$data = json_decode($string);

// Отлавливаем ошибки возникшие при превращении
switch (json_last_error()) {
  case JSON_ERROR_NONE:
    $data_error = '';
    break;
  case JSON_ERROR_DEPTH:
    $data_error = 'Достигнута максимальная глубина стека';
    break;
  case JSON_ERROR_STATE_MISMATCH:
    $data_error = 'Неверный или не корректный JSON';
    break;
  case JSON_ERROR_CTRL_CHAR:
    $data_error = 'Ошибка управляющего символа, возможно верная кодировка';
    break;
  case JSON_ERROR_SYNTAX:
    $data_error = 'Синтаксическая ошибка';
    break;
  case JSON_ERROR_UTF8:
    $data_error = 'Некорректные символы UTF-8, возможно неверная кодировка';
    break;	
  default:
    $data_error = 'Неизвестная ошибка';
    break;
}

// Если ошибки есть, то выводим их
if($data_error !='') echo $data_error;

// Присваиваим данные переменным

$elektroshchity = $data->elektroshchity;
$tekh_zadaniya = $data->tekh_zadaniya;
$domov_elektroficirovanno = $data->domov_elektroficirovanno;
$stolbov_trubostoek = $data->stolbov_trubostoek;
$kilometrov_provodov = $data->kilometrov_provodov;
$rozetok_vyklyuchatelej = $data->rozetok_vyklyuchatelej;

?>
<!-- Выводим информацию на экран -->

<p><?=$elektroshchity?> Электрощитов нами собрано и подключено</p>
<p><?=$tekh_zadaniya?> Выполнено техзаданий</p>
<p><?=$domov_elektroficirovanno?> Домов электрофицированно под ключ</p>
<p><?=$stolbov_trubostoek?> Столбов и трубостоек установлено</p>
<p><?=$kilometrov_provodov?> Километров проводов уложено</p>
<p><?=$rozetok_vyklyuchatelej?> Розеток и выключателей установлено</p>

