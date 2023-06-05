import { useEffect } from 'react'
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import MotionItems, { item } from './motion/MotionItems'
import Button from './Button';

export default function ContactCard() {

    const contacts = [
        { name: 'Phone', icon: '📞', content: '+39 3454483262', margin: '15%', href: 'tel:+393454483262'},
        { name: 'E-mail', icon: '✉️', content: 'alessio_poggi@hotmail.it', margin: '12.5%', href: 'mailto:alessio_poggi@hotmail.it'},
        { name: 'Github', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>, content: '@AlessioPoggi99', margin: '10%', href: 'https://github.com/AlessioPoggi99'},
        { name: 'Curriculum', icon: '📄', content: 'Download curriculum', margin: '7.5%', href: '/alessio-poggi-cv.pdf'},
        { name: 'Address', icon: '📍', content: 'Pieve Albignola, Pavia (PV), Italy', margin: '5%', href: 'https://goo.gl/maps/gSWgD5Zk18eE8eMf8'},
    ]

    return (
        <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
            <MotionItems containerClass="container w-full rounded-md py-6">
                <motion.div className="block" variants={item}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
                </motion.div>
                <ul className="flex flex-col justify-center items-start gap-y-3 text-left">
                    {contacts.map((contact) => 
                        <motion.li className="flex gap-x-4" style={{marginLeft: `${contact.margin}`}} key={contact.name} variants={item}>
                            <p className="text-base flex items-center">{contact.icon}</p>
                            <div>
                                <p className="text-sm mb-1">{contact.name}</p>
                                <Button
                                    to={contact.href}
                                    scale={1.01}
                                    isScrollLink={false} 
                                    blank={true}
                                    buttonClass={"font-semibold text-sm mb-1"}
                                >
                                    {contact.content}
                                </Button>
                            </div>
                        </motion.li>
                    )}
                </ul>
            </MotionItems>
        </Tilt>
    )
}