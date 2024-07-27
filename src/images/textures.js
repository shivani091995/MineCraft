import { NearestFilter, RepeatWrapping } from "three";
import { TextureLoader } from 'three';
import {
    dirtImg,
	grassImg,
	glassImg,
	woodImg,
	logImg,
} from './images';


const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const grassTexture = new TextureLoader().load(grassImg);
const woodTexture = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;

groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;



export{
    dirtTexture,
    logTexture,
    grassTexture,
    woodTexture,
    groundTexture,
    glassTexture,
}