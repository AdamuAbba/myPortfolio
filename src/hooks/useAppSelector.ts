import { RootState } from 'features/store/types';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
