import { Center, List, ListItem, ListIcon } from '@chakra-ui/react';

import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { BsCloudDownload } from "react-icons/bs";

function About() {
    return (
        <>
            <main className="main bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-4 sm:p-16">
                <div className="drop-shadow-2xl">
                    <section id="about" class="p-8 lg:p-16 bg-white rounded-[2rem]">
                        <h1 class="font-bold text-[16px] sm:text-2xl text-lime-1000">About Me</h1><br />
                        <Center>
                            <div>
                                <article>
                                    <p class="text-yellow-800 text-[10px] sm:text-[18px] sm:font-medium pb-4 text-justify">Hola, saya Affan Maulana seorang yang memiliki cita-cita untuk memajukan IT di daerah saya yaitu Bogatama. Saya
                                        berasal dari Lampung dan saat ini bertempat tinggal di Bandarlampung. Saya sekarang sedang menempuh pendidikan S1 Teknik Informatika pada salah satu Universitas impian saya sejak kecil
                                        yaitu Universitas Lampung. Saya saat ini sedang berkecimpung dibidang Frontend Web Developer.</p>
                                    {/* <Image src={rg} alt="sma" width="500px" /> */}
                                    <h1 class="font-bold text-green-900 text-[12px] sm:text-[18px]">Skills</h1>
                                    {/* <ul class="list-disc list-inside text-yellow-700 text-[10px] sm:text-[18px] sm:font-medium">
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
            </ul> */}
                                    <List spacing={3} class="text-[10px] lg:text-[18px]">
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