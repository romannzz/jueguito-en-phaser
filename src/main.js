import { AUTO } from 'phaser';
import StartGame from './game/main';

document.addEventListener('DOMContentLoaded', () => {

    //Copiado del video de yony
const config ={
    type: AUTO,
    width :1024,
    height: 768,
    parent: 'game-continer',
    backgroundColor: '#028af8',
    Scale: {
        mode: Scale.FIT,
        autocenter: Scale.CENTER_BOTH
    },
    scene: [
        MainGame
    ]

}

    StartGame('game-container');

});