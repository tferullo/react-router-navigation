# ```<Navigation />```
Navigation make it easy to explore and switch between different views.

## Example
<img src="https://raw.githubusercontent.com/LeoLeBras/react-router-navigation/master/docs/navigation.gif" width="250">

```js
import React from 'react'
import { Navigation, Card } from 'react-router-navigation'

const App = () => (
  <Navigation
    navBarStyle={{ backgroundColor: 'purple' }}
    titleStyle={{ color: 'white' }}
  >
    <Card
      exact path="/feed"
      component={require('./Feed')}
    />
    <Card
      backButtonTintColor="white"
      path="/feed/article/:id"
      component={require('./Article')}
    />
  </Navigation>
)
```

## Options

#### NavBar Props
* **hideNavBar** ```?boolean``` whether to display nav bar
* **renderNavBar** ```?string``` callback which renders a custom navigation bar
* **navBarStyle** ```?StyleSheet``` style override for the navigation bar
* **hideBackButton** ```?boolean``` whether to display default back button
* **backButtonTintColor** ```?string``` sets the color of the back button
* **backButtonTitle** ```?string``` text that appears on back button
* **renderLeftButton** ```?Function``` callback which renders a custom left button
* **title** ```?string``` string to be displayed in the navigation bar
* **titleStyle** ```?StyleSheet``` style override for the title element
* **renderTitle** ```?Function``` callback which renders a custom title component
* **renderRightButton** ```?Function``` callback which renders a right button

#### ```<Navigation />``` Props
* [... NavBar Props](https://github.com/LeoLeBras/react-router-navigation/blob/master/docs/NAVIGATION.md#navbar-props)
* **onTransitionStart** ```?Function``` function invoked when the card transition animation is about to start
* **onTransitionEnd** ```?Function``` function invoked once the card transition animation completes.
* **cardStyle** ```?StyleSheet``` style override for the card component

#### ```<Card />``` Props
* [```...<Route />``` props](https://reacttraining.com/react-router/#route)
* [```...<Navigation />``` props](https://github.com/LeoLeBras/react-router-navigation/blob/master/docs/NAVIGATION.md#navigation--props)
