// Navigator.js

import React from 'react';
import {createAppContainer} from "react-navigation" 
import { createStackNavigator } from 'react-navigation-stack';

import ViewScreen from './screens/ViewScreen'

import ListScreen from './screens/ListScreen'
import EditScreen from './screens/EditScreen'
import PrivateScreen from './screens/PrivateScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons'

//createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);



const TabNavigator = createBottomTabNavigator({
    ListScreen: {
        screen: ListScreen,
                    //해당 탭의 옵션 중
        navigationOptions: {
                        // '아이콘 설정'을 합니다.
            tabBarIcon: ({tintColor}) => {
                                //tabBarOptions에서 color을 받아와 아이콘에 적용해서 리턴합니다.
                return <Ionicons name='ios-apps' size={25} color={tintColor}/>
            }
        }
    },
    EditScreen: {
        screen: () => null,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => {
                return <Ionicons name='ios-create' size={25} color={tintColor}/>
            },
            tabBarOnPress: ({navigation}) => {
                navigation.navigate('Edit');
            }
        }
    },
    PrivateScreen: {
        screen: PrivateScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => {
                return <Ionicons name='ios-person' size={25} color={tintColor}/>
            }
        }
    }
},{
    //하단 탭을 커스텀 할 수 있는 옵션 중
tabBarOptions: {
            //탭이 선택되었을 때 하단 탭의 색깔을 설정합니다.
activeTintColor: '#000',
            //탭이 선택되지 않았을 때 하단 탭의 색깔을 설정합니다.
inactiveTintColor: "#bdbdbd",
            //탭의 제목을 표시하지 않습니다. default는 true입니다.
showLabel: false
}
}//end of tabBarOptions
);//end of createBottomTabNavigator

const AppNavigator = createStackNavigator ({
    Edit: EditScreen,
    View: ViewScreen,
    Tab: TabNavigator,
},{
    initialRouteName: 'Tab',
    mode : 'modal',
    headerMode: 'none'
});


export default createAppContainer(AppNavigator);