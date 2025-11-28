import { Music, SearchIcon } from "lucide-react";
import { useSearch } from "../context/SearchContext";
import SongItem from "./SongItem";
import AlbumItem from "./AlbumItem";

const Search = () => {
  const { searchQuery, searchResults, isSearchActive } = useSearch();
  const { songs, albums } = searchResults;
  const totalResults = songs.length + albums.length;

  if (!isSearchActive) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <SearchIcon className="w-16 h-16 text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold  text-white mb-2">노래 검색</h2>
        <p className="text-gray-400">좋아하는 노래와 앨범을 찾아보세요</p>
      </div>
    );
  }

  if (searchQuery.trim() === "") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <SearchIcon className="w-16 h-16 text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold  text-white mb-2">
          검색을 시작하려면 입력을 시작하세요
        </h2>
        <p className="text-gray-400">노래, 앨범 등을 검색하세요</p>
      </div>
    );
  }

  if (totalResults === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <SearchIcon className="w-16 h-16 text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold  text-white mb-2">검색 결과 없음</h2>
        <p className="text-gray-400">다른 것을 검색해보세요.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Search results header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">검색 결과</h1>
        <p className="text-gray-400">
          {searchQuery}의 {totalResults}개의 결과
          {totalResults !== 1 ? "들" : ""}
          {totalResults !== 1 ? "을" : "를"} 찾음
        </p>
      </div>

      {/* Songs section */}
      {songs.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Music className="w-6 h-6 text-green-400" />
            <h2 className="text-2xl font-bold text-white">노래</h2>
            <span className="text-gray-400">({songs.length})</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {songs.map((song) => (
              <SongItem
                key={song._id}
                name={song.name}
                desc={song.desc}
                id={song._id}
                image={song.image}
              />
            ))}
          </div>
        </div>
      )}

      {/* Album section */}
      {albums.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Music className="w-6 h-6 text-green-400" />
            <h2 className="text-2xl font-bold text-white">앨범</h2>
            <span className="text-gray-400">({albums.length})</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {albums.map((album) => (
              <AlbumItem
                key={album._id}
                name={album.name}
                desc={album.desc}
                id={album._id}
                image={album.imageUrl}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
