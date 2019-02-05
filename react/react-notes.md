# React

React 是 Facebook 推出的 JavaScript Library，定位在 View 的位置。

常常需要搭配其他如 redux, rxjs, react-router 才可以發揮出 react 強大的地方。

## Install

### create-react-app

直接使用 facebook 所出的 create-react-app

> Create React App is the best way to start building a new React single page application. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 6 on your machine.

這個工具可以直接幫助把環境設定都設定好，是最快速上手的方法

```zsh
npm install -g create-react-app
create-react-app my-app
```

### Install by package.json

[starter/package.json]

[starter/package.json]: <starter/package.json>

## Component Lifecycle

1. Mounting：已插入真實的 DOM
2. Updating：正在被重新渲染
3. Unmounting：已移出真實的 DOM

根據官網介紹：

### Mounting

These methods are called when an instance of a component is being created and inserted into the DOM:

* constructor()
* componentWillMount()
* render()
* componentDidMount()

### Updating

An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:

* componentWillReceiveProps()
* shouldComponentUpdate()
* componentWillUpdate()
* render()
* componentDidUpdate()

### Unmounting

This method is called when a component is being removed from the DOM:
componentWillUnmount()

### Parent and children componet

如果有階層的 component，他們也會依照順序跑完 lifecycle

```html
<ComponentA>
  <ComponentB />
</ComponentA>
```

順序會是：

```zsh
ComponentA will mount
ComponentB will mount
ComponentB did mount
ComponentA did mount
```

reference: https://stackoverflow.com/questions/43043874/react-parent-component-didmount-earlier-than-children

## props and state

### props

讓 component 可以接收外部 data，並且對傳入的 props。也有驗證 props 和預設值的功能

### state

用來記錄和管理 component 的狀態

* this.state: 存取 state
* setState(): 會更新 state ，並且重新呼叫 render() 方法

## TODO read

fiber

* https://blog.techbridge.cc/2018/03/31/react-fiber-and-lifecycle-change/
* https://medium.com/@_cybai/%E7%BF%BB%E8%AD%AF-react-fiber-%E7%8F%BE%E7%8B%80%E7%A2%BA%E8%AA%8D-fd3808072279
