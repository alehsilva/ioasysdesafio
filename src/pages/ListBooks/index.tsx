import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Book } from './interface';
import {
  CloseModal,
  Container,
  Header,
  PaginationContent,
  UserWelcome,
  Wrapper
} from './styles';
import { api } from 'services/api';
import { AuthContext } from 'context/Auth';
import Logo from 'assets/Logo';
import LogoutIcon from '@mui/icons-material/Logout';
import BookBlock from 'components/BookBlock';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import Modal from '@mui/material/Modal';
import ModalContent from 'components/ModalContent';

export default function ListBooks(): JSX.Element {
  const [books, setBooks] = useState<Book[]>([]);
  const [totalPages, setTotalPages] = useState();
  const [pageCurrent, setPageCurrent] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [idBook, setIdBook] = useState<string | null>();
  const { user, signOut } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    onListBooks();
  }, [pageCurrent]);

  async function onListBooks() {
    const response = await api
      .get(`/books?page=${pageCurrent}&amount=12`)
      .catch((error) => {
        error.response.status !== 200 && history.push('/');
      });

    setBooks(response?.data?.data);
    setTotalPages(response?.data?.totalPages);
  }

  function handleModal(id?: string) {
    id && setIdBook(id);
    setOpenModal(!openModal);
  }

  return (
    <Container>
      <Header>
        <span>
          <Logo width="105" height="36" fill="black" />
          Books
        </span>
        <UserWelcome>
          <h4>
            Bem vindo, <b>{user?.name}</b>
          </h4>
          <LogoutIcon
            onClick={() => {
              signOut();
              history.push('/');
            }}
          />
        </UserWelcome>
      </Header>
      <Wrapper>
        {books &&
          books.map((book, index) => (
            <div key={index} onClick={() => handleModal(book.id)}>
              <BookBlock
                id={book?.id}
                title={book?.title}
                description={book?.description}
                authors={book?.authors}
                pageCount={book?.pageCount}
                category={book?.category}
                imageUrl={book?.imageUrl}
                publisher={book?.publisher}
                published={book?.published}
              />
            </div>
          ))}
      </Wrapper>
      <PaginationContent>
        <Stack spacing="2">
          <Pagination
            count={totalPages}
            boundaryCount={0}
            siblingCount={1}
            onChange={(event, pageNumber) => setPageCurrent(pageNumber)}
            variant="outlined"></Pagination>
        </Stack>
      </PaginationContent>
      {openModal ? (
        <CloseModal onClick={() => handleModal()}>X</CloseModal>
      ) : (
        ''
      )}
      <Modal
        open={openModal}
        onClose={() => handleModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <ModalContent id={idBook} />
      </Modal>
    </Container>
  );
}
