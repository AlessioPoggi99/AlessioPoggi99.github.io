import { useEffect } from 'react'
import { motion } from "framer-motion";
import FormattedDate from './FormattedDate';
import MotionHorizontal from './motion/MotionHorizontal';
import Button from './Button'

export default function HomeBlog({ posts }) {

    return (
        <>
        <div className="container">
            {posts.map(post => (
                <MotionHorizontal x={0} y={15} duration={0.8} immidiate={false} _key={post.id} _className="card bg-[color:var(--border)] p-4 rounded-lg">
                    <a href={'/blog/' + post.slug}>
                        <img src={post.data.heroImage} alt="post-placeholder" className="aspect-video rounded-xl" />
                    </a>
                    <div className="text-justify flex flex-col justify-center pl-4">
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