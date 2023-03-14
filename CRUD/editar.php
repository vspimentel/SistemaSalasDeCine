<?php
    require_once 'Pelicula.php';

    $pelicula = Pelicula::listar('PELICULA', 'IDPELI',$_GET['IDPELI']);
    
?>

<form method="POST">

<input type="hidden" name="IDPELI" value="<?= $pelicula['IDPELI']?>">
    <label for="nombre">Nombre</label>
    <input type="text" name="nombre" id="nombre"  value="<?= $pelicula['NOMBRE']?>" required>
    <br>
    <input type="file" name="foto" id="foto" value="<?= $pelicula['POSTER']?>">
    <label for="foto">seleccione la foto</label>
    <br>
    <?php
        if($pelicula['TIPO'] == '2D'){?>
            <label>
            <input type="radio" name="tipo" id="tipo2d" value="2D" required checked>2D
            </label>
            <label>
            <input type="radio" name="tipo" id="tipo3d" value="3D" required>3D
            </label>
    <?php }else{?>
            <label>
            <input type="radio" name="tipo" id="tipo2d" value="2D" required>2D
            </label>
            <label>
            <input type="radio" name="tipo" id="tipo3d" value="3D" required checked>3D
            </label>
    <?php }
    ?>
    <br>
    <?php
        if($pelicula['TIPO'] == 'SUB'){?>
            <label>
            <input type="radio" name="audio" id="audioSub" value="SUB" required checked>Subtitulada
            </label>
            <label>
            <input type="radio" name="audio" id="audioDob" value="DOB" required>Doblada
            </label>
    <?php }else{?>
            <label>
            <input type="radio" name="audio" id="audioSub" value="SUB" required>Subtitulada
            </label>
            <label>
            <input type="radio" name="audio" id="audioDob" value="DOB" required checked>Doblada
            </label>
    <?php }
    ?>

    
    
    
    <br>
    <label for="hora">Hora</label>
    <input type="text" name="hora" id="hora" value="<?= $pelicula['HORA']?>">
    <br>

    <button type="submit">Editar</button>

    <?php
      $persona = new Pelicula();
      $persona->editar();  
    ?>

</form>