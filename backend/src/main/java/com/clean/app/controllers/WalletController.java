package com.clean.app.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.clean.app.entity.Wallet;
import com.clean.app.services.WalletService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/wallets")
@AllArgsConstructor
public class WalletController {
    private final WalletService walletService;

    @PostMapping
    public Wallet createWallet(@RequestBody Wallet wallet) {
        return walletService.createWallet(wallet);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<Wallet> getWalletByUserId(@PathVariable Long userId) {
        Wallet wallet = walletService.getWalletByUserId(userId);
        return wallet != null ? ResponseEntity.ok(wallet) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{walletId}/balance")
    public ResponseEntity<Wallet> updateWalletBalance(
            @PathVariable Long walletId,
            @RequestParam Double amount) {
        Wallet updatedWallet = walletService.updateWalletBalance(walletId, amount);
        return updatedWallet != null ? ResponseEntity.ok(updatedWallet) : ResponseEntity.notFound().build();
    }
}
