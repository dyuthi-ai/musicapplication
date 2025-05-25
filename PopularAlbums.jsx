import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { __DB } from '../backend/firebaseconfig'
import { FaMusic } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Spinner from '../helper/Spinner';

const PopularAlbums = () => {
    let [albums,setAlbums] = useState(null);

    useEffect(() => {
        let fetchAlbums = async() => {

            //^ now we will fetch the albums from the database
            let albumCollectionRef = collection(__DB, "music_albums");
            let getAlbums = await getDocs(albumCollectionRef);
            console.log(getAlbums);
            let albumData = getAlbums.docs.map((album) => ({
                ...album?.data(),
                songs : album?.data()?.songs || []
            }))
            console.log("Album Data:",albumData);
            setAlbums(albumData)
        }
        //!call the function
        fetchAlbums();
    }, []);
    return (
        <section className='w-[80vw]'>
       {albums ? ( <article className='w-full '>
                <header className='w-full p-3 flex flex-col justify-center items-center gap-3'>
                    <span className='text-3xl text-white'><FaMusic/></span>
                    <h1 className='text-3xl font-semibold text-white'>Popular albums</h1>
                </header>
                <main className='w-full flex   items-center gap-5'>
                
                 <div className='px-6 flex flex-wrap '>
                    {albums.map((album,index) => {
                        return <NavLink to={`album-details/${album?.albumTitle}`} key={index} state={album}>
                            <div className='w-[260px] h-[330px] bg-gray-400 p-4 rounded-lg hover:bg-black hover:ring-1 hover:ring-[wheat]'>
                                <img className='w-[full] h-[250px] object-cover rounded-md hover:scale-105 transition-all duration-100 ease-linear' 
                                src={album?.albumThumbnail} 
                                alt={album?.albumTitle}/>
                                <h1 className=' px-20 bg-gray-800 mt-2 rounded text-l text-[wheat]'>{album?.albumTitle}</h1>
                            </div>
                        </NavLink>
                    })}
                  </div>
                </main>
            </article>) : (<section className='w-[100%] h-[100vh]  top-0 left-[7%]'>
                    <Spinner/>
                  </section>) }
           
        
        </section>
    )
}

export default PopularAlbums