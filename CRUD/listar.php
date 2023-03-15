<?php
require 'Pelicula.php';
$tabla='PELICULA';
$item = null;
$valor = null;
$peliculas = Pelicula::listar($tabla, $item, $valor);


?>



<h2>Listado de persona</h2>
<br>
<a href="crear.php">Agregar Persona</a>
<br>
<table border="1">
    <thead>
        <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Tipo</th>
            <th>Audio</th>
            <th>Hora</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ( $peliculas as $indice => $pelicula):?>
            <tr>
            <td><?= $indice+1?></td>
            <td><?= $pelicula['NOMBRE']?></td>
            <td><?= $pelicula['POSTER']?></td>
            <td><?= $pelicula['TIPO']?></td>
            <td><?= $pelicula['AUD']?></td>
            <td><?= $pelicula['HORA']?></td>
            <td>
                <a href="editar.php?IDPELI=<?= $pelicula['IDPELI']?>">Editar</a>
                <form method="POST">
                    <input type="hidden" name="IDPELI" value="<?= $pelicula['IDPELI']?>">
                    <button type="submit" onclick="return confirm('Está seguro de eliminar el registro?') ">Eliminar</button>
                    <?php
                        $pelicula = new Pelicula();
                        $pelicula->eliminar();
                    ?>
                </form>
            </td>
        </tr>
        <?php endforeach;?>
    </tbody>
</table>