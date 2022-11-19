<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);

   if(!$nick) 
   {
      echo "
      <span style='color:red'>닉네임을 입력해주세요.</span>
      <script>
         const nick_box = document.querySelector('#nick');
         nick_box.style.border = '1px solid red';
         nick_box.style.outline = '1px solid red';
      </script>
   ";
   }
   else
   {
      include "../lib/dbconn.php";
 
      $sql = "select * from member where nick='$nick' ";

      $result = mysql_query($sql, $connect);
      $num_record = mysql_num_rows($result);

      if ($num_record)
      {
       
         echo "
               <span style='color:red'>다른 닉네임을 사용하세요.</span>
               <script>
                  const nick_box = document.querySelector('#nick');
                  nick_box.style.border = '1px solid red';
                  nick_box.style.outline = '1px solid red';
               </script>
            ";
      }
      else
      {
         echo "
               <span style='color:green'>사용가능한 닉네입니다.</span>
               <script>
                  const nick_box = document.querySelector('#nick');
                  nick_box.style.border = '1px solid #0f9af5';
                  nick_box.style.outline = '1px solid #0f9af5';
               </script>";
      }
		 
      mysql_close();
   }
?>

