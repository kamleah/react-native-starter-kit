import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Container = ({ children, header = true, title }) => {
    const insets = useSafeAreaInsets();
    return (
        <React.Fragment>
            <StatusBar translucent={true} hidden={true} />
            {header && <View style={{ backgroundColor: '#58A399', }}>
                <View style={{ height: 50, marginTop: insets.top, backgroundColor: '#58A399', display:'flex', justifyContent:'center', alignContent:'center', width:'100%' }}>
                    <Text style={{textAlign:'center'}}>{title}</Text>
                </View>
            </View>}
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: header ? 0 : insets.top }}
            >
                {children}
            </ScrollView>
        </React.Fragment>
    )
}

export default Container

const styles = StyleSheet.create({})