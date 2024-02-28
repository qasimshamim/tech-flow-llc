"use client";
import Image from "next/image";
import Link from "next/link"
import { companyName } from "@/constants/index"

const Logo = ({ color }: { color: boolean }) => {

    const logo: string[] = companyName.split(' ')


    return (
        <Link href={'/'}>

            <figure
                className='flex items-center h-fit w-fit gap-1'>
                <Image
                    alt={companyName}
                    width={50}
                    height={50}
                    className='object-contain'
                    src={'/white-logo.png'} />
                <figcaption
                    className={`${color ? 'text-Tblue' : 'text-white'} font-bold text-2xl `}>{logo[0]}{' '}<span className='text-primary text-white'>{logo[1]}</span>
                </figcaption>
            </figure>
        </Link>
    )
}

export default Logo