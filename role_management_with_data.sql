-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 16, 2025 at 01:17 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rolemanagement`
--

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_roles_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `user_id`, `role`) VALUES
(1, 1, 'Author'),
(2, 1, 'Editor'),
(3, 1, 'Subscriber'),
(4, 1, 'Administrator'),
(5, 2, 'Author'),
(6, 2, 'Editor'),
(7, 2, 'Subscriber'),
(8, 2, 'Administrator'),
(9, 3, 'Author'),
(10, 3, 'Editor'),
(11, 3, 'Subscriber'),
(12, 3, 'Administrator'),
(13, 4, 'Author'),
(14, 4, 'Editor'),
(15, 4, 'Subscriber'),
(16, 4, 'Administrator'),
(17, 5, 'Author'),
(18, 5, 'Editor'),
(19, 5, 'Subscriber'),
(20, 5, 'Administrator'),
(21, 6, 'Author'),
(22, 6, 'Editor'),
(23, 6, 'Subscriber'),
(24, 7, 'Administrator'),
(25, 7, 'Author'),
(26, 7, 'Editor'),
(27, 8, 'Subscriber'),
(28, 8, 'Administrator'),
(29, 8, 'Author'),
(30, 9, 'Editor'),
(31, 9, 'Subscriber'),
(32, 9, 'Administrator'),
(33, 10, 'Author'),
(34, 10, 'Editor'),
(35, 10, 'Subscriber'),
(36, 11, 'Author'),
(37, 11, 'Editor'),
(38, 11, 'Subscriber'),
(39, 11, 'Administrator'),
(40, 11, 'Author'),
(41, 12, 'Editor'),
(42, 12, 'Subscriber'),
(43, 12, 'Administrator'),
(44, 12, 'Author'),
(45, 12, 'Editor'),
(46, 13, 'Subscriber'),
(47, 13, 'Administrator'),
(48, 13, 'Author'),
(49, 13, 'Editor'),
(50, 13, 'Subscriber'),
(51, 14, 'Administrator'),
(52, 14, 'Author'),
(53, 14, 'Editor'),
(54, 14, 'Subscriber'),
(55, 14, 'Administrator'),
(56, 15, 'Author'),
(57, 15, 'Editor'),
(58, 15, 'Subscriber'),
(59, 15, 'Administrator'),
(60, 15, 'Author'),
(61, 16, 'Author'),
(62, 17, 'Editor'),
(63, 18, 'Subscriber'),
(64, 19, 'Administrator'),
(65, 20, 'Author'),
(66, 21, 'Editor'),
(67, 21, 'Subscriber'),
(68, 22, 'Subscriber');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `created_at`, `updated_at`) VALUES
(1, 'Prof. Gladys Rodriguez', 'ifahey@example.net', '2025-08-16 02:07:27', '2025-08-16 02:07:27'),
(2, 'Elsie Johnston', 'roel77@example.org', '2025-08-16 02:07:27', '2025-08-16 02:07:27'),
(3, 'Dr. Justina Von MD', 'deckow.easton@example.com', '2025-08-16 02:07:27', '2025-08-16 02:07:27'),
(4, 'Ms. Alexandrine Hammes', 'maurice55@example.org', '2025-08-16 02:07:27', '2025-08-16 02:07:27'),
(5, 'Dr. Dion Quigley', 'meta.ratke@example.org', '2025-08-16 02:07:27', '2025-08-16 02:07:27'),
(6, 'Royal Fritsch', 'mledner@example.com', '2025-08-16 02:07:27', '2025-08-16 02:07:27'),
(7, 'Raphaelle Stiedemann PhD', 'prosacco.lexus@example.net', '2025-08-16 02:07:27', '2025-08-16 02:07:27'),
(8, 'Daphnee O\'Conner', 'devin.west@example.net', '2025-08-16 02:07:27', '2025-08-16 02:07:27'),
(9, 'Liza Grimes', 'darrick.crona@example.org', '2025-08-16 02:07:28', '2025-08-16 02:07:28'),
(10, 'Andrew Lind', 'shanny65@example.org', '2025-08-16 02:07:28', '2025-08-16 02:07:28'),
(11, 'Trinity Bahringer', 'leffler.vita@example.com', '2025-08-16 02:07:28', '2025-08-16 02:07:28'),
(12, 'Jean Beatty', 'teagan.bauch@example.net', '2025-08-16 02:07:28', '2025-08-16 02:07:28'),
(13, 'Prof. Issac Leffler DDS', 'justus.connelly@example.com', '2025-08-16 02:07:28', '2025-08-16 02:07:28'),
(14, 'Xavier Koss', 'kris.herzog@example.com', '2025-08-16 02:07:28', '2025-08-16 02:07:28'),
(15, 'Prof. Brice Ernser MD', 'jett48@example.org', '2025-08-16 02:07:28', '2025-08-16 02:07:28'),
(16, 'Felicia Bradtke', 'antwon.johns@example.org', '2025-08-16 02:07:28', '2025-08-16 02:07:28'),
(17, 'Keyon Moen', 'deja.vandervort@example.org', '2025-08-16 02:07:28', '2025-08-16 02:07:28'),
(18, 'Kyle Johnson', 'carolyn62@example.net', '2025-08-16 02:07:28', '2025-08-16 02:07:28'),
(19, 'Doug Kiehn', 'hschultz@example.org', '2025-08-16 02:07:28', '2025-08-16 02:07:28'),
(20, 'Garrison Reynolds Jr.', 'kutch.maud@example.net', '2025-08-16 02:07:28', '2025-08-16 02:07:28'),
(21, 'Nice', 'pereznorvinkyle@gmail.com', '2025-08-16 02:56:55', '2025-08-16 02:56:55'),
(22, 'dasd', 'hello@gmail.com', '2025-08-16 02:58:43', '2025-08-16 02:58:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
