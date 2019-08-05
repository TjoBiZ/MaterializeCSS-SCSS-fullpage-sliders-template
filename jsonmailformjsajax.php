<?php
// Handling data in JSON format on the server-side using PHP
header("Content-Type: application/json");
// build a PHP variable from JSON sent using POST method
$arrayfromjsonmail = json_decode(stripslashes(file_get_contents("php://input")), true);
//Если без парамерта true декодируем json, то получаем объект, а не массив, тогда обращаемся к свойствам соответственным способом
//To access the object in your PHP file, use
//$v->name;
//$v->email;
//$v->subject;
//$v->message;
//echo json_encode($v);

$arrayfromjsonmail["ip"] = $_SERVER['REMOTE_ADDR'];
$arrayfromjsonmail['pageform'] = $_SERVER['HTTP_REFERER'];
$project_name = $arrayfromjsonmail['name']. '. ('. $arrayfromjsonmail['formName'].').'; //Тема письма

/** Начало кода по SMS оповещению **/

require_once 'sms.ru.php';

$smsru = new SMSRU('B406B5AF-D7D7-6F91-D669-B7C659368557'); // Ваш уникальный программный ключ, который можно получить на главной странице

$data = new stdClass();
/* Если текст на номера один */
$data->to = '66800323660,66800343991'; // Номера для отправки сообщения (От 1 до 100 шт за раз). Вторым указан городской номер, по которому будет возвращена ошибка
$data->text = 'Коммерческая недвижимость ' . $arrayfromjsonmail['tel']; // Текст сообщения
/* Если текст разный. В этом случае $data->to и $data->text обрабатываться не будут и их можно убрать из кода */
//$data->multi = array( // От 1 до 100 штук за раз
//	"79533606633" => "Hello World", // 1 номер
//	"74993221627" => "Hello World 2", // 2 номер (указан городской номер, будет возвращена ошибка)
//);
$data->from = 'Forms-BOT'; // Если у вас уже одобрен буквенный отправитель, его можно указать здесь, в противном случае будет использоваться ваш отправитель по умолчанию
// $data->time = time() + 7*60*60; // Отложить отправку на 7 часов
// $data->translit = 1; // Перевести все русские символы в латиницу (позволяет сэкономить на длине СМС)
$data->test = 1; // Позволяет выполнить запрос в тестовом режиме без реальной отправки сообщения
// $data->partner_id = '258350'; // Можно указать ваш ID партнера, если вы интегрируете код в чужую систему
$request = $smsru->send($data); // Отправка сообщений и возврат данных в переменную

if ($request->status == "OK") { // Запрос выполнен успешно
	foreach ($request->sms as $phone => $sms) { // Перебираем массив отправленных сообщений
		if ($sms->status == "OK") {
			$arrayfromjsonmail['smsru'] = "Сообщение на номер +$phone отправлено успешно. ID сообщения: $sms->sms_id. Ваш новый баланс: $request->balance";
		} else {
			$arrayfromjsonmail['smsru'] = "Сообщение на номер +$phone не отправлено. Код ошибки: $sms->status_code. Текст ошибки: $sms->status_text. ";
		}
	}
}
/** Сообщение на телефон тут код заканчивается**/

//Script Foreach
$c = true;

//guard for xss
	function recurse_array_HTML_safe(&$arr) {
		foreach ($arr as $key => $val)
			if (is_array($val))
				recurse_array_HTML_safe($arr[$key]);
			else
				$arr[$key] = htmlspecialchars($val, ENT_QUOTES);
	}

	recurse_array_HTML_safe($arrayfromjsonmail);

