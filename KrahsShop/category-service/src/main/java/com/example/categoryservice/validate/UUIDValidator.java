package com.example.categoryservice.validate;

import io.micrometer.common.util.StringUtils;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.util.regex.Pattern;

public class UUIDValidator implements ConstraintValidator<UUID, java.util.UUID> {
    private static final Pattern UUID_PATTERN = Pattern.compile("^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[1-5][a-fA-F0-9]{3}-[89abAB][a-fA-F0-9]{3}-[a-fA-F0-9]{12}$");

    @Override
    public void initialize(UUID constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(java.util.UUID uuid, ConstraintValidatorContext constraintValidatorContext) {
        if (StringUtils.isBlank(uuid.toString())) {
            return false;
        }
        return UUID_PATTERN.matcher(uuid.toString()).matches();
    }
}
