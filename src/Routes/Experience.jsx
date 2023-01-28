import { Image } from "@chakra-ui/react";

import rg from "../images/rg.png"
import as from "../images/asmen.png"

const Experience = () => {
    return (
        <>
            <main className="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-4 sm:p-16">
                <div className="drop-shadow-2xl">
                    <section id="experience" class="p-8 lg:p-16 bg-white">
                        <h1 class="font-bold text-[16px] sm:text-2xl text-lime-1000 pb-1 sm:pb-3">Experience</h1><br />
                        <div class="sm:flex-col md:flex-col lg:flex-row flex justify-center flex-col gap-[10%]">
                            <article class="pb-4 sm:pb-[0]">
                                <h2 class="font-bold text-[13px] sm:text-xl">Studi Independen Kampus Merdeka Batch 3</h2>
                                <p class="text-[12px] sm:text-[18px] sm:font-medium pb-2">Frontend Engineering Ruangguru CAMP</p>
                                <Image rounded={"2xl"} src={rg} alt="sma" width="500px" />
                            </article>
                            <article>
                                <h2 class="font-bold text-[13px] sm:text-xl"> </h2>
                                <p class="font-bold text-[13px] sm:text-xl">Asisten Mentor</p>
                                <p class="text-[12px] sm:text-[18px] sm:font-medium pb-2">7 November - 23 Desember (12 Jam)</p>
                                <Image rounded={"2xl"} src={as} alt="sma" width="500px" />
                            </article>
                        </div>
                    </section>
                </div>
            </main >
        </>
    )
}

export default Experience;