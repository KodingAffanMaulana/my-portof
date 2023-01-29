import { Center, List, ListItem, ListIcon, Image } from '@chakra-ui/react';

import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { BsCloudDownload } from "react-icons/bs";

function About() {
    return (
        <>
            <main className="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-4 sm:p-6">
                <div className="drop-shadow-2xl">
                    <section id="about" class="p-8 lg:px-[10rem] lg:pb-16 bg-white rounded-[2rem]">
                        <div class="flex flex-col items-center justify-center text-center">
                            <Image src='https://media.licdn.com/dms/image/C5603AQHO4bbGxD3NbQ/profile-displayphoto-shrink_800_800/0/1654271685186?e=1678320000&v=beta&t=s44UjDF5yNQQXYdO160i7vNd3jlhPlUu0VqfE5WNyB4' alt="Education" width="4rem" rounded="50%" className='grayscale'></Image>
                            <h1 class="font-bold text-[16px] sm:text-2xl text-blue-900 p-2 sm:p-3 sm:pb-4">About Me</h1>
                        </div>
                        <Center>
                            <div>
                                <article>
                                    <p class="text-[13px] sm:text-[18px] sm:font-medium pb-4 text-justify">Hola, saya Affan Maulana seorang yang memiliki cita-cita untuk memajukan IT di daerah saya yaitu Bogatama. Saya
                                        berasal dari Lampung dan saat ini bertempat tinggal di Bandarlampung. Saya sekarang sedang menempuh pendidikan S1 Teknik Informatika pada salah satu Universitas impian saya sejak kecil
                                        yaitu Universitas Lampung. Saya saat ini sedang berkecimpung dibidang Frontend Web Developer.</p>
                                    <h1 class="font-bold text-blue-900 text-[14px] sm:text-[18px] pb-2">Skills</h1>
                                    <List spacing={1} fontSize={{ base: '13px', sm: '16px', md: '16px', lg: '18px' }}>
                                        <ListItem>
                                            <ListIcon as={AiFillHtml5} color='red.500' />
                                            HTML (Hyper Text Markup Language)
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={DiCss3Full} color='blue.500' />
                                            CSS (Cascading Style Sheet)
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={DiJavascript1} color='yellow.500' />
                                            Javascript
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={DiReact} color='blue.700' />
                                            ReactJS
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={BsCloudDownload} color='blue.200' />
                                            Web API & RESTful API
                                        </ListItem>
                                    </List>
                                </article>
                            </div>
                        </Center>
                    </section>
                </div>
            </main>
        </>
    );
}

export default About;