import { testimonial } from '@/constants/index'
import Image from 'next/image'

const Testimonial = () => <section className="py-20">

    <div className="container mx-auto px-8">

        <div className="flex items-center gap-4 flex-wrap">
            {
                testimonial && testimonial.map((v, i) => <div key={i} className="sm:p-6 p-3 border-gray-400 border h-fit w-full sm:flex-1">

                    <span className='text-Tblue text-2xl'><v.Icon /></span>

                    <p className='my-4 text-gray-500 capitalize text-xs w-full h-20 overflow-x-hidden overflow-y-auto text-wrap'>{v.description}</p>

                    <div className='flex items-center gap-3'>
                        <figure><Image src={v.image} alt='error...' width={50} height={50} className='rounded-full border border-Tblue p-1' /></figure>
                        <div className='mt-auto'>
                            <h1 className='sm:text-2xl text-TDarkBlue font-semibold text-xs'>{v.heading}</h1>
                            <p className='text-xs text-gray-500'>{v.tagLine}</p>
                        </div>
                    </div>

                </div>)
            }
        </div>

    </div>

</section>


export default Testimonial