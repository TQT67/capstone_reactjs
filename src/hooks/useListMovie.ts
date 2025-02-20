import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { movieApi } from '../apis/movie.api';
import { QueryKeys } from '../constants/queryKeys';
import { Movie } from '../interfaces/movie.interface';

type ListUserQueryOptions = Omit<UseQueryOptions<Movie[]>, 'queryKey' | 'queryFn'>;

const useListMovie = (options?: ListUserQueryOptions) => {
  const queryResult = useQuery({
    queryKey: [QueryKeys.LIST_MOVIE],
    queryFn: () => movieApi.getListMovie(),
    ...options,
  });
  return queryResult;
};

export default useListMovie;
