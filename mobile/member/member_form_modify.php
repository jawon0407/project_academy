<?
    session_start();

    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
    ini_set('display_errors', 0);
	ini_set('display_startup_errors', 0);
	error_reporting(E_ALL);
?>
<!DOCTYPE HTML>
<html>
<head> 
<meta charset="utf-8">
<link rel="stylesheet" href="../common/css/common.css">
<link rel="stylesheet" href="../maincss/article.css">
<script>
   function check_id()
   {
     window.open("check_id.php?id=" + document.member_form.id.value,
         "IDcheck",
          "left=200,top=200,width=250,height=100,scrollbars=no,resizable=yes");
   }

   function check_nick()
   {
     window.open("../member/check_nick.php?nick=" + document.member_form.nick.value,
         "NICKcheck",
          "left=200,top=200,width=250,height=100,scrollbars=no,resizable=yes");
   }
   function check_input()
   {
      if (!document.member_form.pass.value)
      {
          alert("비밀번호를 입력하세요");    
          document.member_form.pass.focus();
          return;
      }

      if (!document.member_form.pass_confirm.value)
      {
          alert("비밀번호확인을 입력하세요");    
          document.member_form.pass_confirm.focus();
          return;
      }

      if (!document.member_form.name.value)
      {
          alert("이름을 입력하세요");    
          document.member_form.name.focus();
          return;
      }

      if (!document.member_form.nick.value)
      {
          alert("닉네임을 입력하세요");    
          document.member_form.nick.focus();
          return;
      }

      if (!document.member_form.hp2.value || !document.member_form.hp3.value )
      {
          alert("휴대폰 번호를 입력하세요");    
          document.member_form.nick.focus();
          return;
      }

      if (document.member_form.pass.value != 
            document.member_form.pass_confirm.value)
      {
          alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");    
          document.member_form.pass.focus();
          document.member_form.pass.select();
          return;
      }

      document.member_form.submit();
   }
   function reset_form()
   {
      document.member_form.id.value = "";
      document.member_form.pass.value = "";
      document.member_form.pass_confirm.value = "";
      document.member_form.name.value = "";
      document.member_form.nick.value = "";
      document.member_form.hp1.value = "010";
      document.member_form.hp2.value = "";
      document.member_form.hp3.value = "";
      document.member_form.email1.value = "";
      document.member_form.email2.value = "";
	  
      document.member_form.id.focus();

      return;
   }
</script>
</head>
<?
    include "../lib/dbconn.php";

    $sql = "select * from member where id='$userid'";
    $result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);

    $hp = explode("-", $row[hp]);
    $hp1 = $hp[0];
    $hp2 = $hp[1];
    $hp3 = $hp[2];

    $email = explode("@", $row[email]);
    $email1 = $email[0];
    $email2 = $email[1];

    mysql_close();
