-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2019 at 05:26 AM
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
-- Database: `inventora`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `aid` int(11) NOT NULL,
  `store` int(11) NOT NULL DEFAULT '0',
  `bank` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`aid`, `store`, `bank`) VALUES
(1, 5001, 10999);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `nic` int(14) NOT NULL DEFAULT '0',
  `contact_no` int(16) NOT NULL DEFAULT '0',
  `h50` int(6) NOT NULL,
  `h51` int(6) NOT NULL,
  `h52` int(6) NOT NULL,
  `h53` int(6) NOT NULL,
  `h54` int(6) NOT NULL,
  `h55` int(6) NOT NULL,
  `h56` int(6) NOT NULL,
  `h57` int(6) NOT NULL,
  `h58` int(6) NOT NULL,
  `h59` int(6) NOT NULL,
  `h60` int(6) NOT NULL,
  `h61` int(6) NOT NULL,
  `h62` int(6) NOT NULL,
  `h63` int(6) NOT NULL,
  `h64` int(6) NOT NULL,
  `h65` int(6) NOT NULL,
  `h66` int(6) NOT NULL,
  `h67` int(6) NOT NULL,
  `h68` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_id`, `name`, `nic`, `contact_no`, `h50`, `h51`, `h52`, `h53`, `h54`, `h55`, `h56`, `h57`, `h58`, `h59`, `h60`, `h61`, `h62`, `h63`, `h64`, `h65`, `h66`, `h67`, `h68`) VALUES
(1, 'Haider', 0, 0, 2, 10, 11, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15),
(2, 'Mehdi', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `departures`
--

CREATE TABLE `departures` (
  `did` int(11) NOT NULL,
  `invoice_id` int(11) NOT NULL,
  `value` text NOT NULL,
  `date_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `departures`
--

