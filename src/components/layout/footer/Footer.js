import React, { Component } from 'react'
import './Footer.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export class Footer extends Component {

    render() {

        return (
            <footer className="footer-distributed">

                <div className="footer-right">

                    <a href="#">
                        {/* <FontAwesomeIcon icon={faFacebook} className="mr-1" /> */}
                    </a>

                    <a href="#">
                        {/* <FontAwesomeIcon icon={faTwitter} className="mr-1" /> */}
                    </a>

                    <a href="#">
                        {/* <FontAwesomeIcon icon={faLinkedin} className="mr-1" /> */}
                    </a>

                    <a href="#">
                        {/* <FontAwesomeIcon icon={faGithub} className="mr-1" /> */}
                    </a>


                </div>

                <div className="footer-left">

                    <p className="footer-links">
                        <a href="#">Home</a>
                        .
					<a href="#">Blog</a>
                        ·
					<a href="#">Pricing</a>
                        ·
					<a href="#">About</a>
                        ·
					<a href="#">Faq</a>
                        ·
					<a href="#">Contact</a>
                    </p>

                    <p>Company Name &copy; 2015</p>
                </div>

            </footer>
        )
    }
}