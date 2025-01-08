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

const Glass = () => {
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
            Cara daur ulang sampah kaca
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-8 w-[4px] h-full bg-dark origin-top dark:bg-light' /> {/*this is the dark line */}
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details 
                        type="Pisahkan kaca utuh dan pecahan" 
                        info="Langkah pertama dalam mendaur ulang kaca adalah memisahkan kaca utuh dari pecahan. Botol dan toples kaca yang masih utuh biasanya lebih mudah untuk digunakan kembali tanpa proses tambahan, misalnya untuk menyimpan makanan atau barang-barang kecil. Sementara itu, pecahan kaca yang tidak bisa digunakan ulang harus didaur ulang. Pecahan kaca akan diproses lebih lanjut untuk dihancurkan menjadi bahan baku kaca baru."
                        />
                    <Details 
                        type="Bersihkan kaca bekas" 
                        info="Sebelum didaur ulang atau digunakan ulang, kaca harus dicuci terlebih dahulu. Pastikan untuk membersihkan botol, toples, atau pecahan kaca dari sisa kotoran, makanan, atau bahan kimia lainnya. Kaca yang bersih akan mempermudah proses daur ulang dan menghasilkan produk akhir yang berkualitas lebih baik."
                        />
                    <Details 
                        type="Jangan campur dengan bahan lain" 
                        info="Kaca yang tercampur dengan bahan lain seperti plastik, logam, atau kertas tidak dapat didaur ulang dengan benar. Sebelum menyerahkan kaca ke tempat daur ulang, pastikan untuk memisahkan bahan-bahan lain yang mungkin masih menempel pada kaca, seperti tutup botol logam atau label plastik."
                        />
                    <Details 
                        type="Serahkan ke tempat pengolahan kaca" 
                        info="Setelah semua langkah di atas dilakukan, kaca siap untuk dikirim ke fasilitas daur ulang. Tempat pengolahan kaca akan memproses kaca bekas menjadi bahan baku baru yang dapat digunakan untuk membuat berbagai produk seperti botol, toples, atau bahkan genteng kaca. Proses ini membantu mengurangi limbah dan kebutuhan akan bahan mentah."
                        />
                </ul>
            </div>
        </div>
    )
}

export default Glass;