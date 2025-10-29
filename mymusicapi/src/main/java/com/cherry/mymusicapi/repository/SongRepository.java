package com.cherry.mymusicapi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cherry.mymusicapi.document.Song;

public interface SongRepository extends MongoRepository<Song, String> {
	
}
