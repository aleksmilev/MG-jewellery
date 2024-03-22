-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 22, 2024 at 12:32 PM
-- Server version: 10.6.17-MariaDB-log
-- PHP Version: 8.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tcomsfer_mg-jewellery`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Bracelets'),
(2, 'Earrings'),
(3, 'Clocks'),
(4, 'Necklaces'),
(5, 'Rings'),
(6, 'Accessories');

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `loaction` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`id`, `first_name`, `last_name`, `email`, `password`, `phone`, `loaction`) VALUES
(1, 'test', 'client', 'client1@gmail.com', 'password123', '08888888', '{\"city\":\"ddsfdsdfs\",\"postcode\":\"1212\",\"street_name\":\"dsfdsdfsfdsf\",\"apartment\":\"dsfdsfdsfs\",\"details\":\"xvxvxcvcxvcx\"}');

-- --------------------------------------------------------

--
-- Table structure for table `client_order`
--

CREATE TABLE `client_order` (
  `id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `order_info` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`order_info`)),
  `status` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `client_order`
--

INSERT INTO `client_order` (`id`, `client_id`, `order_info`, `status`, `date`) VALUES
(2, 1, '{\"custom\":[{\"id\":\"2\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"3\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"4\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]}],\"regular\":[{\"id\":\"3\",\"quantity\":1}]}', 'Завършена', '2024-01-21'),
(3, 1, '{\"custom\":[{\"id\":\"2\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"3\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"4\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]}],\"regular\":[{\"id\":\"3\",\"quantity\":1}]}', 'Изпратена', '2024-02-20'),
(4, 1, '{\"custom\":[{\"id\":\"2\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"3\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"4\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]}],\"regular\":[{\"id\":\"3\",\"quantity\":1}]}', 'В процес', '2024-02-20'),
(5, 1, '{\"custom\":[{\"id\":\"2\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"3\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"4\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]}],\"regular\":[{\"id\":\"3\",\"quantity\":1}]}', 'В процес', '2024-02-20'),
(20, 1, '{\"custom\":[{\"id\":\"2\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"3\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_2\",\"selected\":true,\"title\":\"Diamand u21163\"}]}]}],\"regular\":[{\"id\":\"14\",\"quantity\":1}]}', 'В процес', '2024-03-11'),
(21, 1, '{\"custom\":[{\"id\":\"2\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"3\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"4\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]}],\"regular\":[{\"id\":\"3\",\"quantity\":1}]}', 'Завършена', '2024-04-20'),
(22, 1, '{\"custom\":[{\"id\":\"2\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"3\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"4\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]}],\"regular\":[{\"id\":\"3\",\"quantity\":1}]}', 'Изпратена', '2024-04-20'),
(23, 1, '{\"custom\":[{\"id\":\"2\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"3\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"4\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]}],\"regular\":[{\"id\":\"3\",\"quantity\":1}]}', 'В процес', '2024-05-20'),
(24, 1, '{\"custom\":[{\"id\":\"2\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"3\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"4\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]}],\"regular\":[{\"id\":\"3\",\"quantity\":1}]}', 'В процес', '2024-02-20'),
(25, 1, '{\"custom\":[{\"id\":\"2\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"3\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]}],\"regular\":[{\"id\":\"14\",\"quantity\":1}]}', 'В процес', '2024-03-11'),
(26, 1, '{\"custom\":[{\"id\":\"2\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"3\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"4\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]}],\"regular\":[{\"id\":\"3\",\"quantity\":1}]}', 'Завършена', '2024-02-20'),
(27, 1, '{\"custom\":[{\"id\":\"2\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"3\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"4\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]}],\"regular\":[{\"id\":\"3\",\"quantity\":1}]}', 'Изпратена', '2024-02-20'),
(28, 1, '{\"custom\":[{\"id\":\"2\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"3\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"4\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]}],\"regular\":[{\"id\":\"3\",\"quantity\":1}]}', 'В процес', '2024-05-20'),
(29, 1, '{\"custom\":[{\"id\":\"2\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"3\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"4\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]}],\"regular\":[{\"id\":\"3\",\"quantity\":1}]}', 'В процес', '2024-02-20'),
(30, 1, '{\"custom\":[{\"id\":\"2\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"3\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]}],\"regular\":[{\"id\":\"14\",\"quantity\":1}]}', 'В процес', '2024-03-11'),
(31, 1, '{\"custom\":[{\"id\":\"2\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"3\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]},{\"id\":\"4\",\"quantity\":1,\"customizations\":[{\"name\":\"var_1\",\"config\":[{\"name\":\"var_1_0\",\"selected\":true,\"title\":\"Diamand u21161\"}]}]}],\"regular\":[{\"id\":\"3\",\"quantity\":1}]}', 'Завършена', '2024-06-20');

