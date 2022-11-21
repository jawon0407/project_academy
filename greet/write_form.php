<? 
	session_start(); 

	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
	ini_set('display_errors', 0);
	ini_set('display_startup_errors', 0);
	error_reporting(E_ALL);
?>
<!DOCTYPE HTML">
<html lang="ko">
<head> 
<meta charset="utf-8">
<link href="../sub4/common/css/sub_style.css" rel="stylesheet" type="text/css" media="all">
<link href="./css/write_form.css" rel="stylesheet" type="text/css" media="all">
</head>

<body>
	<div id="wrap">
		<? include "../common/sub_header.html" ?>
		<div class="main visual">
			<img src="./../sub4/common/images/yonexzone_main_image.png" alt="요넥스존" />
			<h3>요넥스존</h3>
		</div>
		<div class="subNav">
			<ul class="subNav_wrap">
				<li class="onclick">
					<a href="./list.php">
						<span>요넥스소식</span>
					</a>
				</li>
				<li>
					<a href="./../sub4/sub4_2.html">
						<span>사회공헌</span>
					</a>
				</li>
			</ul>
		</div>
		<article id="content">
			<div class="titleArea">
				<h2>요넥스소식</h2>
				<div class="lineMap">
					<span>홈</span>
					&#62;
					<span>요넥스존</span>
					&#62;
					<strong>요넥스소식</strong>
				</div>
			</div>
  			<div id="contentArea">
				<div id="col2">        
					<form name="board_form" method="post" action="insert.php?page=<?=$page?>&scale=<?=$scale?>"> 
						<div id="write_form">
							<div id="writer_info">
								<div class="col1">닉네임</div>
								<div class="col2">
									<div class="col3"><?=$usernick?></div>
									<div class="col4">
										<input type="checkbox" name="html_ok" value="y"> 
										HTML 쓰기
									</div>
								</div>
							</div>
							<div id="write_title">
								<div class="col1">제목</div>
									<div class="col2">
										<input type="text" name="subject">
									</div>
							</div>
							<div id="write_infobox">
								<div class="col1">내용</div>
									<div class="col2">
										<textarea rows="15" cols="79" name="content"></textarea>
									</div>
								</div>
							</div>
						</div>
						<div id="write_button" class="btn_container">
							<a href="list.php?page=<?=$page?>&scale=<?=$scale?>">
								뒤로 가기
							</a>
							<a href="list.php?page=1&scale=<?=$scale?>">
								<button type="submit">완료</button>
							</a>
						</div>
					</form>
				</div>
  			</div>
		</article>
		<? include "../common/sub_footer.html" ?>
	</div>
<script src="./../common/js/jquery-1.12.4.min.js"></script>
<script src="./../common/js/jquery-migrate-1.4.1.min.js"></script>
<script src="./../common/js/fullnav.js"></script>
<script src="./../common/js/topBtn.js"></script>
<script src="./../common/js/subskipnav.js"></script>
</body>
</html>