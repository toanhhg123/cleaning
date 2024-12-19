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

    // Hàm để tạo ra đương link dẫn tới trang thanh toán của VNPAY
    @PostMapping(path = "/vn-pay")
    public String createOrder(
            @RequestBody() PaymentRequest paymentRequest,
            HttpServletRequest request)
            throws JsonProcessingException {
        String baseUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort();

        paymentRequest.setUserId(userService.getCurrentUser().getId().toString());

        ObjectMapper objectMapper = new ObjectMapper();
        String body = objectMapper.writeValueAsString(paymentRequest);

        return paymentService.createOrder(paymentRequest.getAmount(), body, baseUrl);
    }

    // Hàm xử lí cộng tiền cho user khi thanh toán thành công
    @GetMapping(path = "/vnpay-payment")
    public void returnOrder(HttpServletRequest request, HttpServletResponse response) throws IOException {

        ObjectMapper objectMapper = new ObjectMapper();

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
