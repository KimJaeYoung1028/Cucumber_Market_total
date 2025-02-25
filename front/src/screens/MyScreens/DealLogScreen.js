import SwipeableTabs from 'react-native-swipe-tabs';
import { useState } from 'react';
import DealPurchaseScreen from './DealLogScreens/DealPurchaseScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import DealEndScreen from './DealLogScreens/DealEndScreen';
import DealHideScreen from './DealLogScreens/DealHideScreen';

const DealLogScreen = () => {
  const [x, setX] = useState(0);
  const { top } = useSafeAreaInsets();

  return (
    <View >
      <SwipeableTabs
        onSwipe={(x) => setX(x)}
        selectedIndex={x}
        labels={['판매중', '거래완료', '숨김']}
        headerDirection="top"
      >
        <DealPurchaseScreen />
        <DealEndScreen />
        <DealHideScreen />
      </SwipeableTabs>
    </View>
  );
};

export default DealLogScreen;
