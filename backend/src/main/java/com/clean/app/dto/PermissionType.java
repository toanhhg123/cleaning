package com.clean.app.dto;

import com.fasterxml.jackson.annotation.JsonValue;

public enum PermissionType {
    CATALOGUE(0),
    MENU(1),
    BUTTON(2);

    private final int value;

    PermissionType(int value) {
        this.value = value;
    }

    @JsonValue
    public int getValue() {
        return value;
    }
}
