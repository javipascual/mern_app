import React from "react";
import './App.css';
import { Props } from "./types/app"
import { Event } from "./types/events"
import Button from 'antd/lib/button';
import { Input, List } from 'antd';

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

  private renderEvent = (e: Event) => (
    <List.Item>
      <List.Item.Meta
        title={e.date}
        description={e.descr}
      />
    </List.Item>
  );

  public render() {
    return (
      <div className="App" style={style.container}>
        <header><h1>Events</h1></header>
        <main>
          <List
            itemLayout="horizontal"
            dataSource={this.props.events}
            renderItem={this.renderEvent}
          />
        </main>
        <footer style={style.footer}>  
          <Input placeholder="Enter description" value={this.state.descr} onChange={this.onDescrChange} />
          <Button type="primary" onClick={this.onButtonClick}>Add</Button>
        </footer>
      </div>
    );
  }
}

// STYLE
const style: { [key: string]: React.CSSProperties } = {
  container: {
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    gridTemplateColumns: "100%",
    margin: "4rem"
  },
  footer: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
  },
};

export default App;
