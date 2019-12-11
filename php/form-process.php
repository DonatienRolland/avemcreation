<?php

$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Un nom est obligatoire ";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Un email est obligatoire ";
} else {
    $email = $_POST["email"];
}

// MSG SUBJECT
if (empty($_POST["msg_subject"])) {
    $errorMSG .= "Un sujet est obligatoire ";
} else {
    $msg_subject = $_POST["msg_subject"];
}


// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Un message est obligatoire ";
} else {
    $message = $_POST["message"];
}


$EmailTo = "erwan@avemcreation.com";
$Subject = "New Message Received";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Subject: ";
$Body .= $msg_subject;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>