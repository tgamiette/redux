-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : db
-- Généré le : ven. 20 mai 2022 à trop curieux :)
-- Version du serveur : 10.6.4-MariaDB-1:10.6.4+maria~focal
-- Version de PHP : 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `exo`
--

-- --------------------------------------------------------

--
-- Structure de la table `film`
--

CREATE TABLE `film` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `createdAt` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `actors` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `film`
--

INSERT INTO `film` (`id`, `title`, `createdAt`, `content`, `author`, `image`, `actors`) VALUES
(1, 'batman', '2022_01_01', 'le meilleur fil 2021', 'FRANCIS', 'batman.jpeg', 'on sait pas '),
(2, 'eco', '2022-05-11', 'ecotes', 'teddy', 'affiche_deux.jpg', 'je,fg,fds'),
(5, 'Man of Steel', 'no se', 'Un petit garçon découvre qu\'il possède des pouvoirs surnaturels et qu\'il n\'est pas né sur Terre. Plus tard, il s\'engage dans un périple afin de comprendre d\'où il vient et pourquoi il a été envoyé sur notre planète. ', 'Zack Snyder', 'manofsteel.jpeg', ' Henry Cavill, Amy Adams, Michael Shannon'),
(6, 'DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS', '14/05/2022', 'Voyagez dans l’inconnu avec Doctor Strange, qui avec l’aide d’anciens et de nouveaux alliés mystiques, traverse les réalités hallucinantes et dangereuses du multivers pour affronter un nouvel adversaire mystérieux.', 'Sam Raimi', '', 'Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor');

-- --------------------------------------------------------

--
-- Structure de la table `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `review` varchar(255) NOT NULL,
  `note` int(11) NOT NULL,
  `authorId` int(11) NOT NULL,
  `filmId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `review`
--

INSERT INTO `review` (`id`, `review`, `note`, `authorId`, `filmId`) VALUES
(1, 'dsdsds', 4, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `fistname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `username`, `fistname`, `lastname`, `email`, `password`) VALUES
(1, 'username', NULL, NULL, NULL, 'password'),
(2, 'tt', NULL, NULL, NULL, 'tt'),
(3, 'usernameffffff', NULL, NULL, NULL, 'password'),
(4, 'usernameffffff', NULL, NULL, NULL, 'password'),
(5, 'username', NULL, NULL, NULL, 'password'),
(6, 'username', NULL, NULL, NULL, 'password'),
(7, 'username', NULL, NULL, NULL, 'password'),
(8, 'username', NULL, NULL, NULL, 'password'),
(9, 'username', NULL, NULL, NULL, 'password'),
(10, 'username', NULL, NULL, NULL, 'password'),
(11, 'username', NULL, NULL, NULL, 'password'),
(12, 'username', NULL, NULL, NULL, 'password'),
(13, 'username', NULL, NULL, NULL, 'password');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `film`
--
ALTER TABLE `film`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `film`
--
ALTER TABLE `film`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
