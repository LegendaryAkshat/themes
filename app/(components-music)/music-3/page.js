"use client";

import { motion } from "framer-motion";
import { Play, Pause, SkipForward, SkipBack, Volume2, Heart, Share2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function Page() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(240); // 4 minutes in seconds
  const [volume, setVolume] = useState(75);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return duration;
          }
          return prev + 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, duration]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (currentTime / duration) * 100;

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Music Player Experience
          </h1>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Immerse yourself in crystal-clear audio with our sophisticated music player
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12"
        >
          {/* Album Art */}
          <div className="mb-8">
            <div className="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-2xl flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-48 h-48 bg-white/20 rounded-xl mx-auto mb-4 backdrop-blur-sm"></div>
                <h2 className="text-2xl font-bold mb-2">Midnight Dreams</h2>
                <p className="text-purple-200">The Sound Collective</p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm text-purple-200 mb-2">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <SkipBack className="w-6 h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:shadow-xl transition-shadow"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8" />
              ) : (
                <Play className="w-8 h-8 ml-1" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <SkipForward className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Volume and Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <Volume2 className="w-5 h-5 text-purple-200" />
              <div className="flex-1 relative h-2 bg-white/20 rounded-full">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  style={{ width: `${volume}%` }}
                />
              </div>
              <span className="text-sm text-purple-200 w-12">{volume}%</span>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsLiked(!isLiked)}
                className={`p-3 rounded-full transition-colors ${
                  isLiked ? "bg-pink-500" : "bg-white/10 hover:bg-white/20"
                }`}
              >
                <Heart className="w-5 h-5" fill={isLiked ? "currentColor" : "none"} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

