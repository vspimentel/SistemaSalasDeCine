<?php
    class Conexion{
        public static function conectar(){
            $link = new PDO("mysql:host=localhost; dbname=sistemacine", "root", "");
            $link -> exec("set name utf8");
            return $link;
        }
    }
?>