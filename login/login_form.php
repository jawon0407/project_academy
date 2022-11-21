<? session_start(); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./css/sub_style.css" />
    <link rel="stylesheet" href="./css/login.css">
</head>
<body>
    <form  name="member_form" method="post" action="login.php"> 
        <div class="img_container">
            <a href="../index.html">
                <img src="./images/sub_logo_image.png" alt="로고이미지">
            </a>
        </div>
        <div class="input_container">
            <div id="id_pw_input">
                <span class="welcome_text">WELCOME YONEX</span>
                <ul>
                    <li class="id_container">
                        <label for="id">ID</label>
                        <input type="text" name="id" class="login_input" required>
                    </li>
                    <li class="password_container">
                        <label for="pass">PW</label>
                        <input type="password" name="pass" class="login_input" required>
                    </li>
                </ul>						
            </div>
            <div class="btn_container">
                <div id="login_button">
                    <button type="submit">로그인</button>
                </div>
                <div id="join_button">
                    <a href="../member/join.html">회원가입</a>
                </div>
            </div>
            <ul class="find_info">
                <li>
                    <span><a href="id_find.php">아이디 찾기</a></span>
                </li>
                <li>
                    <span><a href="pw_find.php">비밀번호 찾기</a></span>
                </li>
            </ul>
        </div>
    </form>
</body>
<script src="https://kit.fontawesome.com/bff332bdcf.js" crossorigin="anonymous"></script>
</html>