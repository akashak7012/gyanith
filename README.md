# **Gyanith Schedule Explorer**

This React component implements a **Schedule Explorer** for Gyanith, designed to provide a visually intuitive interface resembling a file explorer. Participants can browse events, view their details, and easily navigate through the schedule.

---

## **Features**
- 📂 **Event Explorer**: Displays events as folder-like icons.  
- 🕒 **Date & Time Display**: Showcases the schedule for each event.  
- 📍 **Venue Information**: Highlights the location of each event.  
- 🎨 **Responsive Design**: Adapts to various screen sizes.  
- 🔄 **Navigation Buttons**: Basic navigation controls (Back, Forward, Refresh).  

---

## **File Structure**
```plaintext
src/
├── components/
│   └── Content.js          # Main React component for Schedule Explorer
├── assets/
│   ├── home icon.png       # Icon for the home button
│   ├── folder icon.png     # Icon for folder representation
├── style.css               # Styling for the component
```

---

## **Setup Instructions**

### **1. Prerequisites**
- [Node.js](https://nodejs.org/) installed (v16 or later).
- React app initialized with `create-react-app` or a similar setup.

### **2. Installation**
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/gyanith-schedule.git
   cd gyanith-schedule
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Replace the content of your `src` folder with the provided structure.

---

## **How to Run**
Start the React development server:
```bash
npm start
```
The app will be available at `http://localhost:3000/`.

---

## **Dynamic Data Integration**
To make the event list dynamic, replace the hardcoded event details in `Content.js` with data fetched from an API or a local JSON file.

### Example:
Update the code to render events dynamically:
```javascript
const events = [
  { id: 1, name: "Event 1", date: "Jan 15, 2025", venue: "Hall A" },
  { id: 2, name: "Event 2", date: "Jan 16, 2025", venue: "Hall B" },
];

return (
  <div className="folder-list">
    {events.map((event) => (
      <div key={event.id} className="folder">
        <img src={folder} alt="Folder" />
        <span>{event.name}</span>
      </div>
    ))}
  </div>
);
```

---

## **Styling**
Customize the look and feel using `style.css`. Example styles for folders and icons:
```css
.folder {
  display: flex;
  align-items: center;
  margin: 10px;
  cursor: pointer;
}
.folder img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.folder:hover {
  background-color: #f0f0f0;
}
```

---

## **Contributing**
Contributions are welcome!  
1. Fork the repository.  
2. Create a branch: `git checkout -b feature-name`.  
3. Commit your changes: `git commit -m "Add feature"`.  
4. Push to the branch: `git push origin feature-name`.  
5. Open a pull request.  

