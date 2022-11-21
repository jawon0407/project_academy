<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>회원가입</title>
	<link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./css/sub_style.css" />
	<link rel="stylesheet" href="css/member_form.css">
    <script src="./js/jquery-1.12.4.min.js"></script>
    <script src="./js/jquery-migrate-1.4.1.min.js"></script>
	<script>
	 $(document).ready(function() {
        //id 중복검사
        $("#id").keyup(function() {    // id입력 상자에 id값 입력시
            var id = $('#id').val(); //aaa

            $.ajax({
                type: "POST",
                url: "check_id.php",
                data: "id="+ id,  
                cache: false, 
                success: function(data){
                    $("#loadtext").html(data);
                }
            });
        });
		 
        //nick 중복검사		 
        $("#nick").keyup(function() {    // id입력 상자에 id값 입력시
            var nick = $('#nick').val();

            $.ajax({
                type: "POST",
                url: "check_nick.php",
                data: "nick="+ nick,  
                cache: false, 
                success: function(data)
                {
                    $("#loadtext2").html(data);
                }
            });
        });		 

        $("#pass_confirm").keyup(function(){
            
            if($('#pass').val() == $('#pass_confirm').val()){
                $('#loadtext_pass_confirm').html('<span style="color:#0f9af5;">비밀번호가 일치합니다.</span>');
                $('#pass_confirm').removeClass('fail');
                $('#pass_confirm').addClass('success');
            } else {
                $('#loadtext_pass_confirm').html('<span style="color:red;">비밀번호가 일치하지 않습니다.</span>');
                $('#pass_confirm').removeClass('success');
                $('#pass_confirm').addClass('fail');
            }
        });
    });
	</script>
	<script>
        function check_input()
        {
            if (!document.member_form.id.value)
            {
                alert("아이디를 입력하세요");    
                document.member_form.id.focus();
                return;
            }

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
                // insert.php 로 변수 전송
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
<body>
	<article id="content">
        <a href="./../index.html" class="index_img">
            <img src="./images/sub_logo_image.png" alt="로고이미지" class="logo_img">
        </a>
        <h2>회원가입</h2>
        <form  name="member_form" method="post" action="insert.php"> 
        <h4 class="hidden">회원가입</h4>
            <div class="id_container">
                <div class="id_text">
                    <label for="id">아이디</label>
                </div>
                <div class="id_input_container">
                    <input type="text" name="id" id="id" placeholder="아이디를 입력하세요" required>
                    <div class="info_text" id="loadtext"></div>
                </div>
            </div>
            <div class="pass_container">
                <div class="pass_text">
                    <label for="pass">비밀번호</label>
                </div>
                <div class="password_input_container">
                    <input type="password" name="pass" id="pass" minlength="8" maxlength="20" placeholder="비밀번호를 입력하세요." required>
                </div>
            </div>
            <div class="pass_confirm_container">
                <div class="pass_confirm_text">
                    <label for="pass_confirm">비밀번호확인</label>
                </div>
                <div class="password_confirm_input_container">
                    <input type="password" name="pass_confirm" id="pass_confirm" placeholder="비밀번호를 입력하세요." required>
                    <div class="notice_txt" id="loadtext_pass_confirm"></div>
                </div>
            </div>
            <div class="name_container">
                <div class="name_text">
                    <label for="name">이름</label>
                </div>
                <div class="name_input_container">
                    <input type="text" name="name" id="name" required> 
                </div>
            </div>
            <div class="nick_container">
                <div class="nick_text">
                    <label for="nick">닉네임</label>
                </div>
                <div class="nick_input_container">
                    <input type="text" name="nick" id="nick" minlength="2" required>
                    <div class="info_text" id="loadtext2">
                    </div>
                </div>
            </div>
            <div class="ph_number_container">
                <div class="ph_text">
                    <label for="ph">휴대폰</label>
                </div>
                <div class="ph_number_input_container">
                    <label class="hidden" for="hp1">전화번호앞3자리</label>
                    <select class="hp" name="hp1" id="hp1"> 
                        <option value='010'>010</option>
                        <option value='011'>011</option>
                        <option value='016'>016</option>
                        <option value='017'>017</option>
                        <option value='018'>018</option>
                        <option value='019'>019</option>
                    </select> 
                    <div class="ph_middle_number">
                        <label class="hidden" for="hp2">전화번호중간4자리</label>
                        <input type="text" class="hp" name="hp2" id="hp2" maxlength="4" required> 
                    </div>
                    <div class="ph_last_number">
                        <label class="hidden" for="hp3">전화번호끝4자리</label>
                        <input type="text" class="hp" name="hp3" id="hp3" maxlength="4" required>
                    </div>
                </div>
            </div>
            <div class="email_container">
                <div>
                    <label for="email">
                        이메일
                    </label>
                </div>
                <div class="email_input_container">
                    <div class="email_id_input_container">
                        <label class="hidden" for="email1">이메일아이디</label>
                        <input type="text" id="email1" name="email1"  required> 
                    </div>
                    <span>
                        @
                    </span>
                    <div class="email_address_input_container">
                        <label class="hidden" for="email2">이메일주소</label>
                        <input list="email" name="email2" id="email2" placeholder="직접 입력하기" required>
                        <datalist id="email">
                            <option value="gmail.com">
                            <option value="naver.com">
                            <option value="nate.com">
                            <option value="hotmail.com">
                            <option value="daum.net">
                        </datalist>
                    </div>
                </div>
            </div>
            <div>
                <div class="btn_container">
                    <a href="#" onclick="check_input()">가입하기</a>&nbsp;&nbsp;
                    <a href="#" onclick="reset_form()">다시쓰기</a>
                </div>
            </div>
        </form>
    </article>
</body>
</html>


