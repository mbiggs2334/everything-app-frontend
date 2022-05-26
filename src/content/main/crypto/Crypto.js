import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

//CSS files
import './Crypto.css';

//Chart infos
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  CommonAxisSettings,
  Grid,
  Legend,
  Margin,
  Tooltip,
  Label,
  Format,
} from 'devextreme-react/chart';

import {Crypto as CryptoApi} from '../../../APIs/CryptoApi';
import SearchForm from './CryptoSearchForm';

const Crypto = () => {

  const [currentCoin, setCurrentCoin] = useState({});
  const [badRequest, setBadRequest] = useState({message: ''});

  const handleFormSubmit = async formData => {
    let marketInfo = [];
    let hours = 48;

    let res = await CryptoApi.getMarketValues(formData.query, formData.currency);
    if(res.error) {
      setBadRequest(() => ({message: res.error.message}));
      return;
    } else {
      setBadRequest(() => ({message: ''}));
    };
    for(let price of res.prices){
      if(hours === 0) hours = "now";
      marketInfo.push({price: price[1], time: hours.toString()});
      if(typeof(hours) === "number") hours--;
    };
    setCurrentCoin(() => ({
      data: [...marketInfo],
      name: formData.query,
    }));
  };

  return (
    <div id="cryptoContainer">
      <h1 className="CryptoHeader">Crypto</h1>
      <SearchForm formSubmit={handleFormSubmit} />
      {badRequest.message ? <p className="badRequestCrypto">{badRequest.message}</p> : null}
      {currentCoin.data ? <Chart
          palette={["Orange"]}
          dataSource={currentCoin.data}
          title="Market Value (48 hours)"
        >
          <CommonSeriesSettings
            argumentField="time"
            type="line"
          />
          <CommonAxisSettings>
            <Grid visible={true} />
          </CommonAxisSettings>
          <Series
              key={uuid()}
              valueField={"price"}
              name={currentCoin.name} 
          />
          <Margin bottom={20} />
          <ArgumentAxis
            allowDecimals={false}
            axisDivisionFactor={60}
          >
            <Label>
              <Format type="decimal" />
            </Label>
          </ArgumentAxis>
          <Legend
            verticalAlignment="top"
            horizontalAlignment="right"
          />
          {/* <Export enabled={true} /> */}
          <Tooltip enabled={true} />
        </Chart>
        : null }
    </div>
  )
};

export default Crypto;