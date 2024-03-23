import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import AppStore, { persistor } from './src/redux/AppStore'
import { PersistGate } from 'redux-persist/integration/react'
import PublicRoutes from './src/routes/PublicRoutes'
import BottomTab from './src/stack/BottomTab'

const App = () => {
  return (
    <Provider store={AppStore}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <View className="mt-8 px-2">
          <Text className="text-2xl text-rose-700 dark:text-white">App</Text>
        </View> */}
        <PublicRoutes />
        
      </PersistGate>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})