import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  SafeAreaView,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

export default class MissionList extends Component {
  state = {
    text: '',
    contacts: [],
    allContacts: [],
    loading: true,
    page: 1,
    refreshing: false,
  };

  constructor(props) {
    super(props);
    this.duringMomentum = false;
  }
  componentDidMount() {
    this.getContacts();
  }

  getContacts = async () => {
    this.setState({loading: true});

    const {
      data: {results: contacts},
    } = await axios.get(
      `https://randomuser.me/api/?results=10&page=${this.state.page}`,
    );
    const users = [...this.state.allContacts, ...contacts];
    if (this.state.refreshing) {
      users.reverse();
    }
    this.setState({
      contacts: users,
      allContacts: users,
      loading: false,
      refreshing: false,
    });
  };
  loadMore = () => {
    if (!this.duringMomentum) {
      this.setState(
        {
          page: this.state.page + 1,
        },
        () => {
          this.getContacts();
        },
      );
      this.duringMomentum = false;
    }
  };
  onRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true,
      },
      () => {
        this.getContacts();
      },
    );
  };
  gotoDetail = user => {
    this.props.navigation.navigate('MissionDetail', {
      user: user,
    });
  };

  _renderContactsItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          {
            backgroundColor: index % 2 === 1 ? '#cdcdcd' : '',
          },
        ]}
        onPress={() => this.gotoDetail(item)}>
        <Image
          style={styles.avatar}
          source={{
            uri: item.picture.thumbnail,
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>
            {item.name.first} {item.name.last}
          </Text>
          <Text style={styles.company}> {item.location.state} </Text>
        </View>
      </TouchableOpacity>
    );
  };

  searchFilter = text => {
    const newData = this.state.allContacts.filter(item => {
      const ListItem = `${item.name.first.toLocaleLowerCase()} ${item.location.state.toLocaleLowerCase()}; `;
      return ListItem.indexOf(text.toLocaleLowerCase()) > -1;
    });
    this.setState({
      contacts: newData,
    });
  };

  renderHeader = () => {
    const {text} = this.state;
    return (
      <View style={styles.searchContainer}>
        <TextInput
          onFocus={() => (this.duringMomentum = true)}
          onBlur={() => (this.duringMomentum = false)}
          onChangeText={text => {
            this.setState({
              text,
            });
            this.searchFilter(text);
          }}
          value={text}
          placeholder={' Search ..'}
          style={styles.searchInput}
        />
      </View>
    );
  };
  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
        }}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  render() {
    return (
      <FlatList
        ListFooterComponent={this.renderFooter}
        ListHeaderComponent={this.renderHeader()}
        // horizontal={true} pagingEnabled={true}

        renderItem={this._renderContactsItem}
        keyExtractor={item => item.login.uuid}
        data={this.state.contacts}
        onEndReached={this.loadMore}
        onEndReachedThreshold={1}
        // android tarafında problem oluyor.
        // onMomentumScrollBegin={()=>{this.duringMomentum = false}}

        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
      />
    );
  }
}
const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  textContainer: {
    justifyContent: 'space-between',
  },
  searchContainer: {
    padding: 10,
  },
  searchInput: {
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
});
