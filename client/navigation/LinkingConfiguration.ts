import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'one',
              ShowDetailScreen: 'sdc'
            },
          },
          Search: {
            screens: {
              SearchScreen: 'two',
            },
          },
          Profile: {
            screens: {
              ProfileScreen: 'three',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
