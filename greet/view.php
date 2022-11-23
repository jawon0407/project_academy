<? 
	session_start(); 

	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);

	ini_set('display_errors', 0);
	ini_set('display_startup_errors', 0);
	error_reporting(E_ALL);

	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

    $item_date    = $row[regist_day];

	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}	

	$new_hit = $item_hit + 1;

	$sql = "update greet set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>
<!DOCTYPE HTML>
<html lang="ko">
<head> 
<meta charset="utf-8">
<link href="../sub4/common/css/sub_style.css" rel="stylesheet" media="all">
<link href="./css/view.css" rel="stylesheet" type="text/css" media="all">
<script>
    function del(href) //delete.php?num = 1
    {
        if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
                document.location.href = href;
        }
    }
</script>
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
					<div class="view_container">
						<div id="view_title">
							<div id="view_title1">
								<div class="title_container">
									<div class="title_box">
										<span>제목</span>
									</div>
									<div class="title_info">
										<span><?= $item_subject ?></span>
									</div>
								</div>
								<div class="hit_container">
									<div class="hit_box">
										<span>조회수</span>
									</div>
									<div class="hit_info">
										<span><?= $item_hit ?></span>  
									</div>
								</div>
							</div>
							<div id="view_title2">
								<div class="writer_container">
									<div class="writer_box">
										<span>작성자</span>
									</div>
									<div class="writer_info">
										<span><?= $item_nick ?></span>
									</div>
								</div>
								<div class="day_container">
									<div class="day_box">
										<span>작성일자</span>
									</div>
									<div class="day_info">
										<span><?= $item_date ?> </span>
									</div>
								</div> 
							</div>	
						</div>
						<div id="view_content">
							<div class="content_box">
								<span>내용</span>
							</div>
							<div class="content_info">
								<p>
									<?= $item_content ?>
								</p>
							</div>						
						</div>
					</div>
					<div id="view_button">
						<a href="list.php?table=<?=$table?>&page=<?=$page?>">
							목록
						</a>
						<? 
							if($userid==$item_id || $userlevel==1 || $userid=="admin"){
						?>
						<a href="javascript:del('delete.php?num=<?=$num?>')">
							삭제
						</a>
						<a href="modify_form.php?num=<?=$num?>&page=<?=$page?>">
							수정
						</a>
						<?
							}
						?>
						<? 
							if($userid ){
						?>
						<a href="write_form.php?page=<?=$page?>">
							글쓰기
						</a>
						<?
							}
						?>
					</div>
				</div>
			</div>
		</article>
		<? include "../common/sub_footer.html" ?>
		<a href="#top">
			<div class="go_top">
				<i class="fa-solid fa-arrow-up"></i>
				<span class="hidden">위로 올라가기</span>
			</div>
      	</a>
	</div>
<script src="./../common/js/jquery-1.12.4.min.js"></script>
<script src="./../common/js/jquery-migrate-1.4.1.min.js"></script>
<script src="./../common/js/fullnav.js"></script>
<script src="./../common/js/topBtn.js"></script>
<script src="./../common/js/subskipnav.js"></script>
<script src="https://kit.fontawesome.com/bff332bdcf.js" crossorigin="anonymous"></script>
</body>
</html>
