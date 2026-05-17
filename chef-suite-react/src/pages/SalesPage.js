
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function SalesPage(){
    const { t } = useTranslation();
    return (<h1>{t('sales.title')}</h1>);
}