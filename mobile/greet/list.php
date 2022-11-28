<? 
	session_start(); 

	ini_set('display_errors', 0);
	ini_set('display_startup_errors', 0);
	error_reporting(E_ALL);
?>
<!DOCTYPE HTML>
<html>
<head> 
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<link rel="apple-touch-icon-precomposed" href="app_icon.png">
<link rel="apple-touch-startup-image" href="startup.ong">
<link rel="stylesheet" href="../common/css/common.css">
<link rel="stylesheet" href="../maincss/article.css">
<link href="../sub4/common/css/sub_style.css" rel="stylesheet" type="text/css" media="all">
<script src="https://kit.fontawesome.com/bff332bdcf.js" crossorigin="anonymous"></script>
<title>고객문의</title>
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
<?

	@extract($_GET);
	@extract($_POST);
	@extract($_SESSION);

	include "../lib/dbconn.php";

	if(!$scale){
		$scale=5;			// 한 화면에 표시되는 글 수
	}

    if ($mode === "search")
	{
		if(!$search)
		{
			echo("
				<script>
					window.alert('검색할 단어를 입력해 주세요!');
					history.go(-1);
				</script>
			");
			exit;
		}

		$sql = "select * from greet where $find like '%$search%' order by num desc";
	}
	else
	{
		$sql = "select * from greet order by num desc";
	}

	$result = mysql_query($sql, $connect);

	$total_record = mysql_num_rows($result); // 전체 글 수

	// 전체 페이지 수($total_page) 계산 
	if ($total_record % $scale == 0)     
		$total_page = floor($total_record/$scale);      
	else
		$total_page = floor($total_record/$scale) + 1; 
 
	if (!$page)                 // 페이지번호($page)가 0 일 때
		$page = 1;              // 페이지 번호를 1로 초기화
 
	// 표시할 페이지($page)에 따라 $start 계산  
	$start = ($page - 1) * $scale;      

	$number = $total_record - $start;
?>
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
			<div class="contentArea w-4/5">
				<div id="col2">	
					<div class="num_container flex justify-between items-center my-8">
						<div id="total_record">
							<span class="text-base font-bold">총 <?= $total_record ?> 개의 게시물이 있습니다.</span>  
						</div>
						<div class="list_counter">
							<label for="scale" class="hidden">리스트개수</label>
							<select id="scale" name="scale" onchange="location.href='list.php?scale='+this.value" class="px-3 py-2">
								<option value=''>보기</option>
								<option value='5'>5</option>
								<option value='10'>10</option>
								<option value='10'>15</option>
							</select>
						</div>
					</div>	
					<div id="list_content" class="flex flex-col ">
						<div class="bg-gray-100 border-2 border-y-gray-900">
							<ul class="list_title flex text-center">
								<li class="w-1/20 py-3 text-ellipsis overflow-hidden whitespace-nowrap">번호</li>
								<li class="w-13/20 py-3 text-ellipsis overflow-hidden whitespace-nowrap">내용</li>
								<li class="w-1/10 py-3 text-ellipsis overflow-hidden whitespace-nowrap">글쓴이</li>
								<li class="w-13% py-3 text-ellipsis overflow-hidden whitespace-nowrap">작성날짜</li>
								<li class="w-7% py-3 text-ellipsis overflow-hidden whitespace-nowrap">조회수</li>
							</ul>
						</div>
					<div class="flex flex-col items-center justify-center">
						<?		
							for ($i=$start; $i<$start+$scale && $i < $total_record; $i++){
								mysql_data_seek($result, $i);       
								// 가져올 레코드로 위치(포인터) 이동  
								$row = mysql_fetch_array($result);       
								// 하나의 레코드 가져오기
								
								$item_num     = $row[num];
								$item_id      = $row[id];
								$item_name    = $row[name];
								$item_nick    = $row[nick];
								$item_hit     = $row[hit];

								$item_date    = $row[regist_day];
								$item_date = substr($item_date, 0, 10);  

								$item_subject = str_replace(" ", "&nbsp;", $row[subject]);
						?>
						<div id="list_item" class="flex text-center w-full border border-gray-200">
							<div class="w-1/20 py-3"><?= $number ?></div>
							<div class="w-13/20 py-3 "><a href="view.php?num=<?=$item_num?>&page=<?=$page?>&scale=<?=$scale?>" class="text-ellipsis overflow-hidden whitespace-nowrap"><?= $item_subject ?></a></div>
							<div class="w-1/10 py-3 text-ellipsis overflow-hidden whitespace-nowrap"><?= $item_nick ?></div>
							<div class="w-13% py-3 text-ellipsis overflow-hidden whitespace-nowrap"><?= $item_date ?></div>
							<div class="w-7% py-3"><?= $item_hit ?></div>
						</div>
						<?
							$number--;
						}
						?>
						<div id="page_button" class="flex my-4">
							<?
								// 게시판 목록 하단에 페이지 링크 번호 출력
								for ($i=1; $i<=$total_page; $i++){
									if ($page == $i){
										echo "<b class='px-3 py-1 text-blue-500'> $i </b>";
									}
									else{ 
										echo "<a href='list.php?page=$i' class='px-3 py-1'> $i </a>";
									}      
								}
							?>			
						</div>
						<div id="btn_container" class="flex self-end space-x-4">
							<a href="list.php?page=<?=$page?>&scale=<?=$scale?>" class="px-3 py-1 bg-gray-200 rounded-sm">목록</a>
							<? 
								if($userid){
							?>
							<a href="write_form.php?page=<?=$page?>&scale=<?=$scale?>" class="px-3 py-1 bg-blue-300 rounded-sm">글쓰기</a>
							<? } ?>
						</div>
						<div class="search_container mt-6 mb-16">
							<form  name="board_form" method="post" action="list.php?mode=search"> 
								<div id="list_search" class="flex items-center space-x-3">
									<div id="find_kind">
										<select name="find" class="px-3 py-2">
											<option value='subject'>제목</option>
											<option value='content'>내용</option>
											<option value='nick'>별명</option>
											<option value='name'>이름</option>
										</select>
									</div>
									<div id="list_search4" class="flex items-center space-x-2">
										<input type="text" name="search" class="px-5 py-2 border outline-none w-4/5">
										<button type="submit" class="px-2 py-2 bg-gray-200 rounded-sm text-xs sm:text-sm">검색</button>
									</div>
								</div>
							</form>
						</div>
					</div>
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
						target="black"
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
						target="black"
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
						target="black"
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
						target="black"
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
<script src="../common/js/jquery-1.12.4.min.js"></script>
<script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
<script src="../common/js/common.js"></script>
<script src="https://kit.fontawesome.com/bff332bdcf.js" crossorigin="anonymous"></script>
</body>
</html>
