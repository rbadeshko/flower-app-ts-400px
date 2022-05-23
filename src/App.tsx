import React, {useState} from 'react';
import FlowerBlock from "components/FlowerBlock/FlowerBlock";
import {FlowerType} from "types";
import {flowers} from "store/flowers";
import {tulip, gerbera, orchid} from 'assets/images'
import 'App.css';


function App() {
    //State for only one opened block by id
    const [isFlowerBlockOpened, setIsFlowerBlockOpened] = useState<string>("");

    let flowersCount: number = flowers.length;

    // Deep copy objects
    let flowersCopyArray: Array<FlowerType> = flowers.map(i => {
        return Object.assign({}, i)
    })
    let ascFlowersArray: Array<FlowerType> = flowersCopyArray.sort((a, b) => a.name > b.name ? 1 : -1);

    // Cut length to 3 elements
    ascFlowersArray.length = 3;

    const isClickOnFlowerBlock = (id: string) => {
        isFlowerBlockOpened === id ? setIsFlowerBlockOpened("") : setIsFlowerBlockOpened(id);
    }
    const imgUrl = (flowerData: string) => {
        switch (flowerData.toLowerCase()) {
            case "tulip" :
                return tulip;
                break;
            case "gerbera" :
                return gerbera;
                break;
            case "orchid" :
                return orchid;
                break;
            //
            // Here must be code for others images for block
            //
            default :
                return tulip;
                break;
        }
    }
    return (
        <div className="App">
            <h1 className="header">Your Herbarium</h1>
            {ascFlowersArray.map(flower => {
                return (
                    <FlowerBlock
                        key={flower.id}
                        flowerData={flower}
                        clickOn={isClickOnFlowerBlock}
                        isOpen={isFlowerBlockOpened === flower.id ? true : false}
                        imgUrl = {imgUrl(flower.name)}
                    />
                )
            })}
            <div className="flowers_displayed">Displaying 3 out of total {flowersCount} flowers</div>
        </div>
    );
}

export default App;
