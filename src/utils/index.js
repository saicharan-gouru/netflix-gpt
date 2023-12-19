import { signInValidator, signUpValidator } from "./validator";
import { appStore } from "./appStore";
import { addUser, removeUser } from "./slices/userSlice";
import { API_OPTIONS } from "./constants";
import { addNowPlaying, addMainMovieTrailer } from "./slices/moviesSlice";


export { signInValidator, signUpValidator, appStore, addUser, removeUser, API_OPTIONS, addMainMovieTrailer, addNowPlaying }