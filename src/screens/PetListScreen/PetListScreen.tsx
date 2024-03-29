import {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import styles from './styles';

//library

//files
import colors from '../../theme/colors';
import useMainScreenService from '../../services/MainService/MainScreenService';
import {IPetData} from '../../types/AppTypes';
import {usePetContext} from '../../contexts/PetContext';

//assets
import Logo from '../../assets/icons/LogoList';
import PetList from '../../components/PetList';
import BackgroundLogo from '../../assets/icons/BackgroundLogo';

const PetListScreen = () => {
  const {dataChange} = usePetContext();

  const [petData, setPetData] = useState<Array<IPetData>>([]);

  const {ReadData} = useMainScreenService();

  useEffect(() => {
    const callData = async () => {
      const result = await ReadData();
      setPetData(result);
    };

    callData();
  }, [dataChange]);

  if (!petData) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.page}>
      <BackgroundLogo style={styles.BackgroundLogo1} />
      <BackgroundLogo style={styles.BackgroundLogo2} />
      <BackgroundLogo style={styles.BackgroundLogo3} />
      <BackgroundLogo style={styles.BackgroundLogo4} />
      <BackgroundLogo style={styles.BackgroundLogo5} />
      <BackgroundLogo style={styles.BackgroundLogo6} />
      <BackgroundLogo style={styles.BackgroundLogo7} />
      <BackgroundLogo style={styles.BackgroundLogo8} />
      <BackgroundLogo style={styles.BackgroundLogo9} />
      <BackgroundLogo style={styles.BackgroundLogo10} />
      <View style={styles.pageMargin}>
        <View style={styles.logo}>
          <Logo style={styles.logoIcon} />
        </View>
        <View style={styles.list}>
          <FlatList
            data={petData}
            extraData={petData}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 50}}
            renderItem={({item}) => <PetList pet={item} />}
          />
        </View>
      </View>
    </View>
  );
};

export default PetListScreen;
