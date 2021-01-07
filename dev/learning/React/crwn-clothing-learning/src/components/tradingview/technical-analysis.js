import React from "react";
import styled from "styled-components";

const Container = styled.div `
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media only screen and (max-width:900px ) {
      height: 80vh;
    }
`;

const TechObject = {
    "interval": "1m",
    "width": "100%",
    "isTransparent": false,
    "height": "100%",
    "symbol": "NASDAQ:AAPL",
    "showIntervalTabs": true,
    "locale": "en",
    "colorTheme": "dark"
  }

class TechnicalAnalysis extends React.Component {

    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js'
        script.async = true;
        script.innerHTML = JSON.stringify(TechObject)
        document.getElementById("TechAnalysis").appendChild(script);
    }

    render() {
        return(
            <Container id="TechAnalysis">
            </Container>
        );
    }
    }

    export default TechnicalAnalysis;