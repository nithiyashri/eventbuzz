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
-- Table structure for table `symposiums`
--

CREATE TABLE `symposiums` (
  `symp_id` int(11) NOT NULL,
  `symp_name` varchar(30) NOT NULL,
  `dept_id` int(11) NOT NULL,
  `symp_start_date` date NOT NULL,
  `symp_last_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `symposiums`
--

INSERT INTO `symposiums` (`symp_id`, `symp_name`, `dept_id`, `symp_start_date`, `symp_last_date`) VALUES
(4001, 'abacus', 1001, '2022-04-27', '2022-04-30'),
(4002, 'sync', 1001, '2021-12-17', '2021-12-18'),
(4003, 'itrix', 1002, '2022-05-05', '2022-05-07'),
(4004, 'i++', 1002, '2021-12-27', '2021-12-28'),
(4005, 'pinnacle', 1003, '2022-05-04', '2022-05-06'),
(4006, 'ascension', 1003, '0000-00-00', '0000-00-00'),
(4007, 'vision', 1004, '2022-04-28', '2022-04-30'),
(4008, 'resonance', 1004, '0000-00-00', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `symposiums`
--
ALTER TABLE `symposiums`
  ADD PRIMARY KEY (`symp_id`),
  ADD KEY `foreign key` (`dept_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `symposiums`
--
ALTER TABLE `symposiums`
  ADD CONSTRAINT `symposiums_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `departments` (`dept_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
