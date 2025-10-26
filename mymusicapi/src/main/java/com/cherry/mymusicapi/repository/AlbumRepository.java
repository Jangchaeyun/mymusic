package com.cherry.mymusicapi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cherry.mymusicapi.document.Album;

public interface AlbumRepository extends MongoRepository<Album, String> {
	
}
