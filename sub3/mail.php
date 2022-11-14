<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<?php
    $name_01=$_POST['uname'];
    $mail_02=$_POST['email'];
    $phone_03=$_POST['phone'];
    $msg_04=$_POST['message'];


    $to='jawon0407@naver.com';
    $subject='YONEX 사이트에서 관리자에게 보낸 메일';
    $msg="$msg_04";

    mail($to,$subject,$msg,'보낸 사람 메일:'.$mail_02);   

    echo "
        <script>
            alert('성공적으로 메일이 전송되었습니다.');
            history.go(-1);
        </script>
"


    /*
    echo '이름:'.$name_01.'<br />';
    echo '메일:'.$mail_02.'<br />';
    echo '메일:'.$phone_03.'<br />';
    echo '내용:'.$msg_04.'<br />';
    echo '메일이 성공적으로 전송되었습니다<br />';
    */
?>