import PetContextProvider from './src/contexts/PetContext';
import Navigation from './src/navigation';

const App = () => {
  return (
    <PetContextProvider>
      <Navigation />
    </PetContextProvider>
  );
};

export default App;
