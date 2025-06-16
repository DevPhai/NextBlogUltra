export type ArticleCardProps = {
    id: string;
    articleType:String;
    title: String;
    description: String;
    category: String;
    media: MediaProps;
    creator?:CreatorProps;
    createDate: String;
    viewCount: number;
}


export type MediaProps = {
    imageUrl: String;
    imageTitle: String;
}


export type CreatorProps = {
    name: String;
    imageUrl: String;
}



