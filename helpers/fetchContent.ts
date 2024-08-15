import { ContentItem } from "../types/global";

export const fetchContent = async (contentApis :{url : string , lang: string}[]) => {
    const content: any[] = [];
    const newsSections = ["latest", "news", "issues", "mustRead","opinion" ,"homepage_editors_pick","explainers"];
  
    for (const api of contentApis) {
      try {
        const response = await fetch(api.url);
        const responseData = await response.json();

        newsSections.forEach((section) => {
            if (!responseData[section]) {
              return;
            }
            const items = responseData[section].map((item: ContentItem) => ({
                id: item.id,
                type: item.type,
                title: item.title,
                section : section,
                description: item.description,
                path: item.path,
                publishedDate: item.publishedDate,
                authors: item.authors.map((author) => ({
                    firstName: author.firstName,
                    lastName: author.lastName,
                    mainImage: author.mainImage,
                })),
                language: api.lang,
              }));
              content.push(...items);

            });


        
      } catch (error: unknown) {
        console.error(`Failed to fetch data from ${api.url}:`, (error as Error).message);
      }
    }
  
    return content.slice(0, 150);
};