import { useEffect } from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from 'react-parallax-tilt';

export default function ContactCard() {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden"); // remove if you want animate only once
        }
    }, [controls, inView]);

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.3
            }
        },
    }
      
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    const contacts = [
        { name: 'Phone', icon: '📞', content: '+39 3454483262', margin: '15%', href: 'tel:+393454483262'},
        { name: 'E-mail', icon: '✉️', content: 'alessio_poggi@hotmail.it', margin: '12.5%', href: 'mailto:alessio_poggi@hotmail.it'},
        { name: 'Curriculum', icon: '📄', content: 'Download curriculum', margin: '10%', href: '/alessio-poggi-cv.pdf'},
        { name: 'Address', icon: '📍', content: 'Pieve Albignola, Pavia (PV), Italy', margin: '7.5%', href: 'https://goo.gl/maps/gSWgD5Zk18eE8eMf8'},
    ]

    return (
        <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2}>
        <motion.div
            className="container w-full rounded-md shadow-lg py-6"
            variants={container}
            initial="hidden"
            ref={ref}
            animate={controls}
        >
            <motion.div className="block" variants={item}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
            </motion.div>
            <ul className="flex flex-col justify-center items-start gap-y-3 text-left">
                {contacts.map((contact) => 
                    <motion.li className="flex gap-x-4" style={{marginLeft: `${contact.margin}`}} key={contact.name} variants={item}>
                        <p className="text-base flex items-center">{contact.icon}</p>
                        <div>
                            <p className="text-sm mb-1">{contact.name}</p>
                            <a className="font-semibold text-sm mb-1" href={contact.href} target='_blank'>{contact.content}</a>
                        </div>
                    </motion.li>
                )}
            </ul>
        </motion.div>
        </Tilt>
    )
}