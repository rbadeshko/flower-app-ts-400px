//Component FlowerBlock for each Flower
//import {useState} from 'react';
import {FlowerType} from "types";
import './FlowerBlock.css'

type FlowerBlockType = {
    flowerData: FlowerType,
    clickOn: (id: string) => void,
    isOpen: boolean,
    imgUrl: string,
}
const FlowerBlock = (props: FlowerBlockType) => {
    const {
        clickOn,
        isOpen,
        flowerData,
        imgUrl,
    } = props;

    let isOpenClass: string = "";

    if (isOpen) {
        isOpenClass = " _open";
    }
    const HandleClick = () => {
        clickOn(flowerData.id);
    }
    return (
        <>
            <div key={flowerData.id} className={"flower_block flower_block__" + flowerData.color + isOpenClass}>
                <div className="flower_block_top" onClick={HandleClick}>
                    <div className="flower__info">
                        <h2 className={"flower_name flower_name__" + flowerData.color}>{flowerData.name}</h2>
                        <div className="physical_attr">
                            <div
                                className={"flower_temperature flower_temperature__" + flowerData.color}>{flowerData.temperature.toFixed(1)}°C
                            </div>
                            <div
                                className={"flower_humidity flower_humidity__" + flowerData.color}>{flowerData.humidty.toFixed(1)}%
                            </div>
                        </div>

                    </div>

                    <div className="flower_img_wrap">
                        <img className="flower_img" src={imgUrl} alt={flowerData.name}/>
                    </div>
                </div>
                <div className={"flower_block_bottom flower_block_bottom__" + flowerData.color}>
                    <div className="flower__desc">
                        {flowerData.description}
                    </div>
                </div>

            </div>
        </>
    );
}
export default FlowerBlock;