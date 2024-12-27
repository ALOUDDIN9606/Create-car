import React, { Component } from 'react';

export default class Food extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: '',
      description: '',
      data: JSON.parse(localStorage.getItem('foodData')) || [],
      editingId: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, price, description, data, editingId } = this.state;

    if (editingId) {
      const updatedData = data.map((food) =>
        food.id === editingId
          ? { ...food, name, price, description }
          : food
      );
      this.setState({ data: updatedData, name: '', price: '', description: '', editingId: null }, () => {
        localStorage.setItem('foodData', JSON.stringify(this.state.data));
      });
    } else {
      const foodData = {
        id: Date.now(),
        name,
        price,
        description,
      };
      this.setState(
        { data: [...data, foodData], name: '', price: '', description: '' },
        () => {
          localStorage.setItem('foodData', JSON.stringify(this.state.data));
        }
      );
    }
  };

  handleDelete = (id) => {
    const updatedData = this.state.data.filter((food) => food.id !== id);
    this.setState({ data: updatedData }, () => {
      localStorage.setItem('foodData', JSON.stringify(this.state.data));
    });
  };

  handleEdit = (id) => {
    const foodToEdit = this.state.data.find((food) => food.id === id);
    this.setState({
      name: foodToEdit.name,
      price: foodToEdit.price,
      description: foodToEdit.description,
      editingId: id,
    });
  };

  render() {
    return (
      <div className="flex">
        <div className="w-80 h-screen bg-stone-200 p-5">
          <h2 className="mb-3 text-[22px] font-medium">
            {this.state.editingId ? 'Edit Food' : 'Create Food'}
          </h2>
          <form onSubmit={this.handleSubmit} action="">
            <input
              autoFocus
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              className="w-full h-10 mb-3 indent-3 rounded-sm"
              required
              type="text"
              placeholder="Name"
            />
            <input
              value={this.state.price}
              onChange={(e) => this.setState({ price: e.target.value })}
              className="w-full h-10 mb-3 indent-3 rounded-sm"
              required
              type="number"
              placeholder="Price"
            />
            <input
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
              className="w-full h-10 mb-3 indent-3 rounded-sm"
              required
              type="text"
              placeholder="Description"
            />
            <button className="w-full h-10 mb-3 bg-blue-400 rounded-sm text-white text-[18px] hover:bg-blue-500">
              {this.state.editingId ? 'Update' : 'Create'}
            </button>
          </form>
        </div>

        <div className="p-5 flex flex-wrap gap-3 flex-1 items-start content-start">
          {this.state.data.map((food) => (
            <div
              key={food.id}
              className="w-72 shadow-xl border rounded-md p-3 bg-white"
            >
              <div className="w-full h-52 bg-slate-200"></div>
              <div className="p-2">
                <h3 className="text-[16px] line-clamp-1">
                  <span className="text-[18px] font-medium">Food: </span>{' '}
                  {food.name}
                </h3>
                <p className="text-[16px] line-clamp-1">
                  <span className="text-[18px] font-medium">Description:</span>{' '}
                  {food.description}
                </p>
                <p className="text-[16px]">
                  <span className="font-medium text-[18px]">Price:</span>{' '}
                  {food.price}{' '}
                  <span className="text-red-600 font-medium">so'm</span>
                </p>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white py-1 rounded-md"
                    onClick={() => this.handleDelete(food.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white py-1 rounded-md"
                    onClick={() => this.handleEdit(food.id)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}