export interface TocItem {
  id: string;
  heading: string;
  level: number; // 2 for h2, 3 for h3
}

export interface ArticleSection {
  id: string;
  heading: string;
  content: string; // HTML content or formatted text
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  category: 'basics' | 'girl' | 'boy' | 'surname' | 'new';
  categoryLabel: string;
  readTime: string; // e.g. '8 min read'
  publishedDate: string;
  author: string;
  summary: string;
  toc: TocItem[];
  sections: ArticleSection[];
  relatedNameSlugs?: string[];
}
