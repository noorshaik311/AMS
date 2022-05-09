import React, { Component } from 'react'
import Header from './Header';

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      tabSelected: 1,
      link1:'https://app.powerbi.com/groups/me/reports/8c65471c-d208-4e1e-bd99-1b1925ba3b68/ReportSectiona3ce808743eb5c0b67b0?ctid=4cb9e6ee-fc5c-4c69-bd62-eab3a7cad01e&openReportSource=ReportInvitation'

    }
  }
  updateTab=(value)=>{
    console.log("here",value);
    this.setState({ tabSelected :value});
  }

  render() {
    return (
      <div>
        <Header updateTab={this.updateTab} />
        <div>
          <iframe src={this.state.link1} style={{width:'100vw',height:'90vh'}} />
        </div>
      </div>
    );
  }
}
