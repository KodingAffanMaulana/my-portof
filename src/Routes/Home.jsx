import { Image } from "@chakra-ui/react";
import { HStack, Box, Center } from "@chakra-ui/react";

import { Link } from '@chakra-ui/react'

const Home = () => {
    return (
        <main className="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-4 sm:p-16">
            <div className="drop-shadow-2xl">
                <section id="personal-info" className="p-8 lg:p-16 bg-gradient-to-tr from-[#4ECDC4] to-[#7bace1] rounded-[24px]">
                    <div class="grid place-content-center pb-16">
                        <div>
                            <img width="400" className="img rounded-[50%]" src="https://media.licdn.com/dms/image/C5603AQHO4bbGxD3NbQ/profile-displayphoto-shrink_800_800/0/1654271685186?e=1678320000&v=beta&t=s44UjDF5yNQQXYdO160i7vNd3jlhPlUu0VqfE5WNyB4" alt="profile" />
                        </div>
                    </div>
                    <h1 className="font-bold text-[20px] sm:text-[45px] text-lime-50 pb-2 text-center">I'm Affan Maulana</h1>
                    <p className="text-[10px] sm:text-xl sm:font-medium text-white pb-8">
                        Saya adalah mahasiswa S1 eknik Informatika yang saat ini
                        sedang menjalani pendidikan di Universitas Lampung. Saya memiliki ketertarikan pada bidang Frontend Web Developer
                    </p>

                    <Center>
                        <HStack spacing='24px' className="">
                            <Box w='40px' h='40px'>
                                <Link href='https://www.linkedin.com/in/affan-maulana-41a1a2194/' target="_blank">
                                    <Image src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" alt="linkedin" />
                                </Link>
                            </Box>
                            <Box w='40px' h='40px'>
                                <Link href='https://github.com/KodingAffanMaulana' target="_blank">
                                    <Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" />
                                </Link>
                            </Box>
                            <Box w='40px' h='40px'>
                                <Link href='https://www.instagram.com/affan_maulaana?r=nametagg' target="_blank">
                                    <Image width="50px" src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="instagram" />
                                </Link>
                            </Box>
                        </HStack>
                    </Center>
                    {/* <a href="https://github.com/KodingAffanMaulana" target="_blank" rel="noreferrer">GitHub</a> |
                        <a href="https://www.instagram.com/affan_maulaana?r=nametag" target="_blank" rel="noreferrer">Instagram</a> */}
                </section>
            </div>
        </main >
    )
}

export default Home;