<?
$kuda='contact@primstudio.net';//куда отправлять почту?
$zagolovok='Message from site primstudio.net';
$headers='Content-type: text; charset="utf-8"';

if (isset($_POST['ok'])){
	//если существует переменная, значит начнем получать информацию из формы
	$name1=$_POST['name1'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$text=$_POST['text'];

	$messages=$text."\n".$email."\n".$phone."\n".$name1;

	if (mail($kuda,$zagolovok,$messages,$headers)){
	header("Location: http://primstudio.net/дизайн-интерьера/итальянская-элитная-мебельsent.shtml");
}
	else 
          {
          header("Location: http://primstudio.net/дизайн-интерьера/итальянская-элитная-мебельnosent.shtml");
          
          }
	
	}


?>
