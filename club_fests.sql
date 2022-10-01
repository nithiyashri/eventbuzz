-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2022 at 03:07 PM
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
-- Table structure for table `club_fests`
--

CREATE TABLE `club_fests` (
  `fest_id` int(11) NOT NULL,
  `fest_name` varchar(20) NOT NULL,
  `club_id` int(11) NOT NULL,
  `fest_start_date` date NOT NULL,
  `fest_last_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `club_fests`
--

INSERT INTO `club_fests` (`fest_id`, `fest_name`, `club_id`, `fest_start_date`, `fest_last_date`) VALUES
(3001, 'mugavari', 2001, '2022-05-29', '2022-05-29'),
(3002, 'litablaze', 2002, '2022-04-30', '2022-05-01'),
(3003, 'kurukshetra', 2003, '2022-04-05', '2022-05-08'),
(3004, 'enantra', 2004, '2022-03-30', '2022-04-02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `club_fests`
--
ALTER TABLE `club_fests`
  ADD PRIMARY KEY (`fest_id`),
  ADD KEY `foreign key` (`club_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `club_fests`
--
ALTER TABLE `club_fests`
  MODIFY `fest_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3005;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `club_fests`
--
ALTER TABLE `club_fests`
  ADD CONSTRAINT `foreign key` FOREIGN KEY (`club_id`) REFERENCES `clubs` (`club_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