-- --------------------------------------------------------

--
-- Table structure for table `custom_products`
--

CREATE TABLE `custom_products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `module_path` longtext NOT NULL,
  `mesh_material` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`mesh_material`)),
  `custom_parts` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`custom_parts`)),
  `cover_path` longtext NOT NULL,
  `description` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `custom_products`
--

INSERT INTO `custom_products` (`id`, `name`, `price`, `gender`, `module_path`, `mesh_material`, `custom_parts`, `cover_path`, `description`) VALUES
(1, 'Item 1', '10.99', '1', 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"6290bf\"},{\"name\":\"Torus\",\"color\":\"6290bf\"},{\"name\":\"var_1_0\",\"color\":\"ff00ff\"},{\"name\":\"var_1_1\",\"color\":\"ff00ff\"},{\"name\":\"var_1_2\",\"color\":\"ff00ff\"},{\"name\":\"var_1_3\",\"color\":\"ff00ff\"},{\"name\":\"var_1_4\",\"color\":\"ff00ff\"},{\"name\":\"var_1_4\",\"color\":\"ff00ff\"}]', '[{\"name\": \"var_1\",\"config\": [{\"name\":\"var_1_0\",\"selected\": true,\"title\": \"Diamand №1\"},{\"name\":\"var_1_1\",\"selected\": false,\"title\": \"Diamand №2\"},{\"name\":\"var_1_2\",\"selected\": false,\"title\": \"Diamand №3\"},{\"name\":\"var_1_3\",\"selected\": false,\"title\": \"Diamand №4\"}]}]', '/1/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(2, 'Item 2', '15.99', '2', 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"ff6699\"},{\"name\":\"Torus\",\"color\":\"ff6699\"},{\"name\":\"var_1_0\",\"color\":\"66cccc\"},{\"name\":\"var_1_1\",\"color\":\"66cccc\"},{\"name\":\"var_1_2\",\"color\":\"66cccc\"},{\"name\":\"var_1_3\",\"color\":\"66cccc\"},{\"name\":\"var_1_4\",\"color\":\"66cccc\"},{\"name\":\"var_1_4\",\"color\":\"66cccc\"}]', '[{\"name\": \"var_1\",\"config\": [{\"name\":\"var_1_0\",\"selected\": true,\"title\": \"Diamand №1\"},{\"name\":\"var_1_1\",\"selected\": false,\"title\": \"Diamand №2\"},{\"name\":\"var_1_2\",\"selected\": false,\"title\": \"Diamand №3\"},{\"name\":\"var_1_3\",\"selected\": false,\"title\": \"Diamand №4\"}]}]', '/2/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(3, 'Item 3', '20.99', '3', 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"ffcc66\"},{\"name\":\"Torus\",\"color\":\"ffcc66\"},{\"name\":\"var_1_0\",\"color\":\"3399ff\"},{\"name\":\"var_1_1\",\"color\":\"3399ff\"},{\"name\":\"var_1_2\",\"color\":\"3399ff\"},{\"name\":\"var_1_3\",\"color\":\"3399ff\"},{\"name\":\"var_1_4\",\"color\":\"3399ff\"},{\"name\":\"var_1_4\",\"color\":\"3399ff\"}]', '[{\"name\": \"var_1\",\"config\": [{\"name\":\"var_1_0\",\"selected\": true,\"title\": \"Diamand №1\"},{\"name\":\"var_1_1\",\"selected\": false,\"title\": \"Diamand №2\"},{\"name\":\"var_1_2\",\"selected\": false,\"title\": \"Diamand №3\"},{\"name\":\"var_1_3\",\"selected\": false,\"title\": \"Diamand №4\"}]}]', '/3/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(4, 'Item 4', '25.99', '1', 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"99ccff\"},{\"name\":\"Torus\",\"color\":\"99ccff\"},{\"name\":\"var_1_0\",\"color\":\"ff9933\"},{\"name\":\"var_1_1\",\"color\":\"ff9933\"},{\"name\":\"var_1_2\",\"color\":\"ff9933\"},{\"name\":\"var_1_3\",\"color\":\"ff9933\"},{\"name\":\"var_1_4\",\"color\":\"ff9933\"},{\"name\":\"var_1_4\",\"color\":\"ff9933\"}]', '[{\"name\": \"var_1\",\"config\": [{\"name\":\"var_1_0\",\"selected\": true,\"title\": \"Diamand №1\"},{\"name\":\"var_1_1\",\"selected\": false,\"title\": \"Diamand №2\"},{\"name\":\"var_1_2\",\"selected\": false,\"title\": \"Diamand №3\"},{\"name\":\"var_1_3\",\"selected\": false,\"title\": \"Diamand №4\"}]}]', '/4/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(5, 'Item 5', '30.99', '2', 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"ff9999\"},{\"name\":\"Torus\",\"color\":\"ff9999\"},{\"name\":\"var_1_0\",\"color\":\"6699ff\"},{\"name\":\"var_1_1\",\"color\":\"6699ff\"},{\"name\":\"var_1_2\",\"color\":\"6699ff\"},{\"name\":\"var_1_3\",\"color\":\"6699ff\"},{\"name\":\"var_1_4\",\"color\":\"6699ff\"},{\"name\":\"var_1_4\",\"color\":\"6699ff\"}]', '[{\"name\": \"var_1\",\"config\": [{\"name\":\"var_1_0\",\"selected\": true,\"title\": \"Diamand №1\"},{\"name\":\"var_1_1\",\"selected\": false,\"title\": \"Diamand №2\"},{\"name\":\"var_1_2\",\"selected\": false,\"title\": \"Diamand №3\"},{\"name\":\"var_1_3\",\"selected\": false,\"title\": \"Diamand №4\"}]}]', '/5/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(6, 'Item 6', '35.99', '3', 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"99ccff\"},{\"name\":\"Torus\",\"color\":\"99ccff\"},{\"name\":\"var_1_0\",\"color\":\"ff9966\"},{\"name\":\"var_1_1\",\"color\":\"ff9966\"},{\"name\":\"var_1_2\",\"color\":\"ff9966\"},{\"name\":\"var_1_3\",\"color\":\"ff9966\"},{\"name\":\"var_1_4\",\"color\":\"ff9966\"},{\"name\":\"var_1_4\",\"color\":\"ff9966\"}]', '[{\"name\": \"var_1\",\"config\": [{\"name\":\"var_1_0\",\"selected\": true,\"title\": \"Diamand №1\"},{\"name\":\"var_1_1\",\"selected\": false,\"title\": \"Diamand №2\"},{\"name\":\"var_1_2\",\"selected\": false,\"title\": \"Diamand №3\"},{\"name\":\"var_1_3\",\"selected\": false,\"title\": \"Diamand №4\"}]}]', '/6/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(7, 'Item 7', '40.99', '1', 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"ff6666\"},{\"name\":\"Torus\",\"color\":\"ff6666\"},{\"name\":\"var_1_0\",\"color\":\"66ffcc\"},{\"name\":\"var_1_1\",\"color\":\"66ffcc\"},{\"name\":\"var_1_2\",\"color\":\"66ffcc\"},{\"name\":\"var_1_3\",\"color\":\"66ffcc\"},{\"name\":\"var_1_4\",\"color\":\"66ffcc\"},{\"name\":\"var_1_4\",\"color\":\"66ffcc\"}]', '[{\"name\": \"var_1\",\"config\": [{\"name\":\"var_1_0\",\"selected\": true,\"title\": \"Diamand №1\"},{\"name\":\"var_1_1\",\"selected\": false,\"title\": \"Diamand №2\"},{\"name\":\"var_1_2\",\"selected\": false,\"title\": \"Diamand №3\"},{\"name\":\"var_1_3\",\"selected\": false,\"title\": \"Diamand №4\"}]}]', '/7/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(8, 'Item 8', '45.99', '2', 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"ffcc66\"},{\"name\":\"Torus\",\"color\":\"ffcc66\"},{\"name\":\"var_1_0\",\"color\":\"3399ff\"},{\"name\":\"var_1_1\",\"color\":\"3399ff\"},{\"name\":\"var_1_2\",\"color\":\"3399ff\"},{\"name\":\"var_1_3\",\"color\":\"3399ff\"},{\"name\":\"var_1_4\",\"color\":\"3399ff\"},{\"name\":\"var_1_4\",\"color\":\"3399ff\"}]', '[{\"name\": \"var_1\",\"config\": [{\"name\":\"var_1_0\",\"selected\": true,\"title\": \"Diamand №1\"},{\"name\":\"var_1_1\",\"selected\": false,\"title\": \"Diamand №2\"},{\"name\":\"var_1_2\",\"selected\": false,\"title\": \"Diamand №3\"},{\"name\":\"var_1_3\",\"selected\": false,\"title\": \"Diamand №4\"}]}]', '/8/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(9, 'Item 9', '50.99', '3', 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"66ccff\"},{\"name\":\"Torus\",\"color\":\"66ccff\"},{\"name\":\"var_1_0\",\"color\":\"ff6699\"},{\"name\":\"var_1_1\",\"color\":\"ff6699\"},{\"name\":\"var_1_2\",\"color\":\"ff6699\"},{\"name\":\"var_1_3\",\"color\":\"ff6699\"},{\"name\":\"var_1_4\",\"color\":\"ff6699\"},{\"name\":\"var_1_4\",\"color\":\"ff6699\"}]', '[{\"name\": \"var_1\",\"config\": [{\"name\":\"var_1_0\",\"selected\": true,\"title\": \"Diamand №1\"},{\"name\":\"var_1_1\",\"selected\": false,\"title\": \"Diamand №2\"},{\"name\":\"var_1_2\",\"selected\": false,\"title\": \"Diamand №3\"},{\"name\":\"var_1_3\",\"selected\": false,\"title\": \"Diamand №4\"}]}]', '/9/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(10, 'Item 10', '55.99', '1', 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"ff9999\"},{\"name\":\"Torus\",\"color\":\"ff9999\"},{\"name\":\"var_1_0\",\"color\":\"66ccff\"},{\"name\":\"var_1_1\",\"color\":\"66ccff\"},{\"name\":\"var_1_2\",\"color\":\"66ccff\"},{\"name\":\"var_1_3\",\"color\":\"66ccff\"},{\"name\":\"var_1_4\",\"color\":\"66ccff\"},{\"name\":\"var_1_4\",\"color\":\"66ccff\"}]', '[{\"name\": \"var_1\",\"config\": [{\"name\":\"var_1_0\",\"selected\": true,\"title\": \"Diamand №1\"},{\"name\":\"var_1_1\",\"selected\": false,\"title\": \"Diamand №2\"},{\"name\":\"var_1_2\",\"selected\": false,\"title\": \"Diamand №3\"},{\"name\":\"var_1_3\",\"selected\": false,\"title\": \"Diamand №4\"}]}]', '/10/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(11, 'Item 11', '60.99', '2', 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"ffcc99\"},{\"name\":\"Torus\",\"color\":\"ffcc99\"},{\"name\":\"var_1_0\",\"color\":\"3399ff\"},{\"name\":\"var_1_1\",\"color\":\"3399ff\"},{\"name\":\"var_1_2\",\"color\":\"3399ff\"},{\"name\":\"var_1_3\",\"color\":\"3399ff\"},{\"name\":\"var_1_4\",\"color\":\"3399ff\"},{\"name\":\"var_1_4\",\"color\":\"3399ff\"}]', '[{\"name\": \"var_1\",\"config\": [{\"name\":\"var_1_0\",\"selected\": true,\"title\": \"Diamand №1\"},{\"name\":\"var_1_1\",\"selected\": false,\"title\": \"Diamand №2\"},{\"name\":\"var_1_2\",\"selected\": false,\"title\": \"Diamand №3\"},{\"name\":\"var_1_3\",\"selected\": false,\"title\": \"Diamand №4\"}]}]', '/11/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(12, 'Item 12', '65.99', '3', 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"ff6699\"},{\"name\":\"Torus\",\"color\":\"ff6699\"},{\"name\":\"var_1_0\",\"color\":\"66cccc\"},{\"name\":\"var_1_1\",\"color\":\"66cccc\"},{\"name\":\"var_1_2\",\"color\":\"66cccc\"},{\"name\":\"var_1_3\",\"color\":\"66cccc\"},{\"name\":\"var_1_4\",\"color\":\"66cccc\"},{\"name\":\"var_1_4\",\"color\":\"66cccc\"}]', '[{\"name\": \"var_1\",\"config\": [{\"name\":\"var_1_0\",\"selected\": true,\"title\": \"Diamand №1\"},{\"name\":\"var_1_1\",\"selected\": false,\"title\": \"Diamand №2\"},{\"name\":\"var_1_2\",\"selected\": false,\"title\": \"Diamand №3\"},{\"name\":\"var_1_3\",\"selected\": false,\"title\": \"Diamand №4\"}]}]', '/12/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(13, 'Item 13', '70.99', '1', 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"ff6666\"},{\"name\":\"Torus\",\"color\":\"ff6666\"},{\"name\":\"var_1_0\",\"color\":\"66ffcc\"},{\"name\":\"var_1_1\",\"color\":\"66ffcc\"},{\"name\":\"var_1_2\",\"color\":\"66ffcc\"},{\"name\":\"var_1_3\",\"color\":\"66ffcc\"},{\"name\":\"var_1_4\",\"color\":\"66ffcc\"},{\"name\":\"var_1_4\",\"color\":\"66ffcc\"}]', '[{\"name\": \"var_1\",\"config\": [{\"name\":\"var_1_0\",\"selected\": true,\"title\": \"Diamand №1\"},{\"name\":\"var_1_1\",\"selected\": false,\"title\": \"Diamand №2\"},{\"name\":\"var_1_2\",\"selected\": false,\"title\": \"Diamand №3\"},{\"name\":\"var_1_3\",\"selected\": false,\"title\": \"Diamand №4\"}]}]', '/13/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(14, 'Item 14', '75.99', '2', 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"ffcc66\"},{\"name\":\"Torus\",\"color\":\"ffcc66\"},{\"name\":\"var_1_0\",\"color\":\"3399ff\"},{\"name\":\"var_1_1\",\"color\":\"3399ff\"},{\"name\":\"var_1_2\",\"color\":\"3399ff\"},{\"name\":\"var_1_3\",\"color\":\"3399ff\"},{\"name\":\"var_1_4\",\"color\":\"3399ff\"},{\"name\":\"var_1_4\",\"color\":\"3399ff\"}]', '[{\"name\": \"var_1\",\"config\": [{\"name\":\"var_1_0\",\"selected\": true,\"title\": \"Diamand №1\"},{\"name\":\"var_1_1\",\"selected\": false,\"title\": \"Diamand №2\"},{\"name\":\"var_1_2\",\"selected\": false,\"title\": \"Diamand №3\"},{\"name\":\"var_1_3\",\"selected\": false,\"title\": \"Diamand №4\"}]}]', '/14/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(15, 'Item 15', '80.99', '3', 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"66ccff\"},{\"name\":\"Torus\",\"color\":\"66ccff\"},{\"name\":\"var_1_0\",\"color\":\"ff6699\"},{\"name\":\"var_1_1\",\"color\":\"ff6699\"},{\"name\":\"var_1_2\",\"color\":\"ff6699\"},{\"name\":\"var_1_3\",\"color\":\"ff6699\"},{\"name\":\"var_1_4\",\"color\":\"ff6699\"},{\"name\":\"var_1_4\",\"color\":\"ff6699\"}]', '[{\"name\": \"var_1\",\"config\": [{\"name\":\"var_1_0\",\"selected\": true,\"title\": \"Diamand №1\"},{\"name\":\"var_1_1\",\"selected\": false,\"title\": \"Diamand №2\"},{\"name\":\"var_1_2\",\"selected\": false,\"title\": \"Diamand №3\"},{\"name\":\"var_1_3\",\"selected\": false,\"title\": \"Diamand №4\"}]}]', '/15/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `first_name`, `last_name`, `email`, `message`) VALUES
(1, 'sdfdsdf@df.dsf', 'dsfsdfdsf', 'dfdsfsdf', 'sdfsdfdsfdsfds'),
(2, 'sdfdsdf@df.dsf', 'dsfsdfdsf', 'dfdsfsdf', 'sdfsdfdsfdsfds');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `gender` int(11) NOT NULL,
  `categorie` int(11) NOT NULL,
  `module_path` longtext NOT NULL,
  `mesh_material` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`mesh_material`)),
  `cover_path` longtext NOT NULL,
  `description` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `gender`, `categorie`, `module_path`, `mesh_material`, `cover_path`, `description`) VALUES
(1, 'Product 1', '19.99', 1, 1, 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"6290bf\"},{\"name\":\"Torus\",\"color\":\"6290bf\"},{\"name\":\"dobj000\",\"color\":\"ff0000\"}]', '/1/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(2, 'Product 2', '29.99', 2, 1, 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"ff6699\"},{\"name\":\"Torus\",\"color\":\"ff6699\"},{\"name\":\"dobj000\",\"color\":\"99cc00\"}]', '/2/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(3, 'Product 3', '39.99', 3, 2, 'ring_shader_pos1.gltf', '[{\"name\":\"Ring\",\"color\":\"9966ff\"}]', '/3/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(4, 'Product 4', '49.99', 1, 1, 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"99ccff\"},{\"name\":\"Torus\",\"color\":\"99ccff\"},{\"name\":\"dobj000\",\"color\":\"6699cc\"}]', '/4/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(5, 'Product 5', '59.99', 2, 6, 'ring_shader_pos1.gltf', '[{\"name\":\"Ring\",\"color\":\"ff6699\"}]', '/5/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(6, 'Product 6', '69.99', 3, 3, 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"99ccff\"},{\"name\":\"Torus\",\"color\":\"99ccff\"},{\"name\":\"dobj000\",\"color\":\"ff6699\"}]', '/6/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(7, 'Product 7', '79.99', 1, 1, 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"ff6666\"},{\"name\":\"Torus\",\"color\":\"ff6666\"},{\"name\":\"dobj000\",\"color\":\"9966ff\"}]', '/7/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(8, 'Product 8', '89.99', 2, 6, 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"ffcc66\"},{\"name\":\"Torus\",\"color\":\"ffcc66\"},{\"name\":\"dobj000\",\"color\":\"33cc33\"}]', '/8/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(9, 'Product 9', '99.99', 3, 4, 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"66ccff\"},{\"name\":\"Torus\",\"color\":\"66ccff\"},{\"name\":\"dobj000\",\"color\":\"ff3333\"}]', '/9/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(10, 'Product 10', '109.99', 1, 1, 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"ff9999\"},{\"name\":\"Torus\",\"color\":\"ff9999\"},{\"name\":\"dobj000\",\"color\":\"cc00cc\"}]', '/10/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(11, 'Product 11', '119.99', 2, 6, 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"ffcc99\"},{\"name\":\"Torus\",\"color\":\"ffcc99\"},{\"name\":\"dobj000\",\"color\":\"ffff66\"}]', '/11/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(12, 'Product 12', '129.99', 3, 5, 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"ff6699\"},{\"name\":\"Torus\",\"color\":\"ff6699\"},{\"name\":\"dobj000\",\"color\":\"66ff99\"}]', '/12/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(13, 'Product 13', '139.99', 1, 1, 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"ff6666\"},{\"name\":\"Torus\",\"color\":\"ff6666\"},{\"name\":\"dobj000\",\"color\":\"66ccff\"}]', '/13/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(14, 'Product 14', '149.99', 2, 1, 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"ffcc66\"},{\"name\":\"Torus\",\"color\":\"ffcc66\"},{\"name\":\"dobj000\",\"color\":\"33ccff\"}]', '/14/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.'),
(15, 'Product 15', '159.99', 3, 6, 'ring_shader_pos1.gltf', '[{\"name\":\"Sphere\",\"color\":\"66ccff\"},{\"name\":\"Torus\",\"color\":\"66ccff\"},{\"name\":\"dobj000\",\"color\":\"ff3399\"}]', '/15/cover.jpeg', 'Дамски часовник със швейцарски механизъм GMT. Каса 34 мм изработена от стомана 316L с розово златно PVD покритие. Циферблатът е украсен с два преплетени лебеда, а корпусът е покрит с 52 кристала Swarovski. Каишка от естествена кожа. Сапфирено стъкло. Водоустойчивост 3 ATM. Гаранция 2 години. \r\nКолекцията Swan Lovers е вдъхновена от красивото Лебедово езеро в ботаническата градина на Сингапур. Лебедите грациозно преплитат удължените си шии, образувайки сърце, често изобразявано като универсален символ на любов и чистота. Те олицетворяват свързания ум, тяло и душа на две сродни души в красиво и лоялно партньорство.Часовникът разполага с функция за фаза на слънцето и луната, със светеща нощна фаза, която представлява звездното нощно небе.');

-- --------------------------------------------------------

--
-- Table structure for table `store_info`
--

CREATE TABLE `store_info` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `text` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `store_info`
--

INSERT INTO `store_info` (`id`, `title`, `link`, `text`) VALUES
(1, 'За нас', '/about_us', 'Магазин за бижута MG предлага широка гама от висококачествени продукти, включително разнообразие от обеци, гривни, колиета и пръстени. Нашата мисия е да предоставим нашите клиенти с не само красиви и елегантни бижута, но и уникални и модерни дизайни, които изразяват индивидуалността и стила им. Ние сме ангажирани да осигурим нашите клиенти с най-доброто обслужване и продукти от най-високо качество. Стремим се да превъзмогнем очакванията на клиентите си и да им предоставим най-доброто изживяване при пазаруване в нашия магазин.'),
(2, 'Връщане на стоки', '/returns', 'Ние ценим нашите клиенти и искрено се грижим за тяхното удовлетворение. Затова приемаме върнати стоки в рамките на 30 дни от закупуването за обмен или възстановяване на парите. Ние разбираме, че понякога покупките могат да не отговарят на очакванията или да не са подходящи. Затова предлагаме гъвкави възможности за връщане на стоките, които дават на клиентите ни увереност при покупка.'),
(3, 'Доставка и доставка', '/shipping', 'При нас клиентите получават бърза и надеждна доставка на своите поръчки. Предлагаме безплатна доставка за всички поръчки над 100 лв. Ние ценим времето на нашите клиенти и се стремим да осигурим, че техните поръчки ще бъдат доставени в най-кратък срок. Доставката се извършва в рамките на 2-3 работни дни в удобно за клиента време и място.'),
(4, 'Методи на плащане', '/payment', 'При нас клиентите имат възможност да избират от различни методи на плащане, които ги удобстват най-много. Приемаме плащания с кредитни карти, PayPal и банков превод. Ние гарантираме, че всички транзакции са напълно защитени и сигурни. Нашата цел е да осигурим на клиентите си безопасно и удобно изживяване при пазаруване в нашия магазин.');

-- --------------------------------------------------------

--
-- Table structure for table `store_location`
--

CREATE TABLE `store_location` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `location_text` varchar(255) NOT NULL,
  `location_map` varchar(255) NOT NULL,
  `image_path` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `store_location`
--

INSERT INTO `store_location` (`id`, `name`, `location_text`, `location_map`, `image_path`) VALUES
(1, 'John Doe', 'New York City', 'https://example.com/map1', '/assets/store_location/1.jpeg'),
(2, 'Alice Smith', 'Los Angeles', 'https://example.com/map2', '/assets/store_location/2.jpeg'),
(3, 'Bob Johnson', 'Chicago', 'https://example.com/map3', '/assets/store_location/3.jpeg'),
(4, 'Emma Brown', 'Houston', 'https://example.com/map4', '/assets/store_location/4.jpeg'),
(5, 'Michael Lee', 'San Francisco', 'https://example.com/map5', '/assets/store_location/5.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `subscription`
--

CREATE TABLE `subscription` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subscription`
--

