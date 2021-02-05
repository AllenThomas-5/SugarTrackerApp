import React from 'react'
import Menu from './Menu'
export default function Header(props) {
  const { title, subtitle } = props;
    return (
      <>
      <Menu />
        <section>
        <div className="">
            <div className="jumbotron jumbotron-fluid bg-info">
                <div className="container">
                  <h1 className="display-4 text-white">{title?title:'Sugar Data with Firebase Collection'}</h1>
                  <p className="lead text-white">{subtitle?subtitle:'Adding and Deleting Sugar Data Levels using Google Cloud Firebase'}</p>
                </div>
              </div>
        </div>
        </section>
      </>
    )
}

    
