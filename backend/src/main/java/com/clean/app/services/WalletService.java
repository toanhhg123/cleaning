package com.clean.app.services;

import org.springframework.stereotype.Service;

import com.clean.app.entity.Wallet;
import com.clean.app.repository.WalletRepository;
import lombok.AllArgsConstructor;

import java.util.Optional;

@Service
@AllArgsConstructor
public class WalletService {
    private final WalletRepository walletRepository;

    public Wallet createWallet(Wallet wallet) {
        return walletRepository.save(wallet);
    }

    public Wallet getWalletByUserId(Long userId) {
        return walletRepository.findByUserId(userId).orElseGet(() -> {
            Wallet wallet = new Wallet();
            wallet.setUserId(userId);
            wallet.setBalance(0.0);
            return walletRepository.save(wallet);
        });
    }

    public Wallet updateWalletBalance(Long walletId, Double amount) {
        Optional<Wallet> walletOptional = walletRepository.findById(walletId);
        if (walletOptional.isPresent()) {
            Wallet wallet = walletOptional.get();
            wallet.setBalance(wallet.getBalance() + amount);
            return walletRepository.save(wallet);
        }
        return null;
    }

}
