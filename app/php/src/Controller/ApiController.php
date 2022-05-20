<?php

namespace App\Controller;


use App\Entity\Film;
use App\Entity\Review;
use App\Entity\User;
use App\Manager\FilmManager;
use App\Manager\ReviewManager;
use App\Manager\UserManager;
use App\Service\jwtHelper;
use Firebase\JWT\JWK;
use Firebase\JWT\JWT;

class ApiController extends BaseController {
//Récuperation d'un post
  public function getPost($params) {
    $id = (int)$params['id'];
    $postManager = new FilmManager();
    if ($id === 0) {
      $posts = $postManager->findAll();
    }
    else {
      $posts = $postManager->findById($id);
    }
    
    if ($posts) {
      $this->renderJSON(['value' => $posts, 'status' => 200, 'message' => "Récupération Ok"]);
    }
    else {
      $this->renderJSON(['status' => 200, 'message' => "Récupération KOO"]);
    }
  }
  
  public function getUser($params) {
    $this->checkAccess();
    $id = (int)$params['id'];
    $userManager = new UserManager();
    if ($id == 0) {
      $films = $userManager->findAll();
    }
    else {
      $films = $userManager->findById($id);
    }
    $t = (array)$films;
    if (count($films) > 0) {
      $this->renderJSON(['value' => $t, 'status' => 200, 'message' => "Récupération Ok"]);
    }
    elseif (count($films) == 0) {
      $this->renderJSON(['status' => 200, 'message' => "il n'y a rien ??"]);
    }
    else {
      $this->renderJSON(['status' => 200, 'message' => "Récupération KOO"]);
      
    }
  }

//Inscription
  public function postUser($params) {
    if (isset($_POST['username']) && isset($_POST['password'])) {
      
      $user = new User($_POST);
      $userManager = new UserManager();
      $result = $userManager->add($user);
      
      if ($result) {
        $this->renderJSON(["message" => 'ajoute réussi', 'status' => 200]);
      }
      else {
        throw new \HttpException("Problème lors de l'ajout de la requête");
//        $this->renderJSON(["message" => "Problème lors de l'ajout", "status" => 400],400);
      }
    }
    else {
      $this->renderJSON(["message" => 'il manque des popriété', "status" => 400], 400);
    }
  }

//	connexion (retour du token)
  public function postLogin($params) {
    $userManager = new UserManager();
    $user = $userManager->checkLogin($_POST);
    if ($user instanceof User) {
      $token = (new jwtHelper())->generate($user);
      $_COOKIE['token'] = $token;
      $this->renderJSON([
        'status' => 200,
        'token' => $token,
        'message' => "connexion ok "
      ]);
    }
    else {
      $this->renderJSON([
        'status' => 400,
        'message' => "connexion echoué mot de passe ou username "
      ], 400);
    }
  }

//	//	raffraichissement du token  (retour du token)
  public function postRefresh($params) {
    $token = $_POST['token'];
    $jwtHelper = new jwtHelper();
    $payload = $jwtHelper->payloads($token);
    $payload->exp = $payload->exp + jwtHelper::CONTS_TIME_REFRESH;
    $jwt = $jwtHelper->encode((array)$payload);
    $_COOKIE['token'] = $jwt;
    $this->renderJSON($jwt);
  }

//ajouter un film un post
  public function postFilm($params) {
    if (isset($_COOKIE['token'])) {
      $token = $_COOKIE['token'];
      $user = $this->checkAccess();
      $postManager = new FilmManager();
      $film = new Film($_POST);
//      $film->setAuthorId($user->getId());
      
      if ($postManager->addFilm($film)) {
        header("connexion Ok", true, 200);
        $this->renderJSON([
          'status' => 200,
          'message' => "ajout ok "
        ]);
      }
      else {
        header("connexion ko ", true, 400);
        $this->renderJSON([
          'status' => 402,
          'message' => "Ajout Ko"
        ], 403);
      }
    }
  }
  
  //ajouter une review
  public function postReview($params) {
    if (isset($_COOKIE['token']) || $params) {
      $token = $_COOKIE['token'];
      $user = $this->checkAccess();
      $filmManager = new FilmManager();
      $film = $filmManager->getFilmById($params['id']);
      $review = new Review($_POST);
      $review->setAuthor($user);
      $review->setFilm($film->getId());
      
      if ($filmManager->addFilm($review)) {
        header("connexion Ok", true, 200);
        $this->renderJSON([
          'status' => 200,
          'message' => "ajout ok "
        ]);
      }
      else {
        header("connexion ko ", true, 400);
        $this->renderJSON([
          'status' => 402,
          'message' => "Ajout Ko"
        ], 403);
      }
    }
  }
  
  public function getFilm($params) {
    $id = (int)$params['id'];
    $filmManager = new FilmManager();
    if ($id == 0) {
      $films = $filmManager->findAll();
    }
    else {
      $films = $filmManager->findById($id);
    }
    if (count($films) > 0) {
      $this->renderJSON(['value' => $films, 'status' => 200, 'message' => "Récupération Ok"]);
    }
    elseif (count($films) == 0) {
      $this->renderJSON(['status' => 200, 'message' => "il n'y a rien ??"]);
    }
    else {
      $this->renderJSON(['status' => 200, 'message' => "Récupération KOO"]);
      
    }
  }
  
  public function getReview($params) {
    
    $idFilm = (int)$params['id'];
    $filmManager = new ReviewManager();
    if ($idFilm == 0) {
      $review = $filmManager->findAll();
    }
    else {
      $review = $filmManager->findByFilmId($idFilm);
    }
    if (count($review) > 0) {
      $this->renderJSON(['value' => $review, 'status' => 200, 'message' => "Récupération Ok"]);
    }
    elseif (count($review) == 0) {
      $this->renderJSON(['status' => 200, 'message' => "il n'y a rien ??"]);
    }
    else {
      $this->renderJSON(['status' => 200, 'message' => "Récupération KOO"]);
      
    }
  }
  
}