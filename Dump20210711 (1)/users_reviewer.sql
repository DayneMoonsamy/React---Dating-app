-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: users
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `reviewer`
--

DROP TABLE IF EXISTS `reviewer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviewer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `picture` varchar(105) NOT NULL,
  `description` varchar(145) NOT NULL,
  `rating` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviewer`
--

LOCK TABLES `reviewer` WRITE;
/*!40000 ALTER TABLE `reviewer` DISABLE KEYS */;
INSERT INTO `reviewer` VALUES (1,'Rizzo','https://i.ibb.co/VvGt3dk/E0q-Lgu-SXo-AMp3sx.jpg','Food',NULL),(2,'AJ','https://i.ibb.co/VvGt3dk/E0q-Lgu-SXo-AMp3sx.jpg','Food',NULL),(3,'Polo','https://i.ibb.co/VvGt3dk/E0q-Lgu-SXo-AMp3sx.jpg','Food',NULL),(4,'Riva','https://i.ibb.co/VvGt3dk/E0q-Lgu-SXo-AMp3sx.jpg','Food',NULL),(5,'Quipo','https://i.ibb.co/VvGt3dk/E0q-Lgu-SXo-AMp3sx.jpg','Food',NULL),(6,'Free','https://i.ibb.co/VvGt3dk/E0q-Lgu-SXo-AMp3sx.jpg','Food',NULL),(7,'Alex','https://i.ibb.co/hWt1xQn/E4-Ita6-WEAIn-Hl8.jpg','I\'m tall, athletic and a former judge from Mars',NULL),(9,'L','https://i.ibb.co/dGR299B/EYa-F23-AWAAI7-M-s.jpg','Cigs and Champagne maam',NULL),(10,'ASD','https://i.ibb.co/mTnpPXj/Ed-Or-gb-Xg-AEw0-SX.jpg','Okay Boomer !!!!!!',NULL),(12,'Text3','https://i.ibb.co/VY1vL8G/Ex-LJStj-Uc-BAISym.jpg','Cool beans',NULL);
/*!40000 ALTER TABLE `reviewer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-11 15:13:52
