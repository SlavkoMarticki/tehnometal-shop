import { RiSearchFill, RiSearchLine } from 'react-icons/ri';
import { HoverableIcon } from '../../hoverable-icon';
import { SearchInputField } from '../../inputs';
import './searchModal.css';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../../buttons';
import useStore from '../../../hooks/useStore';
import { useNavigate } from 'react-router-dom';

interface ISearchSubmitFormData {
  searchQuery: string;
}

interface ISearchModalProps {
  onClose: () => void;
}

export default function SearchModal(
  props: ISearchModalProps
): React.ReactElement {
  const methods = useForm<ISearchSubmitFormData>({ mode: 'onChange' });
  const { handleSubmit } = methods;
  const { onClose } = props;
  const {
    searchStore: { setSearchQuery }
  } = useStore();

  const navigate = useNavigate();

  const onSearchQuerySubmit = (data: ISearchSubmitFormData): void => {
    setSearchQuery(data.searchQuery);
    navigate(`/search/${data.searchQuery}`);
    onClose();
  };

  return (
    <div className='search--modal'>
      <FormProvider {...methods}>
        <form
          className='flex align-center'
          onSubmit={handleSubmit(onSearchQuerySubmit)}
        >
          <SearchInputField
            className='search--modal-input'
            placeholder='Search'
            name='searchQuery'
          />
          <Button
            className='search-btn'
            type='submit'
          >
            <HoverableIcon
              hoverIcon={<RiSearchFill className='search--modal-icon' />}
              regularIcon={<RiSearchLine className='search--modal-icon' />}
            />
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
