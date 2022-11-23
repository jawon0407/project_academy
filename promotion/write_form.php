<? 
	session_start(); 
	

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
		$item_category  = $row[category];
		$item_subject = $row[subject];
		$item_content = $row[content];

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
<link href="../sub4/common/css/sub_style.css" rel="stylesheet" type="text/css" media="all">
<link href="./css/promotion_write.css" rel="stylesheet">
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
			<img src="./../sub4/common/images/yonexzone_main_image.png" alt="요넥스존" />
			<h3>요넥스존</h3>
		</div>
		<div class="subNav">
			<ul class="subNav_wrap">
				<li>
					<a href="./../greet/list.php">
						<span>요넥스소식</span>
					</a>
				</li>
				<li>
					<a href="./../sub4/sub4_2.html">
						<span>사회공헌</span>
					</a>
				</li>
				<li class="onclick">
					<a href="./list.php">
						<span>사회공헌</span>
					</a>
				</li>
			</ul>
		</div>
		<article id="content">
			<div class="titleArea">
				<h2>프로모션</h2>
				<div class="lineMap">
					<span>홈</span>
					&#62;
					<span>요넥스존</span>
					&#62;
					<strong>프로모션</strong>
				</div>
			</div>
 			<div class="contentArea">
				<div id="col2">
					<?
						if($mode === "modify"){
					?>
					<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>" enctype="multipart/form-data"> <!-- 첨부파일이 있을경우 써줘야한다 --> 
					<?
					}
					else
					{
					?>
					<form  name="board_form" method="post" action="insert.php?table=<?=$table?>&page=<?=$page?>" enctype="multipart/form-data"> 
						<?
							}
						?>
						<div id="write_form">
							<div id="writer_container">
								<div class="col1">작성자</div>
								<div class="col2">
									<div class="col3"><?=$usernick?></div>
									<?
										if( $userid && ($mode != "modify") )
										{
									?>
									<div class="col4">
										<input type="checkbox" name="html_ok" value="y">HTML 쓰기</div>
									<?
										}
									?>						
									</div>
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
									<textarea rows="15" cols="79" name="content"><?=$item_content?></textarea>
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
							<div class="delete_ok first">
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
							<div class="delete_ok second">
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
							<div class="first_delete_ok last">
								<?=$item_file_2?> 파일이 등록되어 있습니다. 
								<input type="checkbox" id="del_file3" name="del_file[]" value="2">
								<label for="del_file3">삭제</label>
							</div>
							<?
								}
							?>
						</div>
						<div id="write_button" class="btn_container">
							<a href="list.php?table=<?=$table?>">
								목록
							</a>
							<a href="#" onclick="check_input()">
								확인
							</a>
						</div>
					</form>
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
