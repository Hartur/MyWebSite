<html>


<head>
	<meta http-equiv="Content-Type" content="text/html, charset=utf-8" />
	<title>Hartur - Home</title>
	<link rel="stylesheet" href="bootstrap-3.3.5-dist/css/bootstrap.min.css">
	<link rel="stylesheet" href="font-awesome-4.4.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="style.css">
	
	<meta charset="UTF-8">
	<meta name="author" content="Hartur Barreto Brito">
</head>


<body class="container">

	<div class="container navbar navbar-inverse">
		<ul class="nav navbar-nav" id="headerID">

			<?php
				switch($headerActive){
					case 0:
						echo '<li role="presentation" class="active"><a href="index.php"><i class="fa fa-book"></i> Sobre </a></li>';
						echo '<li role="presentation" ><a href="contact.php"><i class="fa fa-phone"></i> Contato </a></li>';
						echo '<li role="presentation" ><a href="documents.php"><i class="fa fa-folder-open"></i> Textos </a></li>';
						break;
					case 1:
						echo '<li role="presentation" ><a href="index.php"><i class="fa fa-book"></i> Sobre </a></li>';
						echo '<li role="presentation" class="active"><a href="contact.php"><i class="fa fa-phone"></i> Contato </a></li>';
						echo '<li role="presentation" ><a href="documents.php"><i class="fa fa-folder-open"></i> Textos </a></li>';
						break;
					case 2:
						echo '<li role="presentation" ><a href="index.php"><i class="fa fa-book"></i> Sobre </a></li>';
						echo '<li role="presentation" ><a href="contact.php"><i class="fa fa-phone"></i> Contato </a></li>';
						echo '<li role="presentation" class="active"><a href="documents.php"><i class="fa fa-folder-open"></i> Textos </a></li>';
						break;
				}
			?>

			<li role="presentation" ><a href="http://lattes.cnpq.br/5514434560442605"><i class="fa fa-file-text-o"></i> Lattes </a></li>
			<li role="presentation">
					<a href="https://github.com/Hartur">
						<font size="4">
							<i class="fa fa-github"></i>
						</font>
					</a>
			</li>
			<li role="presentation">
					<a href="https://br.linkedin.com/in/hartur92">
						<font size="4">
							<i class="fa fa-linkedin-square"></i>
						</font>
					</a>
			</li>
		</ul>
	</div>
