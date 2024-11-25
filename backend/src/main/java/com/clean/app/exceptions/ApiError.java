package com.clean.app.exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ApiError extends RuntimeException {
    private final String message;

    public ApiError(String message) {
        super(message);
        this.message = message;
    }

}
