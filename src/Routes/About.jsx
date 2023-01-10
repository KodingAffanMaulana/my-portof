import { Center } from "@chakra-ui/react";

const About = () => {
    return (
        <>
            <main className="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-4 sm:p-16">
                <div className="drop-shadow-2xl">
                    <section id="education" class="px-8 pb-8 sm:px-16 sm:pb-8 bg-white">
                        <h1 class="font-bold text-[16px] sm:text-2xl text-lime-1000 pt-6 pb-1 sm:pb-3">About</h1><br />
                        <Center>
                            <div class="sm:flex-col md:flex-col lg:flex-row flex-col gap-[10%]">
                                <article>
                                    <p class="text-yellow-800 text-[10px] sm:text-[18px] sm:font-medium pb-2">Hai semuanya, saya Affan Maulana seorang yang memiliki cita-cita untuk memajukan IT di daerah saya yaitu Bogatama. Saya
                                    berasal dari Lampung dan saat ini bertempat tinggal di Bandarlampung. Saya sekarang sedang menempuh pendidikan S1 Teknik Informatika pada salah satu Univeristas Impian saya sejak kecil
                                    yaitu Universitas Lampung. Saya saat ini sedang berkecimpung dibidang Frontend Web Developer.</p>
                                    {/* <Image src={rg} alt="sma" width="500px" /> */}
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