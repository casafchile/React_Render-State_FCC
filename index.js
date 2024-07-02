class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'                     //se describe el dato para el props
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
          <h1>{this.state.name}</h1>            //para llamar al state ahi q llamarlo asi
        { /* Change code above this line */ }
      </div>
    );
  }
};
