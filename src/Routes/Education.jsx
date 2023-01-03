import { Image } from "@chakra-ui/react";
import unila from '../images/unila.jpeg'
import sma from '../images/sma.jpeg'
import sd from '../images/sd.jpeg'
import smp from '../images/smp.jpg'

import { Box } from "@chakra-ui/react";

const Education = () => {
    return (
        <main className="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-4 sm:p-16">
            <div className="drop-shadow-2xl">
                <section id="education" class="px-8 pb-8 sm:px-16 sm:pb-8 bg-white">
                    <h1 class="font-bold text-[16px] sm:text-2xl text-lime-700 pt-6 pb-1 sm:pb-3">Edukasi</h1>
                    <div class="sm:flex-col md:flex-col lg:flex-row flex flex-col gap-[10%]">
                        <article>
                            <Box w='100%' h='150px'>
                                <img src={unila} alt="unila" style={{objectFit:"cover"}}/>
                            </Box>
                            <h2 class="font-bold text-[13px] sm:text-xl">Universitas Lampung</h2>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">(2020 - Sekarang)</p>
                        </article>
                        <article>
                            <Box w='100%' h='150px'>
                                <Image src={sma} alt="sma" style={{"object-fit": "cover"}}/>
                            </Box>
                            <h2 class="font-bold text-[13px] sm:text-xl">SMA YP UNILA</h2>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">(2017 - 2020)</p>
                        </article>
                        <article>
                            <Box w='100%' h='150px'>
                                <Image src={smp} alt="unila" className="gambar"/>
                            </Box>
                            <h2 class="font-bold text-[13px] sm:text-xl">SMPN 02 Penawartama</h2>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">(2014 - 2017)</p>
                        </article>
                        <article>
                            <Box w='100%' h='150px'>
                                <Image src={sd} alt="unila" className="gambar"/>
                            </Box>
                            <h2 class="font-bold text-[13px] sm:text-xl">SDN 01 Bogatama</h2>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">(2008 - 2014)</p>
                        </article>
                    </div>
                </section>
            </div>
        </main >
    )
}

export default Education;