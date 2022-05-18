<?php

namespace App\Manager;

use App\Entity\User;

class UserManager extends BaseManager {
  
  public function add(User $user) {
    $sql = "INSERT INTO `user` (`name`,`password`, `lastname`, `email`) VALUES (:name, :password , :lastname , :phone);";
    $request = $this->db->prepare($sql);
    
    $request->bindValue(':lastname', $user->getName());
    $request->bindValue(':password', $user->getPassword());
    $request->bindValue(':name', $user->getName());
    $request->bindValue(':email', $user->getEmail());
    
    return $request->execute();
  }
  
  public function deleteById($id) {
    $sql = "DELETE FROM `user` WHERE `id`=:id";
    $requete = $this->db->prepare($sql);
    return $requete->execute(array(":id" => $id));
  }
  
  public function set(User $user): bool {
    $sql = "UPDATE `user`
                        SET `name`=`:name`, `lastname`=`:lastname` 
                        WHERE `id`=:id";
    $request = $this->db->prepare($sql);
    
    $request->bindValue(':name', $user->getName(), PDO::PARAM_STR);
    $request->bindValue(':lastname', $user->getLastname(), PDO::PARAM_STR);
    
    return $request->execute();
  }
  
  /**
   * @return User[]
   */
  public function findAll(): array {
    $sql = "SELECT * FROM `user`";
    $query = $this->db->query($sql);
    $result = $query->fetchAll(\PDO::FETCH_ASSOC);
    
    foreach ($result as $index=>$user) {
      $result[$index] = new User($user);
    }
    
    return $result;
  }
  
  public function checkLogin(array $array) {
    $sql = "SELECT  * FROM user  WHERE `name`=:name AND `password` = :password";
    
    $request = $this->db->prepare($sql);
    $request->bindValue(':name', $array['name']);
    $request->bindValue(':password', $array['password']);
    
    $request->execute();

    return  new User($request->fetch(\PDO::FETCH_ASSOC));
  }
  
  public function findById($idUser) {
    $sql = "SELECT  * FROM user  WHERE `id`= :id";
    $request = $this->db->prepare($sql);
    
    $request->bindValue(':id', $idUser, \PDO::PARAM_INT);
    $request->execute();
    return $request->fetch(\PDO::FETCH_ASSOC);
  }
  
}