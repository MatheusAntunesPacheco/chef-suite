
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function OrdersPage(){
    const { t } = useTranslation();
    return (<h1>{t('orders.title')}</h1>);
}