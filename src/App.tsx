import React from "react";
import './App.css';
import { Props } from "./types/app"
import Button from 'antd/lib/button';
import { Input } from 'antd';

type State = {
  date: string;
  descr: string;
}

class App extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = { date: "", descr: "" };

    this.onDescrChange = this.onDescrChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  private onDescrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value; // cache value to use in async cb
    this.setState(() => ({ date: new Date().toLocaleString(), descr: v }));
  }

  private onButtonClick = () => {
    this.props.addEvent(this.state.date, this.state.descr);
    this.setState(() => ({ date: "", descr: "" }));
  }

  public render() {
    return (
      <div className="App">
        <Input placeholder="Enter description" onChange={this.onDescrChange} />
        <Button type="primary" onClick={this.onButtonClick}>Add</Button>
      </div>
    );
  }
}

export default App;
