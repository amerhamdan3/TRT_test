import translate from "google-translate-api-browser";
import { ContentItem } from "../types/global";
export const fetchContentAndTranslate = async (
  contentApis: { url: string; lang: string }[]
) => {
  const content: any[] = [];

  for await (const api of contentApis) {
    try {
      const response = await fetch(api.url);
      const responseData = await response.json();
  
      const items = await Promise.all(
        responseData.news.slice(0,5).map(async (item: ContentItem) => {
          const translated_title = await translate( item.title, {
            to: "en",
          });
          const translated_description = await translate(item.description, {
            to: "en",
          });
  
          return {
            source_id: item.id,
            source_language: api.lang,
            source_title: item.title,
            source_description: item.description,
            source_path: item.path,
            translated_title: translated_title.text,
            translated_description: translated_description.text,
          };
        })
      );
            content.push(...items);
  
    } catch (error: unknown) {
      console.error(
        `Failed to fetch data from ${api.url}:`,
        (error as Error).message
      );
    }
  }

  return content.slice(0, 150);
};
