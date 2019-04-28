-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 17, 2019 at 10:15 PM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pulserp`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `item_id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `consumer` tinyint(1) NOT NULL DEFAULT '0',
  `rental` tinyint(1) NOT NULL DEFAULT '0',
  `cost` int(11) NOT NULL DEFAULT '0',
  `selling` int(11) DEFAULT NULL,
  `def_cscheme` int(11) NOT NULL DEFAULT '0',
  `quantity` int(11) NOT NULL,
  `empty` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`item_id`, `name`, `selling`, `cscheme`, `quantity`, `empty`) VALUES
(50, 'PET 300-345ML', 336, 0, 0, 0),
(51, 'PET 500ML', 454, 25, 0, 0),
(52, 'PET 1.LITRE', 378, 30, 0, 0),
(53, 'PEPSI 1.5LITRE', 522, 35, 0, -1),
(54, 'MIRINDA 1.5LITRE', 522, 60, 0, -1),
(55, '7UP 1.5LITRE', 522, 35, 0, -1),
(56, 'M/DEW 1.5LITRE', 522, 40, 0, -1),
(57, 'PET 2.25LITRE', 445, 25, 0, -1),
(58, 'CAN-250ML', 336, 0, 0, -1),
(59, 'CAN-300ML', 378, 0, 0, -1),
(60, 'STING 300ML', 384, 0, 0, -1),
(61, 'STING 500ML', 621, 35, 0, -1),
(62, 'STING CAN-250', 420, 0, 0, -1),
(63, 'SLICE 355ML', 384, 0, 0, -1),
(64, 'SLICE 1.LITRE', 480, 0, 0, -1),
(65, 'SLICE TETRA 200', 396, 0, 0, -1),
(66, 'AQ 500ML', 274, 0, 0, -1),
(67, 'AQ 1.5LITRE', 252, 0, 1, -1),
(68, 'AQ 6.LITRE', 120, 0, 7, 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`item_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
