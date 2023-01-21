import { Center, color } from "@chakra-ui/react";

const About = () => {
    return (
        <>
            <main className="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-4 sm:p-16">
                <div className="drop-shadow-2xl">
                    <section id="about" class="p-8 lg:p-16 bg-white rounded-[2rem]">
                        <h1 class="font-bold text-[16px] sm:text-2xl text-lime-1000 pb-1 sm:pb-3">About Me</h1><br />
                        <Center>
                            <div className="about" class="sm:flex-col md:flex-col lg:flex-row flex-col gap-[10%]">
                                <article>
                                    <p class="text-yellow-800 text-[10px] sm:text-[18px] sm:font-medium pb-4">Hola, saya Affan Maulana seorang yang memiliki cita-cita untuk memajukan IT di daerah saya yaitu Bogatama. Saya
                                        berasal dari Lampung dan saat ini bertempat tinggal di Bandarlampung. Saya sekarang sedang menempuh pendidikan S1 Teknik Informatika pada salah satu Univeristas Impian saya sejak kecil
                                        yaitu Universitas Lampung. Saya saat ini sedang berkecimpung dibidang Frontend Web Developer.</p>
                                    {/* <Image src={rg} alt="sma" width="500px" /> */}
                                    <h2 class="font-bold text-yellow-800 text-[10px] sm:text-[18px] sm:font-medium">Kemampuan yang dimiliki</h2>
                                    <ul class="list-disc list-inside text-yellow-700 text-[10px] sm:text-[18px] sm:font-medium">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Javascript</li>
                                        <li>ReactJS</li>
                                        <li>NodeJS</li>
                                        <li>Web API, RESTful API</li>
                                        <li>Software Engineering Git/Github/Hosting</li>
                                        <li>DMBS MYSQL</li>
                                        <li>Deployment Github Pages/Netlify/Hosting</li>
                                        <li>Editing Canva</li>
                                        <li>Microsoft Office</li>
                                        <li>Editing Video Kinemaster</li>
                                    </ul>
                                </article>
                            </div>
                        </Center>
                    </section>
                </div>
            </main >
        </>
    )
}

export default About;