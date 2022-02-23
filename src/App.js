import React from 'react';
import './App.css';
import Buttons from "./components/Buttons";
import handyBag from './assets/bag_1.png';
import stylishBag from './assets/bag_2.png';
import simpleBag from './assets/bag_3.png';
import trendyBag from './assets/bag_4.png';
import Product from "./components/Product";
import Tiles from "./components/Tiles";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Buttons
                    button="button"
                    navName="to the collection"
                    buttonLog="to the collection"
                />
                <Buttons
                    button="button"
                    navName="shop all bags"
                    buttonLog="shop all bags"
                />
                <Buttons
                    button="button"
                    navName="pre-orders"
                    disabled={true}
                    buttonLog="pre-orders"
                />
            </nav>
            <main>
                <Product
                    redLabel="Best Seller"
                    image={handyBag}
                    description="The handy bag"
                    price="€400,-"
                />
                <Product
                    redLabel="Best Seller"
                    image={stylishBag}
                    description="The stylish bag"
                    price="€250,-"
                />
                <Product
                    redLabel="New collection"
                    image={simpleBag}
                    description="The simple bag"
                    price="€300,-"
                />
                <Product
                    redLabel="New collection"
                    image={trendyBag}
                    description="The trendy bag"
                    price="€150,-"
                />
            </main>
            <footer>
                    <Tiles title="the brand">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque culpa eligendi est fuga fugiat illum
                            iure magni maiores minus nam pariatur porro, tempore, tenetur ullam.</p>
                        <br/>
                        <p>Ab incidunt laudantium placeat
                            quibusdam, sed soluta unde. Consectetur consequatur eum laborum qui ratione</p>
                    </Tiles>
                    <Tiles
                        image= {brand}
                    />
                    <Tiles
                        image= {ourStory}
                    />
                    <Tiles title= "our story">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque culpa eligendi est fuga fugiat illum
                            iure magni maiores minus nam pariatur porro, tempore, tenetur ullam.</p>
                    </Tiles>
            </footer>
        </>
    );
}

export default App;



