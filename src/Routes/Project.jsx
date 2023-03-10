import { Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

import fanphotos from "../images/fanphotos.png"
import portoserti from "../images/portoserti.png"
import fetchdatatodolist from "../images/fetchdatatodolist.png"
import pokefan from "../images/pokefan.png"
import fanyugi from "../images/fanyugioh.png"
import star from "../images/starwars.png"
import calc from "../images/calc.jpg"
import kopi from "../images/kopi.jpg"
import book from "../images/book.jpg"
import liburan from "../images/liburan.jpg"
import bdg from "../images/bdg.jpg"

import { VscSymbolNamespace } from "react-icons/vsc"
const Project = () => {
    return (
        <>
            <main className="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-4 sm:p-6">
                <div className="drop-shadow-2xl">
                    <section id="project" class="p-8 lg:px-[10rem] lg:pb-16 bg-white">
                        <div class="flex flex-col items-center justify-center text-center">
                            <VscSymbolNamespace size="4rem" rounded="50%" className='grayscale' />
                            <h1 class="font-bold text-[16px] sm:text-2xl text-blue-900 p-2 sm:p-3 sm:pb-8">Project</h1><br />
                        </div>
                        <div class="sm:flex-col md:flex-col lg:flex-row flex-col gap-[10%] pb-8">
                            <article class="pb-4 lg:pb-8">
                                <h2 class="font-bold text-[13px] sm:text-xl">Website Galeri Photo</h2>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">Link website <Link class="hover:text-blue-300" href="https://fanphotos.netlify.app/" target="_blank">(https://fanphotos.netlify.app/)</Link></p>
                                <Image rounded={"2xl"} src={fanphotos} alt="fanphotos" style={{ "object-fit": "cover" }} />
                            </article>
                            <article class="pb-4 lg:pb-8">
                                <h2 class="font-bold text-[13px] sm:text-xl">Pokemon Website</h2>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium">Link website <Link class="hover:text-blue-300" href="https://fanpokemon.netlify.app/" target="_blank">(https://fanpokemon.netlify.app/)</Link></p>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">Link proyek <Link class="hover:text-blue-300" href="https://github.com/KodingAffanMaulana/react-assignment-2-v4" target="_blank">(https://github.com/KodingAffanMaulana/react-assignment-2-v4)</Link></p>
                                <Image rounded={"2xl"} src={pokefan} alt="fanphotos" style={{ "object-fit": "cover" }} />
                            </article>
                            <article class="pb-4 lg:pb-8">
                                <h2 class="font-bold text-[13px] sm:text-xl">FanYugiOh! Website</h2>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium">Link website <Link class="hover:text-blue-300" href="https://fanyugioh.netlify.app/" target="_blank">(https://fanyugioh.netlify.app/)</Link></p>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">Link proyek <Link class="hover:text-blue-300" href="https://github.com/KodingAffanMaulana/react-final-project-v1" target="_blank">(https://github.com/KodingAffanMaulana/react-final-project-v1)</Link></p>
                                <Image rounded={"2xl"} src={fanyugi} alt="fanphotos" style={{ "object-fit": "cover" }} />
                            </article>
                            <article class="pb-4 lg:pb-8">
                                <h2 class="font-bold text-[13px] sm:text-xl">Starwars Proyek</h2>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">Link proyek <Link class="hover:text-blue-300" href="https://github.com/KodingAffanMaulana/react-exercise-7-v1" target="_blank">(https://github.com/KodingAffanMaulana/react-exercise-7-v1)</Link></p>
                                <Image rounded={"2xl"} src={star} alt="fanphotos" style={{ "object-fit": "cover" }} />
                            </article>
                            <article class="pb-4 lg:pb-8">
                                <h2 class="font-bold text-[13px] sm:text-xl">Kalkulator Proyek</h2>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">Link proyek <Link class="hover:text-blue-300" href="https://kodingaffanmaulana.github.io/My-Kalkulator/" target="_blank">(https://kodingaffanmaulana.github.io/My-Kalkulator/)</Link></p>
                                <Image rounded={"2xl"} src={calc} alt="fanphotos" style={{ "object-fit": "cover" }} />
                            </article>
                            <article class="pb-4 lg:pb-8">
                                <h2 class="font-bold text-[13px] sm:text-xl">BookShelf Proyek</h2>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">Link proyek <Link class="hover:text-blue-300" href="https://kodingaffanmaulana.github.io/bookshelf-apps/" target="_blank">(https://kodingaffanmaulana.github.io/bookshelf-apps/)</Link></p>
                                <Image rounded={"2xl"} src={book} alt="fanphotos" style={{ "object-fit": "cover" }} />
                            </article>
                            <article class="pb-4 lg:pb-8">
                                <h2 class="font-bold text-[13px] sm:text-xl">Proyek Fetch Data Todolist</h2>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">Link proyek <Link class="hover:text-blue-300" href="https://github.com/KodingAffanMaulana/react-assignment-v1" target="_blank">(https://github.com/KodingAffanMaulana/react-assignment-v1)</Link></p>
                                <Image rounded={"2xl"} src={fetchdatatodolist} alt="fanphotos" style={{ "object-fit": "cover" }} />
                            </article>
                            <article>
                                <h2 class="font-bold text-[13px] sm:text-xl hover:text-blue-300">Coming soon</h2>
                            </article>
                        </div>
                    </section>
                </div>

                <br />

                <div className="drop-shadow-2xl">
                    <section id="education" class="p-8 lg:px-[10rem] lg:py-16  bg-white">
                        <h1 class="font-bold text-[14px] sm:text-2xl text-lime-800 pb-1 sm:pb-3">Web Statis</h1>
                        <div class="sm:flex-col md:f8lex-col lg:flex-row flex-col gap-[10%]">
                            <article class="pb-4 lg:pb-8">
                                <h2 class="font-bold text-[13px] sm:text-xl">Website Porto Sertifikat</h2>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">Link website <Link class="hover:text-blue-300" href="https://affanmaulana-fp.netlify.app/" target="_blank">(https://affanmaulana-fp.netlify.app/)</Link></p>
                                <Image rounded={"2xl"} src={portoserti} alt="fanphotos" style={{ "object-fit": "cover" }} />
                            </article>
                            <article class="pb-4 lg:pb-8">
                                <h2 class="font-bold text-[13px] sm:text-xl">Website LiburanLampung</h2>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">Link website <Link class="hover:text-blue-300" href="https://kodingaffanmaulana.github.io/Projek2/" target="_blank">(https://kodingaffanmaulana.github.io/Projek2/)</Link></p>
                                <Image rounded={"2xl"} src={liburan} alt="fanphotos" style={{ "object-fit": "cover" }} />
                            </article>
                            <article class="pb-4 lg:pb-8">
                                <h2 class="font-bold text-[13px] sm:text-xl">Website Coffe</h2>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">Link website <Link class="hover:text-blue-300" href="https://kodingaffanmaulana.github.io/kedaiKopi/" target="_blank">(https://kodingaffanmaulana.github.io/kedaiKopi/)</Link></p>
                                <Image rounded={"2xl"} src={kopi} alt="fanphotos" style={{ "object-fit": "cover" }} />
                            </article>
                            <article class="pb-4 lg:pb-8">
                                <h2 class="font-bold text-[13px] sm:text-xl">Website Bandung</h2>
                                <p class="text-[10px] sm:text-[18px] sm:font-medium pb-2">Link website <Link class="hover:text-blue-300" href="https://kodingaffanmaulana.github.io/Belajar-WEB-Dicoding/" target="_blank">(https://kodingaffanmaulana.github.io/Belajar-WEB-Dicoding/)</Link></p>
                                <Image rounded={"2xl"} src={bdg} alt="fanphotos" style={{ "object-fit": "cover" }} />
                            </article>
                        </div>
                    </section>
                </div>
            </main >
        </>
    )
}

export default Project;