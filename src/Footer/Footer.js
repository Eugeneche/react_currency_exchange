import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
  return (
        <footer id="footer" className="footer">
            <div className="footer-bottom">
                <div className="container">
                    <div className="flex-container">
                        <div className="flex-item">
                            <h1 className="footer-title"><a href="https://itgid.info">2019 &copy; React. Lite Level</a></h1>
                            <p> All Rights Reserved</p>

                        </div>{/* /.module-body */}
                    <div className="flex-item">
                        <div className="module-body">
                            <ul className="list-unstyled">
                                <li><a href="/sitemap/" tooltip="Карта сайта">Sitemap</a></li>
                                <li><a href="/sitemaps.xml" target="_blank" tooltip="Google Sitemap">Google Sitemap</a></li>
                            </ul>
                        </div>{/* /.module-body */}
                    </div>{/* /.col */}
                    <div className="flex-item">
                        <div className="module-body">
                            <ul className="list-unstyled">
                                <li><a href="/contact/" tooltip="Контакты">Contacts</a></li>
                                <li><a href="/d">Warranty</a></li>
                                <li><a href="/s">About the service</a></li>
                                <li><a href="/o">Return Terms</a></li>
                                <li><a href="/p">Service Agreement</a></li>
                            </ul>
                        </div>{/* /.module-body */}
                    </div>{/* /.col */}
                </div>
            </div>
            </div>

        </footer>

        );
    }
}

export default Footer;
