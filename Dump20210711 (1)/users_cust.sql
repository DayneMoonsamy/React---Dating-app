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
-- Table structure for table `cust`
--

DROP TABLE IF EXISTS `cust`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cust` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `genderUser` varchar(45) NOT NULL,
  `genderMatch` varchar(45) NOT NULL,
  `picture` varchar(80) NOT NULL,
  `userLike` varchar(100) NOT NULL,
  `matchLike` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cust`
--

LOCK TABLES `cust` WRITE;
/*!40000 ALTER TABLE `cust` DISABLE KEYS */;
INSERT INTO `cust` VALUES (1,'a','Chicago','M','F','https://i.ibb.co/zsYTT6X/Eez-Gbj-KUYAA1nf-J.jpg','Food','Tall'),(2,'Haven','Chicago','M','F','https://i.ibb.co/zsYTT6X/Eez-Gbj-KUYAA1nf-J.jpg','Food','Tall'),(3,'Cally','Chicago','M','F','https://i.ibb.co/zsYTT6X/Eez-Gbj-KUYAA1nf-J.jpg','Food','Tall'),(4,'Rizzo','Chicago','M','F','https://i.ibb.co/zsYTT6X/Eez-Gbj-KUYAA1nf-J.jpg','Food','Tall'),(5,'Alex','Chicago','M','F','https://i.ibb.co/zsYTT6X/Eez-Gbj-KUYAA1nf-J.jpg','Food','Tall'),(6,'Talkie','Chicago','M','F','https://i.ibb.co/zsYTT6X/Eez-Gbj-KUYAA1nf-J.jpg','Food','Tall'),(7,'Das','Chicago','M','F','https://i.ibb.co/zsYTT6X/Eez-Gbj-KUYAA1nf-J.jpg','Food','Tall'),(8,'Louie','Chicago','M','F','https://i.ibb.co/zsYTT6X/Eez-Gbj-KUYAA1nf-J.jpg','Food','Tall'),(9,'Rocky','Chicago','M','F','https://i.ibb.co/zsYTT6X/Eez-Gbj-KUYAA1nf-J.jpg','Food','Tall'),(11,'D','DD','Non-conformnig','Female','https://i.ibb.co/zsYTT6X/Eez-Gbj-KUYAA1nf-J.jpg','Milo','LOoper'),(12,'DSilver','LOOKC','Female','Non-conformnig','https://i.ibb.co/rxtXRWt/Ex-LJStj-Uc-BAISym.jpg','TALL','HAND'),(15,'Aex','Chicago','M','F','https://i.ibb.co/zsYTT6X/Eez-Gbj-KUYAA1nf-J.jpg','Food','Tall'),(17,'AexPol','ds','Male\nMale\nFemale\nNon-conformnig','Male\nMale\nFemale\nNon-conformnig','https://i.ibb.co/d4358nd/E4-Ita6-WEAIn-Hl8.jpg','dsa','das'),(18,'DSA','DS','Female','Male','https://i.ibb.co/VvGt3dk/E0q-Lgu-SXo-AMp3sx.jpg','DS','AS'),(19,'DSAS','DS','Male','Non-conformnig','https://i.ibb.co/VvGt3dk/E0q-Lgu-SXo-AMp3sx.jpg','DS','AS'),(28,'Black Adam','New York','Female','Non-conforming','https://i.ibb.co/FmZTwHp/EWj8jbn-Xk-Aw47-Ua.jpg','Black Sabbath','Tall Dark and Handsome');
/*!40000 ALTER TABLE `cust` ENABLE KEYS */;
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
