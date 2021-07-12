<?php
    $to_email="director@bluoceanstudios.com";
    $subject=" Cell Kinectics Contact Messages";
    $firstname=$_POST['fname'];
    $lastname=$_POST['lname'];
    $email=$_POST['email'];
    $mobile=$_POST['mobno'];
    $msg=$_POST['ques'];
    $body="Hello sir..I am $firstname $lastname,\nQuestions/Comments: $msg\n$email\n$mobile";
    $headers="From: ".$email;

    if(mail($to_email,$subject,$body,$headers))
    {
        echo '<script type="text/javascript"> ';
        echo '  if (confirm("Message successfully sent")) {';
        echo '    document.location.href = "index.html"';
        echo '  }';
        echo '</script>';
        
    }
    else
    {
        echo "Email sending failed...";
    }

?>