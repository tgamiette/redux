<?php

namespace App\Entity;

use DateTime;

class Film extends BaseEntity {
  private int $id;
  private string $title;
  private DateTime $createdAt;
  private string $content;
  private string $author;
  private string $image;
  private string $actors;
  
  public function __construct($arr) {
    parent::__construct($arr);
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
   * @return string[]
   */
  public function getAuthor(): array {
    return explode(',', $this->author);
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
  public function setActor(string $actor): void {
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