import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { GlobalAudioPlayer } from '../../context/AudioPlayerContext';

const AlbumDetails = () => {
    let location = useLocation();
    console.log(location);
    let {songs,
            setSongs,
            isPlaying,
            setIsPlaying,
            currentSongIndex,
            setCurrentSongIndex,} = useContext(GlobalAudioPlayer);
    
  
 
      let albumData = location?.state
      console.log("album data",albumData);
      //! extract the song list from the album data
      let songList = albumData?.songs;
      console.log("song list:",songList);
      //! create one function which will handle the songs
      let handleSongChange = (index) => {
        setSongs(songList);
        setCurrentSongIndex(index);
        if(currentSongIndex === index){
            setIsPlaying(!isPlaying)
        }
        else{
            setIsPlaying(true);
        }
        
      }
      
      
      return (
       
            <section className='w-full h-[calc(100vh-70px)]  items-center pt-10 text-white grid grid-flow-row'>
                <article className='w-[99%] flex h-[400px] bg-gray-700 px-8 py-5 gap-2 rounded-md hover:bg-gray-900 hover:ring-1 hover:ring-blue-600 transition-all duration-50 ease-linear'>
                    {/* //! left aside section - album thumbnail */}
                    <aside className='basis-[30%] h-[350px] rounded p-1 relative '>
                       <img src={albumData?.albumThumbnail} alt={albumData?.albumTitle} className='w-full h-[350px] object-cover rounded-md'
                        />
                        <span className='px-3 py-1 bg-round-600 rounded absolute top-[-10px] right-[-10px] '>{albumData?.albumType}</span>
                    </aside>
                    {/* //! right aside section - album details */}
                    <aside className='basis-[70%] h-[350px] border'>
                        <h1 className='text-5xl text-white font-bold tracking-wider px-2 py-3 '>{albumData?.albumTitle}</h1>
                        <p className='px-2 py-1'>
                            <span className='text-gray-400 font-semibold mr-1 text-justify'>Description</span>
                            <span className='text-gray-200'>{albumData?.albumDesc}</span>
                        </p>
                        <p className='px-2 py-1'>
                            <span className='text-gray-400 font-semibold mr-1 text-justify'>Release Date</span>
                            <span className='text-gray-200'>{albumData?.albumReleaseDate}</span>
                        </p>
                        <p className='px-2 py-1'>
                            <span className='text-gray-400 font-semibold mr-1 text-justify'>Language</span>
                            <span className='text-gray-200'>{albumData?.albumLang}</span>
                        </p>
                        <p className='px-2 py-1'>
                            <span className='text-gray-400 font-semibold mr-1 text-justify'>Description</span>
                            <span className='text-gray-200'>{albumData?.albumDesc}</span>
                        </p>
                        <p className='px-2 py-1'>
                            <span className='text-gray-400 font-semibold mr-1 text-justify'>albumStarcast</span>
                            <span className='text-gray-200'>{albumData?.albumStarcast}</span>
                        </p>
                        <p className='px-2 py-1'>
                            <span className='text-gray-400 font-semibold mr-1 text-justify'>albumDirector</span>
                            <span className='text-gray-200'>{albumData?.albumDirector}</span>
                        </p>
                        <p className='px-2 py-1'>
                            <span className='text-gray-400 font-semibold mr-1 text-justify'>albumSongscount</span>
                            <span className='text-gray-200'>{albumData?.albumSongsCount}</span>
                        </p>
                    </aside>
                </article>
                {/* song list collection */}
                <main className='mt-5 w-full mb-8 ronded-b-md' >
                    <header className='w-full'>
                    <h1 className='text-3xl font-semibold py-2 px-8'>Song Collection</h1>
                    </header>
                    <table className='ml-8 w-[95%] mb-50 '>
                      <thead>
                        <tr className='bg-gray-900 rounded-md '>
                            <td className='py-2 px-3 text-lg font-semibold'>Track number</td>
                            <td className='py-2 px-3 text-lg font-semibold'>Song Thumbnail</td>
                            <td className='py-2 px-3 text-lg font-semibold'>Song Name</td>
                            <td className='py-2 px-3 text-lg font-semibold'>Song Singers</td>
                            <td className='py-2 px-3 text-lg font-semibold'>Song Music Directors</td>
                            <td className='py-2 px-3 text-lg font-semibold'>Duration</td>
                            <td className='py-2 px-3 text-lg font-semibold'>size</td>
                        </tr>
                      </thead>
                      <tbody>
                        {
                            songList.length > 0 ? (songList.map((song,index) => {
                                return(
                                <tr key = {index} onClick={() => handleSongChange(index)}className='bg-gray-700 hover:bg-gray-900 cursor-pointer transition-all duration-75 ease-in-out hover:border-b-1px hover:border-[wheat]'>
                                    <td className='text-center'>{index+1}</td>
                                   
                                    <td className='flex justify-center items-center py-2 px-2'>
                                        <img src={song?.songThumbnail} alt={song?.songTitle} className='w-[120px] h-[60px] rounded-md' />
                                    </td>
                                    <td className='px-2 '>
                                        {song?.songTitle}
                                    </td>
                                    <td className='px-1'>
                                    
                                        {song?.songSingers}

                                    </td>
                                    <td className='px-2'>{song?.songMusicDirector}</td>
                                    <td className=' px-2'>{song?.duration}</td>
                                    <td className=' px-2'>{song?.size}</td>
                                </tr>
                                )
                                
                            })) :(<p className='text-center'>song collection not found for this album</p>)
                        }
                      </tbody>
                      <tfoot></tfoot>
                    </table>
                </main>
            </section>
 
  )
}

export default AlbumDetails
