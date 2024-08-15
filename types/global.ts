export interface ContentItem {
    id: number;
    type: string;
    title: string;
    description: string;
    path : string;
    publishedDate: string;
    authors: [{
        firstName: string;
        lastName: string;
        mainImage: string;
    }];
    firstname: string;
    lastname: string;
    image: string;
}