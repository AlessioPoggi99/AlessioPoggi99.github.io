import { useEffect } from 'react'
import { motion } from "framer-motion";
import FormattedDate from './FormattedDate';
import MotionHorizontal from './motion/MotionHorizontal';
import MotionItems, { item } from './motion/MotionItems'

export default function Blog({ posts }) {

    return (
        <>
            <MotionHorizontal x={0} y={10} duration={0.8}>
                <h2 className="title font-bold tracking-tight text-[color:var(--text-on)]">From the blog</h2>
            </MotionHorizontal>
            <MotionItems immidiate={true} containerClass="posts-container grid gap-x-8 gap-y-16 text-left items-center border-t-2 border-[color:var(--border)]">
                {posts.map((post) => (
                    <motion.article variants={item} key={post.id} className="h-full w-full flex mx-auto flex-col items-start justify-start text-[color:var(--text-off)]">
                        <a href={'/blog/' + post.slug}>
                            <img src={post.data.heroImage} alt="post-placeholder" className="aspect-video rounded-xl border border-[color:var(--border)]" />
                        </a>
                        <div className="flex items-center gap-x-4 text-xs mt-8">
                            <FormattedDate date={post.data.updatedDate || post.data.pubDate} />
                            <div className="relative z-10 rounded-full bg-[color:var(--text-off)] px-3 py-1.5 font-medium text-[color:var(--border)]">
                                {post.data.tags.map((tag, index) => `${tag}${index + 1 < post.data.tags.length ? ' | ' : ''}`)}
                            </div>
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-[color:var(--text-on)] group-hover:text-[color:var(--text-off)]">
                                <a href={'/blog/' + post.slug}>
                                    <span className="absolute inset-0" />
                                    {post.data.title}
                                </a>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6">{post.data.description}</p>
                        </div>
                    </motion.article>
                ))}
            </MotionItems>
        </>
    )
}