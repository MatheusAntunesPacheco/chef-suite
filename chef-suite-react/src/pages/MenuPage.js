
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MenuPage(){
    const { t } = useTranslation();
    return (<h1>{t('menuPage.title')}</h1>);
}