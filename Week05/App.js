import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import Articles from './component/Articles'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading : false,
      listArticles: [],
      pageNumber: 1,
    }
  }

  componentDidMount = async () => {
    this.setState({
      isLoading: true,
    })
    this.callApi(this.state.pageNumber)
  }

  callApi = async (page) => {
    const {listArticles} = this.state;
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=eb664b512a4d4e9f98abf6a6ccc0f3aa&page=${page}`)
    const jsonResponse = await response.json();
    this.setState({
      isLoading: false,
      listArticles: listArticles.concat(jsonResponse.articles),
      pageNumber: page,
    })
  }

  onEndReached = async () => {
    const newPageNumber = this.state.pageNumber + 1;
    this.callApi(newPageNumber)
  }
  render(){
    const {isLoading, listArticles} = this.state;
    return (
      
      <View style={styles.container}>
        <ActivityIndicator size="large" animating={isLoading} />
        <FlatList 
          data = {listArticles}
          renderItem = {(item) => {
            return <Articles articles = {item}/>
          }}
          keyExtractor={item => {item.title}}
          onEndReached={this.onEndReached} onEndReachedThreshold={1}
        />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
