<?php

// require 'phpmailer/PHPMailerAutoload.php';
require "phpmailer/class.phpmailer.php";
require "phpmailer/class.smtp.php";
// die('ENTRA');

$nombre = $_POST['nombre'];
$email = $_POST['correo'];
$tel = $_POST['telefono'];
$fecha = $_POST['fecha'];
$mensaje = $_POST['mensaje'];

$mail = new PHPMailer;

// $mail->SMTPDebug = 3;                       // Activar o desactivar el modo debug
$mail->isSMTP();                              // Indicar al mailer que use SMTP
$mail->Host = 'dtc030.ferozo.com';  // 'dtc030.ferozo.com'        // Acá va el host SMTP dtc030.ferozo.com mail.juanpabloduette.com.ar
$mail->SMTPAuth = true;                       // Activar la autenticación SMTP
$mail->Username = 'info@juanpabloduette.com.ar';    // La cuenta de correos que vas a utilizar. Tiene que estar creada previamente en el cPanel
$mail->Password = 'Password';             // La clave de esa cuenta de correos
$mail->SMTPSecure = 'ssl';                  // Activar el cifrado TLS, "ssl" también es aceptado
$mail->Port = 465; //587 465 
$mail->CharSet = "utf-8";
$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);   // El puerto de conexión SMTP

$mail->setFrom($email, $nombre);            // El correo desde cual sale el correo y el "nombre" 
$mail->addAddress('info@juanpabloduette.com.ar', 'Mailer');  // Añadir el recipiente
// $mail->addReplyTo('info@juanpabloduette.com.ar', 'Informacion');            // Indicar una cuenta para responder (opcional)
// $mail->addCC('cc@ejemplo.com');                                  // Indicar una cuenta de copia (opcional)
// $mail->addBCC('bcc@ejemplo.com');                                // Indicar una cuenta de copia adicional (ocional)

$mail->isHTML(true);                                             // Indicar que esté activo HTML
$mail->Subject = 'Contacto desde sitio web';
$mail->Body    = '<u><b>Nombre</u>:</b> ' . $nombre . ' <br> <br>
                  <u><b>Email</u>:</b> ' . $email . ' <br> <br>
                  <u><b>Teléfono</u>: </b> ' . $tel . ' <br> <br>
                  <u><b>Fecha</u>: </b> ' . $fecha . ' <br> <br>
                  <u><b>Mensaje</u>: </b> ' . $mensaje . '';
$mail->AltBody = 'Contacto desde sitio web';

if (!$mail->send()) {
    echo 'El mensaje no pudo ser enviado.';
    echo 'Error del Mailer: ' . $mail->ErrorInfo;
    header("Location: error.html");
} else {
    echo '<link href="../css/gracias.css" type="text/css" rel="stylesheet">';
    echo '<link href="https://fonts.googleapis.com/css2?family=League+Gothic&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">';
    echo "<div class='msgphp'><div class='msgphpbox'><b>El mensaje se envió correctamente, te contestaremos a la brevedad.</b><br><br>Redireccionando al sitio web ...<br><br><br><b>The message was sent correctly, we will reply to you as soon as possible.</b><br><br>
    Redirecting to website...<br><br><div class='logoword'>GOOD BIKES ONLY</div></div></div>
         ";
    echo '<script>
        setTimeout(function(){ 
        window.location="index.html"
    }, 2500);
          </script>';
    // echo 'El mensaje se envio correctamente, te contestaremos a la brevedad.';
    // header("Location: gracias.html");
    // echo "<meta http-equiv='refresh' content='0;index.html' />";
    // echo '<script>
    //         setTimeout(function(){ 
    //         window.location="index.html"
    //         }, 3000);
    //       </script>';
}
