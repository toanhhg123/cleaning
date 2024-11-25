package com.clean.app.dto;

import com.fasterxml.jackson.annotation.JsonValue;

public enum BasicStatus {
    ACTIVE(0),
    INACTIVE(1);

    private final int value;

    BasicStatus(int value) {
        this.value = value;
    }

    @JsonValue
    public int getValue() {
        return value;
    }
}