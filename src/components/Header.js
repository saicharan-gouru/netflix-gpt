import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SUPPORTED_LANGUAGES, changeLanguage, clearGptSearchResult, toggleGptSearchView } from '../utils';


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(appStore => appStore.user);
  const showGptSearch = useSelector(store => store.gpt?.showGptSearch);
  const dispatch = useDispatch();


  const signoutHandle = () => {
    signOut(auth).then(() => {
    
    }).catch((error) => {
      navigate("/error")
    });
  }

  const gptButtonClickHandle = () => {
    dispatch(toggleGptSearchView())
    dispatch(clearGptSearchResult())
  }

  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value))
    
  }



  return (
    <div className="bg-black md:bg-transparent absolute bg-gradient-to-b from-black w-full p-4 z-10 flex justify-between items-center flex-col md:flex-row">
        <img  className="w-40" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        <div>
        {
          user &&   
        <div className="flex justify-center items-center gap-8">
          <button onClick={gptButtonClickHandle} className="bg-purple-600 text-white py-1 px-3  rounded-lg hover:opacity-75">{showGptSearch ? "Home page" : "GPT search"}</button>
          {
          showGptSearch &&
          <select className="py-1 px-3  bg-gray-900 text-white" onChange={handleLanguageChange}>
            {
            SUPPORTED_LANGUAGES.map(language => <option key={language.identifier} value={language.identifier}>{language.name}</option>)
            }
          </select>
          }
          <button onClick={signoutHandle} className="  border-red-600 bg-red-600 px-3 py-1 rounded-lg  text-white hover:opacity-75">SIGN OUT</button> 
        </div>
        }
        </div>
    </div>
  )
}

export default Header