import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image'
import Organic from '@/components/Organic'
import organicTrash from '../../public/images/profile/organic.png'

const organicPage = () => {
    return (
        <>
            <Head>
                <title>Tipe Sampah | Organik</title>
                <meta name="description" content="any description" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-12'>
                <div className="grid w-full grid-cols-12 gap-16 items-center">
                    <div className='col-span-7 flex flex-col items-start justify-start'>
                        <div>
                        <AnimatedText text="Organik: Sampah yang Bisa Kembali ke Alam" className='!text-4xl !text-left'/>
                        <p className='my-4 text-base font-medium'>
                        Sampah organik berasal dari bahan alami yang dapat terurai secara alami (biodegradable) tanpa meninggalkan dampak berbahaya bagi lingkungan.
                        </p>
                        <p className='my-2 text-base font-bold'>Pentingnya daur ulang sampah organik:</p>
                        <ul className='list-disc list-inside pl-4'>
                            <li>Mempercepat proses penguraian sampah</li>
                            <li>Mengurangi emisi gas rumah kaca</li>
                            <li>Mengurangi volume sampah di TPA</li>
                        </ul>
                        </div>
                    </div>
                    <div className='col-span-5'>
                        <Image src={organicTrash} alt="Photo Profile" className='w-full h-auto'/>
                    </div>
                </div>
                <Organic/>
                </Layout>
            </main>
        </>
    )
}

export default organicPage
