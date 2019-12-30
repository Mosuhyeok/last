//ListScreen.js
    
import React from 'react';
import { Text
        ,View
        ,FlatList
        ,StyleSheet
        ,Dimensions
        ,ScrollView
        ,TouchableOpacity
        ,Platform
        ,StatusBar 
        } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import CalendarPicker from 'react-native-calendar-picker';

const {width,height} = Dimensions.get('window');

export default ListScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <CalendarPicker
                onDateChange = {props.screenProps.changeDate}
                previousTitle="<"
                nextTitle=">"
                todayTextStyle={{fontWeight: 'bold', textDecorationLine: 'underline'}}
                todayBackgroundColor={'transparent'}
                selectedDayColor = "#ffe28c"
            />
            <ScrollView style={styles.listContainer}>
                <FlatList
                    data={props.screenProps.Posts.filter(data => {return data.date == props.screenProps.selectedDate})}
                    renderItem={({item,index}) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {props.navigation.navigate('View', {post:item});}}>
                                <View style={styles.itemContainer}>
                                    
                                    <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                                    <Text style={styles.content} numberOfLines={1}>{item.content}</Text>
                                </View>
                            </TouchableOpacity>
                        );}}
                    keyExtractor={(_, index) => { return `${index}`}}/>
            </ScrollView>
        </SafeAreaView>
    );
}
<View style={{backgroundcolor:"red"}}></View>
const styles = StyleSheet.create({

    container:{
        paddingTop: Platform.OS === `ios` ? 0 : Expo.Constants.statusBarHeight
    },

    listContainer: {
        marginLeft:25,
    },
    title:{
        fontSize: 17,
        color: "#3b3b3b",
        fontWeight: "600",
    },
    content:{
        fontSize: 13,
        paddingTop: 5,
        color: "red"
    },
    itemContainer: {
        flex: 1,
        width: width-60,
        paddingTop:10,
        paddingLeft:10,
        marginBottom:20,
        borderColor: "#7a7171",
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 7,
    }
})