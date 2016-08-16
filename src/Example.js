import React, { Component, PropTypes } from 'react';


export default class Example extends Component {
    static propTypes = {
      bar: PropTypes.number,
      baz: PropTypes.number,
    }

    constructor() {
      super();
      this.state = {foo : 1};
      // non-lifecycle methods need to be bound to class
      this.update = this.update.bind(this);
    }

    update() {
      // custom method on class
      console.log('Update the state with this custom function');
      this.setState({foo: this.state.foo+1});
    }

    componentWillMount() {
      // can fetch data here potentially or call custom methods
      // will happen prior to mounting on the DOM
      console.log('ComponentWillMount');
    }

    componentWillReceiveProps(nextProps, nextState) {
      // if component will receive props this will happen 2nd
      // can setState here if needed
      console.log('ComponentWillRecieveProps');
    }

    componentDidMount() {
      // will happen after component has rendered
      console.log('ComponentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log('ShouldComponentUpdate');
      return true;
      // only if something has changed trigger render or stop render with boolean -- defaults to true but can be set explicitly for performance eg:
        // return this.state.data.id !== this.nextState.data.id
    }

    componentWillUpdate() {
      // prior to the update if you need to do something
      console.log('ComponentWillUpdate');
    }

    componentDidUpdate() {
      // after the component has updated
      console.log('ComponentDidUpdate');
    }

    componentWillUnmount() {
      // prior to unmounting a node (say if the node is removed or page is changing)
      console.log('ComponentWillUnmount');
    }

    render() {
      // this method is required by all class components

      console.log('Render');
      const { bar, baz } = this.props;
      // can compute and render things in this method as well
      const moo = bar + baz >= 10 ? (<div>'Mooooooooo!!!!' <br /></div>) : null;

      return (
        <div>
          Foo: {this.state.foo} <br />
          Bar: {bar} <br />
          Baz: {baz} <br />

          {moo}

          <button onClick={this.update}>
            Update State
          </button>
        </div>
      );
    }
};