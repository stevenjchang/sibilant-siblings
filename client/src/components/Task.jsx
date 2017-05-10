import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="checkbox col-xs-6">
              <label><input type="checkbox" value=""/>{this.props.bis.name}</label>
            </div>
            <div>
              <div><img src={this.props.bis.image_url} height="42" width="42"/></div>
              <div>rating: {this.props.bis.rating}</div>
              <div>{this.props.bis.price}</div>
              <div>{this.props.bis.location.address1}, {this.props.bis.location.city}</div>
              <div>{this.props.bis.phone}</div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Task;