package com.cherry.mymusicapi.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {
	@Value("${cloudinary.cloud-name}")
	private String cloudName;
	private String apiKey;
	private String apiSecret;
}
