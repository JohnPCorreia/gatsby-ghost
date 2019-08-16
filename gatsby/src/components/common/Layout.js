import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import EhHeader from '../Header';
import EhHero from '../Hero';

import Logopolis from "../..//assets/images/logos/fundopolis-navbar.js";
import LogopolisBG from "../../assets/images/logos/fundopolis-navbar-bg.js";
import { Navigation } from ".";
// import config from "../../utils/siteConfig";

// Styles
import "../../styles/app.css";
import "../layout.css";

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node;
    console.log(isHome);
    // const twitterUrl = site.twitter
    //     ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
    //     : null;
    // const facebookUrl = site.facebook
    //     ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
    //     : null;
    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type='text/css'>{`${site.codeinjection_styles}`}</style>
                <body className={bodyClass} />
            </Helmet>

            <div className='viewport'>
                <div className='viewport-top'>

                    <EhHeader />
                    {isHome ? <EhHero /> : null}
                    {/* {isHome ? (
                        <header
                            className='site-head'
                            style={{
                                ...(site.cover_image && {
                                    backgroundImage: `url(${site.cover_image})`
                                })
                            }}>
                            <div className='container'>
                                {
                                    <div className='site-banner'>
                                        <p className='site-banner-title'>
                                            <b>{site.title.slice(0, 4)}</b>
                                            {site.title.slice(4)}
                                        </p>
                                        <p className='site-banner-desc'>
                                            n. \\ ˈfənd-ä-p(ə-)ləs \\ <br /> The
                                            place where people and money come
                                            together to <br /> support
                                            businesses they care about.
                                        </p>
                                    </div>
                                }
                            </div>
                        </header>
                    ) : null} */}
                    <main className='site-main'>
                        {/* All the main content gets inserted here, index.js, post.js */}
                        {children}
                    </main>
                </div>

                <div className='viewport-bottom'>
                    {/* The footer at the very bottom of the screen */}
                    <footer className='site-foot'>
                        <div className='site-foot-nav container'>
                            <div className='site-foot-nav-left'>
                                <Link to='/'>{site.title}</Link> © 2019 &mdash;
                                Published with{" "}
                                <a
                                    className='site-foot-nav-item'
                                    href='https://ghost.org'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Ghost
                                </a>
                            </div>
                            <div className='site-foot-nav-right'>
                                <Navigation
                                    data={site.navigation}
                                    navClass='site-foot-nav-item'
                                />
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

const configNavbar = () => (window.innerWidth > 960 ? 362 : 275);

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        allGhostSettings: PropTypes.object.isRequired
    }).isRequired
};

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: { eq: "ghost-icon.png" }) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
);

export default DefaultLayoutSettingsQuery;
