<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class SimuladorController extends CI_Controller {

	function __construction(){
		parent::__construct();
	}
	public function index()
	{
		$this->load->view('partial/header');
		$this->load->view('simulador/simulador');
		$this->load->view('partial/footer');
	}
}
