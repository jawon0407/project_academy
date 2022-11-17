<?
	session_start();
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);  
    ini_set('display_errors', 0);
	ini_set('display_startup_errors', 0);
	error_reporting(E_ALL);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>YONEX-아이디찾기</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./css/sub_style.css" />
    <link rel="stylesheet" href="./css/id_find.css" />
    <script src="https://kit.fontawesome.com/bff332bdcf.js" crossorigin="anonymous"></script>
    <script src="../member/js/jquery-1.12.4.min.js"></script>
    <script src="../member/js/jquery-migrate-1.4.1.min.js"></script>
    <script>
        $(document).ready(function() {
            $(".find").click(function () {
                $(".modal_tab").fadeIn();
                    $(".modal_tab").css("display", "flex");
                });
                $(".exit a").click(function (e) {
                    e.preventDefault();
                    $(".modal_tab").fadeOut();
                });
                    $(".modal_background").click(function () {
                    $(".modal_tab").fadeOut();
                });
                $(document).keydown(function (e) {
                     if (e.key === "Escape") {
                        $(".modal_tab").fadeOut();
                    }
            }); 

            $(".find").click(function() {    // id입력 상자에 id값 입력시
                var name = $('#name').val(); //홍길동
                var hp1 = $('#hp1').val(); //010
                var hp2 = $('#hp2').val(); //1111
                var hp3 = $('#hp3').val(); //2222

                $.ajax({
                    type: "POST",
                    url: "find.php", 
                    data: "name="+ name+ "&hp1="+hp1+ "&hp2="+hp2+ "&hp3="+hp3,  /*매개변수id도 같이 넘겨줌*/
                    cache: false, 
                    success: function(data) /*이 메소드가 완료되면 data라는 변수 안에 echo문이 들어감*/
                    {
                        $("#loadtext").html(data); /*span안에 있는 태그를 사용할것이기 때문에 html 함수사용*/
                    }
                });
                
                $("#loadtext").addClass('loadtexton'); // css 변경
            }); 
        });
    </script>
</head>
<body>
    <div id="wrap">
        <h1>
            <a href="../index.html" class="logo">
                YONEX
            </a>
        </h1>
        <div id="col2">
            <form name="find" method="POST" action="find.php"> 
                <div id="title">
                    <h2>아이디찾기</h2>
                </div>
                <div id="login_form">
                    <div class="clear"></div>
                    <div id="login2">
                        <div id="id_input_button">
                                <div class="name_container">
                                    <label for="name">이름</label>
                                    <input type="text" name="name" class="find_input" id="name" placeholder="이름 (ex. test)">
                                </div>  
                                <div class="tel_container">
                                    <span>핸드폰 번호</span>
                                    <div class="tel_input_container">
                                        <div>
                                            <label class="hidden" for="hp1">연락처 앞3자리</label>
                                            <input type="text" name="hp1" id="hp1" title="휴대폰 앞3자리." class="find_input" placeholder="ex ) 010">
                                        </div> 
                                        <div>
                                            <label class="hidden" for="hp2">연락처 가운데3자리</label>
                                            <input class="find_input" type="text" id="hp2" name="hp2" title="연락처 가운데3자리를 입력하세요." maxlength="4" placeholder="ex) 1111">
                                        </div>
                                        <div>
                                            <label class="hidden" for="hp3">연락처 마지막3자리</label>
                                            <input class="find_input" type="text" id="hp3" name="hp3" title="연락처 마지막3자리를 입력하세요." maxlength="4" placeholder="ex) 2222">
                                        </div>
                                    </div>
                                </div>
                                <input type="button" value="확인" class="find">
                            <ul class="go">
                                <li>
                                    <span>이미 계정이 있으신가요?</span>
                                    <a href="login_form.php">
                                        <span>로그인하기</span>
                                    </a>
                                </li>
                                <li>
                                    <span>비밀번호를 잊으셨나요?</span>
                                    <a href="pw_find.php">
                                        <span>비밀번호 찾기</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="clear"></div>
                        <div id="login_line"></div>
                    </div>			 
                </div> <!-- end of form_login -->
            </form>
        </div> <!-- end of col2 -->
        <div class="modal_tab">
            <div class="modal_background"></div>
            <div class="modal_container">
                <div id="loadtext"></div>
                <div class="exit">
                    <a href="#">
                        <i class="fa-regular fa-circle-xmark"></i>
                        <span class="hidden">닫기</span>
                    </a>
                </div>
            </div>
        </div>
    </div> <!-- end of wrap -->
</body>
</html>