INSERT INTO `departures` (`did`, `invoice_id`, `value`, `date_time`) VALUES
(24, 158, '{\"data\":[{\"data\":{\"item_id\":52,\"name\":\"PET 1.LITRE\",\"selling\":378,\"cscheme\":30,\"quantity\":492,\"empty\":1,\"empty_account\":510,\"empty_store\":492},\"onList\":0},{\"data\":{\"item_id\":53,\"name\":\"PEPSI 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":46,\"empty\":0,\"empty_account\":60,\"empty_store\":46},\"onList\":0},{\"data\":{\"item_id\":54,\"name\":\"MIRINDA 1.5LITRE\",\"selling\":522,\"cscheme\":60,\"quantity\":50,\"empty\":0,\"empty_account\":60,\"empty_store\":50},\"onList\":0},{\"data\":{\"item_id\":55,\"name\":\"7UP 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":549,\"empty\":0,\"empty_account\":560,\"empty_store\":549},\"onList\":0},{\"data\":{\"item_id\":56,\"name\":\"M/DEW 1.5LITRE\",\"selling\":522,\"cscheme\":40,\"quantity\":538,\"empty\":0,\"empty_account\":560,\"empty_store\":538},\"onList\":0},{\"data\":{\"item_id\":57,\"name\":\"PET 2.25LITRE\",\"selling\":445,\"cscheme\":25,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":58,\"name\":\"CAN-250ML\",\"selling\":336,\"cscheme\":0,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":59,\"name\":\"CAN-300ML\",\"selling\":378,\"cscheme\":0,\"quantity\":5505,\"empty\":0,\"empty_account\":5560,\"empty_store\":5505},\"onList\":0},{\"data\":{\"item_id\":60,\"name\":\"STING 300ML\",\"selling\":384,\"cscheme\":0,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":61,\"name\":\"STING 500ML\",\"selling\":621,\"cscheme\":35,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":62,\"name\":\"STING CAN-250\",\"selling\":420,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":63,\"name\":\"SLICE 355ML\",\"selling\":384,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":64,\"name\":\"SLICE 1.LITRE\",\"selling\":480,\"cscheme\":0,\"quantity\":57,\"empty\":0,\"empty_account\":64,\"empty_store\":57},\"onList\":0},{\"data\":{\"item_id\":65,\"name\":\"SLICE TETRA 200\",\"selling\":396,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":66,\"name\":\"AQ 500ML\",\"selling\":274,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":67,\"name\":\"AQ 1.5LITRE\",\"selling\":252,\"cscheme\":0,\"quantity\":560,\"empty\":0,\"empty_account\":565,\"empty_store\":560},\"onList\":0},{\"data\":{\"item_id\":68,\"name\":\"AQ 6.LITRE\",\"selling\":120,\"cscheme\":0,\"quantity\":553,\"empty\":0,\"empty_account\":560,\"empty_store\":553},\"onList\":0},{\"data\":{\"item_id\":51,\"name\":\"PET 500ML\",\"selling\":454,\"cscheme\":25,\"quantity\":482,\"empty\":1,\"empty_account\":577,\"empty_store\":483},\"onList\":1},{\"data\":{\"item_id\":50,\"name\":\"PET 300-345ML\",\"selling\":336,\"cscheme\":0,\"quantity\":189,\"empty\":1,\"empty_account\":231,\"empty_store\":191},\"onList\":2}],\"prev\":0,\"paid\":1000,\"mt\":0,\"mtr\":0,\"salesman\":{\"customer_id\":1,\"name\":\"Haider\",\"nic\":0,\"contact_no\":0,\"h50\":2,\"h51\":10,\"h52\":11,\"h53\":3,\"h54\":0,\"h55\":0,\"h56\":0,\"h57\":0,\"h58\":0,\"h59\":0,\"h60\":0,\"h61\":0,\"h62\":0,\"h63\":0,\"h64\":0,\"h65\":0,\"h66\":0,\"h67\":0,\"h68\":15},\"bill\":1087,\"productsBill\":1087,\"mDiscount\":0}', '2019-05-05 08:53:03'),
(25, 159, '{\"data\":[{\"data\":{\"item_id\":52,\"name\":\"PET 1.LITRE\",\"selling\":378,\"cscheme\":30,\"quantity\":492,\"empty\":1,\"empty_account\":510,\"empty_store\":492},\"onList\":0},{\"data\":{\"item_id\":53,\"name\":\"PEPSI 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":46,\"empty\":0,\"empty_account\":60,\"empty_store\":46},\"onList\":0},{\"data\":{\"item_id\":54,\"name\":\"MIRINDA 1.5LITRE\",\"selling\":522,\"cscheme\":60,\"quantity\":50,\"empty\":0,\"empty_account\":60,\"empty_store\":50},\"onList\":0},{\"data\":{\"item_id\":55,\"name\":\"7UP 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":549,\"empty\":0,\"empty_account\":560,\"empty_store\":549},\"onList\":0},{\"data\":{\"item_id\":56,\"name\":\"M/DEW 1.5LITRE\",\"selling\":522,\"cscheme\":40,\"quantity\":538,\"empty\":0,\"empty_account\":560,\"empty_store\":538},\"onList\":0},{\"data\":{\"item_id\":57,\"name\":\"PET 2.25LITRE\",\"selling\":445,\"cscheme\":25,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":58,\"name\":\"CAN-250ML\",\"selling\":336,\"cscheme\":0,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":59,\"name\":\"CAN-300ML\",\"selling\":378,\"cscheme\":0,\"quantity\":5505,\"empty\":0,\"empty_account\":5560,\"empty_store\":5505},\"onList\":0},{\"data\":{\"item_id\":60,\"name\":\"STING 300ML\",\"selling\":384,\"cscheme\":0,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":61,\"name\":\"STING 500ML\",\"selling\":621,\"cscheme\":35,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":62,\"name\":\"STING CAN-250\",\"selling\":420,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":63,\"name\":\"SLICE 355ML\",\"selling\":384,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":64,\"name\":\"SLICE 1.LITRE\",\"selling\":480,\"cscheme\":0,\"quantity\":57,\"empty\":0,\"empty_account\":64,\"empty_store\":57},\"onList\":0},{\"data\":{\"item_id\":65,\"name\":\"SLICE TETRA 200\",\"selling\":396,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":66,\"name\":\"AQ 500ML\",\"selling\":274,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":67,\"name\":\"AQ 1.5LITRE\",\"selling\":252,\"cscheme\":0,\"quantity\":560,\"empty\":0,\"empty_account\":565,\"empty_store\":560},\"onList\":0},{\"data\":{\"item_id\":68,\"name\":\"AQ 6.LITRE\",\"selling\":120,\"cscheme\":0,\"quantity\":553,\"empty\":0,\"empty_account\":560,\"empty_store\":553},\"onList\":0},{\"data\":{\"item_id\":51,\"name\":\"PET 500ML\",\"selling\":454,\"cscheme\":25,\"quantity\":482,\"empty\":1,\"empty_account\":577,\"empty_store\":483},\"onList\":1},{\"data\":{\"item_id\":50,\"name\":\"PET 300-345ML\",\"selling\":336,\"cscheme\":0,\"quantity\":189,\"empty\":1,\"empty_account\":231,\"empty_store\":191},\"onList\":2}],\"prev\":0,\"paid\":1000,\"mt\":0,\"mtr\":0,\"salesman\":{\"customer_id\":1,\"name\":\"Haider\",\"nic\":0,\"contact_no\":0,\"h50\":2,\"h51\":10,\"h52\":11,\"h53\":3,\"h54\":0,\"h55\":0,\"h56\":0,\"h57\":0,\"h58\":0,\"h59\":0,\"h60\":0,\"h61\":0,\"h62\":0,\"h63\":0,\"h64\":0,\"h65\":0,\"h66\":0,\"h67\":0,\"h68\":15},\"bill\":1087,\"productsBill\":1087,\"mDiscount\":0}', '2019-05-05 08:53:03'),
(26, 160, '{\"data\":[{\"data\":{\"item_id\":51,\"name\":\"PET 500ML\",\"selling\":454,\"cscheme\":25,\"quantity\":482,\"empty\":1,\"empty_account\":577,\"empty_store\":482},\"onList\":0},{\"data\":{\"item_id\":52,\"name\":\"PET 1.LITRE\",\"selling\":378,\"cscheme\":30,\"quantity\":492,\"empty\":1,\"empty_account\":510,\"empty_store\":492},\"onList\":0},{\"data\":{\"item_id\":53,\"name\":\"PEPSI 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":46,\"empty\":0,\"empty_account\":60,\"empty_store\":46},\"onList\":0},{\"data\":{\"item_id\":54,\"name\":\"MIRINDA 1.5LITRE\",\"selling\":522,\"cscheme\":60,\"quantity\":50,\"empty\":0,\"empty_account\":60,\"empty_store\":50},\"onList\":0},{\"data\":{\"item_id\":55,\"name\":\"7UP 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":549,\"empty\":0,\"empty_account\":560,\"empty_store\":549},\"onList\":0},{\"data\":{\"item_id\":56,\"name\":\"M/DEW 1.5LITRE\",\"selling\":522,\"cscheme\":40,\"quantity\":538,\"empty\":0,\"empty_account\":560,\"empty_store\":538},\"onList\":0},{\"data\":{\"item_id\":57,\"name\":\"PET 2.25LITRE\",\"selling\":445,\"cscheme\":25,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":58,\"name\":\"CAN-250ML\",\"selling\":336,\"cscheme\":0,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":59,\"name\":\"CAN-300ML\",\"selling\":378,\"cscheme\":0,\"quantity\":5505,\"empty\":0,\"empty_account\":5560,\"empty_store\":5505},\"onList\":0},{\"data\":{\"item_id\":60,\"name\":\"STING 300ML\",\"selling\":384,\"cscheme\":0,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":61,\"name\":\"STING 500ML\",\"selling\":621,\"cscheme\":35,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":62,\"name\":\"STING CAN-250\",\"selling\":420,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":63,\"name\":\"SLICE 355ML\",\"selling\":384,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":64,\"name\":\"SLICE 1.LITRE\",\"selling\":480,\"cscheme\":0,\"quantity\":57,\"empty\":0,\"empty_account\":64,\"empty_store\":57},\"onList\":0},{\"data\":{\"item_id\":65,\"name\":\"SLICE TETRA 200\",\"selling\":396,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":66,\"name\":\"AQ 500ML\",\"selling\":274,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":67,\"name\":\"AQ 1.5LITRE\",\"selling\":252,\"cscheme\":0,\"quantity\":560,\"empty\":0,\"empty_account\":565,\"empty_store\":560},\"onList\":0},{\"data\":{\"item_id\":68,\"name\":\"AQ 6.LITRE\",\"selling\":120,\"cscheme\":0,\"quantity\":553,\"empty\":0,\"empty_account\":560,\"empty_store\":553},\"onList\":0},{\"data\":{\"item_id\":50,\"name\":\"PET 300-345ML\",\"selling\":336,\"cscheme\":0,\"quantity\":187,\"empty\":1,\"empty_account\":231,\"empty_store\":189},\"onList\":2}],\"prev\":0,\"paid\":668,\"mt\":3,\"mtr\":0,\"salesman\":{\"customer_id\":1,\"name\":\"Haider\",\"nic\":0,\"contact_no\":0,\"h50\":2,\"h51\":10,\"h52\":11,\"h53\":3,\"h54\":0,\"h55\":0,\"h56\":0,\"h57\":0,\"h58\":0,\"h59\":0,\"h60\":0,\"h61\":0,\"h62\":0,\"h63\":0,\"h64\":0,\"h65\":0,\"h66\":0,\"h67\":0,\"h68\":15},\"bill\":668,\"productsBill\":668,\"mDiscount\":0}', '2019-05-05 09:01:28'),
(27, 161, '{\"data\":[{\"data\":{\"item_id\":50,\"name\":\"PET 300-345ML\",\"selling\":336,\"cscheme\":0,\"quantity\":187,\"empty\":1,\"empty_account\":231,\"empty_store\":187},\"onList\":0},{\"data\":{\"item_id\":52,\"name\":\"PET 1.LITRE\",\"selling\":378,\"cscheme\":30,\"quantity\":492,\"empty\":1,\"empty_account\":510,\"empty_store\":492},\"onList\":0},{\"data\":{\"item_id\":53,\"name\":\"PEPSI 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":46,\"empty\":0,\"empty_account\":60,\"empty_store\":46},\"onList\":0},{\"data\":{\"item_id\":54,\"name\":\"MIRINDA 1.5LITRE\",\"selling\":522,\"cscheme\":60,\"quantity\":50,\"empty\":0,\"empty_account\":60,\"empty_store\":50},\"onList\":0},{\"data\":{\"item_id\":55,\"name\":\"7UP 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":549,\"empty\":0,\"empty_account\":560,\"empty_store\":549},\"onList\":0},{\"data\":{\"item_id\":56,\"name\":\"M/DEW 1.5LITRE\",\"selling\":522,\"cscheme\":40,\"quantity\":538,\"empty\":0,\"empty_account\":560,\"empty_store\":538},\"onList\":0},{\"data\":{\"item_id\":57,\"name\":\"PET 2.25LITRE\",\"selling\":445,\"cscheme\":25,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":58,\"name\":\"CAN-250ML\",\"selling\":336,\"cscheme\":0,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":59,\"name\":\"CAN-300ML\",\"selling\":378,\"cscheme\":0,\"quantity\":5505,\"empty\":0,\"empty_account\":5560,\"empty_store\":5505},\"onList\":0},{\"data\":{\"item_id\":60,\"name\":\"STING 300ML\",\"selling\":384,\"cscheme\":0,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":61,\"name\":\"STING 500ML\",\"selling\":621,\"cscheme\":35,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":62,\"name\":\"STING CAN-250\",\"selling\":420,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":63,\"name\":\"SLICE 355ML\",\"selling\":384,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":64,\"name\":\"SLICE 1.LITRE\",\"selling\":480,\"cscheme\":0,\"quantity\":57,\"empty\":0,\"empty_account\":64,\"empty_store\":57},\"onList\":0},{\"data\":{\"item_id\":65,\"name\":\"SLICE TETRA 200\",\"selling\":396,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":66,\"name\":\"AQ 500ML\",\"selling\":274,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":67,\"name\":\"AQ 1.5LITRE\",\"selling\":252,\"cscheme\":0,\"quantity\":560,\"empty\":0,\"empty_account\":565,\"empty_store\":560},\"onList\":0},{\"data\":{\"item_id\":68,\"name\":\"AQ 6.LITRE\",\"selling\":120,\"cscheme\":0,\"quantity\":553,\"empty\":0,\"empty_account\":560,\"empty_store\":553},\"onList\":0},{\"data\":{\"item_id\":51,\"name\":\"PET 500ML\",\"selling\":454,\"cscheme\":25,\"quantity\":481,\"empty\":1,\"empty_account\":577,\"empty_store\":482},\"onList\":1}],\"prev\":0,\"paid\":410,\"mt\":5,\"mtr\":0,\"salesman\":{\"customer_id\":1,\"name\":\"Haider\",\"nic\":0,\"contact_no\":0,\"h50\":2,\"h51\":10,\"h52\":11,\"h53\":3,\"h54\":0,\"h55\":0,\"h56\":0,\"h57\":0,\"h58\":0,\"h59\":0,\"h60\":0,\"h61\":0,\"h62\":0,\"h63\":0,\"h64\":0,\"h65\":0,\"h66\":0,\"h67\":0,\"h68\":15},\"bill\":419,\"productsBill\":419,\"mDiscount\":0}', '2019-05-05 09:02:27'),
(28, 162, '{\"data\":[{\"data\":{\"item_id\":51,\"name\":\"PET 500ML\",\"selling\":454,\"cscheme\":25,\"quantity\":481,\"empty\":1,\"empty_account\":577,\"empty_store\":481},\"onList\":0},{\"data\":{\"item_id\":52,\"name\":\"PET 1.LITRE\",\"selling\":378,\"cscheme\":30,\"quantity\":492,\"empty\":1,\"empty_account\":510,\"empty_store\":492},\"onList\":0},{\"data\":{\"item_id\":53,\"name\":\"PEPSI 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":46,\"empty\":0,\"empty_account\":60,\"empty_store\":46},\"onList\":0},{\"data\":{\"item_id\":54,\"name\":\"MIRINDA 1.5LITRE\",\"selling\":522,\"cscheme\":60,\"quantity\":50,\"empty\":0,\"empty_account\":60,\"empty_store\":50},\"onList\":0},{\"data\":{\"item_id\":55,\"name\":\"7UP 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":549,\"empty\":0,\"empty_account\":560,\"empty_store\":549},\"onList\":0},{\"data\":{\"item_id\":56,\"name\":\"M/DEW 1.5LITRE\",\"selling\":522,\"cscheme\":40,\"quantity\":538,\"empty\":0,\"empty_account\":560,\"empty_store\":538},\"onList\":0},{\"data\":{\"item_id\":57,\"name\":\"PET 2.25LITRE\",\"selling\":445,\"cscheme\":25,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":58,\"name\":\"CAN-250ML\",\"selling\":336,\"cscheme\":0,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":59,\"name\":\"CAN-300ML\",\"selling\":378,\"cscheme\":0,\"quantity\":5505,\"empty\":0,\"empty_account\":5560,\"empty_store\":5505},\"onList\":0},{\"data\":{\"item_id\":60,\"name\":\"STING 300ML\",\"selling\":384,\"cscheme\":0,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":61,\"name\":\"STING 500ML\",\"selling\":621,\"cscheme\":35,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":62,\"name\":\"STING CAN-250\",\"selling\":420,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":63,\"name\":\"SLICE 355ML\",\"selling\":384,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":64,\"name\":\"SLICE 1.LITRE\",\"selling\":480,\"cscheme\":0,\"quantity\":57,\"empty\":0,\"empty_account\":64,\"empty_store\":57},\"onList\":0},{\"data\":{\"item_id\":65,\"name\":\"SLICE TETRA 200\",\"selling\":396,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":66,\"name\":\"AQ 500ML\",\"selling\":274,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":67,\"name\":\"AQ 1.5LITRE\",\"selling\":252,\"cscheme\":0,\"quantity\":560,\"empty\":0,\"empty_account\":565,\"empty_store\":560},\"onList\":0},{\"data\":{\"item_id\":68,\"name\":\"AQ 6.LITRE\",\"selling\":120,\"cscheme\":0,\"quantity\":553,\"empty\":0,\"empty_account\":560,\"empty_store\":553},\"onList\":0},{\"data\":{\"item_id\":50,\"name\":\"PET 300-345ML\",\"selling\":336,\"cscheme\":0,\"quantity\":186,\"empty\":1,\"empty_account\":231,\"empty_store\":187},\"onList\":1}],\"prev\":0,\"paid\":330,\"mt\":6,\"mtr\":0,\"salesman\":{\"customer_id\":1,\"name\":\"Haider\",\"nic\":0,\"contact_no\":0,\"h50\":2,\"h51\":10,\"h52\":11,\"h53\":3,\"h54\":0,\"h55\":0,\"h56\":0,\"h57\":0,\"h58\":0,\"h59\":0,\"h60\":0,\"h61\":0,\"h62\":0,\"h63\":0,\"h64\":0,\"h65\":0,\"h66\":0,\"h67\":0,\"h68\":15},\"bill\":334,\"productsBill\":334,\"mDiscount\":0}', '2019-05-05 09:04:47'),
(29, 163, '{\"data\":[{\"data\":{\"item_id\":51,\"name\":\"PET 500ML\",\"selling\":454,\"cscheme\":25,\"quantity\":481,\"empty\":1,\"empty_account\":577,\"empty_store\":481},\"onList\":0},{\"data\":{\"item_id\":52,\"name\":\"PET 1.LITRE\",\"selling\":378,\"cscheme\":30,\"quantity\":492,\"empty\":1,\"empty_account\":510,\"empty_store\":492},\"onList\":0},{\"data\":{\"item_id\":53,\"name\":\"PEPSI 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":46,\"empty\":0,\"empty_account\":60,\"empty_store\":46},\"onList\":0},{\"data\":{\"item_id\":54,\"name\":\"MIRINDA 1.5LITRE\",\"selling\":522,\"cscheme\":60,\"quantity\":50,\"empty\":0,\"empty_account\":60,\"empty_store\":50},\"onList\":0},{\"data\":{\"item_id\":55,\"name\":\"7UP 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":549,\"empty\":0,\"empty_account\":560,\"empty_store\":549},\"onList\":0},{\"data\":{\"item_id\":56,\"name\":\"M/DEW 1.5LITRE\",\"selling\":522,\"cscheme\":40,\"quantity\":538,\"empty\":0,\"empty_account\":560,\"empty_store\":538},\"onList\":0},{\"data\":{\"item_id\":57,\"name\":\"PET 2.25LITRE\",\"selling\":445,\"cscheme\":25,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":58,\"name\":\"CAN-250ML\",\"selling\":336,\"cscheme\":0,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":59,\"name\":\"CAN-300ML\",\"selling\":378,\"cscheme\":0,\"quantity\":5505,\"empty\":0,\"empty_account\":5560,\"empty_store\":5505},\"onList\":0},{\"data\":{\"item_id\":60,\"name\":\"STING 300ML\",\"selling\":384,\"cscheme\":0,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":61,\"name\":\"STING 500ML\",\"selling\":621,\"cscheme\":35,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":62,\"name\":\"STING CAN-250\",\"selling\":420,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":63,\"name\":\"SLICE 355ML\",\"selling\":384,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":64,\"name\":\"SLICE 1.LITRE\",\"selling\":480,\"cscheme\":0,\"quantity\":57,\"empty\":0,\"empty_account\":64,\"empty_store\":57},\"onList\":0},{\"data\":{\"item_id\":65,\"name\":\"SLICE TETRA 200\",\"selling\":396,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":66,\"name\":\"AQ 500ML\",\"selling\":274,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":67,\"name\":\"AQ 1.5LITRE\",\"selling\":252,\"cscheme\":0,\"quantity\":560,\"empty\":0,\"empty_account\":565,\"empty_store\":560},\"onList\":0},{\"data\":{\"item_id\":68,\"name\":\"AQ 6.LITRE\",\"selling\":120,\"cscheme\":0,\"quantity\":553,\"empty\":0,\"empty_account\":560,\"empty_store\":553},\"onList\":0},{\"data\":{\"item_id\":50,\"name\":\"PET 300-345ML\",\"selling\":336,\"cscheme\":0,\"quantity\":185,\"empty\":1,\"empty_account\":231,\"empty_store\":186},\"onList\":1}],\"prev\":0,\"paid\":334,\"mt\":7,\"mtr\":0,\"salesman\":{\"customer_id\":1,\"name\":\"Haider\",\"nic\":0,\"contact_no\":0,\"h50\":2,\"h51\":10,\"h52\":11,\"h53\":3,\"h54\":0,\"h55\":0,\"h56\":0,\"h57\":0,\"h58\":0,\"h59\":0,\"h60\":0,\"h61\":0,\"h62\":0,\"h63\":0,\"h64\":0,\"h65\":0,\"h66\":0,\"h67\":0,\"h68\":15},\"bill\":334,\"productsBill\":334,\"mDiscount\":0}', '2019-05-05 09:07:06'),
(30, 164, '{\"data\":[{\"data\":{\"item_id\":53,\"name\":\"PEPSI 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":46,\"empty\":0,\"empty_account\":60,\"empty_store\":46},\"onList\":0},{\"data\":{\"item_id\":54,\"name\":\"MIRINDA 1.5LITRE\",\"selling\":522,\"cscheme\":60,\"quantity\":50,\"empty\":0,\"empty_account\":60,\"empty_store\":50},\"onList\":0},{\"data\":{\"item_id\":55,\"name\":\"7UP 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":549,\"empty\":0,\"empty_account\":560,\"empty_store\":549},\"onList\":0},{\"data\":{\"item_id\":56,\"name\":\"M/DEW 1.5LITRE\",\"selling\":522,\"cscheme\":40,\"quantity\":538,\"empty\":0,\"empty_account\":560,\"empty_store\":538},\"onList\":0},{\"data\":{\"item_id\":57,\"name\":\"PET 2.25LITRE\",\"selling\":445,\"cscheme\":25,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":58,\"name\":\"CAN-250ML\",\"selling\":336,\"cscheme\":0,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":59,\"name\":\"CAN-300ML\",\"selling\":378,\"cscheme\":0,\"quantity\":5505,\"empty\":0,\"empty_account\":5560,\"empty_store\":5505},\"onList\":0},{\"data\":{\"item_id\":60,\"name\":\"STING 300ML\",\"selling\":384,\"cscheme\":0,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":61,\"name\":\"STING 500ML\",\"selling\":621,\"cscheme\":35,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":62,\"name\":\"STING CAN-250\",\"selling\":420,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":63,\"name\":\"SLICE 355ML\",\"selling\":384,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":64,\"name\":\"SLICE 1.LITRE\",\"selling\":480,\"cscheme\":0,\"quantity\":57,\"empty\":0,\"empty_account\":64,\"empty_store\":57},\"onList\":0},{\"data\":{\"item_id\":65,\"name\":\"SLICE TETRA 200\",\"selling\":396,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":66,\"name\":\"AQ 500ML\",\"selling\":274,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":67,\"name\":\"AQ 1.5LITRE\",\"selling\":252,\"cscheme\":0,\"quantity\":560,\"empty\":0,\"empty_account\":565,\"empty_store\":560},\"onList\":0},{\"data\":{\"item_id\":68,\"name\":\"AQ 6.LITRE\",\"selling\":120,\"cscheme\":0,\"quantity\":553,\"empty\":0,\"empty_account\":560,\"empty_store\":553},\"onList\":0},{\"data\":{\"item_id\":50,\"name\":\"PET 300-345ML\",\"selling\":336,\"cscheme\":0,\"quantity\":184,\"empty\":1,\"empty_account\":231,\"empty_store\":185},\"onList\":1},{\"data\":{\"item_id\":51,\"name\":\"PET 500ML\",\"selling\":454,\"cscheme\":25,\"quantity\":480,\"empty\":1,\"empty_account\":577,\"empty_store\":481},\"onList\":1},{\"data\":{\"item_id\":52,\"name\":\"PET 1.LITRE\",\"selling\":378,\"cscheme\":30,\"quantity\":491,\"empty\":1,\"empty_account\":510,\"empty_store\":492},\"onList\":1}],\"prev\":0,\"paid\":1090,\"mt\":8,\"mtr\":0,\"salesman\":{\"customer_id\":1,\"name\":\"Haider\",\"nic\":0,\"contact_no\":0,\"h50\":2,\"h51\":10,\"h52\":11,\"h53\":3,\"h54\":0,\"h55\":0,\"h56\":0,\"h57\":0,\"h58\":0,\"h59\":0,\"h60\":0,\"h61\":0,\"h62\":0,\"h63\":0,\"h64\":0,\"h65\":0,\"h66\":0,\"h67\":0,\"h68\":15},\"bill\":1090,\"productsBill\":1090,\"mDiscount\":0}', '2019-05-05 09:19:54'),
(31, 165, '{\"data\":[{\"data\":{\"item_id\":53,\"name\":\"PEPSI 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":46,\"empty\":0,\"empty_account\":60,\"empty_store\":46},\"onList\":0},{\"data\":{\"item_id\":54,\"name\":\"MIRINDA 1.5LITRE\",\"selling\":522,\"cscheme\":60,\"quantity\":50,\"empty\":0,\"empty_account\":60,\"empty_store\":50},\"onList\":0},{\"data\":{\"item_id\":55,\"name\":\"7UP 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":549,\"empty\":0,\"empty_account\":560,\"empty_store\":549},\"onList\":0},{\"data\":{\"item_id\":56,\"name\":\"M/DEW 1.5LITRE\",\"selling\":522,\"cscheme\":40,\"quantity\":538,\"empty\":0,\"empty_account\":560,\"empty_store\":538},\"onList\":0},{\"data\":{\"item_id\":57,\"name\":\"PET 2.25LITRE\",\"selling\":445,\"cscheme\":25,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":58,\"name\":\"CAN-250ML\",\"selling\":336,\"cscheme\":0,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":59,\"name\":\"CAN-300ML\",\"selling\":378,\"cscheme\":0,\"quantity\":5505,\"empty\":0,\"empty_account\":5560,\"empty_store\":5505},\"onList\":0},{\"data\":{\"item_id\":60,\"name\":\"STING 300ML\",\"selling\":384,\"cscheme\":0,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":61,\"name\":\"STING 500ML\",\"selling\":621,\"cscheme\":35,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":62,\"name\":\"STING CAN-250\",\"selling\":420,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":63,\"name\":\"SLICE 355ML\",\"selling\":384,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":64,\"name\":\"SLICE 1.LITRE\",\"selling\":480,\"cscheme\":0,\"quantity\":57,\"empty\":0,\"empty_account\":64,\"empty_store\":57},\"onList\":0},{\"data\":{\"item_id\":65,\"name\":\"SLICE TETRA 200\",\"selling\":396,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":66,\"name\":\"AQ 500ML\",\"selling\":274,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":67,\"name\":\"AQ 1.5LITRE\",\"selling\":252,\"cscheme\":0,\"quantity\":560,\"empty\":0,\"empty_account\":565,\"empty_store\":560},\"onList\":0},{\"data\":{\"item_id\":68,\"name\":\"AQ 6.LITRE\",\"selling\":120,\"cscheme\":0,\"quantity\":553,\"empty\":0,\"empty_account\":560,\"empty_store\":553},\"onList\":0},{\"data\":{\"item_id\":50,\"name\":\"PET 300-345ML\",\"selling\":336,\"cscheme\":0,\"quantity\":184,\"empty\":1,\"empty_account\":231,\"empty_store\":185},\"onList\":1},{\"data\":{\"item_id\":51,\"name\":\"PET 500ML\",\"selling\":454,\"cscheme\":25,\"quantity\":480,\"empty\":1,\"empty_account\":577,\"empty_store\":481},\"onList\":1},{\"data\":{\"item_id\":52,\"name\":\"PET 1.LITRE\",\"selling\":378,\"cscheme\":30,\"quantity\":491,\"empty\":1,\"empty_account\":510,\"empty_store\":492},\"onList\":1}],\"prev\":0,\"paid\":1090,\"mt\":8,\"mtr\":0,\"salesman\":{\"customer_id\":1,\"name\":\"Haider\",\"nic\":0,\"contact_no\":0,\"h50\":2,\"h51\":10,\"h52\":11,\"h53\":3,\"h54\":0,\"h55\":0,\"h56\":0,\"h57\":0,\"h58\":0,\"h59\":0,\"h60\":0,\"h61\":0,\"h62\":0,\"h63\":0,\"h64\":0,\"h65\":0,\"h66\":0,\"h67\":0,\"h68\":15},\"bill\":1090,\"productsBill\":1090,\"mDiscount\":0}', '2019-05-05 09:19:54'),
(32, 166, '{\"data\":[{\"data\":{\"item_id\":53,\"name\":\"PEPSI 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":46,\"empty\":0,\"empty_account\":60,\"empty_store\":46},\"onList\":0},{\"data\":{\"item_id\":54,\"name\":\"MIRINDA 1.5LITRE\",\"selling\":522,\"cscheme\":60,\"quantity\":50,\"empty\":0,\"empty_account\":60,\"empty_store\":50},\"onList\":0},{\"data\":{\"item_id\":55,\"name\":\"7UP 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":549,\"empty\":0,\"empty_account\":560,\"empty_store\":549},\"onList\":0},{\"data\":{\"item_id\":56,\"name\":\"M/DEW 1.5LITRE\",\"selling\":522,\"cscheme\":40,\"quantity\":538,\"empty\":0,\"empty_account\":560,\"empty_store\":538},\"onList\":0},{\"data\":{\"item_id\":57,\"name\":\"PET 2.25LITRE\",\"selling\":445,\"cscheme\":25,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":58,\"name\":\"CAN-250ML\",\"selling\":336,\"cscheme\":0,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":59,\"name\":\"CAN-300ML\",\"selling\":378,\"cscheme\":0,\"quantity\":5505,\"empty\":0,\"empty_account\":5560,\"empty_store\":5505},\"onList\":0},{\"data\":{\"item_id\":60,\"name\":\"STING 300ML\",\"selling\":384,\"cscheme\":0,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":61,\"name\":\"STING 500ML\",\"selling\":621,\"cscheme\":35,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":62,\"name\":\"STING CAN-250\",\"selling\":420,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":63,\"name\":\"SLICE 355ML\",\"selling\":384,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":64,\"name\":\"SLICE 1.LITRE\",\"selling\":480,\"cscheme\":0,\"quantity\":57,\"empty\":0,\"empty_account\":64,\"empty_store\":57},\"onList\":0},{\"data\":{\"item_id\":65,\"name\":\"SLICE TETRA 200\",\"selling\":396,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":66,\"name\":\"AQ 500ML\",\"selling\":274,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":67,\"name\":\"AQ 1.5LITRE\",\"selling\":252,\"cscheme\":0,\"quantity\":560,\"empty\":0,\"empty_account\":565,\"empty_store\":560},\"onList\":0},{\"data\":{\"item_id\":68,\"name\":\"AQ 6.LITRE\",\"selling\":120,\"cscheme\":0,\"quantity\":553,\"empty\":0,\"empty_account\":560,\"empty_store\":553},\"onList\":0},{\"data\":{\"item_id\":50,\"name\":\"PET 300-345ML\",\"selling\":336,\"cscheme\":0,\"quantity\":184,\"empty\":1,\"empty_account\":231,\"empty_store\":185},\"onList\":1},{\"data\":{\"item_id\":51,\"name\":\"PET 500ML\",\"selling\":454,\"cscheme\":25,\"quantity\":480,\"empty\":1,\"empty_account\":577,\"empty_store\":481},\"onList\":1},{\"data\":{\"item_id\":52,\"name\":\"PET 1.LITRE\",\"selling\":378,\"cscheme\":30,\"quantity\":491,\"empty\":1,\"empty_account\":510,\"empty_store\":492},\"onList\":1}],\"prev\":0,\"paid\":1090,\"mt\":8,\"mtr\":0,\"salesman\":{\"customer_id\":1,\"name\":\"Haider\",\"nic\":0,\"contact_no\":0,\"h50\":2,\"h51\":10,\"h52\":11,\"h53\":3,\"h54\":0,\"h55\":0,\"h56\":0,\"h57\":0,\"h58\":0,\"h59\":0,\"h60\":0,\"h61\":0,\"h62\":0,\"h63\":0,\"h64\":0,\"h65\":0,\"h66\":0,\"h67\":0,\"h68\":15},\"bill\":1090,\"productsBill\":1090,\"mDiscount\":0}', '2019-05-05 09:19:54'),
(33, 167, '{\"data\":[{\"data\":{\"item_id\":50,\"name\":\"PET 300-345ML\",\"selling\":336,\"cscheme\":0,\"quantity\":184,\"empty\":1,\"empty_account\":231,\"empty_store\":184},\"onList\":0},{\"data\":{\"item_id\":51,\"name\":\"PET 500ML\",\"selling\":454,\"cscheme\":25,\"quantity\":480,\"empty\":1,\"empty_account\":577,\"empty_store\":480},\"onList\":0},{\"data\":{\"item_id\":53,\"name\":\"PEPSI 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":46,\"empty\":0,\"empty_account\":60,\"empty_store\":46},\"onList\":0},{\"data\":{\"item_id\":54,\"name\":\"MIRINDA 1.5LITRE\",\"selling\":522,\"cscheme\":60,\"quantity\":50,\"empty\":0,\"empty_account\":60,\"empty_store\":50},\"onList\":0},{\"data\":{\"item_id\":55,\"name\":\"7UP 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":549,\"empty\":0,\"empty_account\":560,\"empty_store\":549},\"onList\":0},{\"data\":{\"item_id\":56,\"name\":\"M/DEW 1.5LITRE\",\"selling\":522,\"cscheme\":40,\"quantity\":538,\"empty\":0,\"empty_account\":560,\"empty_store\":538},\"onList\":0},{\"data\":{\"item_id\":57,\"name\":\"PET 2.25LITRE\",\"selling\":445,\"cscheme\":25,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":58,\"name\":\"CAN-250ML\",\"selling\":336,\"cscheme\":0,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":59,\"name\":\"CAN-300ML\",\"selling\":378,\"cscheme\":0,\"quantity\":5505,\"empty\":0,\"empty_account\":5560,\"empty_store\":5505},\"onList\":0},{\"data\":{\"item_id\":60,\"name\":\"STING 300ML\",\"selling\":384,\"cscheme\":0,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":61,\"name\":\"STING 500ML\",\"selling\":621,\"cscheme\":35,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":62,\"name\":\"STING CAN-250\",\"selling\":420,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":63,\"name\":\"SLICE 355ML\",\"selling\":384,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":64,\"name\":\"SLICE 1.LITRE\",\"selling\":480,\"cscheme\":0,\"quantity\":57,\"empty\":0,\"empty_account\":64,\"empty_store\":57},\"onList\":0},{\"data\":{\"item_id\":65,\"name\":\"SLICE TETRA 200\",\"selling\":396,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":66,\"name\":\"AQ 500ML\",\"selling\":274,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":67,\"name\":\"AQ 1.5LITRE\",\"selling\":252,\"cscheme\":0,\"quantity\":560,\"empty\":0,\"empty_account\":565,\"empty_store\":560},\"onList\":0},{\"data\":{\"item_id\":68,\"name\":\"AQ 6.LITRE\",\"selling\":120,\"cscheme\":0,\"quantity\":553,\"empty\":0,\"empty_account\":560,\"empty_store\":553},\"onList\":0},{\"data\":{\"item_id\":52,\"name\":\"PET 1.LITRE\",\"selling\":378,\"cscheme\":30,\"quantity\":480,\"empty\":1,\"empty_account\":510,\"empty_store\":491},\"onList\":11}],\"prev\":0,\"paid\":3828,\"mt\":0,\"mtr\":0,\"salesman\":{\"customer_id\":2,\"name\":\"Mehdi\",\"nic\":0,\"contact_no\":0,\"h50\":0,\"h51\":0,\"h52\":0,\"h53\":0,\"h54\":0,\"h55\":0,\"h56\":0,\"h57\":0,\"h58\":0,\"h59\":0,\"h60\":0,\"h61\":0,\"h62\":0,\"h63\":0,\"h64\":0,\"h65\":0,\"h66\":0,\"h67\":0,\"h68\":0},\"bill\":3828,\"productsBill\":3828,\"mDiscount\":0}', '2019-05-05 13:57:34'),
(34, 168, '{\"data\":[{\"data\":{\"item_id\":50,\"name\":\"PET 300-345ML\",\"selling\":336,\"cscheme\":0,\"quantity\":184,\"empty\":1,\"empty_account\":231,\"empty_store\":184},\"onList\":0},{\"data\":{\"item_id\":52,\"name\":\"PET 1.LITRE\",\"selling\":378,\"cscheme\":30,\"quantity\":480,\"empty\":1,\"empty_account\":510,\"empty_store\":480},\"onList\":0},{\"data\":{\"item_id\":53,\"name\":\"PEPSI 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":46,\"empty\":0,\"empty_account\":60,\"empty_store\":46},\"onList\":0},{\"data\":{\"item_id\":54,\"name\":\"MIRINDA 1.5LITRE\",\"selling\":522,\"cscheme\":60,\"quantity\":50,\"empty\":0,\"empty_account\":60,\"empty_store\":50},\"onList\":0},{\"data\":{\"item_id\":55,\"name\":\"7UP 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":549,\"empty\":0,\"empty_account\":560,\"empty_store\":549},\"onList\":0},{\"data\":{\"item_id\":56,\"name\":\"M/DEW 1.5LITRE\",\"selling\":522,\"cscheme\":40,\"quantity\":538,\"empty\":0,\"empty_account\":560,\"empty_store\":538},\"onList\":0},{\"data\":{\"item_id\":57,\"name\":\"PET 2.25LITRE\",\"selling\":445,\"cscheme\":25,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":58,\"name\":\"CAN-250ML\",\"selling\":336,\"cscheme\":0,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":59,\"name\":\"CAN-300ML\",\"selling\":378,\"cscheme\":0,\"quantity\":5505,\"empty\":0,\"empty_account\":5560,\"empty_store\":5505},\"onList\":0},{\"data\":{\"item_id\":60,\"name\":\"STING 300ML\",\"selling\":384,\"cscheme\":0,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":61,\"name\":\"STING 500ML\",\"selling\":621,\"cscheme\":35,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":62,\"name\":\"STING CAN-250\",\"selling\":420,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":63,\"name\":\"SLICE 355ML\",\"selling\":384,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":64,\"name\":\"SLICE 1.LITRE\",\"selling\":480,\"cscheme\":0,\"quantity\":57,\"empty\":0,\"empty_account\":64,\"empty_store\":57},\"onList\":0},{\"data\":{\"item_id\":65,\"name\":\"SLICE TETRA 200\",\"selling\":396,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":66,\"name\":\"AQ 500ML\",\"selling\":274,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":67,\"name\":\"AQ 1.5LITRE\",\"selling\":252,\"cscheme\":0,\"quantity\":560,\"empty\":0,\"empty_account\":565,\"empty_store\":560},\"onList\":0},{\"data\":{\"item_id\":68,\"name\":\"AQ 6.LITRE\",\"selling\":120,\"cscheme\":0,\"quantity\":553,\"empty\":0,\"empty_account\":560,\"empty_store\":553},\"onList\":0},{\"data\":{\"item_id\":51,\"name\":\"PET 500ML\",\"selling\":454,\"cscheme\":25,\"quantity\":478,\"empty\":1,\"empty_account\":577,\"empty_store\":480},\"onList\":2}],\"prev\":0,\"paid\":800,\"mt\":0,\"mtr\":0,\"salesman\":{\"customer_id\":1,\"name\":\"Haider\",\"nic\":0,\"contact_no\":0,\"h50\":2,\"h51\":10,\"h52\":11,\"h53\":3,\"h54\":0,\"h55\":0,\"h56\":0,\"h57\":0,\"h58\":0,\"h59\":0,\"h60\":0,\"h61\":0,\"h62\":0,\"h63\":0,\"h64\":0,\"h65\":0,\"h66\":0,\"h67\":0,\"h68\":15},\"bill\":838,\"productsBill\":838,\"mDiscount\":0}', '2019-05-05 21:18:44'),
(35, 169, '{\"data\":[{\"data\":{\"item_id\":50,\"name\":\"PET 300-345ML\",\"selling\":336,\"cscheme\":0,\"quantity\":185,\"empty\":1,\"empty_account\":232,\"empty_store\":185},\"onList\":0},{\"data\":{\"item_id\":52,\"name\":\"PET 1.LITRE\",\"selling\":378,\"cscheme\":30,\"quantity\":480,\"empty\":1,\"empty_account\":510,\"empty_store\":480},\"onList\":0},{\"data\":{\"item_id\":53,\"name\":\"PEPSI 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":46,\"empty\":0,\"empty_account\":60,\"empty_store\":46},\"onList\":0},{\"data\":{\"item_id\":54,\"name\":\"MIRINDA 1.5LITRE\",\"selling\":522,\"cscheme\":60,\"quantity\":50,\"empty\":0,\"empty_account\":60,\"empty_store\":50},\"onList\":0},{\"data\":{\"item_id\":55,\"name\":\"7UP 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":549,\"empty\":0,\"empty_account\":560,\"empty_store\":549},\"onList\":0},{\"data\":{\"item_id\":56,\"name\":\"M/DEW 1.5LITRE\",\"selling\":522,\"cscheme\":40,\"quantity\":538,\"empty\":0,\"empty_account\":560,\"empty_store\":538},\"onList\":0},{\"data\":{\"item_id\":57,\"name\":\"PET 2.25LITRE\",\"selling\":445,\"cscheme\":25,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":58,\"name\":\"CAN-250ML\",\"selling\":336,\"cscheme\":0,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":59,\"name\":\"CAN-300ML\",\"selling\":378,\"cscheme\":0,\"quantity\":5505,\"empty\":0,\"empty_account\":5560,\"empty_store\":5505},\"onList\":0},{\"data\":{\"item_id\":60,\"name\":\"STING 300ML\",\"selling\":384,\"cscheme\":0,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":61,\"name\":\"STING 500ML\",\"selling\":621,\"cscheme\":35,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":62,\"name\":\"STING CAN-250\",\"selling\":420,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":63,\"name\":\"SLICE 355ML\",\"selling\":384,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":64,\"name\":\"SLICE 1.LITRE\",\"selling\":480,\"cscheme\":0,\"quantity\":57,\"empty\":0,\"empty_account\":64,\"empty_store\":57},\"onList\":0},{\"data\":{\"item_id\":65,\"name\":\"SLICE TETRA 200\",\"selling\":396,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":66,\"name\":\"AQ 500ML\",\"selling\":274,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":67,\"name\":\"AQ 1.5LITRE\",\"selling\":252,\"cscheme\":0,\"quantity\":560,\"empty\":0,\"empty_account\":565,\"empty_store\":560},\"onList\":0},{\"data\":{\"item_id\":68,\"name\":\"AQ 6.LITRE\",\"selling\":120,\"cscheme\":0,\"quantity\":553,\"empty\":0,\"empty_account\":560,\"empty_store\":553},\"onList\":0},{\"data\":{\"item_id\":51,\"name\":\"PET 500ML\",\"selling\":454,\"cscheme\":25,\"quantity\":476,\"empty\":1,\"empty_account\":577,\"empty_store\":478},\"onList\":2}],\"prev\":20,\"paid\":858,\"mt\":1,\"mtr\":0,\"salesman\":{\"customer_id\":1,\"name\":\"Haider\",\"nic\":0,\"contact_no\":0,\"h50\":2,\"h51\":10,\"h52\":11,\"h53\":3,\"h54\":0,\"h55\":0,\"h56\":0,\"h57\":0,\"h58\":0,\"h59\":0,\"h60\":0,\"h61\":0,\"h62\":0,\"h63\":0,\"h64\":0,\"h65\":0,\"h66\":0,\"h67\":0,\"h68\":15},\"bill\":858,\"productsBill\":838,\"mDiscount\":0}', '2019-05-06 07:33:57'),
(36, 170, '{\"data\":[{\"data\":{\"item_id\":50,\"name\":\"PET 300-345ML\",\"selling\":336,\"cscheme\":0,\"quantity\":185,\"empty\":1,\"empty_account\":232,\"empty_store\":185},\"onList\":0},{\"data\":{\"item_id\":51,\"name\":\"PET 500ML\",\"selling\":454,\"cscheme\":25,\"quantity\":476,\"empty\":1,\"empty_account\":577,\"empty_store\":476},\"onList\":0},{\"data\":{\"item_id\":52,\"name\":\"PET 1.LITRE\",\"selling\":378,\"cscheme\":30,\"quantity\":480,\"empty\":1,\"empty_account\":510,\"empty_store\":480},\"onList\":0},{\"data\":{\"item_id\":53,\"name\":\"PEPSI 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":46,\"empty\":0,\"empty_account\":60,\"empty_store\":46},\"onList\":0},{\"data\":{\"item_id\":54,\"name\":\"MIRINDA 1.5LITRE\",\"selling\":522,\"cscheme\":60,\"quantity\":50,\"empty\":0,\"empty_account\":60,\"empty_store\":50},\"onList\":0},{\"data\":{\"item_id\":55,\"name\":\"7UP 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":549,\"empty\":0,\"empty_account\":560,\"empty_store\":549},\"onList\":0},{\"data\":{\"item_id\":56,\"name\":\"M/DEW 1.5LITRE\",\"selling\":522,\"cscheme\":40,\"quantity\":538,\"empty\":0,\"empty_account\":560,\"empty_store\":538},\"onList\":0},{\"data\":{\"item_id\":57,\"name\":\"PET 2.25LITRE\",\"selling\":445,\"cscheme\":25,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":58,\"name\":\"CAN-250ML\",\"selling\":336,\"cscheme\":0,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":59,\"name\":\"CAN-300ML\",\"selling\":378,\"cscheme\":0,\"quantity\":5505,\"empty\":0,\"empty_account\":5560,\"empty_store\":5505},\"onList\":0},{\"data\":{\"item_id\":61,\"name\":\"STING 500ML\",\"selling\":621,\"cscheme\":35,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":62,\"name\":\"STING CAN-250\",\"selling\":420,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":63,\"name\":\"SLICE 355ML\",\"selling\":384,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":64,\"name\":\"SLICE 1.LITRE\",\"selling\":480,\"cscheme\":0,\"quantity\":57,\"empty\":0,\"empty_account\":64,\"empty_store\":57},\"onList\":0},{\"data\":{\"item_id\":65,\"name\":\"SLICE TETRA 200\",\"selling\":396,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":66,\"name\":\"AQ 500ML\",\"selling\":274,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":67,\"name\":\"AQ 1.5LITRE\",\"selling\":252,\"cscheme\":0,\"quantity\":560,\"empty\":0,\"empty_account\":565,\"empty_store\":560},\"onList\":0},{\"data\":{\"item_id\":68,\"name\":\"AQ 6.LITRE\",\"selling\":120,\"cscheme\":0,\"quantity\":553,\"empty\":0,\"empty_account\":560,\"empty_store\":553},\"onList\":0},{\"data\":{\"item_id\":60,\"name\":\"STING 300ML\",\"selling\":384,\"cscheme\":0,\"quantity\":554,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":1}],\"prev\":0,\"paid\":384,\"mt\":3,\"mtr\":0,\"salesman\":{\"customer_id\":1,\"name\":\"Haider\",\"nic\":0,\"contact_no\":0,\"h50\":2,\"h51\":10,\"h52\":11,\"h53\":3,\"h54\":0,\"h55\":0,\"h56\":0,\"h57\":0,\"h58\":0,\"h59\":0,\"h60\":0,\"h61\":0,\"h62\":0,\"h63\":0,\"h64\":0,\"h65\":0,\"h66\":0,\"h67\":0,\"h68\":15},\"bill\":384,\"productsBill\":384,\"mDiscount\":0}', '2019-05-06 07:50:59');
INSERT INTO `departures` (`did`, `invoice_id`, `value`, `date_time`) VALUES
(37, 171, '{\"data\":[{\"data\":{\"item_id\":50,\"name\":\"PET 300-345ML\",\"selling\":336,\"cscheme\":0,\"quantity\":185,\"empty\":1,\"empty_account\":232,\"empty_store\":185},\"onList\":0},{\"data\":{\"item_id\":51,\"name\":\"PET 500ML\",\"selling\":454,\"cscheme\":25,\"quantity\":476,\"empty\":1,\"empty_account\":577,\"empty_store\":476},\"onList\":0},{\"data\":{\"item_id\":52,\"name\":\"PET 1.LITRE\",\"selling\":378,\"cscheme\":30,\"quantity\":480,\"empty\":1,\"empty_account\":510,\"empty_store\":480},\"onList\":0},{\"data\":{\"item_id\":54,\"name\":\"MIRINDA 1.5LITRE\",\"selling\":522,\"cscheme\":60,\"quantity\":50,\"empty\":0,\"empty_account\":60,\"empty_store\":50},\"onList\":0},{\"data\":{\"item_id\":55,\"name\":\"7UP 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":549,\"empty\":0,\"empty_account\":560,\"empty_store\":549},\"onList\":0},{\"data\":{\"item_id\":56,\"name\":\"M/DEW 1.5LITRE\",\"selling\":522,\"cscheme\":40,\"quantity\":538,\"empty\":0,\"empty_account\":560,\"empty_store\":538},\"onList\":0},{\"data\":{\"item_id\":57,\"name\":\"PET 2.25LITRE\",\"selling\":445,\"cscheme\":25,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":58,\"name\":\"CAN-250ML\",\"selling\":336,\"cscheme\":0,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":59,\"name\":\"CAN-300ML\",\"selling\":378,\"cscheme\":0,\"quantity\":5505,\"empty\":0,\"empty_account\":5560,\"empty_store\":5505},\"onList\":0},{\"data\":{\"item_id\":60,\"name\":\"STING 300ML\",\"selling\":384,\"cscheme\":0,\"quantity\":556,\"empty\":0,\"empty_account\":562,\"empty_store\":556},\"onList\":0},{\"data\":{\"item_id\":61,\"name\":\"STING 500ML\",\"selling\":621,\"cscheme\":35,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":62,\"name\":\"STING CAN-250\",\"selling\":420,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":63,\"name\":\"SLICE 355ML\",\"selling\":384,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":64,\"name\":\"SLICE 1.LITRE\",\"selling\":480,\"cscheme\":0,\"quantity\":57,\"empty\":0,\"empty_account\":64,\"empty_store\":57},\"onList\":0},{\"data\":{\"item_id\":65,\"name\":\"SLICE TETRA 200\",\"selling\":396,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":66,\"name\":\"AQ 500ML\",\"selling\":274,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":67,\"name\":\"AQ 1.5LITRE\",\"selling\":252,\"cscheme\":0,\"quantity\":560,\"empty\":0,\"empty_account\":565,\"empty_store\":560},\"onList\":0},{\"data\":{\"item_id\":68,\"name\":\"AQ 6.LITRE\",\"selling\":120,\"cscheme\":0,\"quantity\":553,\"empty\":0,\"empty_account\":560,\"empty_store\":553},\"onList\":0},{\"data\":{\"item_id\":53,\"name\":\"PEPSI 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":44,\"empty\":0,\"empty_account\":60,\"empty_store\":46},\"onList\":2}],\"prev\":0,\"paid\":968,\"mt\":4,\"mtr\":0,\"salesman\":{\"customer_id\":1,\"name\":\"Haider\",\"nic\":0,\"contact_no\":0,\"h50\":2,\"h51\":10,\"h52\":11,\"h53\":3,\"h54\":0,\"h55\":0,\"h56\":0,\"h57\":0,\"h58\":0,\"h59\":0,\"h60\":0,\"h61\":0,\"h62\":0,\"h63\":0,\"h64\":0,\"h65\":0,\"h66\":0,\"h67\":0,\"h68\":15},\"bill\":968,\"productsBill\":968,\"mDiscount\":0}', '2019-05-06 07:52:22'),
(38, 172, '{\"data\":[{\"data\":{\"item_id\":50,\"name\":\"PET 300-345ML\",\"selling\":336,\"cscheme\":0,\"quantity\":185,\"empty\":1,\"empty_account\":232,\"empty_store\":185},\"onList\":0},{\"data\":{\"item_id\":51,\"name\":\"PET 500ML\",\"selling\":454,\"cscheme\":25,\"quantity\":476,\"empty\":1,\"empty_account\":577,\"empty_store\":476},\"onList\":0},{\"data\":{\"item_id\":52,\"name\":\"PET 1.LITRE\",\"selling\":378,\"cscheme\":30,\"quantity\":480,\"empty\":1,\"empty_account\":510,\"empty_store\":480},\"onList\":0},{\"data\":{\"item_id\":53,\"name\":\"PEPSI 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":44,\"empty\":0,\"empty_account\":60,\"empty_store\":46},\"onList\":0},{\"data\":{\"item_id\":54,\"name\":\"MIRINDA 1.5LITRE\",\"selling\":522,\"cscheme\":60,\"quantity\":50,\"empty\":0,\"empty_account\":60,\"empty_store\":50},\"onList\":0},{\"data\":{\"item_id\":55,\"name\":\"7UP 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":549,\"empty\":0,\"empty_account\":560,\"empty_store\":549},\"onList\":0},{\"data\":{\"item_id\":56,\"name\":\"M/DEW 1.5LITRE\",\"selling\":522,\"cscheme\":40,\"quantity\":538,\"empty\":0,\"empty_account\":560,\"empty_store\":538},\"onList\":0},{\"data\":{\"item_id\":57,\"name\":\"PET 2.25LITRE\",\"selling\":445,\"cscheme\":25,\"quantity\":47,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":0},{\"data\":{\"item_id\":59,\"name\":\"CAN-300ML\",\"selling\":378,\"cscheme\":0,\"quantity\":5505,\"empty\":0,\"empty_account\":5560,\"empty_store\":5505},\"onList\":0},{\"data\":{\"item_id\":60,\"name\":\"STING 300ML\",\"selling\":384,\"cscheme\":0,\"quantity\":556,\"empty\":0,\"empty_account\":562,\"empty_store\":556},\"onList\":0},{\"data\":{\"item_id\":61,\"name\":\"STING 500ML\",\"selling\":621,\"cscheme\":35,\"quantity\":555,\"empty\":0,\"empty_account\":560,\"empty_store\":555},\"onList\":0},{\"data\":{\"item_id\":62,\"name\":\"STING CAN-250\",\"selling\":420,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":63,\"name\":\"SLICE 355ML\",\"selling\":384,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":64,\"name\":\"SLICE 1.LITRE\",\"selling\":480,\"cscheme\":0,\"quantity\":57,\"empty\":0,\"empty_account\":64,\"empty_store\":57},\"onList\":0},{\"data\":{\"item_id\":65,\"name\":\"SLICE TETRA 200\",\"selling\":396,\"cscheme\":0,\"quantity\":55,\"empty\":0,\"empty_account\":60,\"empty_store\":55},\"onList\":0},{\"data\":{\"item_id\":66,\"name\":\"AQ 500ML\",\"selling\":274,\"cscheme\":0,\"quantity\":60,\"empty\":0,\"empty_account\":60,\"empty_store\":60},\"onList\":0},{\"data\":{\"item_id\":67,\"name\":\"AQ 1.5LITRE\",\"selling\":252,\"cscheme\":0,\"quantity\":560,\"empty\":0,\"empty_account\":565,\"empty_store\":560},\"onList\":0},{\"data\":{\"item_id\":68,\"name\":\"AQ 6.LITRE\",\"selling\":120,\"cscheme\":0,\"quantity\":553,\"empty\":0,\"empty_account\":560,\"empty_store\":553},\"onList\":0},{\"data\":{\"item_id\":58,\"name\":\"CAN-250ML\",\"selling\":336,\"cscheme\":0,\"quantity\":44,\"empty\":0,\"empty_account\":60,\"empty_store\":47},\"onList\":3}],\"prev\":0,\"paid\":1008,\"mt\":6,\"mtr\":0,\"salesman\":{\"customer_id\":1,\"name\":\"Haider\",\"nic\":0,\"contact_no\":0,\"h50\":2,\"h51\":10,\"h52\":11,\"h53\":3,\"h54\":0,\"h55\":0,\"h56\":0,\"h57\":0,\"h58\":0,\"h59\":0,\"h60\":0,\"h61\":0,\"h62\":0,\"h63\":0,\"h64\":0,\"h65\":0,\"h66\":0,\"h67\":0,\"h68\":15},\"bill\":1008,\"productsBill\":1008,\"mDiscount\":null}', '2019-05-06 07:52:29'),
(39, 173, '{\"data\":[{\"data\":{\"item_id\":50,\"name\":\"PET 300-345ML\",\"selling\":336,\"cscheme\":0,\"quantity\":500,\"empty\":1,\"empty_account\":487,\"empty_store\":487},\"onList\":0},{\"data\":{\"item_id\":52,\"name\":\"PET 1.LITRE\",\"selling\":378,\"cscheme\":30,\"quantity\":500,\"empty\":1,\"empty_account\":500,\"empty_store\":500},\"onList\":0},{\"data\":{\"item_id\":53,\"name\":\"PEPSI 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":500,\"empty\":0,\"empty_account\":500,\"empty_store\":500},\"onList\":0},{\"data\":{\"item_id\":54,\"name\":\"MIRINDA 1.5LITRE\",\"selling\":522,\"cscheme\":60,\"quantity\":500,\"empty\":0,\"empty_account\":500,\"empty_store\":500},\"onList\":0},{\"data\":{\"item_id\":55,\"name\":\"7UP 1.5LITRE\",\"selling\":522,\"cscheme\":35,\"quantity\":500,\"empty\":0,\"empty_account\":500,\"empty_store\":500},\"onList\":0},{\"data\":{\"item_id\":56,\"name\":\"M/DEW 1.5LITRE\",\"selling\":522,\"cscheme\":40,\"quantity\":500,\"empty\":0,\"empty_account\":500,\"empty_store\":500},\"onList\":0},{\"data\":{\"item_id\":57,\"name\":\"PET 2.25LITRE\",\"selling\":445,\"cscheme\":25,\"quantity\":500,\"empty\":0,\"empty_account\":500,\"empty_store\":500},\"onList\":0},{\"data\":{\"item_id\":58,\"name\":\"CAN-250ML\",\"selling\":336,\"cscheme\":0,\"quantity\":500,\"empty\":0,\"empty_account\":500,\"empty_store\":500},\"onList\":0},{\"data\":{\"item_id\":59,\"name\":\"CAN-300ML\",\"selling\":378,\"cscheme\":0,\"quantity\":500,\"empty\":0,\"empty_account\":500,\"empty_store\":500},\"onList\":0},{\"data\":{\"item_id\":60,\"name\":\"STING 300ML\",\"selling\":384,\"cscheme\":0,\"quantity\":500,\"empty\":0,\"empty_account\":500,\"empty_store\":500},\"onList\":0},{\"data\":{\"item_id\":61,\"name\":\"STING 500ML\",\"selling\":621,\"cscheme\":35,\"quantity\":500,\"empty\":0,\"empty_account\":500,\"empty_store\":500},\"onList\":0},{\"data\":{\"item_id\":62,\"name\":\"STING CAN-250\",\"selling\":420,\"cscheme\":0,\"quantity\":500,\"empty\":0,\"empty_account\":500,\"empty_store\":500},\"onList\":0},{\"data\":{\"item_id\":63,\"name\":\"SLICE 355ML\",\"selling\":384,\"cscheme\":0,\"quantity\":500,\"empty\":0,\"empty_account\":500,\"empty_store\":500},\"onList\":0},{\"data\":{\"item_id\":64,\"name\":\"SLICE 1.LITRE\",\"selling\":480,\"cscheme\":0,\"quantity\":500,\"empty\":0,\"empty_account\":500,\"empty_store\":500},\"onList\":0},{\"data\":{\"item_id\":65,\"name\":\"SLICE TETRA 200\",\"selling\":396,\"cscheme\":0,\"quantity\":500,\"empty\":0,\"empty_account\":500,\"empty_store\":500},\"onList\":0},{\"data\":{\"item_id\":66,\"name\":\"AQ 500ML\",\"selling\":274,\"cscheme\":0,\"quantity\":500,\"empty\":0,\"empty_account\":500,\"empty_store\":500},\"onList\":0},{\"data\":{\"item_id\":67,\"name\":\"AQ 1.5LITRE\",\"selling\":252,\"cscheme\":0,\"quantity\":500,\"empty\":0,\"empty_account\":500,\"empty_store\":500},\"onList\":0},{\"data\":{\"item_id\":68,\"name\":\"AQ 6.LITRE\",\"selling\":120,\"cscheme\":0,\"quantity\":500,\"empty\":0,\"empty_account\":500,\"empty_store\":500},\"onList\":0},{\"data\":{\"item_id\":51,\"name\":\"PET 500ML\",\"selling\":454,\"cscheme\":25,\"quantity\":490,\"empty\":1,\"empty_account\":500,\"empty_store\":500},\"onList\":10}],\"prev\":0,\"paid\":4190,\"mt\":0,\"mtr\":0,\"salesman\":{\"customer_id\":1,\"name\":\"Haider\",\"nic\":0,\"contact_no\":0,\"h50\":2,\"h51\":10,\"h52\":11,\"h53\":3,\"h54\":0,\"h55\":0,\"h56\":0,\"h57\":0,\"h58\":0,\"h59\":0,\"h60\":0,\"h61\":0,\"h62\":0,\"h63\":0,\"h64\":0,\"h65\":0,\"h66\":0,\"h67\":0,\"h68\":15},\"bill\":4190,\"productsBill\":4190,\"mDiscount\":0}', '2019-05-06 12:10:12');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `item_id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `selling` int(11) NOT NULL,
  `cscheme` int(11) NOT NULL DEFAULT '0',
  `quantity` int(11) NOT NULL DEFAULT '0',
  `empty` int(1) NOT NULL DEFAULT '0',
  `empty_account` int(11) NOT NULL DEFAULT '0',
  `empty_store` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`item_id`, `name`, `selling`, `cscheme`, `quantity`, `empty`, `empty_account`, `empty_store`) VALUES
(50, 'PET 300-345ML', 336, 0, 500, 1, 487, 487),
(51, 'PET 500ML', 454, 25, 490, 1, 500, 490),
(52, 'PET 1.LITRE', 378, 30, 500, 1, 500, 500),
(53, 'PEPSI 1.5LITRE', 522, 35, 500, 0, 500, 500),
(54, 'MIRINDA 1.5LITRE', 522, 60, 500, 0, 500, 500),
(55, '7UP 1.5LITRE', 522, 35, 500, 0, 500, 500),
(56, 'M/DEW 1.5LITRE', 522, 40, 500, 0, 500, 500),
(57, 'PET 2.25LITRE', 445, 25, 500, 0, 500, 500),
(58, 'CAN-250ML', 336, 0, 500, 0, 500, 500),
(59, 'CAN-300ML', 378, 0, 500, 0, 500, 500),
(60, 'STING 300ML', 384, 0, 500, 0, 500, 500),
(61, 'STING 500ML', 621, 35, 500, 0, 500, 500),
(62, 'STING CAN-250', 420, 0, 500, 0, 500, 500),
(63, 'SLICE 355ML', 384, 0, 500, 0, 500, 500),
(64, 'SLICE 1.LITRE', 480, 0, 500, 0, 500, 500),
(65, 'SLICE TETRA 200', 396, 0, 500, 0, 500, 500),
(66, 'AQ 500ML', 274, 0, 500, 0, 500, 500),
(67, 'AQ 1.5LITRE', 252, 0, 500, 0, 500, 500),
(68, 'AQ 6.LITRE', 120, 0, 500, 0, 500, 500);

-- --------------------------------------------------------

--
-- Table structure for table `rentals`
--

CREATE TABLE `rentals` (
  `rent_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `contact` varchar(32) DEFAULT '',
  `quantity` int(7) NOT NULL,
  `rpd` int(11) NOT NULL,
  `issued` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `returned` datetime DEFAULT CURRENT_TIMESTAMP,
  `paid` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rental_items`
--

CREATE TABLE `rental_items` (
  `item_id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `cost` int(11) NOT NULL DEFAULT '0',
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `restock_event`
--

