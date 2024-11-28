package com.clean.app.controllers;

import java.util.UUID;

import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.clean.app.services.UploadService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/upload")
@AllArgsConstructor
public class UploadController {
    private final UploadService uploadService;

    @PostMapping("")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        String fileExtension = uploadService.getFileExtension(file.getOriginalFilename());
        String newFileName = UUID.randomUUID().toString() + fileExtension;
        uploadService.save(file, newFileName);
        return ResponseEntity.status(HttpStatus.OK).body(newFileName);
    }

    @GetMapping("/files/{filename:.+}")
    public ResponseEntity<Resource> getFile(@PathVariable String filename) {
        Resource file = uploadService.load(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                .body(file);
    }
}
