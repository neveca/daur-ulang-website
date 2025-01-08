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

const Organic = () => {
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
            Cara daur ulang sampah organik
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-8 w-[4px] h-full bg-dark origin-top dark:bg-light' /> {/*this is the dark line */}
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details 
                        type="Kumpulkan sampah organik dalam wadah khusus" 
                        info="Kumpulkan sampah organik seperti sisa makanan, kulit buah, sayuran, daun kering, dan rumput. Gunakan wadah khusus seperti ember atau keranjang yang tertutup agar sampah tidak menarik serangga. Jika ada sampah organik yang sulit terurai, seperti tulang besar, potong kecil-kecil agar lebih cepat hancur."
                        />
                    <Details 
                        type="Masukkan sampah ke dalam komposter atau lubang tanah" 
                        info="Pilih tempat untuk proses pengomposan. Jika menggunakan komposter, tambahkan lapisan daun kering atau tanah di antara lapisan sampah untuk membantu proses penguraian. Jangan lupa untuk memastikan ventilasi cukup agar sirkulasi udara tetap terjaga."
                        />
                    <Details 
                        type="Biarkan terurai selama 2-3 minggu" 
                        info="Diamkan sampah organik selama 2 hingga 3 minggu. Proses ini melibatkan bakteri dan mikroorganisme yang membantu memecah material organik menjadi kompos. Pastikan untuk mengaduk kompos setiap beberapa hari untuk memastikan semua bagian terurai secara merata. Jika terlalu kering, tambahkan sedikit air, namun jangan sampai terlalu basah."
                        />
                    <Details 
                        type="Gunakan kompos sebagai pupuk alami" 
                        info="Setelah kompos matang, warnanya akan berubah menjadi gelap dan berbau seperti tanah. Anda dapat menggunakan kompos ini sebagai pupuk alami untuk tanaman di kebun atau pot bunga. Kompos membantu meningkatkan kesuburan tanah, memperbaiki struktur tanah, dan mendukung pertumbuhan tanaman secara alami tanpa bahan kimia."
                        />
                </ul>
            </div>
        </div>
    )
}

export default Organic;