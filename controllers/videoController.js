import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("Home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("Home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("Search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("Upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // Todo: upload and save video
  res.redirect(routes.videoDetail(video.id));
};

export const videoDetail = (req, res) =>
  res.render("Video Detail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("Edit Video", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("Delete Video", { pageTitle: "Delete Video" });
