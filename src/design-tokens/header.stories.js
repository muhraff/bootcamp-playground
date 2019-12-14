import React from 'react';
import { MyHeader } from './header';

export default {
    component: MyHeader,
    title: 'Header',
};

export const header = () => {
    return <MyHeader />
}