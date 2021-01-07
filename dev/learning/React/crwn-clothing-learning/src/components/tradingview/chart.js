import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import styled from 'styled-components';

const ChartContainer = styled.div `
    width: 96%;
    height: 80vh;
    margin: 0 auto;
`;
 
const Chart = () => (
    <ChartContainer>
        <TradingViewWidget
            symbol="EURUSD"
            toolbarbg="#f1f3f6"
            theme={Themes.DARK}
            hide_side_toolbar= {false}
            allow_symbol_change= {true}
            locale="en"
            watchlist={[
                "AUDUSD",
                "IBM",
                "TSLA",
                "AMD",
            ]}
            autosize
            show_popup_button= {true}
            popup_width= "1000"
            popup_height= "650"
            
            container_id= "analytics-platform"
            interval= "D"
            toolbar_bg= "#f1f3f6"
            withdateranges={ true}
            details={ true}
            hotlist={ true}
            calendar={ true}
        />
    </ChartContainer>
);

export default Chart;