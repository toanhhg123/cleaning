package com.clean.app.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.clean.app.entity.Feedback;
import com.clean.app.repository.FeedBackRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class FeedbackService {
    private final FeedBackRepository feedBackRepository;
    private final UserService userService;

    public List<Feedback> getAllFeedback() {
        return feedBackRepository.findAll();
    }

    public Feedback createFeedback(Feedback feedback) {
        Long userId = userService.getCurrentUser().getId();
        feedback.setUserId(userId);
        return feedBackRepository.save(feedback);
    }

    public void deleteFeedback(Long id) {
        feedBackRepository.deleteById(id);
    }
}
