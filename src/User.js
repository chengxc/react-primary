import React from 'react'

class User extends React.Component {
  constructor (props) {
    super()
    this.state = {
      user: props.user
    }
  }
  render () {
    return (
          <div>
              <div>——————这是用户信息——————</div>
              <div>用户名：{this.state.user.name}</div>
              <div>年龄：{this.state.user.age}</div>
              <div>性别：{this.state.user.gender}</div>
          </div>
    )
  }
}
export default User
