/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { api } from 'services/api';
import { BookBlockProps, IModalContentProps } from './interface';
import { Book, Content, Info } from './styles';

export default function ModalContent({ id }: IModalContentProps): JSX.Element {
  const [book, setBook] = useState<BookBlockProps>();

  useEffect(() => {
    id && getBook();
  }, [id]);

  async function getBook() {
    api.get(`/books/${id}`).then((resp) => setBook(resp.data));
  }

  return (
    <Content>
      <Book>
        <img src={book?.imageUrl} alt={book?.title} />
      </Book>
      <Info>
        <h1>{book?.title}</h1>
        <h2>{book?.authors && book.authors.map((author: any) => author)}</h2>
        <h3>INFORMAÇÕES</h3>
        <h4>
          Páginas<p>{book?.pageCount} Páginas</p>
        </h4>
        <h4>
          Editora<p>{book?.publisher}</p>
        </h4>
        <h4>
          Publicação<p>{book?.published}</p>
        </h4>
        <h4>
          Idioma<p>{book?.language}</p>
        </h4>
        <h4>
          Título Original<p>{book?.title}</p>
        </h4>
        <h4>
          ISBN-10<p>{book?.isbn10}</p>
        </h4>
        <h4>
          ISBN-13<p>{book?.isbn13}</p>
        </h4>
        <h3>RESENHA EDITORIAL</h3>
        <span>
          <p>{book?.description}</p>
        </span>
      </Info>
    </Content>
  );
}
