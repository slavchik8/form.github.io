<?php
	/*получаем данные*/
	$email = $_POST['email'];
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$message = $_POST['message'];

	/*конструкция для передачи темы письма*/
	$subject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?=";
	$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

	$success = mail("vyacheslav.pankov.97@mail.ru", $subject, $message, $headers);
	echo $success;
?>