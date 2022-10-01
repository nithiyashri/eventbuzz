-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 05, 2022 at 07:52 AM
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
-- Table structure for table `user_credentials`
--

CREATE TABLE `user_credentials` (
  `user_id` int(11) NOT NULL,
  `u_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `dob` date NOT NULL,
  `college` varchar(100) NOT NULL,
  `u_type` varchar(50) NOT NULL,
  `mob_no` varchar(20) NOT NULL,
  `spl_access` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_credentials`
--

INSERT INTO `user_credentials` (`user_id`, `u_name`, `email`, `password`, `dob`, `college`, `u_type`, `mob_no`, `spl_access`) VALUES
(1, 'ghaa', 'asd@gmail.com', 'abc1234', '2022-05-10', 'ceg', 'student', '9876543210', 0),
(7, 'qwerty', 'zxcv@gmail.com', 'dshkjdn,ds', '2022-05-05', 'ceg', 'alumni', '2147483647', 0),
(9, 'nandikaa', 'nandy@gmail.com', '12345678', '2003-06-09', 'IIT', 'student', '2147483647', 0),
(31, 'cseceg', 'cseceg@gmail.com', 'cseceg1234', '0000-00-00', '', '', '0', 1),
(32, 'itceg', 'itceg@gmail,com', 'itceg1234', '0000-00-00', '', '', '0', 1),
(33, 'ececeg', 'ececeg@gmail.com', 'ececeg1234', '0000-00-00', '', '', '0', 1),
(34, 'mechceg', 'mechceg@gmail.com', 'mechceg1234', '0000-00-00', '', '', '0', 1),
(38, 'abcd', 'abcd@gmail.com', 'abcd123', '2022-06-09', 'ceg', 'student', '2147483647', 0),
(39, 'jdkjkcx', 'ajdj@gmail.com', 'sgjhsbd', '2022-06-09', 'ceg', 'student', '9874563210', 0),
(40, 'efgh', 'efgh@gmail.com', 'efgh123', '2022-06-14', 'ceg', 'student', '9867534210', 0),
(41, 'ijkl', 'ijkl@gmail.com', 'ijkl123', '2022-06-14', 'ceg', 'staff', '9867589641', 0),
(42, 'mnop', 'mnop@gmail.com', 'mnop123', '2022-06-08', 'ceg', 'staff', '7894561229', 0),
(43, 'qrst', 'qrst@gmail.com', 'qrst123', '2022-06-01', 'ceg', 'alumni', '7538694210', 0),
(44, 'uvwx', 'uvwx@gmail.com', 'uvwx123', '2022-06-10', 'ceg', 'student', '7894563210', 0),
(45, 'yzab', 'yzab@gmail.com', 'yzab123', '2022-06-15', 'iit', 'student', '7859632410', 0),
(46, 'cdef', 'cdef@gmail.com', 'cdef123', '2022-07-03', 'ceg', 'staff', '7854123690', 0),
(47, 'ghij', 'ghij@gmail.com', 'ghij123', '2022-06-09', 'ceg', 'student', '7896302541', 0),
(48, 'klmn', 'klmn@gmail.com', 'klmn123', '2022-06-07', 'ceg', 'student', '9632014587', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_credentials`
--
ALTER TABLE `user_credentials`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `u_name` (`u_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_credentials`
--
ALTER TABLE `user_credentials`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
