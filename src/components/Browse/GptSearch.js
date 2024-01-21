import React, { useRef } from 'react'
import { API_OPTIONS, BACKGROUND_IMAGE_URL, addGptSearchResult, lang, openai } from '../../utils'
import { useDispatch, useSelector } from 'react-redux'

const GptSearch = () => {

  const language = useSelector(store => store.config.lang);
  const gptSearchText = useRef(null);
  const dispatch = useDispatch();


  const fetchMovieTMDB = async (movie) => {
    const res = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=true&language=en-US&page=1", API_OPTIONS)
    const data = await res.json();
    return data.results;

  }


  const handleGptSearchClick = async() => {

    const gptSearchQuery = "Act as a movie recommendation system and suggest some movies for the query : "+gptSearchText.current.value+". Only give me names of 5 movie, comma separated like the example result given ahead. Example result: movie1, movie2, movie3, movie4, movie5";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptSearchQuery }],
      model: 'gpt-3.5-turbo',
    });

    if(!gptResults.choices) {
      console.log("Error in open ai api");
    }

    const gptMovies = gptResults.choices[0]?.message?.content.split(", ")
    
    //we get 5 promises as async function returns a promise
    const tmdbResults = gptMovies.map(movie => fetchMovieTMDB(movie))

    const gptMoviesDetails =await Promise.all(tmdbResults)

    console.log(gptMoviesDetails);

    dispatch(addGptSearchResult({movieNames:gptMovies,movieDetails:gptMoviesDetails}))
    
  }

  return (
    <div>
    <div className="fixed -z-10">
            <img src={BACKGROUND_IMAGE_URL} alt="background-banner" />
    </div>
    <div className="pt-[10%] flex justify-center">
        <form className="bg-black w-1/2 grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
            <input required ref={gptSearchText} className="p-3 m-3 col-span-9" placeholder={lang[language].gptSearchPlaceholder}/>
            <button onClick={handleGptSearchClick} className="text-white p-3 m-3 rounded-lg bg-red-600 col-span-3">{lang[language].search}</button>
        </form>
    </div>
    </div>
  )
}

export default GptSearch