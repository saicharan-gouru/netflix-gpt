import React,{useState} from 'react'
import { IMG_BASE_URL } from '../../utils'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:"black",
    width:'80%'
    
  },
};

const MovieCard = ({movie}) => {
  
  const [modalIsOpen, setIsOpen] = useState(false);

  const {poster_path} = movie

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div> 
    <div onClick={openModal} className="w-36 md:w-44">
        <img src={IMG_BASE_URL+poster_path} alt="movie" />
    </div>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="border-red-600 bg-red-600 px-2 py-1 my-4 rounded-sm text-white">X</button>
        <div className="flex gap-5 flex-col items-center ">
          <div className="w-36 md:w-44">
            <img src={IMG_BASE_URL+poster_path} alt="movie" />
          </div>
          <div className="text-white flex flex-col justify-stretch">
            <h1 className="font-bold">Movie Name: </h1>
            <p>{movie.title}</p>
            <h1 className="font-bold">Release Date: </h1>
            <p>{movie.release_date}</p>
            <h1 className="font-bold">Overview:</h1>
            <p>{movie.overview}</p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default MovieCard