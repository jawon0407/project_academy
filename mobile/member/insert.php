<meta charset="utf-8">
<?
    @extract($_POST);

  // id = $_POST['id'];
  // pass = $_POST['pass'];
  // pass_confirm = $_POST['pass_confirm'];
  // name = $_POST['name'];
  // nick = $_POST['nick'];
  // hp1 , hp2 , hp3 = $_POST['hp1'], $_POST['hp2'], $_POST['hp3'];
  // email1,email2 = $_POST['email1'], $_POST['email2'];
  

   $hp = $hp1."-".$hp2."-".$hp3;
   $email = $email1."@".$email2;

   $regist_day = date("Y-m-d (H:i)");  // 현재의 '년-월-일-시-분'을 저장
   $ip = $REMOTE_ADDR;         // 방문자의 IP 주소를 저장

   include "../lib/dbconn.php";       // dconn.php 파일을 불러옴

   $sql = "select * from member where id='$id'";
   $result = mysql_query($sql, $connect);
   $exist_id = mysql_num_rows($result);

   if($exist_id) {
     echo("
           <script>
             window.alert('해당 아이디가 존재합니다.')
             history.go(-1)
           </script>
         ");
         exit;
   }
   else
   {            // 레코드 삽입 명령을 $sql에 입력
	    $sql = "insert into member(id, pass, name, nick, hp, email, regist_day, level) ";
		$sql .= "values('$id', password('$pass'), '$name', '$nick', '$hp', '$email', '$regist_day', 9)";

		mysql_query($sql, $connect);  // $sql 에 저장된 명령 실행
   }

   mysql_close();                // DB 연결 끊기
   echo "
	   <script>
      alert(`회원가입이 정상적으로 처리되었습니다`)
<<<<<<< HEAD
	    location.href = '../login/login_form.php';
=======
	    location.href = '../index.html';
>>>>>>> 44c56fe98f4a6800133cf388d95a5b086eb5fd49
	   </script>
	";
?>

   
