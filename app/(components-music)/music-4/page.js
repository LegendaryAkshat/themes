"use client";

import { motion } from "framer-motion";
import { Play, Clock, Heart, MoreVertical } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900",
    card: "bg-white/10 backdrop-blur-xl",
    text: {
      primary: "text-white",
      secondary: "text-purple-200"
    },
    borders: {
      default: "border-white/20",
      divider: "border-white/10"
    },
    buttons: {
      primary: "bg-white/10 hover:bg-white/20",
      liked: "text-pink-400",
      default: "text-purple-200 hover:text-pink-400"
    }
  },
  
  // Page Header
  header: {
    title: "Music Playlist",
    description: "Discover and enjoy your favorite tracks in a beautifully designed playlist interface"
  },
  
  // Playlist (Edit playlist here!)
  playlist: [
    {
      id: 1,
      title: "Midnight Serenade",
      artist: "The Sound Collective",
      duration: "3:45",
      album: "Night Visions"
    },
    {
      id: 2,
      title: "Electric Dreams",
      artist: "Neon Waves",
      duration: "4:12",
      album: "Digital Horizon"
    },
    {
      id: 3,
      title: "Ocean Breeze",
      artist: "Coastal Vibes",
      duration: "3:28",
      album: "Summer Sessions"
    },
    {
      id: 4,
      title: "City Lights",
      artist: "Urban Echo",
      duration: "4:56",
      album: "Metropolitan"
    },
    {
      id: 5,
      title: "Mountain Peak",
      artist: "Nature Sounds",
      duration: "5:23",
      album: "Wilderness"
    },
    {
      id: 6,
      title: "Starlight",
      artist: "Cosmic Harmony",
      duration: "3:17",
      album: "Galaxy"
    }
  ]
};

export default function Page() {
  const [playingId, setPlayingId] = useState(null);
  const [likedSongs, setLikedSongs] = useState(new Set());
  const { colors, header, playlist } = pageConfig;

  const toggleLike = (id) => {
    setLikedSongs((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-4`}>
            {header.title}
          </h1>
          <p className={`text-lg ${colors.text.secondary} max-w-2xl`}>
            {header.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`${colors.card} rounded-3xl shadow-2xl ${colors.borders.default} overflow-hidden`}
        >
          <div className={`p-6 ${colors.borders.divider}`}>
            <div className="grid grid-cols-12 gap-4 text-sm text-purple-200 font-semibold">
              <div className="col-span-1">#</div>
              <div className="col-span-5">Title</div>
              <div className="col-span-3 hidden md:block">Album</div>
              <div className="col-span-2 flex items-center justify-end gap-2">
                <Clock className="w-4 h-4" />
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>

          <div className={`divide-y ${colors.borders.divider}`}>
            {playlist.map((song, index) => (
              <motion.div
                key={song.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="grid grid-cols-12 gap-4 p-4 items-center group transition-colors"
              >
                <div className="col-span-1 text-purple-200">
                  {playingId === song.id ? (
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    </div>
                  ) : (
                    <span className="text-sm">{index + 1}</span>
                  )}
                </div>

                <div className="col-span-5 flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setPlayingId(playingId === song.id ? null : song.id)}
                    className={`w-10 h-10 rounded-full ${colors.buttons.primary} flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100`}
                  >
                    <Play className="w-4 h-4 ml-0.5" />
                  </motion.button>
                  <div>
                    <div className="font-semibold text-white">{song.title}</div>
                    <div className={`text-sm ${colors.text.secondary}`}>{song.artist}</div>
                  </div>
                </div>

                <div className={`col-span-3 hidden md:block ${colors.text.secondary} text-sm`}>
                  {song.album}
                </div>

                <div className={`col-span-2 text-right ${colors.text.secondary} text-sm`}>
                  {song.duration}
                </div>

                <div className="col-span-1 flex items-center justify-end gap-2">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleLike(song.id)}
                    className={`p-2 rounded-full transition-colors ${
                      likedSongs.has(song.id) ? colors.buttons.liked : colors.buttons.default
                    }`}
                  >
                    <Heart
                      className="w-4 h-4"
                      fill={likedSongs.has(song.id) ? "currentColor" : "none"}
                    />
                  </motion.button>
                  <button className={`p-2 rounded-full ${colors.buttons.default} transition-colors opacity-0 group-hover:opacity-100`}>
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
