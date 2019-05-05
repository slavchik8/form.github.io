jQuery(document).ready(function() {

$('#sendMail').on('click', function() {

	/*	
	Записываем в переменные все значения из полей 
	ввода с помощью функции val() и с помощью функции trim() 
	мы удаляем все лишние пробелы в строке */
	var name = $('#name').val().trim(); 
	var email = $('#email').val().trim();
	var phone = $('#phone').val().trim();
	var message = $('#message').val().trim();

	/*Если поля не заполнены, выдаем сообщение об ошибке*/
	if (name == "") {
		$("#errorMess").text("Введите имя");
		return false;
	} else if (email == "") {
		$("#errorMess").text("Введите E-Mail");
		return false;
	} 
	else if (phone == "") {
		$("#errorMess").text("Введите телефон");
		return false;
	} 
	else if (message == "") {
		$("#errorMess").text("Введите сообщение");
		return false;
	} 

	/*Вызываем функцию с сообщением об ошибке*/
	$('#errorMess').text("");

	/*ajax функция передачи данных на обработчик*/
	$.ajax ({
		url: 'ajax/mail.php',
		type: 'POST',
		cache: false,
		data: { 'name': name, 'email': email, 'phone': phone, 'message': message },
		dataType: 'html',
		/*beforeSend: function () {
			$("#sendMail").prop("disabled", true);
		},*/
		success: function (data) {
			$("#sendMail").prop("disabled", false);
		},
	})
});
});