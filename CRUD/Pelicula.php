<?php
    require_once 'PeliculaModel.php';

    class Pelicula{
        public static function listar($tabla, $item, $valor){
            $respuesta = PeliculaModel::listar($tabla, $item, $valor);
            return $respuesta;
        }
        public function guardar()
        {
            if($_SERVER['REQUEST_METHOD'] == 'POST'){
                $tipo= $_POST['tipo'];
            }
            if($_SERVER['REQUEST_METHOD'] == 'POST'){
                $audio= $_POST['audio'];
            }
            if(isset($_POST['nombre'])){
                $directorio = "uploads/";
                $archivo = $directorio . time(). ".".pathinfo($_FILES['foto']['name'], PATHINFO_EXTENSION);
                move_uploaded_file($_FILES['foto']['tmp_name'], $archivo);
                $datos = [
                    'NOMBRE' => trim($_POST['nombre']),
                    'POSTER' => $archivo,
                    'TIPO' => $tipo,
                    'AUD' => $audio,
                    'HORA' => $_POST['hora']
                ];

                $tabla = 'PELICULA';
                $respuesta = PeliculaModel::guardar($tabla, $datos);
                if($respuesta){
                    echo "<script>
                        let text = 'Pelicula agregado correctamente';
                        if(confirm(text) == true){
                            window.location.href = 'listar.php';
                        } 
                    </script>";
                }else{
                    echo 'Error al registrar';
                }
            }
        }
        public function editar()
        {
            if($_SERVER['REQUEST_METHOD'] == 'POST'){
                $tipo= $_POST['tipo'];
            }
            if($_SERVER['REQUEST_METHOD'] == 'POST'){
                $audio= $_POST['audio'];
            }
            if(isset($_POST['IDPELI'])){
                $directorio = "uploads/";
                $archivo = $directorio . time(). ".".pathinfo($_FILES['foto']['name'], PATHINFO_EXTENSION);
                move_uploaded_file($_FILES['foto']['tmp_name'], $archivo);
                $datos = [
                    'IDPELI' => $_POST['IDPELI'],
                    'NOMBRE' => trim($_POST['nombre']),
                    'POSTER' => $archivo,
                    'TIPO' => $tipo,
                    'AUD' => $audio,
                    'HORA' => $_POST['hora']
                ];

                $tabla = 'PELICULA';
                $respuesta = PeliculaModel::editar($tabla, $datos);
                if($respuesta){
                    echo "<script>
                        let text = 'Pelicula editado correctamente';
                        if(confirm(text) == true){
                            window.location.href = 'listar.php';
                        } 
                    </script>";
                }else{
                    echo 'Error al editar';
                }
            }
        }
        public function eliminar()
        {
            if(isset($_POST['IDPELI'])){
                $datos = [
                    'IDPELI' => $_POST['IDPELI']
                ];

                $tabla = 'PELICULA';
                $respuesta = PeliculaModel::eliminar($tabla, $datos);
                if($respuesta){
                    echo "<script>
                        let text = 'Pelicula eliminado correctamente';
                        if(confirm(text) == true){
                            window.location.href = 'listar.php';
                        } 
                    </script>";
                }else{
                    echo 'Error al eliminar';
                }
            }
        }
    }

?>