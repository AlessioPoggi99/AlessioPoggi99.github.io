import { useEffect } from 'react'
import { motion } from "framer-motion";
import FormattedDate from './FormattedDate';
import MotionHorizontal from './motion/MotionHorizontal';

import Button from './Button'

export default function HomeBlog({ posts }) {

    useEffect(() => {
        const imgContainerArr = document.querySelectorAll('#blog .card .blog-img-container');
        imgContainerArr.forEach(container => {
            const imgElement = container.firstChild.firstChild
            if(imgElement.offsetHeight < container.offsetHeight)
                imgElement.style.height = '100%'
        })
    }, []);

    const handleMouseEnter = (e) => {
        const imgHeight = e.target.getBoundingClientRect().height;
        const parentHeight = e.target.parentNode.parentNode.getBoundingClientRect().height;
        const offset = parentHeight - imgHeight;
        if(imgHeight > parentHeight)
            e.target.style.transform = `translateY(${offset}px)`;
     };
     
     const handleMouseLeave = (e) => {
        e.target.style.transform = 'translateY(0%)';
     };

    return (
        <>
        <div className="container">
            {posts.map(post => (
                <MotionHorizontal x={0} y={15} duration={0.8} immidiate={false} key={post.id} _className="card bg-[color:var(--border)] p-4 rounded-lg">
                    <div className="blog-img-container aspect-video rounded-xl overflow-hidden">
                        <a href={'/blog/' + post.slug}>
                            <img src={post.data.heroImage} alt="post-placeholder" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                        </a>
                    </div>
                    <div className="blog-text-container text-justify flex flex-col justify-start pl-4">
                        <a href={'/blog/' + post.slug}>
                            <h3 className="text-center mt-3 text-lg font-semibold leading-6 text-[color:var(--decoration)]">
                                    {post.data.title}
                            </h3>
                            <FormattedDate date={post.data.updatedDate || post.data.pubDate} dateClass="mt-3 text-xs opacity-50 flex justify-center"/>
                            <p className="mt-5 line-clamp-5 text-sm leading-6">{post.data.description}</p>
                        </a>
                    </div>
                </MotionHorizontal>
            ))}
        </div>
        <MotionHorizontal x={0} y={15} duration={0.8} immidiate={false} _className="mt-8">
            <Button 
                to={"/blog"} 
                isScrollLink={false} 
                blank={false}
                buttonClass={"text-sm font-semibold leading-6 text-[var(--decoration)] cursor-pointer uppercase"}
            >
                All posts &rarr;
            </Button>
        </MotionHorizontal>
        </>
    )
}