import {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator, TextInput} from 'react-native';
import styles from './styles';

//library

import LinearGradient from 'react-native-linear-gradient';

//files
import colors from '../../theme/colors';
import useMainScreenService from '../../services/MainService/MainScreenService';
import {IPetData} from '../../types/AppTypes';
import {usePetContext} from '../../contexts/PetContext';

//assets
import Logo from '../../assets/icons/LogoList';
import Search from '../../assets/icons/Search';
import PetList from '../../components/PetList';
import BackgroundLogo from '../../assets/icons/BackgroundLogo';

const PetListScreen = () => {
  const {count} = usePetContext();

  const [petData, setPetData] = useState<Array<IPetData>>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const {ReadData} = useMainScreenService();

  useEffect(() => {
    const callData = async () => {
      const result = await ReadData();
      setPetData(result);
    };

    callData();
  }, [count]);

  if (!petData) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.page}>
      <LinearGradient
        style={styles.linearGradient}
        start={{x: 0.4, y: 0.7}}
        end={{x: 1, y: 1}}
        locations={[0.0, 0.8]}
        colors={[colors.bcMain, colors.bcMainSecond]}>
        <BackgroundLogo style={styles.BackgroundLogo1} />
        <BackgroundLogo style={styles.BackgroundLogo2} />
        <BackgroundLogo style={styles.BackgroundLogo3} />
        <BackgroundLogo style={styles.BackgroundLogo4} />
        <BackgroundLogo style={styles.BackgroundLogo5} />
        <BackgroundLogo style={styles.BackgroundLogo6} />
        <BackgroundLogo style={styles.BackgroundLogo7} />
        <View style={styles.pageMargin}>
          <View style={styles.logo}>
            <Logo style={styles.logoIcon} />
            <Text style={styles.logoText}>pawpaw</Text>
          </View>
          <View style={styles.search}>
            <TextInput
              style={styles.searchText}
              value={searchValue}
              placeholder={'Search'}
              onChangeText={setSearchValue}
              placeholderTextColor={colors.inputBC}
              maxLength={30}
            />
            <Search />
          </View>
          <View style={styles.list}>
            <FlatList
              data={petData}
              renderItem={({item}) => <PetList pet={item} />}
              ItemSeparatorComponent={() => (
                <View style={{height: 1, backgroundColor: colors.logo}} />
              )}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default PetListScreen;
