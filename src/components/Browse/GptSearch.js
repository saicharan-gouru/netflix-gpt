import React from 'react'
import { BACKGROUND_IMAGE_URL, lang } from '../../utils'
import { useSelector } from 'react-redux'

const GptSearch = () => {

  const language = useSelector(store => store.config.lang);

  return (
    <div>
    <div className="absolute -z-10">
            <img src={BACKGROUND_IMAGE_URL} alt="background-banner" />
    </div>
    <div className="pt-[10%] flex justify-center">
        <form className="bg-black w-1/2 grid grid-cols-12">
            <input className="p-3 m-3 col-span-9" placeholder={lang[language].gptSearchPlaceholder}/>
            <button className="text-white p-3 m-3 rounded-lg bg-red-600 col-span-3">{lang[language].search}</button>
        </form>
    </div>
    </div>
  )
}

export default GptSearch