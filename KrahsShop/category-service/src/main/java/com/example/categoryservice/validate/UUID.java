package com.example.categoryservice.validate;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = UUIDValidator.class)
@Target({ElementType.METHOD, ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
public @interface UUID {
    String message() default "Không đúng định dạng UUID";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
