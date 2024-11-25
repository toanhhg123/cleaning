package com.clean.app.auth;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

    private final HandlerExceptionResolver resolver;

    JwtAuthenticationEntryPoint(@Qualifier("handlerExceptionResolver") HandlerExceptionResolver resolver) {
        this.resolver = resolver;
    }

    /**
     * Called when an authentication exception occurs and the request was not
     * successfully authenticated. The exception may be handled by sending a
     * 401 Unauthorized response, or by redirecting to a login page.
     *
     * @param request       the request which caused the exception
     * @param response      the response to which the authentication failure
     *                      should be sent
     * @param authException the exception which was thrown
     * @throws IOException      if the exception cannot be handled
     *                          by sending a response
     * @throws ServletException if the exception cannot be handled
     *                          by sending a response
     */
    @Override
    public void commence(HttpServletRequest request,
            HttpServletResponse response,
            AuthenticationException authException) throws IOException, ServletException {

        resolver.resolveException(request, response, null, authException);
    }
}