INSERT INTO `subscription` (`id`, `email`) VALUES
(1, 'test@dsf.dsf'),
(2, 'test1@dsf.dsf'),
(3, 'asasdads@df.dsf'),
(4, 'asasdads@df.dsf'),
(5, 'asasdads@df.dsf'),
(6, 'asasdads@df.dsf'),
(7, 'asasdads@df.dsf'),
(8, 'asasdads121212@df.dsf'),
(9, 'ddsfsdf@dsf.dsf');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `phone`, `active`, `admin`) VALUES
(1, 'admin', 'store', 'admin@store.com', 'adminpass', '08888888', 1, 1),
(2, 'staff', 'store', 'staff@store.com', 'XXXXXXXXX', '08888888', 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `client_order`
--
ALTER TABLE `client_order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`client_id`);

--
-- Indexes for table `custom_products`
--
ALTER TABLE `custom_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `capacity` (`categorie`);

--
-- Indexes for table `store_info`
--
ALTER TABLE `store_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `store_location`
--
ALTER TABLE `store_location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscription`
--
ALTER TABLE `subscription`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `client_order`
--
ALTER TABLE `client_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `custom_products`
--
ALTER TABLE `custom_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `store_info`
--
ALTER TABLE `store_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `store_location`
--
ALTER TABLE `store_location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `subscription`
--
ALTER TABLE `subscription`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categorie`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
