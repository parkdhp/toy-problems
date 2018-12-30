//paint mixer, buttons, clickable interactive elements for color
//preview section
//starting colors: red, yellow, green, blue
//should be able to combine colors and make different oclors
//preview color = base color, if clicking on swatch, it will mix 10% of color into primary color

<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width-device-width, intial-scale=1.0">
    <title>Paint Mixer</title>
  </head>
  <body>
    <div id="app">
       
    </div>
  </body>
</html>


import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<App />, document.getElementById('app'));

class App extends React.Component {
  state = {
    currR: 0,
    currG: 0,
    currB: 0,
    red: [255, 0, 0],
    green: [0, 255, 0],
    blue: [0, 0, 255],
  }
  handleOnClick(e) {
    combineColors(...e.target.value);
  }

  combineColors = (r, g, b) => {
    let newR = (this.state.currR + r * 0.1) / 2;
    let newG = (this.state.currG + g * 0.1) / 2;
    let newB = (this.state.currB + b * 0.1) / 2;
    this.setState({
      ${this.state.currR}: newR,
      ${this.state.currG}: newG,
      ${this.state.currB}: newB,
    });
  }
  render() {
    return(
      <div>
        <Grid>
          <Row className='palatte'>
            <Col style='background-color: red' id='red' value={this.state.red} onClick={(e) => this.handleOnClick(e)}>
            </Col>
  
            <Col style='background-color: green' id='green' value={this.state.green} onClick={(e) => this.handleOnClick(e)}>
            </Col>
  
            <Col style='background-color: blue' id='blue' value={this.state.blue} onClick={(e) => this.handleOnClick(e)}>
            </Col>
          </Row>
  
          <Row id='preview-panel' style=`background-color: rgb(${this.state.currR}, ${this.state.currG}, ${this.state.currB})`>
            <p>This is the preview panel</p>
          </Row>
        </Grid>
      </div>
    );
  }
}