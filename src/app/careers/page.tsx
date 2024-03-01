import { Hero, Jobs  } from '@/components/index'
import { companyName } from '@/constants'

const Careers = () => {
  return (
    <>
      <Hero   heading="Ignite Your Career with Exciting Opportunities"
  text="enterprises growth companies startups" url="/contact-us" btn={'tell us about your project'}  poster="/banner-1.webp" />

      <h1 className='text-6xl text-TDarkBlue pt-20 font-bold text-center capitalize'>work with us</h1>
      <Jobs />
  
    </>
  )
}

export default Careers


export const metadata = {
  title:`Careers | ${companyName}`,
}