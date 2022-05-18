<?php

namespace App\Manager;

use App\Entity\Film;

class FilmManager extends BaseManager {
  
  /**
   * @param int $id
   * @return Film|bool
   */
  public function getFilmById(int $id) {
    $sql = "SELECT  * FROM `film`  WHERE (ìd = :id)";
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

//  /**
//   * @param Film $film
//   * @return boolean|bool
//   */
//  public function updateFilm(Film $film,) {
//    $sql = "INSERT INTO `comment` (`title`, `content`,`author`,`actors`,`from`,`createdAt`) VALUES (:title, :content, :author, :actors, :from, :createdAt)";
//  }
//
  public function addFilm(Film $film) {
    $sql = "INSERT INTO `comment` (`title`, `content`,`author`,`actors`,`from`,`createdAt`) VALUES (:title, :content, :author, :actors, :from, :createdAt)";
    
    $request = $this->db->prepare($sql);
    $request->bindValue(':title', $film->getTitle());
    $request->bindValue(':content', $film->getContent());
    $request->bindValue(':createdAt', (new \DateTime())->format('d-m-Y'));
    $request->bindValue(':author', $film->getAuthor(),);
    $request->bindValue(':actors', $film->getActors(),);
    
    return $request->execute();
  }
  
  public function findAll(): array {
    $query = $this->db->query("SELECT * FROM film ");
    $films = $query->fetchAll(\PDO::FETCH_ASSOC);
    if (is_array($films)) {
      foreach ($films as $index => $film) {
        $films[$index] = new Film($film);
      }
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