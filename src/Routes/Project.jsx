import { Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

import fanphotos from "../images/fanphotos.png"
import portoserti from "../images/portoserti.png"
import fetchdatatodolist from "../images/fetchdatatodolist.png"
import pokefan from "../images/pokefan.png"
import fanyugi from "../images/fanyugioh.png"
import star from "../images/starwars.png"

const Project = () => {
    return (
        <>
            <main className="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-4 sm:p-16">
                <div className="drop-shadow-2xl">
                    <section id="education" class="px-8 pb-8 sm:px-16 sm:pb-8 bg-white">
                        <h1 class="font-bold text-[16px] sm:text-2xl text-lime-1000 pt-6 pb-1 sm:pb-3">My Project</h1><br />
                        <div class="sm:flex-col md:flex-col lg:flex-row flex-col gap-[10%]">
                            <article class="pb-16">
                                <h2 class="font-bold text-[13px] sm:text-xl">Website Galeri Fhoto</h2>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">Link website <Link class="hover:text-blue-300" href="https://fanphotos.netlify.app/" target="_blank">(https://fanphotos.netlify.app/)</Link></p>
                                <Image src={fanphotos} alt="fanphotos" style={{ "object-fit": "cover" }} />
                            </article>
                            <article class="pb-16">
                                <h2 class="font-bold text-[13px] sm:text-xl">Website Porto Sertifikat</h2>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">Link website <Link class="hover:text-blue-300" href="https://affanmaulana-fp.netlify.app/" target="_blank">(https://affanmaulana-fp.netlify.app/)</Link></p>
                                <Image src={portoserti} alt="fanphotos" style={{ "object-fit": "cover" }} />
                            </article>
                            <article class="pb-16">
                                <h2 class="font-bold text-[13px] sm:text-xl">Proyek Fetch Data Todolist</h2>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">Link proyek <Link class="hover:text-blue-300" href="https://github.com/KodingAffanMaulana/react-assignment-v1" target="_blank">(https://github.com/KodingAffanMaulana/react-assignment-v1)</Link></p>
                                <Image src={fetchdatatodolist} alt="fanphotos" style={{ "object-fit": "cover" }} />
                            </article>
                            <article class="pb-16">
                                <h2 class="font-bold text-[13px] sm:text-xl">Pokemon Website</h2>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium">Link website <Link class="hover:text-blue-300" href="https://fanpokemon.netlify.app/" target="_blank">(https://fanpokemon.netlify.app/)</Link></p>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">Link proyek <Link class="hover:text-blue-300" href="https://github.com/KodingAffanMaulana/react-assignment-2-v4" target="_blank">(https://github.com/KodingAffanMaulana/react-assignment-2-v4)</Link></p>
                                <Image src={pokefan} alt="fanphotos" style={{ "object-fit": "cover" }} />
                            </article>
                            <article class="pb-16">
                                <h2 class="font-bold text-[13px] sm:text-xl">FanYugiOh! Website</h2>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium">Link website <Link class="hover:text-blue-300" href="https://fanyugioh.netlify.app/" target="_blank">(https://fanyugioh.netlify.app/)</Link></p>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">Link proyek <Link class="hover:text-blue-300" href="https://github.com/KodingAffanMaulana/react-final-project-v1" target="_blank">(https://github.com/KodingAffanMaulana/react-final-project-v1)</Link></p>
                                <Image src={fanyugi} alt="fanphotos" style={{ "object-fit": "cover" }} />
                            </article>
                            <article class="pb-16">
                                <h2 class="font-bold text-[13px] sm:text-xl">Starwars Proyek</h2>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">Link proyek <Link class="hover:text-blue-300" href="https://github.com/KodingAffanMaulana/react-exercise-7-v1" target="_blank">(https://github.com/KodingAffanMaulana/react-exercise-7-v1)</Link></p>
                                <Image src={star} alt="fanphotos" style={{ "object-fit": "cover" }} />
                            </article>


                            <article>
                                <h2 class="font-bold text-[13px] sm:text-xl hover:text-blue-300">Coming soon</h2>
                            </article>
                        </div>
                    </section>
                </div>
            </main >
        </>
    )
}

export default Project;