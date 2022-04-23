<?php
    //     if (isset($_POST['email']) && !empty($_POST['email'])){
    //         $nome = addslashes($_POST['nome']);
    //         $email = addslashes($_POST['email']);
    //         $assunto = addslashes($_POST['assunto']);
    //         $mensagem = addslashes($_POST['mensagem']);



    //         $para = "carlosd_oliveira@hotmail.com";
    //         $corpo = "Nome: ".$nome."\n".
    //                  "Email: ".$email."\n".
    //                  "Mensagem: ".$email;
    //         $cabecalho = "From: carlosd_oliveira@hotmail.com"."\r\n".
    //                      "Reply-to: "."\e\n".
    //                      "X=Mailer:PHP/".phpversion();
            
    //        if(mail($para, $assunto, $corpo, $cabecalho)){
    //            echo("Email enviado com sucesso");
    //        }else{
    //            echo("Email não pode ser enviado");
    //        }
    //     }

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $assunto = $_POST['assunto'];
    $mensagem = $_POST['mensagem'];

    $para = "carlosd_oliveira@hotmail.com";
    $corpo = "
    <html>
        <p><b>Nome: </b>$nome</p>
        <p><b>Email: </b>$email</p>
        <p><b>Mensagem: </b>$mensagem</p>
    </html>";
    
    $cabecalho = "MIME-Version: 1.0\n";
    $cabecalho .= "Content-type: text/html; charset=iso-8859-1\n";
    $cabecalho .= "From: $nome <$email>";

    echo "Email enviado com sucesso"
    // echo "<meta http-equiv='refresh' content='10;URL='>"
?>