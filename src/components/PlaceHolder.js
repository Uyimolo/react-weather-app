
const PlaceHolder = () => {
 

  return (
    <div className='placeholder'>
      <img src="images/severe-thunderstorm.svg" alt="" />
      <h3 className="heading">
        Something went wrong
      </h3>
       <p>You could try </p>
      <ol>
        <li>Check data connection.</li>
        <li>Check if location permission is granted.</li>
        <li>Try reloading</li>
      </ol>
    </div>
  );
};

export default PlaceHolder;
