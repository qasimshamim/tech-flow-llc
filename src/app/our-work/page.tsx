import * as C from '@/components/index'
import { companyName } from '@/constants'


const Work = () => <><C.Hero
  text="enterprises growth companies startups"
  url="#contact-form"
  btn={'tell us about your project'}
  heading="Unveiling Our Diverse Portfolio of Success Stories"
  poster="/banner-1.webp" />

  <C.WorkInfo />



</>

export default Work


export const metadata = {
  title:`Our Work | ${companyName}`,
}