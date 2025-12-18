import React from "react";
import "../assets/css/Timer.css";
/*Создайте компонент Timer, который каждую секунду инкрементирует отображаемое значение.
 */

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  handleInterval = () => {
    this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
  }

  componentDidMount() {
    this.interval = setInterval(this.handleInterval, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="timer">
        <p>Секунды: {this.state.seconds}</p>
      </div>
    );
  }
}

export default Timer;
