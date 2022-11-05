import { Formik } from 'formik';
import { FcSearch } from 'react-icons/fc';
import { Header, FormSearch, Button, Span, Input } from './Searchbar.styled';

const initialValues = {
  query: '',
};

export const Searchbar = ({ onSubmit }) => {
  const handeSubmit = event => {
    event.preventDefault();
  };

  return (
    <Header>
      <Formik initialValues={initialValues} onClick={handeSubmit}>
        <FormSearch>
          <Button type="submit">
            <FcSearch size="28" />
            <Span class="button-label">Search</Span>
          </Button>

          <Input
            type="text"
            autocomplete="on"
            autofocus
            name="query"
            placeholder="Search images and photos"
          />
        </FormSearch>
      </Formik>
    </Header>
  );
};
