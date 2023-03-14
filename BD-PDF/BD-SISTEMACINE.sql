-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: sistemacine
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `asiento`
--

DROP TABLE IF EXISTS `asiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asiento` (
  `IDBUTACA` int NOT NULL,
  `ESTADO` varchar(15) NOT NULL DEFAULT 'DISPONIBLE',
  `IDSALA` int NOT NULL,
  `IDPELI` int NOT NULL,
  KEY `IDSALA` (`IDSALA`),
  KEY `IDPELI` (`IDPELI`),
  CONSTRAINT `asiento_ibfk_1` FOREIGN KEY (`IDSALA`) REFERENCES `sala` (`IDSALA`),
  CONSTRAINT `asiento_ibfk_2` FOREIGN KEY (`IDPELI`) REFERENCES `pelicula` (`IDPELI`),
  CONSTRAINT `asiento_chk_1` CHECK ((`ESTADO` in (_utf8mb4'DISPONIBLE',_utf8mb4'OCUPADO')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asiento`
--

LOCK TABLES `asiento` WRITE;
/*!40000 ALTER TABLE `asiento` DISABLE KEYS */;
/*!40000 ALTER TABLE `asiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dia`
--

DROP TABLE IF EXISTS `dia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dia` (
  `IDDIA` int NOT NULL,
  `PRECIO` int NOT NULL,
  PRIMARY KEY (`IDDIA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dia`
--

LOCK TABLES `dia` WRITE;
/*!40000 ALTER TABLE `dia` DISABLE KEYS */;
INSERT INTO `dia` VALUES (1,30),(2,40),(3,35);
/*!40000 ALTER TABLE `dia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pelicula`
--

DROP TABLE IF EXISTS `pelicula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pelicula` (
  `IDPELI` int NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(60) NOT NULL,
  `POSTER` varchar(80) NOT NULL,
  `TIPO` varchar(5) NOT NULL,
  `AUD` varchar(5) NOT NULL,
  `HORA` varchar(45) NOT NULL,
  PRIMARY KEY (`IDPELI`),
  CONSTRAINT `pelicula_chk_1` CHECK ((`TIPO` in (_utf8mb4'2D',_utf8mb4'3D'))),
  CONSTRAINT `pelicula_chk_2` CHECK ((`AUD` in (_utf8mb4'SUB',_utf8mb4'DOB')))
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pelicula`
--

LOCK TABLES `pelicula` WRITE;
/*!40000 ALTER TABLE `pelicula` DISABLE KEYS */;
INSERT INTO `pelicula` VALUES (1,'THE WHALE','The-Whale.jpg','2D','SUB','13:00 - 15:20 20:40'),(2,'SCREAM 6','Scream6.jpg','3D','DOB','16:00 - 19:15 - 20:30'),(3,'ELLAS HABLAN','Ellas-Hablan.jpg','2D','SUB','14:20 - 18:40 - 21:10'),(4,'EL GATO CON BOTAS','El-Gato-Con-Botas.jpg','2D','DOB','14:05 - 17:00 - 18:10'),(5,'CREED III','CreedIII.jpg','2D','DOB','10:10 - 16:20 - 18:35'),(6,'ANT MAN QUANTUNMANIA','AntMan-Quantumania.jpg','3D','DOB','10:40 - 15:10 - 18:20');
/*!40000 ALTER TABLE `pelicula` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sala`
--

DROP TABLE IF EXISTS `sala`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sala` (
  `IDSALA` int NOT NULL,
  PRIMARY KEY (`IDSALA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sala`
--

LOCK TABLES `sala` WRITE;
/*!40000 ALTER TABLE `sala` DISABLE KEYS */;
/*!40000 ALTER TABLE `sala` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venta`
--

DROP TABLE IF EXISTS `venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venta` (
  `IDVENTA` int NOT NULL AUTO_INCREMENT,
  `IDDIA` int NOT NULL,
  `IDPELI` int NOT NULL,
  PRIMARY KEY (`IDVENTA`),
  KEY `IDDIA` (`IDDIA`),
  KEY `IDPELI` (`IDPELI`),
  CONSTRAINT `venta_ibfk_1` FOREIGN KEY (`IDDIA`) REFERENCES `dia` (`IDDIA`),
  CONSTRAINT `venta_ibfk_2` FOREIGN KEY (`IDPELI`) REFERENCES `pelicula` (`IDPELI`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta`
--

LOCK TABLES `venta` WRITE;
/*!40000 ALTER TABLE `venta` DISABLE KEYS */;
INSERT INTO `venta` VALUES (1,1,1),(2,1,1),(3,1,1),(4,1,1),(5,1,1),(6,1,1),(7,1,1),(8,1,1),(9,1,1),(10,1,1),(11,1,1),(12,1,1),(13,1,1),(14,1,2),(15,1,2),(16,1,2),(17,1,2),(18,1,2),(19,1,2),(20,1,2),(21,1,2),(22,1,2),(23,1,3),(24,1,3),(25,1,3),(26,1,3),(27,1,3),(28,1,3),(29,1,4),(30,1,4),(31,1,4),(32,1,4),(33,1,4),(34,1,5),(35,1,5),(36,1,5);
/*!40000 ALTER TABLE `venta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-14 16:00:27
