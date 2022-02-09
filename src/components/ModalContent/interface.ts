export interface IModalContentProps {
  id: string | undefined | null;
}

export interface BookBlockProps {
  id?: string;
  title?: string;
  description?: string;
  authors?: any;
  pageCount?: number;
  category?: string;
  imageUrl?: string;
  publisher?: string;
  published?: number;
  language?: string;
  isbn10?: string;
  isbn13?: string;
}
