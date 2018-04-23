import React from 'react'
import logo from './logo.svg'

// 获取商品数据
import productData from './json/product.json'

class App extends React.Component {
  constructor (props) {
    super(props)

    // 将商品存到store中
    this.state = {
      productName: '',
      products: productData
    }
    this.addProduct = this.addProduct
      .bind(this)
    this.changeInput = this
      .changeInput
      .bind(this)
  }
  render () {
    return (
      <div className="">
        <header className="">
          <img src={logo} width="100" height="100" className="" alt="logo"/>
        </header>
        <p>
          <input type="text" value={this.state.productName} onChange={this.changeInput}/>
          <button onClick={this.addProduct}>添加一个商品</button>
        </p>
        <ul>
          {this.state.products && this
            .state
            .products
            .map(v => {
              return (
                <li key={v.id}>{v.name}</li>
              )
            })}
        </ul>
      </div>
    )
  }
  // 添加一个商品
  addProduct () {
    // 获取商品名称
    var productName = this.state.productName
    // 新商品数据
    var newProduct = {
      id: this.state.products.length,
      name: productName
    }
    this.setState({
      // 更新商品列表(这里应该构建出新对象，而不是原对象，
      //    或者说不能直接操作原对象，再把原对象赋值给products属性)
      products: [...this.state.products, newProduct],
      // 清空输入框
      productName: ''
    })
  }
  changeInput (event) {
    this.setState({productName: event.target.value})
  }
}

export default App
