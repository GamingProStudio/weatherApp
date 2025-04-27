import { Helmet } from "react-helmet";

function PreloadVideos() {
  const videos = [
  "/videos/Clear.mp4",
  "/videos/Rainy.mp4",
  "/videos/Snowfall.mp4",
  "/videos/Thunderstrom.mp4",
  "/videos/Mist.mp4",
  "/videos/partyCloud.mp4",
  "/videos/Sunny.mp4",
  "/videos/Patch.mp4",
  "/videos/Cloudy.mp4",
];

  return (
    <Helmet>
      {videos.map((video, index) => (
        <link key={index} rel="preload" as="video" href={video} type="video/mp4" />
      ))}
    </Helmet>
  );
}

export default PreloadVideos;