import Link from 'next/link';


export const Primary = ({title, link, onClick}) => {
    return (
        <div className='flex items-center self-start mt-2'>
            <a href={link}
            onClick={onClick}
            className="flex items-center bg-primary text-light p-2.5 px-6
            rounded-lg text-base font-semibold hover:bg-light hover:text-primary
            border border-solid border-transparent hover:border-primary"
            >{title}
            </a>
        </div>
    )
}

export const Secondary = ({title, link}) => {
    return (
        <div className='flex items-center self-start mt-2'>
            <Link href={link} 
            className="flex items-center bg-light text-primary border-primary p-2.5 px-6
            rounded-lg text-base font-semibold hover:bg-primary hover:text-light
            border border-solid"
            >{title}
            </Link>
        </div>
    )
}