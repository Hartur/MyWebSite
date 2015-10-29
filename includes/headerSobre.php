<?php include("./includes/header.php"); ?>
<?php include("./includes/photo.inc"); ?>

			<div class="media-body info-painel">
				<div class="col-xs-3 box">
					<div class="rcorners">
						<ul class="nav nav-pills nav-stacked" id="headerSobreID">



							<?php
								switch($headerSobreActive){
									case 0:
									echo '<li role="presentation" class="hidden-xs hidden-sm" ><a href="extra.php">Atividades Extras </a></li>
										<li role="presentation" class="hidden-md hidden-lg" ><a href="extra.php">Extras </a></li>

										<li role="presentation" class="hidden-xs hidden-sm" ><a href="profissional.php">Atuação Profissional</a></li>
										<li role="presentation" class="hidden-md hidden-lg" ><a href="profissional.php">Carreira</a></li>

										<li role="presentation" class="hidden-xs hidden-sm" ><a href="cursos.php">Cursos Realizados</a></li>
										<li role="presentation" class="hidden-md hidden-lg" ><a href="cursos.php">Cursos</a></li>

										<li role="presentation" class="hidden-xs hidden-sm" ><a href="eventos.php">Eventos Participados</a></li>
										<li role="presentation" class="hidden-md hidden-lg" ><a href="eventos.php">Eventos </a></li>

										<li role="presentation" class="hidden-xs hidden-sm" ><a href="academica.php">Formação Acadêmica     </a></li>
										<li role="presentation" class="hidden-md hidden-lg" "><a href="academica.php">Formação     </a></li>';
										break;

									case 1:
									echo '<li role="presentation" class="hidden-xs hidden-sm active" ><a href="extra.php">Atividades Extras </a></li>
										<li role="presentation" class="hidden-md hidden-lg active" ><a href="extra.php">Extras </a></li>

										<li role="presentation" class="hidden-xs hidden-sm" ><a href="profissional.php">Atuação Profissional</a></li>
										<li role="presentation" class="hidden-md hidden-lg" ><a href="profissional.php">Carreira</a></li>

										<li role="presentation" class="hidden-xs hidden-sm" ><a href="cursos.php">Cursos Realizados</a></li>
										<li role="presentation" class="hidden-md hidden-lg" ><a href="cursos.php">Cursos</a></li>

										<li role="presentation" class="hidden-xs hidden-sm" ><a href="eventos.php">Eventos Participados</a></li>
										<li role="presentation" class="hidden-md hidden-lg" ><a href="eventos.php">Eventos </a></li>

										<li role="presentation" class="hidden-xs hidden-sm" ><a href="academica.php">Formação Acadêmica     </a></li>
										<li role="presentation" class="hidden-md hidden-lg" "><a href="academica.php">Formação     </a></li>';
										break;

									case 2:
									echo '<li role="presentation" class="hidden-xs hidden-sm" ><a href="extra.php">Atividades Extras </a></li>
										<li role="presentation" class="hidden-md hidden-lg" ><a href="extra.php">Extras </a></li>

										<li role="presentation" class="hidden-xs hidden-sm active" ><a href="profissional.php">Atuação Profissional</a></li>
										<li role="presentation" class="hidden-md hidden-lg active" ><a href="profissional.php">Carreira</a></li>

										<li role="presentation" class="hidden-xs hidden-sm" ><a href="cursos.php">Cursos Realizados</a></li>
										<li role="presentation" class="hidden-md hidden-lg" ><a href="cursos.php">Cursos</a></li>

										<li role="presentation" class="hidden-xs hidden-sm" ><a href="eventos.php">Eventos Participados</a></li>
										<li role="presentation" class="hidden-md hidden-lg" ><a href="eventos.php">Eventos </a></li>

										<li role="presentation" class="hidden-xs hidden-sm" ><a href="academica.php">Formação Acadêmica     </a></li>
										<li role="presentation" class="hidden-md hidden-lg" "><a href="academica.php">Formação     </a></li>';
										break;

									case 3:
									echo '<li role="presentation" class="hidden-xs hidden-sm" ><a href="extra.php">Atividades Extras </a></li>
										<li role="presentation" class="hidden-md hidden-lg" ><a href="extra.php">Extras </a></li>

										<li role="presentation" class="hidden-xs hidden-sm" ><a href="profissional.php">Atuação Profissional</a></li>
										<li role="presentation" class="hidden-md hidden-lg" ><a href="profissional.php">Carreira</a></li>

										<li role="presentation" class="hidden-xs hidden-sm active" ><a href="cursos.php">Cursos Realizados</a></li>
										<li role="presentation" class="hidden-md hidden-lg active" ><a href="cursos.php">Cursos</a></li>

										<li role="presentation" class="hidden-xs hidden-sm" ><a href="eventos.php">Eventos Participados</a></li>
										<li role="presentation" class="hidden-md hidden-lg" ><a href="eventos.php">Eventos </a></li>

										<li role="presentation" class="hidden-xs hidden-sm" ><a href="academica.php">Formação Acadêmica     </a></li>
										<li role="presentation" class="hidden-md hidden-lg" "><a href="academica.php">Formação     </a></li>';
										break;

									case 4:
									echo '<li role="presentation" class="hidden-xs hidden-sm" ><a href="extra.php">Atividades Extras </a></li>
										<li role="presentation" class="hidden-md hidden-lg" ><a href="extra.php">Extras </a></li>

										<li role="presentation" class="hidden-xs hidden-sm" ><a href="profissional.php">Atuação Profissional</a></li>
										<li role="presentation" class="hidden-md hidden-lg" ><a href="profissional.php">Carreira</a></li>

										<li role="presentation" class="hidden-xs hidden-sm" ><a href="cursos.php">Cursos Realizados</a></li>
										<li role="presentation" class="hidden-md hidden-lg" ><a href="cursos.php">Cursos</a></li>

										<li role="presentation" class="hidden-xs hidden-sm active" ><a href="eventos.php">Eventos Participados</a></li>
										<li role="presentation" class="hidden-md hidden-lg active" ><a href="eventos.php">Eventos </a></li>

										<li role="presentation" class="hidden-xs hidden-sm" ><a href="academica.php">Formação Acadêmica     </a></li>
										<li role="presentation" class="hidden-md hidden-lg" "><a href="academica.php">Formação     </a></li>';
										break;

									case 5:
									echo '<li role="presentation" class="hidden-xs hidden-sm" ><a href="extra.php">Atividades Extras </a></li>
										<li role="presentation" class="hidden-md hidden-lg" ><a href="extra.php">Extras </a></li>

										<li role="presentation" class="hidden-xs hidden-sm" ><a href="profissional.php">Atuação Profissional</a></li>
										<li role="presentation" class="hidden-md hidden-lg" ><a href="profissional.php">Carreira</a></li>

										<li role="presentation" class="hidden-xs hidden-sm" ><a href="cursos.php">Cursos Realizados</a></li>
										<li role="presentation" class="hidden-md hidden-lg" ><a href="cursos.php">Cursos</a></li>

										<li role="presentation" class="hidden-xs hidden-sm" ><a href="eventos.php">Eventos Participados</a></li>
										<li role="presentation" class="hidden-md hidden-lg" ><a href="eventos.php">Eventos </a></li>

										<li role="presentation" class="hidden-xs hidden-sm active" ><a href="academica.php">Formação Acadêmica     </a></li>
										<li role="presentation" class="hidden-md hidden-lg active" ><a href="academica.php">Formação     </a></li>';
										break;
								}

							?>



							
						</ul>
					</div>
				</div>