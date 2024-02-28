import { Hero } from '@/components/index'

const ContactUs = () =>   <>
<Hero text="enterprises growth companies startups" url="/contact-us" btn={'tell us about your project'} heading="Connect with Us Today for Expert Support and Assistance" poster="/banner-1.webp" />
<iframe
  className='w-full border-0 grayscale'
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.3806981299067!2d-96.75231972424571!3d32.99373727287896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c22075fa8a2b1%3A0x554644fe60946337!2s3000%20Northside%20Blvd%20%231440%2C%20Richardson%2C%20TX%2075080%2C%20USA!5e0!3m2!1sen!2s!4v1709130406979!5m2!1sen!2s"
  height={450}
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

</>

export default ContactUs