import React from "react";
import "./index.css";
import LogoPattern from "../LogoPattern/logo-pattern";

const Hero = () => {
    return (
        <section className='hero'>
            <section className='hero-inner'>
                <div className='hero-inner-container'>
                    <div className='hero-inner-pattern'>
                        <LogoPattern topRight bottomLeft color={`#fff`} />
                    </div>
                    <h1 className='hero-inner-title'>
                        <b>Fund</b>opolis
                    </h1>
                    <div className='hero-inner-subtitle'>
                        <div>
                            {`n. \\ ˈfənd-ä-p(ə-)ləs \\ \n The place where people and money come together to \n support businesses they care about.`}
                        </div>
                    </div>
                    <button
                        className='hero-inner-button'
                        type='button'
                        onClick={e => {
                            e.preventDefault();
                            window.open(
                                "https://prod.fundopolis.com/citizen/createcitizen",
                                "_self"
                            );
                        }}>
                        JOIN
                    </button>
                </div>
            </section>
        </section>
    );
};

export default Hero;
