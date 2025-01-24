import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contactsList, setcontactsList] = useState(contacts.slice(0, 5));
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <h3>Iteration 1 | Display 5 Contacts</h3>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactsList.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} width={"80"} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
