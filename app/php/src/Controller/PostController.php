<?php

namespace App\Controller;

use App\Framework\Database\PDOFactory;
use App\Manager\FilmManager;

class PostController extends BaseController
{
    /**
     * Show all post
     */
    public function getIndex()
    {
        $postManager=new FilmManager();
        $posts=$postManager->getAllPost();
        $this->render('Home'
    );
    }

}