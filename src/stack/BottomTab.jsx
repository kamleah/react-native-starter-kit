import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import PublicStack from './PublicStack';
import { Text, TouchableOpacity, View } from 'react-native';
import { Home2, Home3 } from 'iconsax-react-native';

const Tab = createBottomTabNavigator();
const BottomTab = () => {

    const MyTabBar = ({ state, descriptors, navigation }) => {
        return (
            <View style={{ flexDirection: 'row', paddingVertical: 10, backgroundColor:'#58A399' }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    // Define icon based on route name
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Settings') {
                        iconName = 'settings';
                    }

                    return (
                        <TouchableOpacity
                            key={route.key}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        >
                            {iconName == 'home' && <Home2 size="32" color="#FF8A65" variant='Bold' />}
                            {iconName == 'settings' && <Home3 size="32" color="#FF8A65" variant='Bold' />}
                            <Text style={{ color: isFocused ? '#673ab7' : '#222', marginVertical: 7 }}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }

    return (
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="Home" component={PublicStack} options={{
                headerShown: false,
                tabBarLabel: "Hello"
            }} />
            <Tab.Screen name="Settings" component={Profile} options={{
                headerShown: false,
                tabBarLabel: "Profilse"
            }} />
            <Tab.Screen name="Settingss" component={Home} options={{
                headerShown: false,
                tabBarLabel: "Profiles"
            }} />
        </Tab.Navigator>
    )
}

export default BottomTab