$arrayfromjsonmail["ip"] = "<a href=\"https://www.iptrackeronline.com/index.php?ip_address=" . $_SERVER['REMOTE_ADDR'] . "\" target=\"_blank\">Посмотреть где находится IP " . $_SERVER['REMOTE_ADDR'] . "</a>"; // Делаем ссылку, чтобы можно было посмотреть местоположение по IP адресу.
$arrayfromjsonmail["GoogleClientID"] = "<a href=\"https://metrika.yandex.ru/stat/visor?period=week&filter=(EXISTS+ym%3As%3AspecialUser+WITH+(EXISTS(ym%3As%3AparamsLevel1%3D%3D%2527GoogleClientID%2527+and+ym%3As%3AparamsLevel2%3D%3D%2527" . $arrayfromjsonmail["GoogleClientID"] . "%2527)))&id=54243460\" target=\"_blank\">Посмотреть в Яндекс Вебвизоре</a>" . " или " . "<a href=\"https://analytics.google.com/analytics/web/#/report/visitors-user-activity/a142979559w204280393p197703094/_r.userId=" . $arrayfromjsonmail["GoogleClientID"] . "&_r.userListReportStates=%3Fexplorer-table.plotKeys=%5B%5D%2526explorer-table.rowCount=500%2526explorer-table.filter=" . $arrayfromjsonmail["GoogleClientID"] . "&_r.userListReportId=visitors-legacy-user-id\" target=\"_blank\">посмотреть пользователя в Гугл Аналитикс.</a>" . " Уникальный номер Google Client ID = " . $arrayfromjsonmail["GoogleClientID"]; // Делаем ссылку на конкретного пользователя в Гугл Аналитикс и Вебвизор.

		$translateformnamecolumn = [
			'formName' => 'Название формы',
			'name' => 'Имя',
			'tel' => 'Телефон',
			'email' => 'Почтовый адрес',
			'message' => 'Сообщение',
			'datepicker' => 'Дата события',
			'timepicker' => 'Желаемое время',
			'multipleoptions' => 'Несколько опций на выбор из выподающего списка',
			'radiochoice' => 'Одна обязатльная опция Radio',
			'RoomTypeA' => 'Room Type A',
			'RoomTypeB' => 'Room Type B',
			'RoomTypeC' => 'Room Type C',
			'RoomTypeD' => 'Room Type D',
			'RoomTypeE' => 'Room Type E',
			'RoomTypeF' => 'Room Type F',
			'browser' => 'Используемая ОС и браузер',
			'language' => 'Язык браузера и ОС',
			'firstvititedsite' => 'Первое посещение сайта с этого браузера',
			'time' => 'Время у клиента в момент отправления формы и его часовой пояс',
			'countpages' => 'Сколько раз смотрел(а) страницу(ы) сайта',
			'ip' => 'IP адрес',
			'GoogleClientID' => 'Google Client ID и уникальный номер в Яндекс Вебвизор(Предварительно авторизуемся в личные кабинеты).',
			'pageform' => 'Страница с которой отправлена форма',
			'smsru' => 'Статус SMS оповещения мобильного через сервис sms.ru'
//			yandexwebvisor => 'Ссылка на Яндекс Вебвизор '
		];

		$resulttomail = array(); // Делаем результирующий массив на отправку на почту

		function resultdata ($translateformnamecolumn, $arrayfromjsonmail, &$resulttomail) {
			foreach ($arrayfromjsonmail as $key => $value) {
				if ($arrayfromjsonmail[$key] !== '' && $arrayfromjsonmail[$key] !== 'on' && $arrayfromjsonmail[$key] !== false && $arrayfromjsonmail[$key] !== 'false') {
					$resulttomail[$translateformnamecolumn["$key"]] = $value;
				}
			}
		}

		resultdata($translateformnamecolumn, $arrayfromjsonmail, $resulttomail);

	foreach ( $resulttomail as $key => $value ) {
		if ( $value != "" && $key != "formName" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>': '<tr style="background-color: #d4fef2;">') . "
				<td style='padding: 10px; border: #d3cdf8 1px solid; max-width: 250px'><b>$key</b></td>
				<td style='padding: 10px; border: #d3cdf8 1px solid;'>$value</td>
			</tr>
			";
		}
}
$message = "<table style='width: 100%;'>$message</table>";


$mail->Subject = $project_name; //Тема письма
$mail->Body    = $message; //Тело письма
$mail->AltBody = ''; //Тело письма для тех у кого нет HTML формата



use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';


$mail = new PHPMailer(true);

try {
	//Server settings
//	$mail->SMTPDebug = 2;                                       // Enable verbose debug output // С джейсом объектом будет прилетать дебаг не забывать закоментить на рабочей версии, чтобы не быо JS ошибки.
	$mail->CharSet = 'UTF-8';
//	$mail->isSMTP();                                        // Set mailer to use SMTP Enable with SSL 465 port!!!
	$mail->Host       = 'smtp.zoho.com';  // Specify main and backup SMTP servers
	$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
	$mail->Username   = 'info@andamanriviera.com';                     // SMTP username
	$mail->Password   = 'A8yFzdphQhZ3';                               // SMTP password Ge8eSFrQT3Vu
	$mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted 465 ssl
	$mail->Port       = 587;                                    // TCP port to connect tom  465 ssl
	
//	$mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
//	$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
//	$mail->Username   = 'lacktic@gmail.com';                     // SMTP username
//	$mail->Password   = 'Generati0n';                               // SMTP password/	$mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
//	$mail->Port       = 587;                                    // TCP port to connect too
	//Recipients
	$mail->setFrom('lacktic@gmail.com', 'BOT-Forms');
	$mail->addAddress('info@andamanriviera.com', 'BOT-Forms');     // Add a recipient
//	$mail->addAddress('ellen@example.com');               // Name is optional
//	$mail->addReplyTo('info@example.com', 'Information');
//	$mail->addCC('cc@example.com');
//	$mail->addBCC('bcc@example.com');

//	// Attachments
//	$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//	$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

	// Content
	$mail->isHTML(true);                                  // Set email format to HTML
	$mail->Subject = $project_name; //Тема письма
	$mail->Body    = $message; //Тело письма
	$mail->AltBody = ''; //Тело письма для тех у кого нет HTML формата

	$jsonresponse = ['name' => $arrayfromjsonmail["name"],
		'message' => $arrayfromjsonmail["message"]];

	$mail->send();

} catch (Exception $e) {

	$jsonresponse = [$arrayfromjsonmail["name"] => 'Возникла ошибка при отработке функции почты на каком-то из серверов! Попробуйте повторить через минуту или свяжитесь с нами другим способом.'];

}

echo json_encode($jsonresponse);

?>