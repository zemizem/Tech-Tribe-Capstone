import React, {useState} from "react";
import './inbox.css';
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/MainFooter";
/*ChatGPt for message information and jsx code help*/
 const MessageContent = ({ message }) => {
    return (
      <div className="message_content">
        <ul><strong>From:</strong> {message.from}</ul>
        <ul><strong>Subject:</strong> {message.subject}</ul>
        <ul><strong>Date:</strong> {message.date}</ul>
        <p>{message.greeting}</p>
        <br />
        <p>{message.body}</p>
        <br />
        <p><strong>Best regards,</strong></p>
        <p>{message.signature}</p>
      </div>
    );
  }


function Inbox() {
  const [selectedMessage, setSelectedMessage] = useState(null);


  const messages = [
    { 
      id: 1, 
      from: 'Jane Smith', 
      subject: 'Job Opportunity: Senior Graphic Designer', 
      date: 'August 3, 2024',
      greeting: 'Hi Emily,',
      body: 'We came across your profile on ConnectPro and were impressed by your experience. We have an exciting opportunity for a Senior Graphic Designer at our company. Please let us know if you\'re interested in discussing this further.',
      signature: 'John Doe\nHR Manager, Marketing Solutions Inc.'
    },
    { 
      id: 2, 
      from: 'John White', 
      subject: 'Invitation to Connect', 
      date: 'July 12, 2024',
      greeting: 'Hi there,',
      body: 'I noticed we have a lot of common interests in design and thought it would be great to connect. Looking forward to networking with you!',
      signature: 'John White'
    },
    { 
      id: 3, 
      from: 'ConnectPro Support', 
      subject: 'Welcome to ConnectPro!', 
      date: 'May 30, 2024',
      greeting: 'Hello,',
      body: 'Welcome to ConnectPro! We\'re excited to have you join our community. If you have any questions or need assistance, feel free to reach out to our support team. Don\'t forget to complete your profile to maximize your visibility.',
      signature: 'ConnectPro Team'
    },
  ];

  const handleClick = (message) => {
    setSelectedMessage(message);
  };

  return (
    <>
    <NavigationBar/>
      <div className="inbox_layout">
        <div className="inbox_container">
          <h2>Inbox</h2>
          <ul className="inbox_list">
            {messages.map((message) => (
              <li key={message.id} className="inbox_item" onClick={() => handleClick(message)}>
                <div className="message_sender">{message.from}</div>
                <div className="message_subject">{message.subject}</div>
                <div className="message_time">{message.date}</div>
              </li>
            ))}
          </ul>
        </div>
        {selectedMessage && (
          <MessageContent message={selectedMessage} />
        )}
      </div>
      <Footer/>
    </>
  )
}


export default Inbox;