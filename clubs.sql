-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2022 at 02:33 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eventbuzz`
--

-- --------------------------------------------------------

--
-- Table structure for table `clubs`
--

CREATE TABLE `clubs` (
  `club_id` int(11) NOT NULL,
  `club_name` varchar(20) NOT NULL,
  `club_president` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `flagship_event` varchar(30) NOT NULL,
  `description` varchar(40) NOT NULL,
  `social_media_id` varchar(30) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clubs`
--

INSERT INTO `clubs` (`club_id`, `club_name`, `club_president`, `email`, `flagship_event`, `description`, `social_media_id`, `image`) VALUES
(2001, 'guindy times', 'Guru Nivash', 'gtceg@gmail.com', 'mugavari', 'official magazine club of anna universit', 'the_guindy_times', 'gt.jpeg'),
(2002, 'litclub', 'bhagavathi', 'litclubceg@gmail.com', 'litablaze', 'the literary club of anna university', 'litclubau', 'lit.jpeg'),
(2003, 'ceg tech forum', 'srinath', 'ctfceg@gmail.com', 'kurukshetra', 'a techno-management organization', 'ceg_tech_forum', 'ctf.jpeg'),
(2004, 'ausec', 'kaushic', 'ausecceg@gmail.com', 'enantra', 'official entrepreneurship club of ceg', 'student_entrepreneurship_club', 'ausec.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clubs`
--
ALTER TABLE `clubs`
  ADD PRIMARY KEY (`club_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clubs`
--
ALTER TABLE `clubs`
  MODIFY `club_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2005;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
