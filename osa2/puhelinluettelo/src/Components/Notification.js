const Notification = ({ notification }) => {

  const notificationStyle = {
    color: 'green',
    fontSize: '1.5rem',
    padding: '5px',
    margin: '20px',
    width: '20%',
    border: '1px solid green'
  }
  
  if(notification === null) {
    return notification
  }
  else {
    return (
      <div style={notificationStyle}>
        {notification}
      </div>
    )
  }
}


export default Notification