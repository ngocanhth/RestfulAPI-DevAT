import mongoose, { Document, Schema } from 'mongoose';


export default interface IURI {
    URI: string | undefined;
}

export interface IGender {
    gender: 'male' | 'female';
}

export interface IProduct {
    title: string;
    image: string;
    description: string;
    category: string;
    price: string;
}

export interface IProductModel extends IProduct, Document {}

export interface ICategory {
    title: string;
    image: string;
    description: string;
    products: string;
}

export interface ICategoryModel extends ICategory, Document {}


