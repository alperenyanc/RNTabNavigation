# RNTabNavigation
React Native Tab Navigation

follow these pages for react-navigation install

https://facebook.github.io/react-native/docs/navigation

https://reactnavigation.org/docs/en/getting-started.html

https://stackoverflow.com/questions/58131602/unable-to-resolve-module-react-native-reanimated

https://www.reddit.com/r/reactnative/comments/bgubuu/error_bundling_failed_error_unable_to_resolve/



TabBottomNavigator + Stack Navigator


![Alt text](https://github.com/alperenyanc/RNTabNavigation/blob/master/ScreenShots/ContactScreenS1.png "Contact Screen")

![Alt text](https://github.com/alperenyanc/RNTabNavigation/blob/master/ScreenShots/ContactScreenS2.png "Contact Detail Screen")

![Alt text](https://github.com/alperenyanc/RNTabNavigation/blob/master/ScreenShots/ContactScreenS3.png "You Can Search + FlatList => axios => list item (randomuser.me)")



for Android emulator..  Stack Navigator  title center example

header Title 'Center' solutions =>  
1)

            const EventStack = createStackNavigator({
            Envents: {
                screen: Events,
                navigationOptions:
                {
                    // title center
                title: 'Title center',
                headerTitleStyle:
                {
                    textAlign: 'center',
                    flex: 1,
                    },
                },
            },
            
            }
            );

2)
            const EventStack = createStackNavigator({
            Envents: {
                screen: Events,
                navigationOptions: {
                    title:'Title Center'
                
                },
                },
            },
            
            },
            {
                headerLayoutPreset: 'center',
            },
            );


