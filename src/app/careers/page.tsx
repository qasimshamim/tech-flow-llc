import { Hero, Jobs  } from '@/components/index'

const Careers = () => {
  return (
    <>
      <Hero text="Learn everything West Monroe has to offer, to outstanding benefits and flexible hybrid working" url="/contact-us" btn={'tell us about your project'} heading="Careers" poster="/banner-1.webp" />

      <h1 className='text-6xl text-TDarkBlue pt-20 font-bold text-center capitalize'>work with us</h1>
      <Jobs />
  
    </>
  )
}

export default Careers