import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
   render() {
      return (
        <div class="section_title">{this.props.title}</div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <div className="job_item">
            <div className="date">{this.props.data.date}</div>
            <div className="item_txt">
               <div className="name">{this.props.data.name}</div>
               <div className="detail">
                  <div>
                     <span class="label">體脂</span>
                     <span>{this.props.data.detail}</span>
                  </div>
                  <div>
                     <span class="label">內容</span>
                     <span>{this.props.data.tech}</span>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         data: 
         [
            {
               "name":"減脂為主",
               "date":"Jan",
               "detail": "30.6",
               "tech": "每個禮拜運動4次，每次至少半小時，不喝飲料"
            },
            {
               "name":"減脂+增肌",
               "date":"Apr",
               "detail": "28.5",
               "tech": "每個禮拜運動3次，每次至少半小時，開始增加重訓課程，減少醣類攝取增加蛋白質"
            },
            {
               "name":"開始增肌",
               "date":"Oct",
               "detail": "24.4",
               "tech": "每個禮拜運動3次，每次至少半小時，重訓和有氧課程交互進行"
            },
         ],
         id:"體態雕塑紀錄"
      }
   }
   render() {
      return (
         <div className="section">
            <div className="wrapper">
               <Header title = {this.state.id} />
               <div className="max_width">
                  <div className="section_inner">
                     {this.state.data.map((job_item, i) => 
                     <TableRow key = {i} data = {job_item} />)}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}


export default App;
ReactDOM.render(<App/>, document.getElementById('root'));