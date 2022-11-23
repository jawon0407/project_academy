<?
      include "../lib/dbconn.php";

      @extract($_POST);
      @extract($_GET);
      @extract($_SESSION);

      $sql = "delete from promotion_ripple where num=$ripple_num";
      mysql_query($sql, $connect);
      mysql_close();

      echo "
	   <script>
	       location.href = 'view.php?table=$table&num=$num';
	   </script>
	  ";
?>
