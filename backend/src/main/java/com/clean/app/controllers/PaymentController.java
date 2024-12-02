package com.clean.app.controllers;

import java.io.IOException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clean.app.dto.PaymentRequest;
import com.clean.app.services.PaymentService;
import com.clean.app.services.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping(path = "/api/payment")
@AllArgsConstructor
@Slf4j
public class PaymentController {
    private final PaymentService paymentService;
    private final UserService userService;

    /**
     * This method creates an order and redirects the user to the VNPAY payment
     * page.
     * 
     * @param paymentRequest The payment request object.
     * @param request        The HttpServletRequest object.
     * @return The redirection URL.
     * @throws JsonProcessingException If there is an error parsing the JSON
     *                                 string.
     */
    @PostMapping(path = "/vn-pay")
    public String createOrder(
            @RequestBody() PaymentRequest paymentRequest,
            HttpServletRequest request)
            throws JsonProcessingException {
        String baseUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort();

        // Get the user ID from the request
        paymentRequest.setUserId(userService.getCurrentUser().getId().toString());

        // Convert the payment request to a JSON string
        ObjectMapper objectMapper = new ObjectMapper();
        String body = objectMapper.writeValueAsString(paymentRequest);

        // Create the order and get the redirection URL
        return paymentService.createOrder(paymentRequest.getAmount(), body, baseUrl);
    }

    /**
     * This method handles the payment return URL from VNPAY.
     * 
     * @param request The HttpServletRequest object.
     * @return The result of the payment.
     * @throws IOException
     */
    @GetMapping(path = "/vnpay-payment")
    public void returnOrder(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // Convert the payment request parameter to a JSON string
        ObjectMapper objectMapper = new ObjectMapper();

        // Parse the JSON string to a PaymentRequest object
        PaymentRequest paymentRequest = objectMapper.readValue(
                request.getParameter("vnp_OrderInfo"),
                PaymentRequest.class);
        log.info("payment request: {}", paymentRequest.toString());

        // Process the payment return
        int result = paymentService.orderReturn(request, paymentRequest);

        // Process the payment return
        String clientUrl = result == 1
                ? "http://localhost:5173/payment-return?type=success"
                : "http://localhost:5173/payment-return?type=fail";

        response.sendRedirect(clientUrl);
    }
}
