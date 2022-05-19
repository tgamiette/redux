<?php

namespace App\Entity;

use DateTime;

class Film extends BaseEntity {
  public int $id;
  public string $title;
  public string $createdAt;
  public string $content;
  public string $author;
  public string $image;
  public string $actors;
  
  public function __construct($arr) {
    parent::__construct($arr);
  }
  
  /**
   * @return string
   */
  public function getCreatedAt(): string {
    return $this->createdAt;
  }
  
  /**
   * @param string $createdAt
   */
  public function setCreatedAt(string $createdAt): void {
    $this->createdAt = $createdAt;
  }
  
  /**
   * @param DateTime $createdAt
   */
  public function setCreatedAtObject(DateTime $createdAt): void {
    $this->createdAt = $createdAt;
  }
  
  /**
   * @return string
   */
  public function getTitle(): string {
    return $this->title;
  }
  
  /**
   * @param string $title
   */
  public function setTitle(string $title): void {
    $this->title = $title;
  }
  
  /**
   * @return string
   */
  public function getContent(): string {
    return $this->content;
  }
  
  /**
   * @param string $content
   */
  public function setContent(string $content): void {
    $this->content = $content;
  }
  
  /**
   * @return string
   */
  public function getAuthor(): string {
    return $this->author;
  }
  
  /**
   * @param string $author
   */
  public function setAuthor(string $author): void {
    $this->author = $author;
  }
  
  public function getActors(): string {
    return $this->actors;
  }
  
  
  /**
   * @param string $author
   */
  public function setActors(string $actor): void {
    $this->actors = $actor;
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
  public function getImage(): string {
    return $this->image;
  }
  
  /**
   * @param string $image
   */
  public function setImage(string $image): void {
    $this->image = $image;
  }
  
}