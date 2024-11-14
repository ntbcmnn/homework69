import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { fetchShows } from '../../store/thunks/showsThunk.ts';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { IShow } from '../../types';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../app/store.ts';

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const shows: IShow[] = useAppSelector((state: RootState) => state.shows.allShows);
  const navigate = useNavigate();

  const onSearch = (query: string) => {
    dispatch(fetchShows(query));
  };

  const onSelect = (item: { id: number; name: string }) => {
    navigate(`shows/${item.id}`);
  };

  const formatResult = (item: { name: string }) => {
    return <span>{item.name}</span>;
  };

  return (
    <div className="d-flex justify-content-end mb-2">
      <form className="form d-flex gap-3 justify-content-start">
        <div style={{width: 400}}>
          <ReactSearchAutocomplete
            items={shows}
            onSearch={onSearch}
            onSelect={onSelect}
            autoFocus
            formatResult={formatResult}
            placeholder="Search..."
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;