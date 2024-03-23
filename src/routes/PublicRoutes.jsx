import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from '../stack/BottomTab';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/Profile';
const Drawer = createDrawerNavigator();
const PublicRoutes = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{drawerType:'front', headerShown: false, swipeEnabled:false}}>
                <Drawer.Screen name="Feed" component={BottomTab} />
                <Drawer.Screen name="Article" component={Profile} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
};

export default PublicRoutes