<?php

  if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $telegram = $_POST["telegram"];
    $website = $_POST["website"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $budget = $_POST["budget"];
    $message = $_POST["message"];

    $to = "slimnation2@gmail.com";
    $subj = "New contact form submission";
    // $body = "Name: $name\nTelegram: $telegram\nWebsite: $website\nEmail: $email\nSubject: $subject\nBudget: $budget\nMessage: $message";
    $headers = [
      "From" => "slimnatiom.com.ua",
      "Content-type" => "text/html; charset=utf8"
    ];

    $body = '
    <html>
    <body>
    <center>
    <table border="1" cellpadding="6" sellspacing="0" width="90%" bordercolor="#DBDBDB">
    <tr>
    <td colspan="2" align="center" bgcolor="#E4E4E4"><b>Information</b></td>
    </tr>';
    $body .= '
    <tr>
    <td><b>Name</b></td>
    <td>'. $name .'</td>
    </tr>
    <tr><td><b>Teleram</b></td>
    <td>'. $telegram .'</td>
    </tr>
    <tr>
    <td><b>Website</b></td>
    <td>'. $website .'</td>
    </tr>
    <tr>
    <td><b>Email</b></td>
    <td>'. $email .'</td>
    </tr>
    <tr>
    <td><b>Subject</b></td>
    <td>'. $subject .'</td>
    </tr>
    <tr>
    <td><b>Budget</b></td>
    <td>'. $budget .'</td>
    </tr>
    <tr>
    <td><b>Message</b></td>
    <td>'. $message .'</td>
    </tr>
    ';

    mail($to, $subj, $body, $headers);
}
?>

