package com.clean.app.services;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.FileAlreadyExistsException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.clean.app.exceptions.ApiError;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class UploadService {
    private final Path root = Paths.get("uploads");

    public void init() {
        try {
            Files.createDirectories(root);
        } catch (IOException e) {
            throw new IllegalArgumentException("Could not initialize folder for upload!");
        }
    }

    public void save(MultipartFile file, String fileName) {
        try {
            Files.copy(file.getInputStream(), this.root.resolve(fileName));
        } catch (FileAlreadyExistsException e) {
            throw new ApiError("A file of that name already exists.");
        } catch (Exception e) {

            throw new ApiError(e.getMessage());
        }
    }

    public String getFileExtension(String filename) {
        if (filename != null && filename.contains(".")) {
            return filename.substring(filename.lastIndexOf("."));
        }
        return ""; // Default to no extension if not found
    }

    public Resource load(String filename) {
        try {
            Path file = root.resolve(filename);
            UrlResource resource = new UrlResource(file.toUri());

            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new ApiError("Could not read the file!");
            }
        } catch (MalformedURLException e) {
            throw new ApiError("Error: " + e.getMessage());
        }
    }

}
