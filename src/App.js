import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.scss'
import Counter from './Counter'
import {add, add_number, sub} from "./redux/actions/action";

class App extends Component {
  render() {
      console.log('App', this.props)

    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>
        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>

          <div className="Actions">
              <button onClick={()=>this.props.onAddNumber(15)}>Добавить 15</button>
              <button onClick={()=>this.props.onAddNumber(-15)}>Вычесть 15</button>
          </div>

          <div className="Actions">
              <button onClick={()=>this.props.onAsyncAdd(100)}>Асинхронно добавлять 100</button>
          </div>
          <Counter />
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        counter: state.counter1.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch(add()),
        onSub: () => dispatch(sub()),
        onAddNumber: (number) => dispatch(add_number(number)),
        onAsyncAdd: number => dispatch()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
