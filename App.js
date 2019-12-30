//App.js
    
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigator'
import uuid from 'uuid/v4';

export default class App extends React.Component {

  state = {
    inputTitle : '',
    inputContent : '',

    selectedDate : '',
    Posts : [{
      id : 'abcd-efg1',
      title :'2019 안녕',
      content :'올 한해도 수고 많았어',
      date :'20191230',
      image: '',
    },{
      id :'abcd-efg2',
      title :'8월 2일에 쓴 글',
      content :'입니다',
      date :'20190802',
      image: '',
    }]
  }
  _changeTitle = (value) => {
    this.setState({
      inputTitle: value
    });
  }
  
  // 본문을 입력하는 TextInput의 내용이 변경될 때 실행될 함수
  _changeContent = (value) => {
    this.setState({
      inputContent: value
    });
  }

  _changeDate = (value) => {
    let year = value._i.year.toString();
    let month = (value._i.month+1).toString();
    let day = value._i.day.toString();

    if(month.length == 1) month = "0"+month;
    if(day.length == 1) day = "0"+day;

    this.setState({
      selectedDate: year+month+day
    });
  }

  render() {
    return (
        <Navigation
          screenProps={{
            inputTitle : '',
            inputContent: '',
            Posts: this.state.Posts,
            selectedDate: this.state.selectedDate,
            changeDate: this._changeDate,
            changeTitle: this._changeTitle,
            changeContent: this._changeContent,
          }}/>
    );
  }
}