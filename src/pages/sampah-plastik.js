import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image'
import Plastic from '@/components/Plastic'
import plastic from '../../public/images/profile/plastic.png'

const plasticPage = () => {
    return (
        <>
            <Head>
                <title>Tipe Sampah | Plastik</title>
                <meta name="description" content="any description" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-24 pb-12'>
                <div className="grid w-full grid-cols-12 gap-16 items-center">
                    <div className='col-span-7 flex flex-col items-start justify-start'>
                        <div>
                        <AnimatedText text="Plastik: Sampah yang serbaguna tapi sulit terurai" className='!text-4xl !text-left'/>
                        <p className='my-4 text-base font-medium'>
                        Plastik adalah sampah yang terbuat dari bahan sintetis atau polimer, membutuhkan waktu hingga 450 tahun untuk terurai di alam.
                        </p>
                        <p className='my-2 text-base font-bold'>Dampak buruk plastik:</p>
                        <ul className='list-disc list-inside pl-4'>
                            <li>Plastik mencemari lautan, membahayakan kehidupan laut</li>
                            <li>Membutuhkan ratusan tahun untuk terurai</li>
                            <li>Memicu polusi mikroplastik yang masuk ke rantai makanan</li>
                        </ul>
                        </div>
                    </div>
                    <div className='col-span-5'>
                        <Image src={plastic} alt="Photo Profile" className='w-full h-auto'/>
                    </div>
                </div>
                <Plastic/>
                </Layout>
            </main>
        </>
    )
}

export default plasticPage
