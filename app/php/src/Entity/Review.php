<?php

namespace App\Entity;

use DateTime;

class Review extends BaseEntity {
  
  /**
   * @param array $_POST
   */
  
  private int $id;
  private string $review;
  private DateTime $createdAt;
  private Film $film;
  
  /**
   * @return Film
   */
  public function getFilm(): Film {
    return $this->film;
  }
  
  /**
   * @param Film $film
   */
  public function setFilm(Film $film): void {
    $this->film = $film;
  }
  private User $author;
  
  /**
   * @return User
   */
  public function getAuthor(): User {
    return $this->author;
  }
  
  /**
   * @param User $author
   */
  public function setAuthor(User $author): void {
    $this->author = $author;
  }
  
  /**
   * @return int
   */
  public function getId(): int {
    return $this->id;
  }
  
  /**
   * @param int $id
   */
  public function setId(int $id): void {
    $this->id = $id;
  }
  
  /**
   * @return string
   */
  public function getReview(): string {
    return $this->review;
  }
  
  /**
   * @param string $review
   */
  public function setReview(string $review): void {
    $this->review = $review;
  }
  
  /**
   * @return DateTime
   */
  public function getCreatedAt(): DateTime {
    return $this->createdAt;
  }
  
  /**
   * @param DateTime $createdAt
   */
  public function setCreatedAt(DateTime $createdAt): void {
    $this->createdAt = $createdAt;
  }
  
 
  
  /**
   * @return int
   */
  public function getNote(): int {
    return $this->note;
  }
  
  /**
   * @param int $note
   */
  public function setNote(int $note): void {
    $this->note = $note;
  }
  private int $note;
  
  
}