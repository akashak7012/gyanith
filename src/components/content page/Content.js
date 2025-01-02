import React from 'react'
import './style.css'
import home from '../asserts/home icon.png'
import folder from '../asserts/folder icon.png'
const Content = () => {
  return (
    <body>
    <div className="explorer-container">
        <div className="explorer-top">
            <img src={home} alt="home icon" className='home-icon' />
            <h3>Schedule Explorer</h3>
            <div className="window-buttons">
                <button>&#8722;</button>
                <button>&#9744;</button>
                <button>&#10005;</button>
            </div>
        </div>
        
        <div className="explorer-nav">
            <div className="nav-buttons">
                <button>&larr;</button>
                <button>&rarr;</button>
                <button>&#x21bb;</button>
            </div>
            <div className="address-bar">
            <img src={home} alt="home icon" className='home-icon' />  
            <input type="text" value="Schedule Explorer"></input>
            </div>
        </div>
        
       
        <div className="explorer-content">
            
            <div className="folder-list">
                <div className="folder-t"><p>Events</p></div>
                <div className="folder" >
                    <img src={folder} alt="Folder" />    
                    <span>Event 1</span>
                </div>
                <div className="folder" >
                <img src={folder} alt="Folder" />   
                    <span>Event 2</span>
                </div>
                <div className="folder" >
                <img src={folder} alt="Folder" />
                    <span>Event 3</span>
                </div>
                <div className="folder" >
                <img src={folder} alt="Folder" />
                    <span>Event 4</span>
                </div>
                <div className="folder" >
                <img src={folder} alt="Folder" />
                    <span>Event 5</span>
                </div>
                <div className="folder">
                <img src={folder} alt="Folder" />
                    <span>Event 6</span>
                </div>
            </div>
            
            
            <div className="date">
                <div><p>Date & Time</p></div>
                <div className="description">
                <span>1</span>
            </div>
            <div className="description">
            <span>1</span>
            </div>
            <div className="description">
            <span>1</span>
            </div>
            <div className="description">
            <span>1</span>
            </div>
            <div className="description">
            <span>1</span>
            </div>
            <div className="description">
            <span>1</span>
            </div>
            
            </div>
            
            <div className="venue">
                <div className=''><p>Venue</p></div>
                <div className="description">
                <span>1</span>
                </div>
                <div className="description">
                    <span>1</span>
                </div>
                <div className="description">
                <span>1</span>
                </div>
                <div className="description">
                <span>1</span>
                </div>
                <div className="description">
                <span>1</span>
                </div>
                <div className="description">
                <span>1</span>
                </div>
            
                
            </div>
        </div>
    </div>
    
</body>
    
  )
}

export default Content