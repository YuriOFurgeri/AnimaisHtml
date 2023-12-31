import {Request, Response} from 'express';
import { createMenuObjects } from '../helpers/CreateMenuObjects';

export const home = (req: Request, res: Response) => {
   res.render('pages/page',{
    //usando o CREATEMENUOBJECTS DA PAG HELPER
    menu: createMenuObjects('all'),

    banner: {
        title: 'Todos os animais',
        background :'allanimals.jpg',
    }
   });
}

export const dogs = (req: Request, res: Response) => {
    res.render('pages/page', {

        menu: createMenuObjects('dog'),

        banner: {
            title: 'Cachorros',
            background :'banner_dog.jpg',
        }
       });
    }

export const cats = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObjects('cat'),

        banner: {
            title: 'Gatos',
            background :'banner_cat.jpg',
        }
       });
}

export const fishes = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObjects('fish'),

        banner: {
            title: 'Peixes',
            background :'banner_fish.jpg',
        }
       });
}