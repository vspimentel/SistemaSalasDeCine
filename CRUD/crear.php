<?php
    
?>
<form method="POST" enctype="multipart/form-data">
    <label for="nombre">Nombre</label>
    <input type="text" name="nombre" id="nombre" required>
    <br>
    <input type="file" id="foto" name="foto" required/>
    <label for="foto">seleccione la foto</label>
    <br>
    <label>
    <input type="radio" name="tipo" id="tipo2d" value="2D" required>2D
    </label>
    <label>
    <input type="radio" name="tipo" id="tipo3d" value="3D" required>3D
    </label>
    <br>
    <input type="radio" name="audio" id="audioSub" value="SUB" required>Subtitulada
    </label>
    <label>
    <input type="radio" name="audio" id="audioDob" value="DOB" required>Doblada
    </label>
    <br>
    <label for="hora">Hora</label>
    <input type="text" name="hora" id="hora">
    <br>
    <button>Guardar</button>
    <?php
        require 'Pelicula.php';
        $pelicula = new Pelicula();
        $pelicula->guardar();
        
    ?>
</form>