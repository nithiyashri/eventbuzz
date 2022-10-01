-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2022 at 03:14 PM
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
-- Table structure for table `club_events`
--

CREATE TABLE `club_events` (
  `event_id` int(11) NOT NULL,
  `event_name` varchar(30) NOT NULL,
  `fest_id` int(11) NOT NULL,
  `event_date` date NOT NULL,
  `event_time` time NOT NULL,
  `venue` varchar(30) NOT NULL,
  `entry_fee` int(11) NOT NULL,
  `avg_rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `club_events`
--

INSERT INTO `club_events` (`event_id`, `event_name`, `fest_id`, `event_date`, `event_time`, `venue`, `entry_fee`, `avg_rating`) VALUES
(5001, 'aesthetics of photography', 3001, '2022-05-28', '09:00:00', 'urtc building,act', 150, 0),
(5002, 'texture painting', 3001, '2022-05-28', '10:00:00', 'utc building,act', 300, 0),
(5003, 'potpourri', 3002, '2022-04-30', '11:00:00', 'online', 0, 0),
(5004, 'fandom quiz', 3002, '2022-04-30', '09:00:00', 'online', 0, 0),
(5005, 'debate', 3002, '2022-04-30', '09:00:00', 'online', 0, 0),
(5006, 'puzzles', 3002, '2022-05-01', '11:30:00', 'online', 0, 0),
(5007, 'jam', 3002, '2022-05-01', '11:00:00', 'online', 0, 0),
(5008, 'virtual reality', 3004, '2022-03-31', '09:00:00', 'food tech -room 403', 399, 0),
(5009, 'art of making and story tellin', 3004, '2022-03-31', '10:00:00', 'maxwell audi,ece dept', 0, 0),
(5010, 'emerging trends in automobile ', 3004, '2022-03-31', '10:00:00', 'HM hall', 799, 0),
(5011, 'arena hunt', 3004, '2022-03-31', '11:00:00', 'kp 104', 0, 0),
(5012, 'save the company', 3004, '2022-03-31', '02:00:00', 'kp 205', 0, 0),
(5013, 'brand race', 3004, '2022-03-31', '10:00:00', 'kp 103', 0, 0),
(5014, 'shark tank', 3004, '2022-03-31', '01:00:00', 'kp 312', 0, 0),
(5015, 'entrevert', 3004, '2022-03-31', '10:30:00', 'kp 104', 0, 0),
(5016, 'idea crunch', 3004, '2022-04-01', '10:30:00', 'raman audi', 0, 0),
(5017, 'graphic designing', 3004, '2022-04-01', '09:00:00', 'food tech-room 401', 360, 0),
(5018, 'entre-wars', 3004, '2022-04-01', '10:30:00', 'vivek audi', 0, 0),
(5019, 'auction house', 3004, '2022-04-01', '09:00:00', 'hall of 1960', 0, 0),
(5020, '6 d talks', 3004, '2022-04-01', '06:00:00', 'vivek audi', 200, 0),
(5021, 'alcatraz', 3003, '2022-04-06', '10:30:00', 'kp 109', 0, 0),
(5022, 'ctrl +  Z', 3003, '2022-04-06', '10:30:00', ' kp 107', 0, 0),
(5023, 'civil X', 3003, '2022-04-06', '10:30:00', 'kp 303', 0, 0),
(5024, 'contraptions', 3003, '2022-04-06', '10:30:00', 'eg  hall 10', 0, 0),
(5025, 'innovate', 3003, '2022-04-06', '11:00:00', 'red building hall no-13', 0, 0),
(5026, 'pac bot', 3003, '2022-04-06', '10:30:00', 'alumni centre', 0, 0),
(5027, 'ninja coding', 3003, '2022-04-06', '01:30:00', 'kp 203', 0, 0),
(5028, 'web designing', 3003, '2022-04-06', '10:30:00', 'it dept', 0, 0),
(5029, 'night owl gen quiz', 3003, '2022-04-06', '10:30:00', 'snh 209', 0, 0),
(5030, 'sci-tech quiz', 3003, '2022-04-06', '02:00:00', 'kp 202', 0, 0),
(5031, 'the startup', 3003, '2022-04-06', '10:30:00', 'red building hall no-73', 0, 0),
(5032, 'tech crunch', 3003, '2022-04-06', '10:30:00', 'red building hall no-83', 0, 0),
(5033, 'godspeed', 3003, '2022-04-07', '10:30:00', 'ground', 0, 0),
(5034, 'kryptics', 3003, '2022-04-07', '10:30:00', 'kp 107', 0, 0),
(5035, 'hit the road', 3003, '2022-04-07', '10:30:00', 'kp 310', 0, 0),
(5036, 'robozest', 3003, '2022-04-07', '10:30:00', 'eg hall 10', 0, 0),
(5037, 'datathon', 3003, '2022-04-07', '10:30:00', 'kp 303', 0, 0),
(5038, 'she codes', 3003, '2022-04-07', '10:30:00', 'kp 301', 0, 0),
(5039, 'pitch perfect', 3003, '2022-04-07', '10:30:00', 'kp 309', 0, 0),
(5040, 'Mr.Cooper and the mystery', 3003, '2022-04-07', '10:30:00', 'kp 206', 0, 0),
(5041, 'fandom quiz', 3003, '2022-04-08', '10:30:00', 'kp 107', 0, 0),
(5042, 'vices and virtues', 3003, '2022-04-08', '10:30:00', 'kp 102', 0, 0),
(5043, 'paper presentation', 3003, '2022-04-08', '10:00:00', 'aufrg audi', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `club_events`
--
ALTER TABLE `club_events`
  ADD PRIMARY KEY (`event_id`),
  ADD KEY `foreign key` (`fest_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `club_events`
--
ALTER TABLE `club_events`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5044;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `club_events`
--
ALTER TABLE `club_events`
  ADD CONSTRAINT `club_events_ibfk_1` FOREIGN KEY (`fest_id`) REFERENCES `club_fests` (`fest_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
