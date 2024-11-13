import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { fetchShows } from '../../store/thunks/showsThunk.ts';
import { IShow } from '../../types';
import { RootState } from '../../app/store.ts';
import Loader from '../../Components/UI/Loader/Loader.tsx';
import { toast } from 'react-toastify';

const Show = () => {
  const dispatch = useAppDispatch();
  const params = useParams<{ showId: string }>();
  const {isLoading, error} = useAppSelector((state: RootState) => state.shows);
  const show: IShow | undefined = useAppSelector((state: RootState) =>
    state.shows.allShows.find((s: IShow) => s.id === Number(params.showId))
  );

  useEffect(() => {
    if (!show) dispatch(fetchShows(''));
  }, [show, dispatch]);

  if (isLoading) return <Loader/>;
  if (error) return toast.error('Error!');

  return (
    <>
      {show &&
        <>
          <div className="card w-50" key={show.id}>
            <div className="card-header p-3">
              <p className="text-muted m-0 p-0">#tvshows</p>
            </div>
            <div className="card-body d-flex align-items-start gap-4 p-4">
              <div>
                {show.image && <img src={show.image.medium} alt={show.name} className="rounded-3"/>}
              </div>
              <div>
                <h4 className="card-title mb-4">{show.name}</h4>
                <p
                  className="card-text ">{show.summary ? show.summary.replace(/<\/?[^>]+(>|$)/g, '') : null}</p>
              </div>
            </div>
          </div>
        </>
      }
    </>
  );
};

export default Show;