?>
<body class="w-screen h-screen justify-center bg-gray-100 flex flex-col items-center">
  <h1 class="title text-2xl font-bold my-20">회원정보수정</h1>
  <div id="wrap" class="bg-white w-4/5 p-20 rounded-md shadow-add">
    <div class="relative">
      <form  name="member_form" method="post" action="modify.php" class="border-2 rounded-md pb-4"> 
        <div id="form_join">
          <div id="join2">
            <ul>
              <li class="id_contaner flex border">
                <span class="block text-lg w-1/4 bg-gray-200 py-4 pl-2">아이디</span>
                <div class="flex items-center pl-4 w-3/4">
                  <span><?= $row[id] ?></span>
                </div>
              </li>
              <li class="password_container flex border">
                <label for="password" class="block text-lg w-1/4 bg-gray-200 py-4 pl-2">비밀번호</label>
                <div class="flex items-center pl-4 w-3/4">
                  <input type="password" name="pass" value="" class="w-4/5 py-2 pl-1 border border-gray-200">
                </div>
                </li>
              <li class="password_confirm_container flex border">
                <label for="password_confirm" class="block text-lg w-1/4 bg-gray-200 py-4 pl-2">비밀번호 확인</label>
                <div class="flex items-center pl-4 w-3/4">
                  <input type="password" name="pass_confirm" value="" class="w-4/5 py-2 pl-1 border border-gray-200">
                </div>
                </li>
              <li class="name_container flex border">
                <label for="name" class="block text-lg w-1/4 bg-gray-200 py-4 pl-2">이름</label>
                <div class="flex items-center pl-4 w-3/4">
                  <input type="text" name="name" value="<?= $row[name] ?>" class="w-4/5 py-2 pl-1 border border-gray-200">
                </div>
                </li>
              <li class="nick_container flex relative border items-center">
                <label for="nick" class="block text-lg w-1/4 bg-gray-200 py-4 pl-2">닉네임</label>
                <div class="flex items-center pl-4 w-3/4">
                  <input type="text" name="nick" value="<?= $row[nick] ?>" class="w-4/5 py-2 pl-1 border border-gray-200">
                </div>
                  <div id="nick_confirm" class="absolute right-3 bg-gray-100 py-2 px-3 rounded-md" >
                  <a href="#" onclick="check_nick()">
                    <span>중복확인</span>
                  </a>
                </div>
              </li>
              <li class="phone_container flex border">
                <label for="hp" class="block text-lg w-1/4 bg-gray-200 py-4 pl-2">휴대폰</label>
                <div class="flex items-center pl-4 w-3/4 space-x-3">
                  <select class="hp w-1/4 py-2 pl-1 border border-gray-200" name="hp1" id="hp1"> 
                    <option value='010' <? if($hp1 == '010') echo 'selected'; ?>010</option>
                    <option value='011' <? if($hp1 == '011') echo 'selected'; ?>011</option>
                    <option value='016' <? if($hp1 == '016') echo 'selected'; ?>016</option>
                    <option value='017' <? if($hp1 == '017') echo 'selected'; ?>017</option>
                    <option value='018' <? if($hp1 == '018') echo 'selected'; ?>018</option>
                    <option value='019' <? if($hp1 == '019') echo 'selected'; ?>019</option>
                  </select>
                  <input type="text" class="hp w-1/4 py-2 pl-1 border border-gray-200" name="hp2" value="<?= $hp2 ?>">
                  <input type="text" class="hp w-1/4 py-2 pl-1 border border-gray-200" name="hp3" value="<?= $hp3 ?>">
                </div>
              </li>
              <li class="email_container flex border">
                <label for="email" class="block text-lg w-1/4 bg-gray-200 py-4 pl-2">이메일</label>
                <div class="flex items-center pl-4 w-3/4 space-x-3">
                  <input type="text" id="email1" name="email1" value="<?= $email1 ?>" class="w-1/3 py-2 pl-1 border border-gray-200">
                  <span>@</span> 
                  <input type="text" id="email2" name="email2" value="<?= $email2 ?>" class="w-1/3 py-2 pl-1 border border-gray-200">
               </div>
              </li>
            </ul>
          </div>
          <div id="must" class="absolute right-2 mt-2 text-gray-500 text-sm"> * 는 필수 입력항목입니다.</div>
        </div>
        <div id="button" class="flex mt-4 ml-2">
          <a href="#" onclick="check_input()" class="block px-4 py-2 bg-main text-white rounded-md">
            <span>변경하기</span>
          </a>&nbsp;&nbsp;
          <a href="#" onclick="reset_form()" class="block px-4 py-2 bg-gray-100 rounded-md">
            <span>다시작성하기</span>
          </a>
        </div>
      </form>
    </div>
  </div>
</body>
<script src="./../common/js/jquery-1.12.4.min.js"></script>
<script src="./../common/js/jquery-migrate-1.4.1.min.js"></script>
<script src="./../common/js/fullnav.js"></script>
<script src="./../common/js/topBtn.js"></script>
</html>
