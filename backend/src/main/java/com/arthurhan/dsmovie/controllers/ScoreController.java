package com.arthurhan.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arthurhan.dsmovie.dto.MovieDTO;
import com.arthurhan.dsmovie.dto.ScoreDTO;
import com.arthurhan.dsmovie.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController
{	
	@Autowired
	private ScoreService service;
	
	@PutMapping
	public ResponseEntity<MovieDTO> saveScore(@RequestBody ScoreDTO dto)
	{
		MovieDTO movieDTO = service.saveScore(dto);
		
		return ResponseEntity.ok().body(movieDTO);
	}
}
