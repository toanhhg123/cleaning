package com.clean.app.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clean.app.entity.Feedback;
import com.clean.app.services.FeedbackService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController()
@RequestMapping("/api/feedback")
public class FeedbackController {
    private final FeedbackService feedbackService;

    @GetMapping
    public List<Feedback> getMethodName() {
        return feedbackService.getAllFeedback();
    }

    @PostMapping
    public Feedback createFeedback(@RequestBody Feedback feedback) {
        return feedbackService.createFeedback(feedback);
    }

    @DeleteMapping("/{id}")
    public Long deleteFeedback(@PathVariable Long id) {
        feedbackService.deleteFeedback(id);
        return id;
    }
}
