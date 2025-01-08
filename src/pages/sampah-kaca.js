import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image'
import Glass from '@/components/Glass'
import glass from '../../public/images/profile/glasses.png'

const glassPage = () => {
    return (
        <>
            <Head>
                <title>Tipe Sampah | Kaca</title>
                <meta name="description" content="any description" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-24 pb-12'>
                <div className="grid w-full grid-cols-12 gap-16 items-center">
                    <div className='col-span-7 flex flex-col items-start justify-start'>
                        <div>
                        <AnimatedText text="Kaca: Sampah yang Bisa Digunakan Kembali Tanpa Batas" className='!text-4xl !text-left'/>
                        <p className='my-4 text-base font-medium'>
                        Sampah kaca berbahan dasar mineral yang sulit terurai secara alami, namun dapat didaur ulang berkali-kali tanpa kehilangan kualitasnya.
                        </p>
                        <p className='my-2 text-base font-bold'>Dampak positif daur ulang kaca:</p>
                        <ul className='list-disc list-inside pl-4'>
                            <li>Mengurangi kebutuhan bahan baku baru untuk produksi kaca</li>
                            <li>Menghemat energi hingga 30% dibandingkan membuat kaca dari awal</li>
                            <li>Mengurangi limbah kaca yang berakhir di TPA</li>
                        </ul>
                        </div>
                    </div>
                    <div className='col-span-5'>
                        <Image src={glass} alt="Photo Profile" className='w-full h-auto'/>
                    </div>
                </div>
                <Glass/>
                </Layout>
            </main>
        </>
    )
}

export default glassPage
