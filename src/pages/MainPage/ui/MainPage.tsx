import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface MainPageProps {
    className?: string;
}

const MainPage = memo(({ className }: MainPageProps) => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
});

export default MainPage;
