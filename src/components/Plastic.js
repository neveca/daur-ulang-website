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

const Plastic = () => {
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
            Cara daur ulang sampah plastik
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-8 w-[4px] h-full bg-dark origin-top dark:bg-light' /> {/*this is the dark line */}
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details 
                        type="Hilangkan sisa makanan dan minuman" 
                        info="Langkah pertama dalam mendaur ulang sampah plastik adalah memastikan kebersihannya. Bilas botol, wadah makanan, dan kemasan plastik lainnya dengan air bersih. Sisa makanan atau minuman dapat mengurangi kualitas daur ulang dan menyebabkan bau tidak sedap. Proses ini juga membantu menghindari kontaminasi dengan bahan lain selama pengolahan."
                        />
                    <Details 
                        type="Kelompokkan berdasarkan jenis plastik" 
                        info="Plastik memiliki berbagai jenis dan karakteristik yang berbeda. Pisahkan plastik keras, seperti botol minuman, dari plastik lembut, seperti kantong plastik atau bungkus makanan. Pemisahan ini memudahkan proses pengolahan karena masing-masing jenis plastik membutuhkan metode daur ulang yang berbeda."
                        />
                    <Details 
                        type="Manfaatkan plastik untuk kebutuhan sehari-hari" 
                        info="Sebelum membuangnya, pikirkan cara menggunakan kembali plastik bekas di rumah. Botol plastik bisa diubah menjadi pot bunga, wadah penyimpanan, atau kerajinan tangan. Dengan memanfaatkan kembali plastik bekas, kita bisa mengurangi limbah yang dihasilkan sekaligus menghemat biaya."
                        />
                    <Details 
                        type="Kirim plastik ke tempat pengolahan" 
                        info="Plastik yang sudah bersih dan dipisahkan dapat dikumpulkan untuk dikirim ke bank sampah atau tempat pengolahan plastik lokal. Bank sampah biasanya menerima berbagai jenis plastik untuk diolah kembali menjadi produk baru. Langkah ini mendukung pengelolaan sampah yang berkelanjutan dan mengurangi dampak negatif terhadap lingkungan."
                        />
                </ul>
            </div>
        </div>
    )
}

export default Plastic;