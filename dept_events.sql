-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2022 at 03:22 PM
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
-- Table structure for table `dept_events`
--

CREATE TABLE `dept_events` (
  `event_id` int(11) NOT NULL,
  `event_name` varchar(30) NOT NULL,
  `symp_id` int(11) NOT NULL,
  `round1_date` date NOT NULL,
  `round1_time` time NOT NULL,
  `round2_date` date NOT NULL,
  `round2_time` time NOT NULL,
  `venue` varchar(20) NOT NULL,
  `prize` int(11) NOT NULL,
  `avg_rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dept_events`
--

INSERT INTO `dept_events` (`event_id`, `event_name`, `symp_id`, `round1_date`, `round1_time`, `round2_date`, `round2_time`, `venue`, `prize`, `avg_rating`) VALUES
(6001, 'techquiz', 4001, '2022-04-28', '10:00:00', '2022-04-29', '09:00:00', 'kp', 0, 0),
(6002, 'kollywood quiz', 4001, '2022-04-28', '10:00:00', '2022-04-29', '10:30:00', 'turing hall', 0, 0),
(6003, 'booting ', 4001, '2022-04-28', '11:00:00', '2022-04-28', '02:00:00', 'kp', 0, 0),
(6004, 'shipwreck', 4001, '2022-04-28', '02:00:00', '2022-04-29', '11:45:00', 'kp', 0, 0),
(6005, 'get hired', 4001, '2022-04-28', '12:00:00', '2022-04-30', '09:00:00', 'sfl', 0, 0),
(6006, 'cloud workshop', 4001, '2022-04-28', '10:00:00', '0000-00-00', '00:00:00', 'tfl', 0, 0),
(6007, 'web design', 4001, '2022-04-29', '10:30:00', '2022-04-29', '01:30:00', 'gfl', 0, 0),
(6008, 'she++', 4001, '2022-04-29', '09:00:00', '2022-04-30', '10:00:00', 'sfl', 0, 0),
(6009, 'ospc', 4001, '2022-04-29', '09:00:00', '2022-04-30', '11:00:00', 'kp 210', 0, 0),
(6010, 'ipl auction', 4001, '2022-04-29', '10:30:00', '2022-04-29', '02:30:00', 'turing hall', 0, 0),
(6011, 'can you hear me?', 4005, '2022-05-05', '09:30:00', '2022-05-05', '02:00:00', 'w6', 0, 0),
(6012, 'line tracer', 4005, '2022-05-05', '10:00:00', '0000-00-00', '00:00:00', 'hm hall', 0, 0),
(6013, 'concatenate', 4005, '2022-05-05', '10:00:00', '2022-05-05', '01:30:00', 'w4', 0, 0),
(6014, 'shark tank', 4005, '2022-05-05', '10:30:00', '2022-05-05', '01:00:00', 'w9', 0, 0),
(6015, 'murder mystery', 4005, '2022-05-05', '09:30:00', '2022-05-06', '01:30:00', 't3', 0, 0),
(6016, 'escape room', 4005, '2022-05-05', '10:00:00', '0000-00-00', '00:00:00', 't1', 0, 0),
(6017, 'adzap', 4005, '2022-05-06', '11:30:00', '0000-00-00', '00:00:00', 'w10', 0, 0),
(6018, 'thooriga', 4005, '2022-05-06', '09:30:00', '2022-05-06', '02:00:00', 'w7', 0, 0),
(6019, 'guess the gadget', 4005, '2022-05-06', '11:00:00', '2022-05-06', '01:30:00', 't1', 0, 0),
(6020, 'crazy coding', 4007, '2022-04-28', '10:30:00', '2022-04-29', '00:00:11', 'kp 101', 0, 0),
(6021, 'enigma', 4007, '2022-04-28', '10:30:00', '2022-04-28', '02:30:00', 'kp 109', 0, 0),
(6022, 'ai\'afkar', 4007, '2022-04-28', '11:00:00', '2022-04-29', '02:00:00', 'kp 110', 0, 0),
(6023, 'breaking bias', 4007, '2022-04-28', '10:30:00', '2022-04-29', '01:00:00', 'kp 308', 0, 0),
(6024, 'workshop-vlsi physical design ', 4007, '2022-04-28', '11:30:00', '0000-00-00', '00:00:00', 'pg vlsi lab', 0, 0),
(6025, 'technova', 4007, '2022-04-28', '01:00:00', '2022-04-29', '03:00:00', 'kp 310', 0, 0),
(6026, '1\'s and 0\'s', 4007, '2022-04-29', '10:00:00', '2022-04-30', '11:00:00', 'kp 310', 0, 0),
(6027, 'signals and circuits', 4007, '2022-04-29', '10:30:00', '2022-04-30', '01:00:00', 'kp 308', 0, 0),
(6028, 'image processing by mathworks', 4007, '2022-04-29', '10:00:00', '0000-00-00', '00:00:00', 'mini auditorium', 0, 0),
(6029, 'ceg hunt', 4007, '2022-04-30', '10:00:00', '0000-00-00', '00:00:00', 'hospi desk', 0, 0),
(6030, 'robotics arm by robotics club', 4007, '2022-04-30', '09:00:00', '0000-00-00', '00:00:00', 'eg hall 13', 0, 0),
(6031, 'ospc', 4003, '2022-05-06', '09:00:00', '2022-05-06', '02:00:00', 'it dept', 0, 0),
(6032, 'system design', 4003, '2022-05-06', '09:00:00', '2022-05-06', '02:00:00', 'it dept', 0, 0),
(6033, 'ui automation', 4003, '2022-05-06', '09:00:00', '2022-05-06', '02:00:00', 'it dept', 0, 0),
(6034, 'math-o-mania', 4003, '2022-05-06', '09:00:00', '2022-05-06', '02:00:00', 'kp', 0, 0),
(6035, 'reverse coding', 4003, '2022-05-07', '09:00:00', '2022-05-07', '02:00:00', 'it dept', 0, 0),
(6036, 'sequalize', 4003, '2022-05-07', '09:00:00', '2022-05-07', '02:00:00', 'it dept', 0, 0),
(6037, 'ui/ux design', 4003, '2022-05-07', '09:00:00', '0000-00-00', '00:00:00', 'it dept', 0, 0),
(6038, 'stats 360', 4003, '2022-05-07', '09:00:00', '0000-00-00', '00:00:00', 'it dept', 0, 0),
(6039, 'mad over marketing', 4003, '2022-05-07', '09:00:00', '2022-05-07', '02:00:00', 'it dept', 0, 0),
(6040, 'logical.ly', 4003, '2022-05-07', '09:00:00', '0000-00-00', '00:00:00', 'kp 210', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dept_events`
--
ALTER TABLE `dept_events`
  ADD PRIMARY KEY (`event_id`),
  ADD KEY `foreign key` (`symp_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dept_events`
--
ALTER TABLE `dept_events`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6041;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `dept_events`
--
ALTER TABLE `dept_events`
  ADD CONSTRAINT `dept_events_ibfk_1` FOREIGN KEY (`symp_id`) REFERENCES `symposiums` (`symp_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
