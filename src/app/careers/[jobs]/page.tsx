'use client'
import * as C from "@/components/index"

const Jobs = ({ params }:{ params: any }) => {

    const title = `applying for ${params.jobs}` 


    return (
        <><C.Hero
            heading="Ignite Your Career with Exciting Opportunities"
            text="enterprises growth companies startups"
            url="/contact-us" btn={'tell us about your project'} poster="/banner-1.webp" />

            <h1 className="font-bold text-TDarkBlue text-center md:text-4xl capitalize py-20">{title}</h1>

            <C.JobForm /></>
    )
}

export default Jobs