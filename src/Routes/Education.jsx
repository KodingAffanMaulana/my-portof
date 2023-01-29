import { Image } from "@chakra-ui/react";
import unila from '../images/unila.jpeg'
import sma from '../images/sma.jpeg'
import sd from '../images/sd.jpeg'
import smp from '../images/smp.jpg'

import { Box } from "@chakra-ui/react";

import { MdOutlineSchool } from 'react-icons/md'

const Education = () => {
    return (
        <main className="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-4 sm:p-6">
            <div className="drop-shadow-2xl">
                <section id="education" class="p-8 lg:p-8 bg-white">
                    <div class="flex flex-col items-center justify-center text-center">
                        <MdOutlineSchool alt="Education" size="4rem" />
                        <h1 class="font-bold text-[16px] sm:text-2xl text-blue-900 p-2 sm:p-3">Education</h1><br />
                        {/* <h4 class="font-bold text-blue-600">Experience</h4> */}
                        {/* <h2 class="font-bold text-2xl md:w-[500px] my-3 mx-auto">I have some experience in the field of web development</h2><p class="max-w-[500px]"></p> */}
                    </div>
                    <div class="sm:flex-col lg:text-[2px] md:flex-col lg:flex-row flex flex-col gap-[1%]">
                        <article className="p-5 shadow-md rounded border-t-[6px] border-blue-900 md:border-none">
                            <Box w='100%'>
                                <Image rounded={"2xl"} src={unila} alt="unila" style={{ "object-fit": "cover" }} />
                            </Box>
                            <h2 class="font-bold text-[13px] sm:text-xl text-center p-1 sm:p-4">Universitas Lampung</h2>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium">Teknik Informatika</p>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium">IPK 3.88</p>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">2020 - Sekarang</p>
                        </article><br />
                        <article className="p-5 shadow-md rounded border-t-[6px] border-blue-600 md:border-none">
                            <Box w='100%'>
                                <Image rounded={"2xl"} src={sma} alt="sma" style={{ "object-fit": "cover" }} />
                            </Box>
                            <h2 class="font-bold text-[13px] sm:text-xl text-center p-1 sm:p-4">SMA YP UNILA</h2>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium">MIPA</p>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium">Average Report (88/100)</p>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">2017 - 2020</p>
                        </article><br />
                        <article className="p-5 shadow-md rounded border-t-[6px] border-blue-600 md:border-none">
                            <Box w='100%'>
                                <Image rounded={"2xl"} src={smp} alt="unila" className="gambar" />
                            </Box>
                            <h2 class="font-bold text-[13px] sm:text-xl text-center p-1 sm:py-4">SMPN 02 Penawartama</h2>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium ">IPA</p>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium ">General Champion</p>
                            <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">2014 - 2017</p>
                        </article><br />
                        <article className="p-5 shadow-md rounded border-t-[6px] border-blue-600 md:border-none">
                            <Box w='100%'>
                                <Image rounded={"2xl"} src={sd} alt="unila" className="gambar" />
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