import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export default function Slider(){
  const [current, setCurrent] = useState(0)
  const slideLength = Data.length;
  
  const Prev = ()=>{
    if(current > 0){
      setCurrent(prev => prev - 1)
    }else{
      setCurrent(slideLength-1)
    }
  }

  const Next = ()=>{
    if(current < slideLength-1){
        setCurrent(next => next + 1)
    }else{
      setCurrent(0)
    }
  }


  return(
    <div className=' flex justify-center lg:w-7/12 2xl:w-5/12'>
      <div  >
        <div className='border border-borderColor shadow-sm p-10 rounded-xl w-full grid grid-cols-1'>
            {/* image and name and identity */}
            <div className='relative'>
              <div> 
                <div 
                  className='absolute -right-16 top-44 md:top-30 lg:top-24 align-middle bg-info p-2 w-10 h-10 rounded-full'
                  onClick={Next}
                >
                  <FontAwesomeIcon 
                    icon={faArrowRight}
                    className = "text-white ml-1"
                  />
                </div>
                <div 
                  className='absolute top-44 md:top-30 lg:top-24 -left-16 bg-info p-2 w-10 h-10 rounded-full'
                  onClick={Prev}
                >
                  <FontAwesomeIcon 
                    icon={faArrowLeft}
                    className = "text-white ml-1"
                  />
                </div>
              </div>
              {/* repeat slide */}
               {
                Data.map((slide, index)=>{
                  return(
                    <div className= {index == current? 'block' : 'hidden'} key = {index}>
                      {index === current && (
                        <div className='transition-all duration-1000 ease-linear'> 
                          <div className='lg:flex justify-between items-center'> 
                            <div className=' flex justify-center lg:grid lg:grid-col-1 lg:w-9/12'>
                                <div className='flex justify-center'> 
                                  <img 
                                    src= {slide.profilePic}
                                    className ="
                                      h-40
                                      w-40 
                                      md:h-48 
                                      md:w-48 
                                      rounded-full 
                                      border-8 
                                      border-borderColor 
                                    "
                                  />
                                </div>
                                <div className='hidden px-4 lg:block'> 
                                  <div className='h-1 w-48 m-4 bg-secondary'> </div>
                                  <div className='h-1 w-24 m-4 bg-secondary'> </div>
                                  <div className='h-1 w-48 m-4 bg-secondary'> </div>
                                </div>
                            </div>
                            <div className='mt-2 md:p-10'>
                                <div className='flex justify-center lg:justify-start'>  
                                  <div className=" md:flex items-center"> 
                                    <h1 className='text-center text-xl md:text-3xl font-readex_bold text-fontColor'>{slide.name}, </h1>
                                    <p className='text-center pl-2 font-readex_medium md:text-2xl text-fontColor' >{slide.title} </p>
                                  </div>
                                </div>
                                <div className='md:flex md:items-center md:mt-6'>
                                  <div className='flex justify-center lg:pb-20'> 
                                      <FontAwesomeIcon 
                                        icon={faQuoteLeft}
                                        className='text-center py-2 font-readex_bold text-3xl text-info md:pr-4'
                                      />
                                     
                                    </div>
                                  <p className='text-left font-sans_medium text-fontColor text-md md:text-xl leading-5 '>{slide.comment}</p>
                                </div>
                            </div>
                          </div>
                        </div>  
                      )}
                    </div>
                  )
                }) 
              }

            </div>
        </div>
      </div>
    </div>
  )
}


const Data = [
  {
    id : 1,
    name : 'Tohid',
    title : 'Tourist',
    comment : 'Highly recommend 👏 Very Friendly, Reliable & Informative. Intripid  will provide you every single detail you need on your travel!',
    profilePic : 'data:image/jpeg;base64,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',
  },
  {
    id : 2,
    name : 'Josh Aki',
    title : 'Tourist',
    comment : 'Highly recommend 👏 Very Friendly, Reliable & Informative. Intripid  will provide you every single detail you need on your travel!',
    profilePic : "data:image/jpeg;base64,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"
  },
  {
    id : 3,
    name : 'Ali Ahmed',
    title : 'Manager',
    comment : 'Very Good, Reliable & Informative. Intripid  will provide you every single detail you need on your travel!',
    profilePic : "data:image/jpeg;base64,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"
  },
]