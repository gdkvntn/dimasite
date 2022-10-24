<?php 
use PHPMailer/PHPMailer/PHPMailer;
use PHPMailer/PHPMailer/Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer,php'

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru','phpmailer/language/');
$mail->isHTML(true);

$mail->setFrom('asdsa@mail.com','asdasd');
$mail->addAddress('antonhudkou@gmail.com');

$body = '<h1>Hello</h1>';

$body.=$_POST['name'];

if(!$mail->send()){
    $message ='error';
}else{
    $massage = 'ok';
}

$response =['message'=>$message];

header('Content-type: application/json');
echo json_encode($response)
?>