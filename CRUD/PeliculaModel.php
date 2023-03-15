<?php
require_once 'Conexion.php';


class PeliculaModel{
    public static function  listar($tabla, $item, $valor){
        if($item != null){
            $stmt = Conexion::conectar()->prepare("SELECT * FROM $tabla WHERE $item =:$item");
            $stmt->bindParam(":".$item, $valor, PDO::PARAM_INT);
            $stmt->execute();
            return $stmt->fetch();
        }
        else{
            $stmt = Conexion::conectar()->prepare("SELECT * FROM $tabla");
            $stmt->execute();
            return $stmt->fetchAll();
        }
    }
    public static function guardar($tabla, $datos){
        $stmt = Conexion::conectar()->prepare("INSERT INTO $tabla(NOMBRE, POSTER, TIPO, AUD, HORA) VALUES(:NOMBRE, :POSTER, :TIPO, :AUD, :HORA)");
        $stmt->bindParam(':NOMBRE', $datos['NOMBRE'], PDO::PARAM_STR);
        $stmt->bindParam(':POSTER', $datos['POSTER'], PDO::PARAM_STR);
        $stmt->bindParam(':TIPO', $datos['TIPO'], PDO::PARAM_STR);
        $stmt->bindParam(':AUD', $datos['AUD'], PDO::PARAM_STR);
        $stmt->bindParam(':HORA', $datos['HORA'], PDO::PARAM_STR);

        if($stmt->execute())
            return true;
        else
            return false;
    }
    public static function editar($tabla, $datos)
    {
        $stmt = Conexion::conectar()->prepare("UPDATE $tabla SET NOMBRE=:NOMBRE, POSTER=:POSTER, TIPO=:TIPO, AUD=:AUD, HORA=:HORA  WHERE IDPELI=:IDPELI");
        $stmt->bindParam(':NOMBRE',$datos['NOMBRE'], PDO::PARAM_STR);
        $stmt->bindParam(':POSTER', $datos['POSTER'], PDO::PARAM_STR);
        $stmt->bindParam(':TIPO', $datos['TIPO'], PDO::PARAM_STR);
        $stmt->bindParam(':AUD', $datos['AUD'], PDO::PARAM_STR);
        $stmt->bindParam(':HORA', $datos['HORA'], PDO::PARAM_STR);

        $stmt->bindParam(':IDPELI', $datos['IDPELI'], PDO::PARAM_INT);

        if($stmt->execute())
            return true;
        else
            return false;
    }
    public static function eliminar($tabla, $datos)
    {
        $stmt = Conexion::conectar()->prepare("DELETE FROM $tabla   WHERE IDPELI=:IDPELI");

        $stmt->bindParam(':IDPELI', $datos['IDPELI'], PDO::PARAM_INT);

        if($stmt->execute())
            return true;
        else
            return false;
    }
}
?>