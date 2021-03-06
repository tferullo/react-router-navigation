import React, { Component } from 'react'
import { StatusBar, StyleSheet, View, TouchableOpacity, Button, Text } from 'react-native'
import { Switch, Route, Redirect } from 'react-router'
import { NativeRouter, Link, DeepLinking } from 'react-router-native'
import { Navigation, Card, Tabs, Tab } from 'react-router-navigation'

const PRIMARY_COLOR = 'rgb(226, 68, 68)'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
    padding: 18,
  },
  tabs: {
    backgroundColor: PRIMARY_COLOR,
  },
  indicator: {
    backgroundColor: 'white',
  },
  button: {
    marginTop: 10,
  },
})

class App extends Component {

  state = {}

  render() {
    const { setNavigationState } = this.props
    return (
      <View style={styles.container}>
        <StatusBar barStyle={this.state.barStyle} />
        <Navigation
          backButtonTintColor="red"
          navBarStyle={this.state.navBarStyle}
          titleStyle={this.state.titleStyle}
          backButtonTintColor={this.state.backButtonTintColor}
        >
          <Card
            exact
            path="/"
            title="Index"
            render={() => (
              <View style={styles.scene}>
                <Link component={TouchableOpacity} to="/yolo">
                  <Text>Push a new scene</Text>
                </Link>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.setState({
                      navBarStyle: { backgroundColor: PRIMARY_COLOR },
                      titleStyle: { color: 'white' },
                      barStyle: 'light-content',
                      backButtonTintColor: 'white',
                    })
                  }}
                >
                  <Text>Change navbar style</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <Card
            path="/yolo"
            component={() => (
              <View style={styles.scene}>
                <Link component={TouchableOpacity} to="/hello">
                  <Text>Push tabs</Text>
                </Link>
              </View>
            )}
            title="Yolo"
          />
          <Card
            path="/hello"
            title="Hello"
            render={({ staticMatch: { url } }) => (
              <Switch>
                <Route
                  exact
                  path={url}
                  render={() => <Redirect to={`${url}/one`} />}
                />
                <Route
                  render={() => (
                    <Tabs
                      style={styles.container}
                      tabBarStyle={styles.tabs}
                      tabBarIndicatorStyle={styles.indicator}
                    >
                      <Tab
                        path={`${url}/one`}
                        label="One"
                        render={() => (
                          <View style={styles.scene}>
                            <Text>One</Text>
                          </View>
                        )}
                      />
                      <Tab
                        path={`${url}/two`}
                        label="Two"
                        render={() => (
                          <View style={styles.scene}>
                            <Text>Two</Text>
                          </View>
                        )}
                      />
                      <Tab
                        path={`${url}/three`}
                        label="Three"
                        render={() => (
                          <View style={styles.scene}>
                            <Text>Three</Text>
                          </View>
                        )}
                      />
                    </Tabs>
                  )}
                />
              </Switch>
            )}
          />
        </Navigation>
      </View>
    )
  }

}

export default () => (
  <NativeRouter>
    <DeepLinking>
      <App />
    </DeepLinking>
  </NativeRouter>
)
