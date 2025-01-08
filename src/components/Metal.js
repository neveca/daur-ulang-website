import React, { useRef } from 'react'
import {motion, useScroll} from 'framer-motion'
import LiIcon from './LiIcon';


const Details = ({type, info}) => {
        const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            
            <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration: 0.5, type: "spring"}}
            >
                <h3 className='capitalize font-bold text-xl'>
                    {type}&nbsp;
                </h3>
                <p className='w-full'>
                    {info}
                </p>
            </motion.div>
        </li>
    );
};

const Metal = () => {
        const ref = useRef(null)
        //scrollYProgress: the scroll position between the defined offsets as a value between 0 and 1
        const {scrollYProgress} = useScroll(
            {
                target: ref, //this targeting the div below ref={ref}
                offset: ["start end", "center start"] //offset is an array of at least two intersection. Intersection describes a point when the target and container meet
            }
        )
    return (
        <div className='my-24'>
            <h2 className='font-bold text-3xl mb-12 w-full text-center'>
            Cara daur ulang sampah logam
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-8 w-[4px] h-full bg-dark origin-top dark:bg-light' /> {/*this is the dark line */}
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details 
                        type="Cuci dan keringkan logam bekas" 
                        info="Logam bekas seperti kaleng aluminium, kaleng baja, atau tutup botol harus dibersihkan terlebih dahulu sebelum didaur ulang. Pastikan untuk menghilangkan sisa makanan, minyak, atau cairan lainnya agar tidak menghambat proses daur ulang. Logam yang bersih juga memiliki nilai jual yang lebih tinggi jika dijual ke pengepul."
                        />
                    <Details 
                        type="Pisahkan jenis-Jenis logam" 
                        info="Setelah logam bersih, langkah berikutnya adalah memisahkan logam berdasarkan jenisnya, seperti aluminium, baja, atau tembaga. Setiap jenis logam memiliki proses daur ulang yang berbeda. Aluminium biasanya berasal dari kaleng minuman, sementara baja banyak ditemukan pada kaleng makanan. Pemisahan ini membantu memastikan logam diproses dengan cara yang tepat."
                        />
                    <Details 
                        type="Gunakan ulang untuk kerajinan" 
                        info="Jika memungkinkan, logam bekas seperti tutup botol atau kaleng dapat dimanfaatkan kembali sebagai bahan kerajinan tangan. Dengan sedikit kreativitas, Anda bisa membuat barang-barang unik seperti hiasan dinding, pot kecil, atau mainan. Ini tidak hanya mengurangi limbah, tetapi juga memberikan nilai tambah dari barang bekas."
                        />
                    <Details 
                        type="Jual ke pengepul logam" 
                        info="Jika tidak memungkinkan untuk digunakan ulang, logam bekas dapat dijual ke pengepul atau tempat daur ulang logam. Fasilitas ini akan melelehkan logam untuk diubah menjadi bahan baku baru yang bisa digunakan dalam pembuatan produk-produk logam lainnya. Dengan cara ini, Anda turut berkontribusi pada pengurangan limbah dan penggunaan sumber daya alam."
                        />
                </ul>
            </div>
        </div>
    )
}

export default Metal;