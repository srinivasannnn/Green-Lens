import React from 'react'

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-details">
        <h2>Contact Details</h2>
        <ul>
          <li>
            <strong>WhatsApp:</strong> 8072388934
          </li>
          <li>
            <strong>Facebook:</strong> Greenlens Agro services 
          </li>
          <li>
            <strong>Instagram</strong> greenlensagro
          </li>
          <li>
            <strong>EmailAdress</strong> greenlensagro@gmail.com
          </li>
          <li>
            <strong>Address:</strong>Erikarai street, Pallikarani,chennai-600100
          </li>
          <li>
            <strong>Mobile:</strong> 8072388934
          </li>
        </ul>
      </div>

      <div className="google-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.07885882704!2d80.20901174999999!3d13.04752545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1696774973139!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
      </div>
    </div>
  );
};
