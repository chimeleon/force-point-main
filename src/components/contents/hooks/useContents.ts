import { useRecoilValue } from 'recoil';
import { ListTable } from '../../../store';

function useContents() {
  const contents = useRecoilValue(ListTable);

  return { contents };
}

export default useContents;