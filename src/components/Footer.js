import React from 'react'
import './Footer.css'

//icons
import { FaMediumM, FaLinkedinIn, FaLink, FaInstagram, FaTwitter, FaBook, FaReadme } from 'react-icons/fa'

function Footer() {
    return (
        <div className='main-footer-container'>
            <div className='footer-container'>

                <div className='footer-column'>
                    <div className='footer-header'>ERIC KULBIEJ</div>
                    <span className='footer-content'>Everything you have found here has been written by me. Thanks for reading my blog. I hope you have found something here at least slightly compelling.</span>
                </div>

                <div className='footer-column'>

                    <div className='footer-subheading'>BROWSE</div>
                    <a className='footer-link' href="/articles">
                        <FaReadme />
                        <div className="footer-link-item">
                            Articles
                        </div>
                    </a>
                    <a className='footer-link' href="/book">
                        <FaBook />
                        <div className="footer-link-item">
                            Book
                        </div>
                    </a>
                </div>

                <div className='footer-column'>

                    <div className='footer-subheading'>LINKS</div>
                    <a className='footer-link' href="https://erickulbiej.medium.com/">
                        <FaMediumM />
                        <div className="footer-link-item">
                            Medium
                        </div>
                    </a>
                    <a className='footer-link' href="https://www.linkedin.com/in/eric-kulbiej-918b85111/">
                        <FaLinkedinIn />
                        <div className="footer-link-item">
                            Linkedin
                        </div>
                    </a>
                    <a className='footer-link' href="https://bio.link/erickulb">
                        <FaLink />
                        <div className="footer-link-item">
                            Link Tree
                        </div>
                    </a>
                    <a className='footer-link' href="https://www.instagram.com/erickulbiej/">
                        <FaInstagram />
                        <div className="footer-link-item">
                            Instagram
                        </div>
                    </a>
                    <a className='footer-link' href="https://twitter.com/erickulbiej">
                        <FaTwitter />
                        <div className="footer-link-item">
                            Twitter
                        </div>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Footer