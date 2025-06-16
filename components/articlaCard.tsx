import React from 'react'
import Image from 'next/image'
import { ArticleCardProps } from '../utils/type'

const ArticlaCard = ({ acticle }: { acticle: ArticleCardProps }) => {
    const {imageUrl , imageTitle} = acticle.media;
    const {title,description} = acticle;
    
    return (
        <article className='group relative  rounded-xl border-emerald-50 shadow-md p-6 hover:scale-105 transition-transform duration-300'>
            <div className='relative h-[300px] rounded-xl
            '>
                <Image
                    src={imageUrl.toString()}
                    alt={imageTitle.toString()}
                    fill
                    className='rounded-xl aspect-3/2 object-cover'
                />
            </div>
            <div className='flex items-center justify-between'>
                <h3 className='font-semibold mt-4'>{title}</h3>
                
            </div>
            <p>{description}</p>
        </article>
    )
}

export default ArticlaCard