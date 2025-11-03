package com.cherry.mymusicapi.service;

import org.springframework.stereotype.Service;

import com.cherry.mymusicapi.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
	private final UserRepository userRepository;
	
}
