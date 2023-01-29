import { Image } from "@chakra-ui/react";

import rg from "../images/rg.png"
import as from "../images/asmen.png"

import { RiSuitcaseLine } from 'react-icons/ri'

const Experience = () => {
    return (
        <>
            <main className="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-4 sm:p-6">
                <div className="drop-shadow-2xl">
                    <section id="experience" class="p-8 lg:p-8 bg-white">
                    <div class="flex flex-col items-center justify-center text-center">
                        <RiSuitcaseLine alt="Education" size="4rem" />
                        <h1 class="font-bold text-[16px] sm:text-2xl text-blue-900 p-2 sm:p-3">Experience</h1><br />
                        {/* <h4 class="font-bold text-blue-600">Experience</h4> */}
                        {/* <h2 class="font-bold text-[16px] sm:text-2xl md:w-[500px] mx-auto pb-6 sm:pb-12">I have some experience in the field of web development</h2> */}
                    </div>
                        <div class="sm:flex-col md:flex-col lg:flex-row flex justify-center flex-col gap-[10%]">
                            <article class="pb-4 sm:pb-[0] text-center">
                                <Image rounded={"10%"} src={rg} alt="sma" width="500px" paddingBottom="1rem"/>
                                <h2 class="font-bold text-[13px] sm:text-xl">Frontend Engineer Ruangguru CAMP</h2>
                                <p class="text-[12px] sm:text-[18px] sm:font-medium">Studi Independen Kampus Merdeka Batch 3</p>
                                <p class="text-[12px] sm:text-[18px] sm:font-medium pb-2">18 Agu 2022 - 28 Des 2022</p>
                            </article>
                            <article className="text-center">
                                <Image rounded={"10%"} src={as} alt="sma" width="500px" paddingBottom="1rem"/>
                                <h2 class="font-bold text-[13px] sm:text-xl"> </h2>
                                <p class="font-bold text-[13px] sm:text-xl">Asistant Mentor</p>
                                <p class="text-[12px] sm:text-[18px] sm:font-medium pb-2">7 November - 23 Desember</p>
                            </article>
                        </div>
                    </section>
                </div>
            </main >
        </>
    )
}

export default Experience;