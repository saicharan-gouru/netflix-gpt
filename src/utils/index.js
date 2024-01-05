import { signInValidator, signUpValidator } from "./validator";
import { appStore } from "./appStore";
import { addUser, removeUser } from "./slices/userSlice";
import { API_OPTIONS, IMG_BASE_URL, BACKGROUND_IMAGE_URL, SUPPORTED_LANGUAGES } from "./constants";
import { addNowPlaying, addMainMovieTrailer, addPopularVideos, addTopRatedVideos, addUpcomingVideos } from "./slices/moviesSlice";
import { toggleGptSearchView } from "./slices/gptSlice";
import { changeLanguage } from "./slices/configSlice";
import { lang } from "./languageConstants";

export { signInValidator, signUpValidator, appStore, addUser, removeUser, API_OPTIONS, addMainMovieTrailer, addNowPlaying, addPopularVideos, addUpcomingVideos, addTopRatedVideos, toggleGptSearchView, changeLanguage, IMG_BASE_URL, BACKGROUND_IMAGE_URL, lang, SUPPORTED_LANGUAGES }