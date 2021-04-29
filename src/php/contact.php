<?php

/** 1. MAIN SETTINGS
 *******************************************************************/


// ENTER YOUR EMAIL
$emailTo = "yourmail@example.com";


// ENTER IDENTIFIER
$emailIdentifier = "Message sent via contact form from " . $_SERVER["SERVER_NAME"];


/** 2. MESSAGES
 *******************************************************************/


// ERROR OR EMPTY FIELD
$errrorEmptyField = "* This Field is required!";


// ERROR FOR INVALID EMAIL
$errrorEmailInvalid = "* This Email is Invalid!";


// SUCCESS MESSAGE
$successMessage = "* The Email was Sent Successfully!";


/** 3. MAIN SCRIPT
 *******************************************************************/

function send_error($response){
    http_response_code(500);
    echo json_encode($response);
    exit;
}

function send_success($response){
    http_response_code(200);
    echo json_encode($response);
    exit;
}

if ($_POST) {

    $name = addslashes(trim($_POST["name"]));
    $clientEmail = addslashes(trim($_POST["email"]));
    $message = addslashes(trim($_POST["message"]));
    $fhp_input = addslashes(trim($_POST["phone"]));

    $response = array("success" => true, "errors" => array());

    if ($name == "") {
        $response["success"] = false;
        $response["errors"]["name"] = "Please provide your name";
    }

    if (!filter_var($clientEmail, FILTER_VALIDATE_EMAIL)) {
        $response["success"] = false;
        $response["errors"]["email"] = "Please provide a valid Email";
    }

    if ($message == "") {
        $response["success"] = false;
        $response["errors"]["message"] = "Please type a message";
    }

    if ($fhp_input != "") {
        $response["success"] = false;
        $response["errors"]["any"] = "Unknown error";
    }

    if ($response["success"]) {
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: " . $name . " <" . $clientEmail . ">\r\n";
        $headers .= "Reply-To: " . $clientEmail;
        mail($emailTo, $emailIdentifier, $message, $headers);

        send_success($response);
    } else {
        send_error($response);
    }
    $response["success"] = false;
    send_error($response);
}

?>
