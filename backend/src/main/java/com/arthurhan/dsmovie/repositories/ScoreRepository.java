package com.arthurhan.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arthurhan.dsmovie.entities.Score;
import com.arthurhan.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>
{

}
