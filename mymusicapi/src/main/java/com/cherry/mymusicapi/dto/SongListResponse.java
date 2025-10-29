package com.cherry.mymusicapi.dto;

import java.util.List;

import com.cherry.mymusicapi.document.Song;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SongListResponse {
	private Boolean success;
	private List<Song> songs;
}
