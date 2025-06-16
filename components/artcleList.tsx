import React from 'react';
import ArticlaCard from './articlaCard';
import { ArticleCardProps } from '../utils/type';


const ArticleList = ({ Articles }: { Articles: ArticleCardProps[] }) => {
    return (
        <section className='grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-4 '>
            {
                Articles.map((Article: ArticleCardProps) => {
                    return <ArticlaCard key={Article.id} acticle={Article} />
                })
            }
        </section>
    );
};

export default ArticleList;