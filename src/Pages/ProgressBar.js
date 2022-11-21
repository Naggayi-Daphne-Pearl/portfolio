const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 3,
      width: '70%',
      backgroundColor: "var(--grey-300)",
      borderRadius: 50,
      margin: 3
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right', 
      transition: 'width 1s ease-in-out',
    }
  
    const labelStyles = {
      padding: 2,
      color: 'var(--textColor)',
      fontWeight: 'bolder', 
      fontSize:'small'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar