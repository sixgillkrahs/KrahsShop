package com.main.userservice.exception;

public enum ErrorCode {
    MISSING_ARGUMENTS(400, "Missing arguments"),
    ITEM_NOT_FOUND(404, "Item not found"),
    ITEM_ALREADY_EXISTS(409, "Item already exists"),
    USER_ALREADY_EXISTS(409, "User already exists"),
    ;

    ErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    private int code;
    private String message;

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}
