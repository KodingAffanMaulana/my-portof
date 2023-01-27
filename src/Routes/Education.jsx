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
                <section id="education" class="p-8 lg:p-16 bg-white">
                    <h1 class="font-bold text-[16px] sm:text-2xl text-lime-1000 pb-1 sm:pb-3">My Education</h1><br />
                    <div class="sm:flex-col lg:text-[2px] md:flex-col lg:flex-row flex flex-col gap-[2%]">
                        <article>
                            <Box w='100%'>
                                <Image rounded={"2xl"} src={unila} alt="unila" style={{"object-fit": "cover"}}/>
                            </Box>
                            <h2 class="font-bold text-[13px] sm:text-xl text-center p-1 sm:p-4">Universitas Lampung</h2>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium">Teknik Informatika</p>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium">IPK 3.88</p>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">2020 - Sekarang</p>
                        </article><br />
                        <article>
                            <Box w='100%'>
                                <Image rounded={"2xl"} src={sma} alt="sma" style={{"object-fit": "cover"}}/>
                            </Box>
                            <h2 class="font-bold text-[13px] sm:text-xl text-center p-1 sm:p-4">SMA YP UNILA</h2>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium">MIPA</p>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium">Average Report 88 (Rank 7)</p>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">2017 - 2020</p>
                        </article><br />
                        <article>
                            <Box w='100%'>
                                <Image rounded={"2xl"} src={smp} alt="unila" className="gambar"/>
                            </Box>
                            <h2 class="font-bold text-[13px] sm:text-xl text-center p-1 sm:p-4">SMPN 02 Penawartama</h2>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium ">IPA</p>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium ">General champion</p>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">2014 - 2017</p>
                        </article><br />
                        <article>
                            <Box w='100%'>
                                <Image rounded={"2xl"} src={sd} alt="unila" className="gambar"/>
                            </Box>
                            <h2 class="font-bold text-[13px] sm:text-xl text-center p-1 sm:p-4">SDN 01 Bogatama</h2>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">2008 - 2014</p>
                        </article>
                    </div>
                </section>
            </div>
        </main >
    )
}

export default Education;