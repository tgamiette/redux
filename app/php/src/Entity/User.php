<?php

namespace App\Entity;


class User extends BaseEntity {
  protected int $id;
  protected string $email;
  protected string $name;
  protected string $lastname;
  protected string $password;
  
  /**
   * @return string
   */
  public function getEmail(): string {
    return $this->email;
  }
  
  /**
   * @param string $email
   */
  public function setEmail(string $email): void {
    $this->email = $email;
  }
  
  /**
   * @return string
   */
  public function getLastname(): string {
    return $this->lastname;
  }
  
  /**
   * @param string $lastname
   */
  public function setLastname(string $lastname): void {
    $this->lastname = $lastname;
  }
  
  public function getId(): int {
    return $this->id;
  }
  
  public function setId($id): void {
    $this->id = $id;
  }
  
  public function getName() {
    return $this->name;
  }
  
  public function setName(string $val) {
    $this->name = $val;
  }
  
  /**
   * @return string
   */
  public function getPassword(): string {
    return $this->password;
  }
  
  /**
   * @param string $password
   */
  public function setPassword(string $password): void {
    $this->password = $password;
  }
}
