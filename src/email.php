<?php
    if (isset($_POST['email']) && !empty($_POST['email'])){
        $nome = addslashes($_POST['nome']);
        $email = addslashes($_POST['email']);
        $assunto = addslashes($_POST['assunto']);
        $mensagem = addslashes($_POST['mensagem']);

        $para = "carlosd_oliveira@hotmail.com";
        $corpo = "Nome: ".$nome."\n".
                 "Email: ".$email."\n".
                 "Mensagem: ".$email;
        $cabecalho = "From: carlosd_oliveira@hotmail.com"."\r\n".
                     "Reply-to: "."\e\n".
                     "X=Mailer:PHP/".phpversion();
        
       if(mail($para, $assunto, $corpo, $cabecalho)){
           echo("Email enviado com sucesso");
       }else{
           echo("Email não pode ser enviado");
       }
    }
?>