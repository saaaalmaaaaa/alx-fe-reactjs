function InlineStyling() {
    //Defining a Style Object Separately
  const divStyle = {
    color: 'red',
    fontSize: '40 px',
    padding: '40px',
    backgroundColor : "grey"
};
    
    return (
      <div style={divStyle}>
        {/*Writing Styles Directly Inline*/}
        <p style={{color: 'blue', fontSize:"14 px"}}>I love to visit New York, Paris, and Tokyo.</p>
      </div>
    );
  }
  
  export default InlineStyling;
  