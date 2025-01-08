import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image'
import Metal from '@/components/Metal'
import metal from '../../public/images/profile/metal.png'

const metalPage = () => {
    return (
        <>
            <Head>
                <title>Tipe Sampah | Logam</title>
                <meta name="description" content="any description" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-24 pb-12'>
                <div className="grid w-full grid-cols-12 gap-16 items-center">
                    <div className='col-span-7 flex flex-col items-start justify-start'>
                        <div>
                        <AnimatedText text="Logam: Sampah yang Bernilai Tinggi" className='!text-4xl !text-left'/>
                        <p className='my-4 text-base font-medium'>
                        Sampah logam berasal dari bahan metal yang dapat didaur ulang berkali-kali, seperti aluminium, baja, dan tembaga.
                        </p>
                        <p className='my-2 text-base font-bold'>Pentingnya daur ulang sampah organik:</p>
                        <ul className='list-disc list-inside pl-4'>
                            <li>Menghemat energi hingga 95% dibandingkan memproduksi logam dari bahan mentah</li>
                            <li>Mengurangi limbah logam yang mencemari lingkungan</li>
                            <li>Mengurangi emisi karbon dalam proses produksi logam</li>
                        </ul>
                        </div>
                    </div>
                    <div className='col-span-5'>
                        <Image src={metal} alt="Photo Profile" className='w-full h-auto'/>
                    </div>
                </div>
                <Metal/>
                </Layout>
            </main>
        </>
    )
}

export default metalPage
