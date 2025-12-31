export const getVideoId = (url) => {
  const regExp =
    /(?:youtube\.com\/(?:.*v=|v\/|embed\/)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};
