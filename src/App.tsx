import React from "react";
import './App.css';
import { Props } from "./types/app"
import { Event } from "./types/events"
import Button from 'antd/lib/button';
import { Input, List, Modal } from 'antd';

type State = {
  date: string;
  descr: string;
  modal: {
    visible: boolean;
    event?: Event;
  }
}

class App extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = { date: "", descr: "", modal: { visible: false } };

    this.onDescrChange = this.onDescrChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
    this.handleModalOk = this.handleModalOk.bind(this);
    this.handleModalCancel = this.handleModalCancel.bind(this);
    this.onModalDescrChange = this.onModalDescrChange.bind(this);

  }

  private onDescrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const descr = e.target.value; // cache value to use in async cb
    this.setState(() => ({ date: new Date().toLocaleString(), descr }));
  }

  private onButtonClick = () => {
    this.props.addEvent(this.state.date, this.state.descr);
    this.setState(() => ({ date: "", descr: "" }));
  }

  private onUpdateClick = (event: Event) => {
    this.setState(state => ({ ...state, modal: { visible: true, event } }));
  }

  private handleModalOk = () => {
    this.setState(state => ({ ...state, modal: { visible: false } }));
    this.props.updateEvent(this.state.modal.event!);
  }

  private handleModalCancel = () => {
    this.setState(state => ({ ...state, modal: { visible: false } }));
  }

  private onModalDescrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const descr = e.target.value; // cache value to use in async cb
    this.setState(state => ({ ...state, modal: { ...state.modal, event: { ...state.modal.event!, descr } } }));
  }

  private renderEvent = (e: Event) => (
    <List.Item actions={[
        <a key="1" onClick={this.onUpdateClick.bind(this, e)}>edit</a>,
        <a key="2" onClick={this.props.deleteEvent.bind(this, e)}>delete</a>
      ]}>
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
          <Modal
            title="Basic Modal"
            visible={this.state.modal.visible}
            onOk={this.handleModalOk}
            onCancel={this.handleModalCancel}
          >
            <Input value={this.state.modal.event && this.state.modal.event.descr} onChange={this.onModalDescrChange} />
          </Modal>
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
