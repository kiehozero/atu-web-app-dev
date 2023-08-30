-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: g00411381
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `ID` int NOT NULL,
  `Artist` text,
  `Release` text,
  `Format` text,
  `Price` double DEFAULT NULL,
  `Image` varchar(45) DEFAULT NULL,
  `Description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `idx_products_ï»¿ID` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Metallica','Master of Puppets','Vinyl',18.99,'1.jpg','Metallica catapult themselves into the stratosphere with a barrage of precision riffs, elite arrangements and anthemic choruses.'),(2,'Megadeth','Rust in Peace','CD',12.99,'2.jpg','A technical masterpiece from start to finish, Rust in Peace is a work of genius, the magnum opus of Megadeth, and possibly the entire genre of heavy metal.'),(3,'Slayer','Reign in Blood','Vinyl',18.99,'3.jpg','29 minutes of unrelenting savagery, Reign in Blood is the ultimate fusion of heavy metal and punk. No extreme band around today exists without this record.'),(4,'Anthrax','Among the Living','CD',12.99,'4.jpg','Quite literally the jokers in the pack, New York\'s Anthrax bring diverse influences to the scene, and were the first to master the mid-tempo grooves that would echo in the bands of the 1990s.'),(5,'Exodus','Bonded by Blood','Cassette',9.99,'5.jpg','As raw, rough and ready as they come, even by the standards of early 1980s thrash, Bonded by Blood is a violent statement of intent.'),(6,'Metallica','And Justice for All','T-Shirt',20,'6.jpg','Show your dedication to Metallica\'s labyrinthine, politically-charged fourth record with this garment.'),(7,'Slayer','Seasons in the Abyss','CD',12.99,'7.jpg','Combining the frenetic range of Reign in Blood and the psychological horror of South of Heaven, Slayer solidify their legacy with their most mature record to date.'),(8,'Emperor','Anthems to the Welkin at Dusk','CD',14.5,'8.jpg','From the ashes - and prison cells - of a chaotic, lethal Norwegian black metal scene, Emperor emerged to produce a heavily symphonic record that remains light-years ahead of their peers.'),(9,'Mogwai','Les Revenants','CD',16.49,'9.jpg','Written as the soundtrack to the synonymous television series, this stands as a great record on its own two feet.'),(10,'Fear Factory','Demanufacture','2CD',21.99,'10.jpg','Famously recorded while watching Blade Runner and Terminator on repeat, this is THE blueprint for industrial metal. Includes a bonus remix disc that broke new ground in heavy metal.'),(11,'Miles Davis','Kind of Blue','Vinyl',18.99,'11.jpg','Leading a dream team featuring John Coltrane, Bill Evans and Cannonball Adderley, Miles Davis reinvents himself, his band, the genre of jazz and Western music at large. Simply essential listening.'),(12,'Kate Bush','The Dreaming','2CD',20,'12.jpg','Kate Bush\'s best attempt at driving her critics - and fans - into the long grass, with her most leftfield take on avant-garde pop to date.'),(13,'Taylor Swift','1989','Vinyl',19.89,'13.jpg','The biggest-selling artist of the century makes a radical departure from her country roots in fifty minutes of powerful, biographical contemporary pop music.'),(14,'Halsey','If I Can\'t Have Love, I Want Power','DVD',21.99,'14.jpg','Working in collaboration with Nine Inch Nails\' Trent Reznor and Atticus Ross, Halsey delivers a haunting ode to pregnancy and childbirth. One of the defining female artists of the 21st century.'),(15,'Radiohead','OK Computer','MiniDisc',10.99,'15.jpg','Radiohead\'s bleak, introspective post-rock pushed alternative music into the new millennium, perfecting an anxious mix of rock and electronic instrumentation.'),(16,'Nine Inch Nails','Year Zero','CD',19.99,'16.jpg','Trent Reznor blasts his way through a dystopian science-fiction concept album that is equal parts Public Enemy, The Kinks, Merzbow and GY!BE. One of the most under-rated records in the last 20 years.');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-30 22:26:43
