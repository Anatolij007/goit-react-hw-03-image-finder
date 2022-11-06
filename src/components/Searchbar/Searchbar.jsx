import { Formik } from 'formik';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { Header, FormSearch, Button, Span, Input } from './Searchbar.styled';

const initialValues = {
  query: '',
};

export const Searchbar = ({ onSubmit }) => {
  const handeSubmit = (value, { resetForm }) => {
    if (value.query.trim() === '') {
      toast.error('Введіть більше літер');
      return;
    }
    onSubmit(value.query);
    resetForm();
  };

  return (
    <Header>
      <Formik initialValues={initialValues} onSubmit={handeSubmit}>
        <FormSearch>
          <Button type="submit">
            <FcSearch size="28" />
            <Span>Search</Span>
          </Button>

          <Input
            type="text"
            autoComplete="on"
            autoFocus
            name="query"
            placeholder="Search images and photos"
          />
        </FormSearch>
      </Formik>
    </Header>
  );
};
