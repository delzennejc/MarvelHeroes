import { currentOffset } from '../api/fetch';

export const getTotalPage = (totalHeroes) => ({
  totalPage: Math.floor(totalHeroes / currentOffset),
  lastPage: +((totalHeroes % currentOffset) !== 0),
});
