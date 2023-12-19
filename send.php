<?php

    $login = $_POST['login'];
    $tel = $_POST['tel'];

    $login = htmlspecialchars($login);
    $tel = htmlspecialchars($tel);

    $login = urldecode($login);
    $tel = urldecode($tel);

    $login = trim($login);
    $tel = trim($tel);

        echo 123;

    if(mail("andreilolkek@mail.ru",
            "Новое письмо с сайта",
            "Имя: ".$login."\n".
            "Телефон: ".$tel,
            "From: andreilolkek@mail.ru \r\n")
    ) header("Location: $_SERVER['PHP_SELF']");

?>
