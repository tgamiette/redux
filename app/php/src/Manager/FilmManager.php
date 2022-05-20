<?php

namespace App\Manager;

use App\Entity\Film;
use http\Client\Curl\User;

class FilmManager extends BaseManager {
  
  public function findById(int $id) {
    $sql = "SELECT * FROM film LEFT JOIN review ON film.id = review.filmId WHERE `id`= :id";
    $request = $this->db->prepare($sql);
    $request->bindValue(':id', $id);
    $response = $request->execute();
    
    return $response ? new Film($response) : false;
  }
  
  /**
   * @return bool
   */
  public function deleteFilmById(): bool {
    
    return false;
  }


  public function addFilm(Film $film) {
    $sql = "INSERT INTO `film` (`title`, `content`,`author`,`actors`,`createdAt`,`image`) VALUES (:title, :content, :author, :actors, :createdAt, :image)";
    
    $request = $this->db->prepare($sql);
    $request->bindValue(':title', $film->getTitle());
    $request->bindValue(':content', $film->getContent());
    $request->bindValue(':createdAt', $film->getCreatedAt());
    $request->bindValue(':author', $film->getAuthor());
    $request->bindValue(':actors', $film->getActors());
    $request->bindValue(':image', $film->getImage());
    
    return $request->execute();
  }
  
  public function findAll(): array {
    $sql = "SELECT * FROM `film` LEFT JOIN review ON film.id = review.filmId";
  
    $query = $this->db->query($sql);
    $films = $query->fetchAll(\PDO::FETCH_ASSOC);
    if (is_array($films)) {
      return $films;
    }
    return false;
  }
  
  public function findBytoken(): array {
    $query = $this->db->query("SELECT * FROM film ");
    $film = $query->fetchAll(\PDO::FETCH_ASSOC);
    return $film;
  }
  
}