CREATE TABLE `restock_event` (
  `restock_id` int(11) NOT NULL,
  `item_id` int(6) NOT NULL,
  `amount` int(11) NOT NULL,
  `date_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `return_event`
--

CREATE TABLE `return_event` (
  `rid` int(11) NOT NULL,
  `item_id` int(6) NOT NULL,
  `amount` int(11) NOT NULL,
  `date_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `return_event`
--

INSERT INTO `return_event` (`rid`, `item_id`, `amount`, `date_time`) VALUES
(4, 50, 13, '2019-05-06 10:31:52');

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `invoice_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `deposit` int(11) NOT NULL,
  `balance` int(11) NOT NULL,
  `discounts` text COLLATE utf8mb4_unicode_ci,
  `date_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cleared` tinyint(4) NOT NULL DEFAULT '0',
  `returned` int(11) NOT NULL DEFAULT '0',
  `complete` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`invoice_id`, `customer_id`, `item_id`, `quantity`, `deposit`, `balance`, `discounts`, `date_time`, `cleared`, `returned`, `complete`) VALUES
(173, 1, 51, 10, 4190, 0, '350', '2019-05-06 12:10:12', 0, 0, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`aid`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `departures`
--
ALTER TABLE `departures`
  ADD PRIMARY KEY (`did`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `rentals`
--
ALTER TABLE `rentals`
  ADD PRIMARY KEY (`rent_id`);

--
-- Indexes for table `rental_items`
--
ALTER TABLE `rental_items`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `restock_event`
--
ALTER TABLE `restock_event`
  ADD PRIMARY KEY (`restock_id`);

--
-- Indexes for table `return_event`
--
ALTER TABLE `return_event`
  ADD PRIMARY KEY (`rid`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`invoice_id`,`customer_id`,`item_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `departures`
--
ALTER TABLE `departures`
  MODIFY `did` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `rentals`
--
ALTER TABLE `rentals`
  MODIFY `rent_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rental_items`
--
ALTER TABLE `rental_items`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `restock_event`
--
ALTER TABLE `restock_event`
  MODIFY `restock_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `return_event`
--
ALTER TABLE `return_event`
  MODIFY `rid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `invoice_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=174;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
