<?php

namespace App\Manager;

use App\Entity\Review;

class ReviewManager extends BaseManager {
  /**
   * @return Review[]
   */
  public function getAllReview(): array {
    return [];
  }
  
  /**
   * @param int $id
   * @return Review|bool
   */
  public function getReviewById(int $id) {
    $sql = "SELECT  * FROM `review`  WHERE (ìd = :id)";
    $request = $this->db->prepare($sql);
    
    $request->bindValue(':id', $id);
    $response = $request->execute();
    
    return $response ? new Review($response) : false;
  }
  
  /**
   * @param Review $review
   * @return boolean|bool
   */
  public function createReview(Review $review) {
  
  }
  
  /**
   * @return bool
   */
  public function deleteReviewById(): bool {
    
    return true;
  }
  
//  /**
//   * @param Review $review
//   * @return boolean|bool
//   */
//  public function updateReview(Review $review,) {
//    $sql = "INSERT INTO `comment` (`title`, `content`,`author`,`actors`,`from`,`createdAt`) VALUES (:title, :content, :author, :actors, :from, :createdAt)";
//  }
//
  public function addReview(Review $review) {
    $sql = "INSERT INTO `comment` (`title`, `content`,`author`,`actors`,`from`,`createdAt`) VALUES (:title, :content, :author, :actors, :from, :createdAt)";
    
    $request = $this->db->prepare($sql);
    $request->bindValue(':title', $review->getTitle());
    $request->bindValue(':content', $review->getContent());
    $request->bindValue(':createdAt', (new \DateTime())->format('d-m-Y'));
    $request->bindValue(':author', $review->getAuthor(),);
    $request->bindValue(':actors', $review->getActors(),);
    
    return $request->execute();
  }
  
  public function findAll(): array {
    $query = $this->db->query("SELECT comment.title, comment.content, comment.date , user.name as `author` FROM comment LEFT JOIN user on comment.author_id =user.id");;
    $comments = $query->fetchAll(\PDO::FETCH_ASSOC);
    return $comments;
  }
  
  public function findBytoken(): array {
    $query = $this->db->query("SELECT comment.title, comment.content, comment.date , user.name as `author` FROM comment LEFT JOIN user on comment.author_id =user.id");;
    $comments = $query->fetchAll(\PDO::FETCH_ASSOC);
    return $comments;
  }
  
}