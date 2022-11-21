<? 
	session_start(); 

	@extract($_GET);
	@extract($_POST);
	@extract($_SESSION);

	$table = "product";

	ini_set('display_errors', 0);
	ini_set('display_startup_errors', 0);
	error_reporting(E_ALL);
?>
<!DOCTYPE HTML>
<html lang="ko">
<head> 
<meta charset="utf-8">
<link href="../sub2/common/css/sub_style.css" rel="stylesheet" type="text/css" media="all">
<link href="./css/product.css" rel="stylesheet">
</head>
<?

	include "../lib/dbconn.php";

	if(!$scale){
		$scale=4;			// 한 화면에 표시되는 글 수
	}

    if ($mode=="search")
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

		$sql = "select * from $table where $find like '%$search%' order by num desc";
	}
	else
	{
		$sql = "select * from $table order by num desc";
	}

	$result = mysql_query($sql, $connect);

	$total_record = mysql_num_rows($result); // 전체 글 수

	// 전체 페이지 수($total_page) 계산 
	if ($total_record % $scale === 0)     
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
				<h2>제품검색</h2>
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
					<div class="num_container">
						<div id="total_record">
							<span>총 <?= $total_record ?> 개의 게시물이 있습니다.</span>  
						</div>
						<div class="list_counter">
							<label for="scale" class="hidden">리스트개수</label>
							<select id="scale" name="scale" onchange="location.href='list.php?scale='+this.value">
								<option value=''>보기</option>
								<option value='4'>4</option>
								<option value='8'>8</option>
								<option value='12'>12</option>
							</select>
						</div>
					</div>	
					<div id="list_content">
						<?		
							for ($i=$start; $i<$start+$scale && $i < $total_record; $i++){
								mysql_data_seek($result, $i);       
								// 가져올 레코드로 위치(포인터) 이동  
								$row = mysql_fetch_array($result);       
								// 하나의 레코드 가져오기
								
								$item_num = $row[num];
								$item_id = $row[id];
								$item_name = $row[name];
								$item_nick = $row[nick];
								$item_hit = $row[hit];
								$item_date = $row[regist_day];
								$item_date = substr($item_date, 0, 10);  
								$item_subject = str_replace(" ", "&nbsp;", $row[subject]);
								$item_content = str_replace(" ", "&nbsp;", $row[content]);
								if($row[file_copied_0]){ 
									$item_img = './data/'.$row[file_copied_0];
								}else{ 
									$item_img = './data/default.jpg';
								}	
						?>
						<a href="view.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>&scale=<?=$scale?>">
							<div id="list_item">
								<div class="img_container">
									<img src="<?=$item_img?>" alt="첨부된 이미지">
								</div>
								<div class="contents_container">
									<strong class="title_info"><?=$item_subject?></strong>
									<p class="content_info"><?=$item_content?></p>
									<div class="write_info_box">
										<div class="name_info">
											<span><?=$item_nick?></span>
										</div>
										<div class="date_info">
											<span><?=$item_date?></span>
										</div>
										<div class="hit_info">
											<i class="fa-solid fa-eye"></i>
											<span>
												<?=$item_hit?>
											</span>
										</div>
									</div>
								</div>
							</div>
						</a>	
						<?
							$number--;
						}
						?>
						<div id="page_button">
							<?
								// 게시판 목록 하단에 페이지 링크 번호 출력
								for ($i=1; $i<=$total_page; $i++){
									if ($page == $i){
										echo "<b> $i </b>";
									}
									else{ 
										echo "<a href='list.php?page=$i&scale=$scale'> $i </a>";
									}      
								}
							?>			
						</div>
						<div id="btn_container">
							<a href="list.php?page=<?=$page?>&scale=<?=$scale?>&table=<?=$table?>">목록</a>
							<? 
								if($userid){
							?>
							<a href="write_form.php?page=<?=$page?>&scale=<?=$scale?>&table=<?=$table?>">글쓰기</a>
							<? } ?>
						</div>
						<div class="search_container">
							<form  name="board_form" method="post" action="list.php?mode=search&table=<?=$table?>&page=<?=$page?>&scale=<?=$scale?>"> 
								<div id="list_search">
									<div id="find_kind">
										<select name="find">
											<option value='subject'>제목</option>
											<option value='content'>내용</option>
											<option value='nick'>닉네임</option>
											<option value='name'>이름</option>
										</select>
									</div>
									<div id="list_search4">
										<input type="text" name="search" placeholder="검색어를 입력해주세요">
										<button type="submit">검색</button>
									</div>
								</div>
							</form>
						</div>	
					</div>
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
