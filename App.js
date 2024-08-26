import {Component} from "react"
import './App.css';

class App extends Component{
  state = {box1Change:false, box2Change:false, box3Change:false, box4Change:false, box5Change:false, box6Change:false, box7Change:false, box8Change:false, box9Change:false}

  clickOnBoxButton1 = () => {
    this.setState(prevState => ({
      box1Change:!prevState.box1Change
    }))
  }

  clickOnBoxButton2 = () => {
    this.setState(prevState => ({
      box2Change:!prevState.box2Change
    }))
  }
  
  clickOnBoxButton3 = () => {
    this.setState(prevState => ({
      box3Change:!prevState.box3Change
    }))
  }

  clickOnBoxButton4 = () => {
    this.setState(prevState => ({
      box4Change:!prevState.box4Change
    }))
  }
  clickOnBoxButton5 = () => {
    this.setState(prevState => ({
      box5Change:!prevState.box5Change
    }))
  }
  clickOnBoxButton6 = () => {
    this.setState(prevState => ({
      box6Change:!prevState.box6Change
    }))
  }
  clickOnBoxButton7 = () => {
    this.setState(prevState => ({
      box7Change:!prevState.box7Change
    }))
  }
  clickOnBoxButton8 = () => {
    this.setState(prevState => ({
      box8Change:!prevState.box8Change
    }))
  }
  clickOnBoxButton9 = () => {
    this.setState({
      box1Change:false,
      box2Change:false,
      box3Change:false,
      box4Change:false,
      box5Change:false,
      box6Change:false,
      box7Change:false,
      box8Change:false,
      box9Change:false
    })
  }

  render(){
    const {box1Change, box2Change, 
      box3Change, box4Change, box5Change,
       box6Change, box7Change, 
       box8Change, box9Change} = this.state
    const activeClassName1 = box1Change? "boxGreen":"boxOrange"
    const activeClassName2 = box2Change? "boxGreen":"boxOrange"
    const activeClassName3 = box3Change? "boxGreen":"boxOrange"
    const activeClassName4 = box4Change? "boxGreen":"boxOrange"
    const activeClassName5 = box5Change? "boxGreen":"boxOrange"
    const activeClassName6 = box6Change? "boxGreen":"boxOrange"
    const activeClassName7 = box7Change? "boxGreen":"boxOrange"
    const activeClassName8 = box8Change? "boxGreen":"boxOrange"
    const activeClassName9 = box9Change? "boxGreen":"boxOrange"
    return (
      <div className="big-container">
        <button className={`box ${activeClassName1}`} onClick={this.clickOnBoxButton1}>
          Box-1
        </button>
        <button className={`box ${activeClassName2}`} onClick={this.clickOnBoxButton2}>
          Box-2
        </button>
        <button className={`box ${activeClassName3}`} onClick={this.clickOnBoxButton3}>
          Box-3
        </button>
        <button className={`box ${activeClassName4}`} onClick={this.clickOnBoxButton4}>
          Box-4
        </button>
        <button className={`box ${activeClassName5}`} onClick={this.clickOnBoxButton5}>
          Box-5
        </button>
        <button className={`box ${activeClassName6}`} onClick={this.clickOnBoxButton6}>
          Box-6
        </button>
        <button className={`box ${activeClassName7}`} onClick={this.clickOnBoxButton7}>
          Box-7
        </button>
        <button className={`box ${activeClassName8}`} onClick={this.clickOnBoxButton8}>
          Box-8
        </button>
        <button className={`box ${activeClassName9}`} onClick={this.clickOnBoxButton9}>
          Box-9
        </button>
      </div>
    )
  }
}

export default App;
