import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type CountType = number;

type PetContextType = {
  count: number;
  loading: boolean;
  dataChange: boolean;
  updateCount: (newCount: number) => void;
  setDataChange: (value: boolean) => void;
};

const PetContext = createContext<PetContextType>({
  count: 0,
  loading: true,
  dataChange: false,
  updateCount: (value: number) => {},
  setDataChange: (value: boolean) => {},
});

const PetContextProvider = ({children}: {children: ReactNode}) => {
  const [count, setCount] = useState<CountType>(0);
  const [loading, setLoading] = useState(true);
  const [dataChange, setDataChange] = useState(false);

  const checkPet = async () => {
    const data = await AsyncStorage.getItem('pawpaw_Pet_Count');

    if (data) {
      setCount(Number(data));
    } else {
      await AsyncStorage.setItem('pawpaw_Pet_Count', '0');
    }
    setLoading(false);
  };

  const updateCount = async (newCount: number) => {
    setCount(newCount);
    await AsyncStorage.setItem('pawpaw_Pet_Count', newCount.toString());
  };

  useEffect(() => {
    checkPet();
  }, []);
  return (
    <PetContext.Provider
      value={{count, loading, dataChange, updateCount, setDataChange}}>
      {children}
    </PetContext.Provider>
  );
};

export default PetContextProvider;
export const usePetContext = () => useContext(PetContext);
