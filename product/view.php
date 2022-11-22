<? 
	session_start(); 
	
	@extract($_GET);
	@extract($_POST);
	@extract($_SESSION);

	ini_set('display_errors', 0);
	ini_set('display_startup_errors', 0);
	error_reporting(E_ALL);

	include "../lib/dbconn.php";

	$sql = "select * from $table where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

	$image_name[0]   = $row[file_name_0];
	$image_name[1]   = $row[file_name_1];
	$image_name[2]   = $row[file_name_2];


	$image_copied[0] = $row[file_copied_0];
	$image_copied[1] = $row[file_copied_1];
	$image_copied[2] = $row[file_copied_2];

    $item_date    = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}
	
	//첨부된 이미지 가져오기
	for ($i=0; $i<3; $i++)
	{
		if ($image_copied[$i])  // 첨부된 이미지가 있으면
		{
			$imageinfo = GetImageSize("./data/".$image_copied[$i]);
			//배열로 리턴 [이미지너비, 이미지 높이, 이미지타입]
			$image_width[$i] = $imageinfo[0]; //이미지 너비
			$image_height[$i] = $imageinfo[1]; //이미지 높이
			$image_type[$i]  = $imageinfo[2]; //이미지 타입

			if ($image_width[$i] > 785) //이미지 너비 제한
				$image_width[$i] = 785;
		}
		else //첨부된 이미지가 없으면
		{
			$image_width[$i] = "";
			$image_height[$i] = "";
			$image_type[$i]  = "";
		}
	}

	$new_hit = $item_hit + 1;

	$sql = "update $table set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>
<!DOCTYPE HTML>
<html lang="ko">
<head> 
<meta charset="utf-8">
<link href="../sub2/common/css/sub_style.css" rel="stylesheet" type="text/css" media="all">
<link href="./css/view.css" rel="stylesheet" type="text/css" media="all">
<script>
    function del(href) 
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
			<img src="./../sub2/images/product_intromainlogo.png" alt="요넥스존" />
			<h3>상품소개</h3>
		</div>
		<div class="subNav">
			<ul class="subNav_wrap">
			<li>
					<a href="./../sub2/sub2_1.html">
						<span>신상품</span>
					</a>
				</li>
				<li>
					<a href="./../sub2/sub2_2.html">
						<span>배드민턴</span>
					</a>
				</li>
				<li>
					<a href="./../sub2/sub2_3.html">
						<span>테니스</span>
					</a>
				</li>
				<li>
					<a href="./../sub2/sub2_4.html">
							<span>의류 / 가방</span>
					</a>
				</li>
				<li class="onclick">
					<a href="./list.php">
						<span>제품검색</span>
					</a>
				</li>
			</ul>
		</div>
		<article id="content">
			<div class="titleArea">
				<h2>제품소개</h2>
				<div class="lineMap">
					<span>홈</span>
					&#62;
					<span>상품소개</span>
					&#62;
					<strong>제품검색</strong>
				</div>
			</div>
			<div class="contentArea">
				<div id="col2">
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
					<?
						for ($i=0; $i<3; $i++)
						{
							if ($image_copied[$i])
							{
								$img_name = $image_copied[$i];
								$img_name = "./data/".$img_name;
								echo "<img src='$img_name' "."<br><br>";
							}
						}
					?>
					<?= $item_content ?>
					</div>
					<div id="view_button">
						<a href="list.php?table=<?=$table?>&scale=<?=$scale?>">목록</a>&nbsp;
						<? 
							if($userid==$item_id || $userid="admin" || $userlevel==1 ){
						?>
						<a href="write_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>&scale=<?=$scale?>">수정</a>&nbsp;
						<a href="javascript:del('delete.php?table=<?=$table?>&num=<?=$num?>')">삭제</a>&nbsp;
						<?
							}
						?>
						<? 
							if($userid){
						?>
						<a href="write_form.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale?>">글쓰기</a>
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
	</div> <!-- end of wrap -->
<script src="./../common/js/jquery-1.12.4.min.js"></script>
<script src="./../common/js/jquery-migrate-1.4.1.min.js"></script>
<script src="./../common/js/fullnav.js"></script>
<script src="./../common/js/topBtn.js"></script>
<script src="./../common/js/subskipnav.js"></script>
<script src="https://kit.fontawesome.com/bff332bdcf.js" crossorigin="anonymous"></script>
</body>
</html>
