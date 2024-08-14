import React from 'react'
import abouting from '../assets/about.jpg'

const About = () => {
  return (
    <div className='py-10 text-white bg-[#232325] h-auto' id='About'>
        <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
            <div>
                <div className='w-[400px] h-full'>
                    <img 
                    src={abouting}
                    alt=''
                    className='object-cover rounded-xl h-[300px] filter grayscale brightness-50'
                    />

                </div>
            </div>

            <div>
                <div className='p-2'>
                    <div className='text-gray-300 my-3'>
                        <h3 className='text-4xl font-semibold mb-5'>Tentang <span className='primary-text'>Saya</span></h3>
                        <p className='text-justify leading-7 w-11/12 mx-auto'>
                         Lulusan MtsN 6 Malang yang berdomisili di desa Jambuwer kecamatan Kromengan,
                         sekolah di SMK Cendika Bangsa dan sedang menjalani praktik kerja lapangan
                         di PT.Bitpreneur yang berada di cokolio. Seorang yang baik hati juga lembut, 
                         melaksanakan dasadharma pramuka jika mood, juga 
                         mematuhi UU jika dia ingat. 


                        </p>

                    </div>

                </div>
                <div className='flex mt-10 items-center gap-7'>
                    <div className='bg-[#333333]/40 p-5 rounded-lg'>
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>2

                    </h3>
                    <p><span className='md:text-base text-xs'>mata</span></p>
                        

                    </div>
                    <div className='bg-[#333333]/40 p-5 rounded-lg'>
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                        1
                        </h3>
                        <p><span className='md:text-base text-xs'>hidung</span></p>    
                    </div>
                    
                    <div className='bg-[#333333]/40 p-5 rounded-lg'>
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                        1
                        </h3>
                        <p><span className='md:text-base text-xs'>mulut</span></p>    
                    </div>
                    

                </div>
            </div>
        </div>

    </div>
  )
}

export default About