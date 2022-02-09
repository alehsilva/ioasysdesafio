/* eslint-disable @typescript-eslint/no-unused-vars */
import { BookBlockProps } from './interface';
import { Book, Container, Info } from './styles';

export default function BookBlock({
  id,
  title,
  description,
  authors,
  pageCount,
  category,
  imageUrl,
  publisher,
  published
}: BookBlockProps): JSX.Element {
  return (
    <Container>
      <Book>
        <img src={imageUrl} alt={title} />
      </Book>
      <Info>
        <h1>{title}</h1>
        <h2>{authors && authors.map((author: any) => author)}</h2>
        <span>
          <p>{pageCount} páginas</p>
          <p>{publisher}</p>
          <p>Publicado em {published}</p>
        </span>
      </Info>
    </Container>
  );
}
