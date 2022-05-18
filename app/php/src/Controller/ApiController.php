<?php

namespace App\Controller;


use App\Entity\Film;
use App\Entity\Review;
use App\Entity\User;
use App\Manager\FilmManager;
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
		$postManager = new FilmManager();
		if ($id == 0) {
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

//Inscription
	public function postUser($params) {
		if (isset($_POST['name']) && isset($_POST['password'])) {
			$user = new User($_POST);
			$user->setJwt(base_convert(hash('sha256', time() . mt_rand()), 16, 36));
			$userManager = new UserManager();
			$result = $userManager->add($user);
			
			if ($result) {
				$this->renderJSON(["message" => 'ajoute réussi', 'status' => 200]);
			}
			else {
				throw new \HttpException("Problème lors de l'ajout de la requête");
				$this->renderJSON(["message" => "Problème lors de l'ajout", "status" => 400]);
			}
		}
		else {
			$this->renderJSON(["message" => 'il manque des popriété', "status" => 400]);
		}
	}

//	connexion (retour du token)
	public function postLogin($params) {
		$userManager = new UserManager();
		$user = $userManager->checkLogin($_POST);
		if ($user) {
			$user = new User($user);
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
				'status' => 403,
				'message' => "connexion echoué"
			], 403);
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
			$user = $this->checkAccess($token);
			$postManager = new FilmManager();
			$post = new Film($_POST);
			$post->setAuthorId($user->getId());
			
			if ($postManager->addPost($post)) {
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
	public function postReview ($params) {
		if (isset($_COOKIE['token']) || $params) {
			$token = $_COOKIE['token'];
			$user = $this->checkAccess($token);
			$filmManager = new FilmManager();
			$filmManager = new Rev();
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
}