import React, { Component } from 'react';

export default class Hero extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      show: false,
    };
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800">
        <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center h-[250px]">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Hero Counter</h2>
          <div className="text-3xl font-semibold mb-6 text-blue-600">{this.state.count}</div>

          <div className="flex justify-between mb-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={() => this.setState({ count: this.state.count + 1 })}
            >
              Increment
            </button>

            <button
              className={`px-4 py-2 rounded-md text-white ${
                this.state.count <= 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-red-500 hover:bg-red-600'
              }`}
              disabled={this.state.count <= 0}
              onClick={() => this.setState({ count: this.state.count - 1 })}
            >
              Decrement
            </button>
          </div>

          {this.state.count > 0 && (
            <button
              className="px-8 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              onClick={this.handleReset}
            >
              Reset
            </button>
          )}
        </div>
        <button className='bg-violet-900 text-white mt-8 px-8 py-2' onClick={()=> this.setState({ show: !this.state.show})}>Show {this.state.show ? "less": "more"}</button>
        {
            this.state.show && 
            <p className='text-white '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur officiis maiores dolorum tempore quae voluptate reprehenderit reiciendis vitae itaque. Illo?</p>
            
        }
      </div>
    );
  }
}
