package com.clean.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.clean.app.entity.Feedback;

@Repository
public interface FeedBackRepository extends JpaRepository<Feedback, Long> {

}
