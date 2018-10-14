# Redux Learning Notes

Redux 是 JavaScript 狀態的容器，提供可預測化的狀態管理。

## Redux basic knowledge

所有的 state 都存在於一個 store 中，改變 state 的唯一方法是觸發 action。其中 reducers 用來描述 action 怎麼改變 state。

### Basic flow

1. UI (react component ) 發送更動 ex: OnClick 
2. 透過 action creators 轉成 action  
3. 使用 dispatch 發送 action 給 store 
4. Store 收到後先去找本來的 state, 把本來的 state + action 給 reducers 
5. Reducers 計算處理後返回新的 state 給store存 
6. Store 再去把新的 state 通知 react component 做更動 

### Install

首先必須先安裝 redux

```zsh
npm install --save redux
```

如果是使用 react，接著安裝 react-redux (redux 不一定要搭配 react 使用)

```zsh
npm install --save react-redux
```

## React-redux  

### Presentational and Container 

概念上將 component 分為兩大類：UI （presentational component）和容器（container component） 

* Presentational：Are concerned with how things look. 
    + 只負責 UI view 的呈現，不帶有任何的業務邏輯 
    + 沒有狀態，所有的 data 都由 props 提供 
    + 不使用任何 Redux 的 API，ex: dispatch() 
 
* Container：Are concerned with how things work. 
    + 負責 component 所有的業務邏輯，不負責 view 的生成 
    + 帶有內部狀態 
    + 使用 Redux 的 API 

 

### Connect 

使用 connect 將 presentational component 和 container component 連結起來 

Container 用於跟外界溝通，可以將 state & dispatch 當成 props 傳給 presentataion 的 component 

* mapStateToProps 
    + 負責輸入邏輯，包裝收到 state change 的時候，需要傳什麼(props)給 component  

* mapDispatchToProps
    + 負責輸出邏輯，將 UI 操作透過 dispatch 發送 action 給 store (使用 action creator 來產生 action) 

最後使用 connect 來把他們當成參數傳給 component (ShowText) 

Example: 

```js
const ShowTextContainer = connect( 
    mapStateToProps, 
    mapDispatchToProps 
)(ShowText) 
```
 
Component (ShowText) 就可以收到
 
```js
ShowText.propTypes = { 
    text: PropTypes.string, 
    onChange: PropTypes.func.isRequired 
} 

...

Props = { text, onChange } 
```
 
### More about mapStateToProps and mapDispatchToProps
 
#### [mapStateToProps(state, [ownProps]): stateProps] (Function)

只要定義了，component 會監聽 Redux store 的變化，只要 Redux store 發生改變，mapStateToProps 函數就會被觸發。因此可以在這裡定義要傳給 component props 的 state 內容 

```js
const mapStateToProps = state => ({ 
    viewStatus: state.viewStatus, 
}) 
```

舉例來說，當 store 中的 state 有改變，會把 state.viewMode 當成 props 傳給 component 

 
#### [mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function)

把 dispatch function 跟 presentational component 的 props 做連結，讓 presentational component 內部可以使用 

```js
const mapDispatchToProps = (dispatch) => { 
    setViewStatus : (status) => { 
        return dispatch(controlStatus(status)) 
        } 
    }) 
}; 

// controlStatus: 這會是一個 action creator 
// export const controlStatus = createAction(CONTROL_STATUS); 
```

這樣 presentational component 就可以接收 

```js
componentDidMount() { 
    const { setViewStatus } = this.props; 
    setViewStatus (true); 
} 
```
