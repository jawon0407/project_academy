<? 
	session_start(); 
	
	//새글쓰기
	//$table = 'concert'
	@extract($_GET);
	@extract($_POST);
	@extract($_SESSION);

	ini_set('display_errors', 0);
	ini_set('display_startup_errors', 0);
	error_reporting(E_ALL);

	include "../lib/dbconn.php";

	if ($mode=="modify")
	{
		$sql = "select * from $table where num=$num";
		$result = mysql_query($sql, $connect);

		$row = mysql_fetch_array($result);       
	
		$item_subject     = $row[subject];
		$item_content     = $row[content];

		$item_file_0 = $row[file_name_0];
		$item_file_1 = $row[file_name_1];
		$item_file_2 = $row[file_name_2];

		$copied_file_0 = $row[file_copied_0];
		$copied_file_1 = $row[file_copied_1];
		$copied_file_2 = $row[file_copied_2];
	}
?>
<!DOCTYPE HTML>
<html lang="ko">
<head> 
<meta charset="utf-8">
<link href="../sub2/common/css/sub_style.css" rel="stylesheet" type="text/css" media="all">
<link href="./css/product_write.css" rel="stylesheet" type="text/css" media="all">
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
				<h2>제품검색</h2>
				<div class="lineMap">
					<span>홈</span>
					&#62;
					<span>상품소개</span>
					&#62;
					<strong>제품검색</strong>
				</div>
			</div>
 			<div id="content">
				<div id="col2">
					<?
						if($mode=="modify"){
					?>
					<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>&scale=<?=$scale?>" enctype="multipart/form-data"> <!-- 첨부파일이 있을경우 써줘야한다 --> 
					<?
					}
					else
					{
					?>
					<form  name="board_form" method="post" action="insert.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale?>" enctype="multipart/form-data"> 
						<?
							}
						?>
						<div id="write_form">
							<div id="writer_container">
								<div class="col1">작성자</div>
								<div class="col2"><?=$usernick?></div>
								<?
									if( $userid && ($mode != "modify") )
									{
								?>
								<div class="col3">
									<input type="checkbox" name="html_ok" value="y">HTML 쓰기</div>
								<?
									}
								?>						
								</div>
							<div id="title_container">
								<div class="col1">제목</div>
								<div class="col2">
									<input type="text" name="subject" value="<?=$item_subject?>" >
								</div>
							</div>
							<div id="content_container">
								<div class="col1">내용</div>
								<div class="col2">
									<textarea rows="15" cols="79" name="content">
										<?=$item_content?>
									</textarea>
								</div>
							</div>
							<div id="img_file_upload_container">
								<div class="col1">이미지파일1</div>                
								<div class="col2">
									<input type="file" name="upfile[]">
								</div>
							</div>
							<? 	
								if($mode=="modify" && $item_file_0){
							?>
							<div class="delete_ok">
								<?=$item_file_0?> 파일이 등록되어 있습니다. 
								<input type="checkbox" id="del_file1" name="del_file[]" value="0"> 
								<label for="del_file1">삭제</label>
							</div>
							<?
								}
							?>
							<div id="img_file_upload_container2">
								<div class="col1">이미지파일2</div>
								<div class="col2">
									<input type="file" name="upfile[]">
								</div>
							</div>
							<? 	
								if ($mode=="modify" && $item_file_1){
							?>
							<div class="delete_ok">
								<?=$item_file_1?> 파일이 등록되어 있습니다. 
								<input type="checkbox" id="del_file2" name="del_file[]" value="1"> 
								<label for="del_file2">삭제</label>
							</div>
							<?
								}
							?>
							<div id="img_file_upload_container3">
								<div class="col1">이미지파일3</div>
								<div class="col2">
									<input type="file" name="upfile[]">
								</div>
							</div>
							<? 	
							if ($mode=="modify" && $item_file_2){
							?>
							<div class="delete_ok">
								<?=$item_file_2?> 파일이 등록되어 있습니다. 
								<input type="checkbox" id="del_file3" name="del_file[]" value="2">
								<label for="del_file3">삭제</label>
							</div>
							<?
								}
							?>
						</div>
						<div id="write_button">
							<a href="#" onclick="check_input()">
								확인
							</a>
							<a href="list.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale?>">
								목록
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
