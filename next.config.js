/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    LIVEKIT_API_KEY:"APIeXJJcaDKk5f3",
    LIVEKIT_API_SECRET:"JuMxv4f4gkVZNerbCVLuv3Fp0wVTUelA8fgCeQH9XinE",
    LIVEKIT_WS_URL:"wss://chatroom-a73rh25f.livekit.cloud"
  }
};

module.exports = nextConfig;
