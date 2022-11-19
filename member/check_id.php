<meta charset="utf-8">
<?
   
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
  
    if(!$id) 
   {
      echo "
      <span style='color:red'>아이디를 입력해주세요.</span>
      <script>
         const id_box = document.querySelector('#id');
         id_box.style.border = '1px solid red';
         id_box.style.outline = '1px solid red';
      </script>
   ";
   }
   else
   {
      include "../lib/dbconn.php";
 
      $sql = "select * from member where id='$id' ";

      $result = mysql_query($sql, $connect);
      $num_record = mysql_num_rows($result);


     
      if ($num_record)
      {
         echo "
            <span style='color:red'>다른 아이디를 사용하세요.</span>
            <script>
               const id_box = document.querySelector('#id');
               id_box.style.border = '1px solid red';
               id_box.style.outline = '1px solid red';
            </script>
         ";
      }
      else
      {
         echo "
            <span style='color:blue'>사용가능한 아이디입니다.</span>
            <script>
               const id_box = document.querySelector('#id');
               id_box.style.border = '1px solid #0f9af5';
               id_box.style.outline = '1px solid #0f9af5';
            </script>
         ";
      }
    
 
      mysql_close();
   }

?>

