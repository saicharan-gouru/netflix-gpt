import { signInValidator, signUpValidator } from "./validator";
import { appStore } from "./appStore";
import { addUser, removeUser } from "./slices/userSlice";
import { API_OPTIONS, IMG_BASE_URL } from "./constants";
import { addNowPlaying, addMainMovieTrailer } from "./slices/moviesSlice";


export { signInValidator, signUpValidator, appStore, addUser, removeUser, API_OPTIONS, addMainMovieTrailer, addNowPlaying, IMG_BASE_URL }