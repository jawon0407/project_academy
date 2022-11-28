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
<html lang="ko">
<head> 
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="apple-mobile-web-app-status-bar-style" content="_blank">
<link rel="apple-touch-icon-precomposed" href="app_icon.png">
<link rel="apple-touch-startup-image" href="startup.ong">
<link rel="stylesheet" href="../common/css/common.css">
<link rel="stylesheet" href="../maincss/article.css">
<link href="../sub4/common/css/sub_style.css" rel="stylesheet" type="text/css" media="all">
<link href="./css/greet.css" rel="stylesheet">
<title>뉴스룸</title>
<script>
	  function check_input()
   {
      	if (!document.board_form.subject.value)
     	{
          	alert("제목을 입력하세요!");    
          	document.board_form.subject.focus();
          	return;
      	}
     	 if (!document.board_form.content.value)
      	{
        	alert("내용을 입력하세요!");    
        	document.board_form.content.focus();
        	return;
      	}
     	 document.board_form.submit();
   }
</script>
<script>
      // <![CDATA[
      try {
        window.addEventListener(
          "load",
          function () {
            setTimeout(scrollTo, 0, 0, 1);
          },
          false
        );
      } catch (e) {}
      // ]]>
</script>
</head>
<body>
	<div id="wrap">
		<div id="skipNav">
			<a href="#content">본문바로가기</a>
			<a href="#gnb">네비게이션바로가기</a>
		</div>
		<header id="headerArea">
			<div class="header_top flex items-center justify-between ">
				<h1 class="px-5">
					<a href="../index.html">
						<span class="hidden">yonex</span>
					</a>
				</h1>
				<a class="menu_open" href="#">
					<span>메뉴오픈</span>
				</a>
			</div>
			<div class="modal_box"></div>
			<nav id="gnb">
				<h2 class="hidden">글로벌네비게이션영역</h2>
				<h3><a href="../index.html">yonex</a></h3>
				<ul class="mainMenu w-full mt-20">
					<li class="depth1 pl-1">
					<h3>
						<a href="#">
							회사소개 
							<span>About Yonex</span>
							<i class="fas fa-plus"></i>
						</a>
					</h3>
					<ul>
						<li><a href="../sub1_1.html">YONEX 소개</a></li>
						<li><a href="../sub1_2.html">주요연혁</a></li>
						<li><a href="../sub1_3.html">오시는길</a></li>
					</ul>
					</li>
					<li class="depth1 pl-1">
					<h3>
						<a href="#">
							후원선수 
							<span>Support Player</span>
							<i class="fas fa-plus"></i></a>
					</h3>
					<ul>
						<li><a href="../sub2_1.html">TEAM YONEX</a></li>
						<li><a href="../sub2_2.html">국가대표</a></li>
						<li><a href="../sub2_3.html">국제선수</a></li>
					</ul>
					</li>
					<li class="depth1 pl-1">
					<h3>
						<a href="#">
							회사경영 
							<span>Management</span>
							<i class="fas fa-plus"></i>
						</a>
					</h3>
					<ul>
						<li><a href="../sub3_1.html">윤리경영</a></li>
						<li><a href="../sub3_2.html">소비자중심경영</a></li>
					</ul>
					</li>
					<li class="depth1 pl-1 last">
					<h3>
						<a href="#">
							고객문의 
							<span>Center</span>
							<i class="fas fa-plus"></i>
						</a>
					</h3>
					<ul>
						<li><a href="../sub4_1.html">FAQ</a></li>
						<li><a href="./list.php">뉴스룸</a></li>
					</ul>
					</li>
				</ul>
				<ul class="gnb_sns flex w-full justify-center space-x-4 mt-10">
					<li>
						<a href="https://www.youtube.com/channel/UCdf1Jx_McgoSyMadgtI7L3w" target="_blank" title="유튜브 새창으로 열림">
							<i class="fab fa-youtube text-lg p-2 text-white bg-gray-300 rounded-full"></i>
							<span class="hidden">유튜브</span>
						</a>
					</li>
					<li>
						<a href="https://twitter.com/yonex_com/" target="_blank" title="트위터 새창으로 열림">
							<i class="fab fa-twitter text-lg p-2 text-white bg-gray-300 rounded-full"></i>
							<span class="hidden">트위터</span>
						</a>
					</li>
					<li>
						<a href="https://www.facebook.com/yonexkorea/" target="_blank" title="페이스북 새창으로 열림">
							<i class="fab fa-facebook text-lg p-2 text-white bg-gray-300 rounded-full"></i>
							<span class="hidden">페이스북</span>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/yonex_kr/?hl=ko" target="_blank" title="인스타그램 새창으로 열림">
							<i class="fab fa-instagram text-lg p-2 text-white bg-gray-300 rounded-full"></i>
							<span class="hidden">인스타그램</span>
						</a>
					</li>
				</ul>
			</nav>        
		</header>
		<div class="visual relative flex justify-center items-center">
			<img
				src="../images/sub4/sub4_visual_image.jpg"
				alt="sub4 visual image"
			>
			<div class="visual_text absolute mt-5">
				<h3 class="text-2xl text-white font-thin sm:text-3xl">뉴스룸</h3>
			</div>
		</div>
		<div class="sub_menu">
			<ul class="flex w-full justify-around sub_wrap">
				<li>
					<a
					href="../sub4_1.html"
					class="w-full px-1 py-3 text-sm sm:text-lg md:text-xl"
					>FAQ</a
					>
				</li>
				<li class="current">
					<a
					href="./list.php"
					class="w-full px-1 py-3 text-sm sm:text-lg md:text-xl"
					>뉴스룸</a
					>
				</li>
			</ul>
		</div>
		<article id="content" class="flex flex-col items-center">
			<h2 class="font-bold mt-12 sm:mt-16 relative text-2xl md:text-3xl">뉴스룸</h2>
  			<div class="contentArea w-4/5 flex flex-col">
				<div id="col2" class="mt-12">        
					<form name="board_form" method="post" action="insert.php?page=<?=$page?>"> 
						<div id="write_form">
							<div id="writer_info">
								<div class="col1">닉네임</div>
								<div class="col2 relative">
									<div class="col3"><?=$usernick?></div>
									<div class="col4 absolute right-5">
										<input type="checkbox" name="html_ok" value="y"> 
										HTML 쓰기
									</div>
								</div>
							</div>
							<div id="write_title">
								<div class="col1">제목</div>
									<div class="col2">
										<input type="text" name="subject" class="w-full">
									</div>
							</div>
							<div id="write_infobox">
								<div class="col1">내용</div>
									<div class="col2">
										<textarea rows="15" cols="79" name="content" class="w-full"><?=$item_content?></textarea>
									</div>
								</div>
							</div>
						</div>
						<div id="write_button" class="btn_container flex self-end space-x-2 mt-5 mb-20">
							<a href="list.php?page=<?=$page?>" class="px-3 py-2 bg-gray-200 rounded-sm">
								목록
							</a>
							<a href="#" onclick="check_input()" class="px-3 py-2 bg-blue-500 rounded-sm">
								확인
							</a>
						</div>
					</form>
				</div>
  			</div>
		</article>
		<footer id="footerArea" class="bg-gray-50">
			<div class="footer_inner">
				<ul class="terms flex w-full border-b">
					<li class="w-1/2 text-center">
						<a href="#a" class="py-4">A/S 관련규정</a>
					</li>
					<li class="w-1/2 text-center">
						<a href="#a" class="py-4">개인정보 수집 및 이용</a>
					</li>
				</ul>
			</div>
        	<div class="footer_info flex flex-col items-center w-full">
          		<div class="footer_family my-8 relative z-20 w-3/5">
					<a class="arrow border-2 border-gray-300 py-2 px-6 flex items-center" href="#">
             			FAMILY SITE <i class="fas fa-chevron-down absolute right-5"></i>
              			<span class="hidden">목차 보이기</span>
            		</a>
           			 <ul class="family_list border-2 absolute top-10 w-full bg-gray-200">
						<li class="text-center border-b border-gray-300">
							<a
							href="https://www.yonex.co.jp/"
							target="_blank"
							title="새창에 열림"
							class="py-2"
							>일본</a
							>
						</li>
						<li class="text-center border-b border-gray-300">
							<a
							href="https://www.yonex.com/us/"
							target="_blank"
							title="새창에 열림"
							class="py-2"
							>미국</a
							>
						</li>
						<li class="text-center">
							<a
							href="https://www.yonex.co.uk/"
							target="_blank"
							title="새창에 열림"
							class="py-2"
							>영국</a
							>
						</li>
            		</ul>
				</div>	
         	</div>
			<div class="flex justify-around w-full flex-wrap">
				<address class="text-lg">
					<span>(주)동승통상</span>
					<br>
					<span>대표이사 : 김철웅 | 대표번호 : 02-335-8077</span>
					<br>
					<span>주소 : 서울특별시 마포구 포은로 120 덕일빌딩</span>
					<br>
					<span>&#169;2012-2014 YONEX CO.,LTD</span>
				</address>
				<div class="footer_sns">
					<ul class="flex space-x-3 my-8">
						<li>
							<a
								href="https://www.youtube.com/channel/UCdf1Jx_McgoSyMadgtI7L3w"
								target="_blank"
								title="유튜브 새창으로 열림"
							>
								<i
								class="fab fa-youtube text-sm p-2 text-white bg-gray-300 rounded-full"
								></i>
								<span class="hidden">유튜브</span>
							</a>
						</li>
						<li>
							<a
								href="https://twitter.com/yonex_com/"
								target="_blank"
								title="트위터 새창으로 열림"
							>
								<i
								class="fab fa-twitter text-sm p-2 text-white bg-gray-300 rounded-full"
								></i>
								<span class="hidden">트위터</span>
							</a>
						</li>
						<li>
							<a
								href="https://www.facebook.com/yonexkorea/"
								target="_blank"
								title="페이스북 새창으로 열림"
							>
								<i
								class="fab fa-facebook text-sm p-2 text-white bg-gray-300 rounded-full"
								></i>
								<span class="hidden">페이스북</span>
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/yonex_kr/?hl=ko"
								target="_blank"
								title="인스타그램 새창으로 열림"
							>
								<i
								class="fab fa-instagram text-sm p-2 text-white bg-gray-300 rounded-full"
								></i>
								<span class="hidden">인스타그램</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<a href="#top" class="go_top">
				<div class="go_top fixed bottom-4 right-5 bg-main rounded-50% w-10 h-10 flex justify-center items-center text-white z-50">
					<i class="fa-solid fa-arrow-up"></i>
					<span class="hidden">위로 올라가기</span>
				</div>
			</a>        
      	</footer>
	</div>
<script src="./../common/js/jquery-1.12.4.min.js"></script>
<script src="./../common/js/jquery-migrate-1.4.1.min.js"></script>
<script src="https://kit.fontawesome.com/bff332bdcf.js" crossorigin="anonymous"></script>
</body>
</html>