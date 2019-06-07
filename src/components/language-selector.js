import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = props => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('dk');
    const dkButton = useRef(null);
    const enButton = useRef(null);

    useEffect(() => {
        const dk = language === 'dk';
        dkButton.current.disabled = dk;
        enButton.current.disabled = !dk;
        i18n.changeLanguage(language);
    }, [language, i18n]);

    return (
        <div className={'btn-group'} role="group" aria-label={t('language.select')}>
            <button
                ref={dkButton}
                type="button"
                data-toggle="tooltip"
                data-placement="bottom"
                title={t('language.danish')}
                onClick={() => setLanguage('dk')}
            >
                <span className="flag-icon flag-icon-dk" />
            </button>
            <button
                ref={enButton}
                type="button"
                data-toggle="tooltip"
                data-placement="bottom"
                title={t('language.english')}
                onClick={() => setLanguage('en')}
            >
                <span className="flag-icon flag-icon-gb" />
            </button>
        </div>
    );
};

export default LanguageSelector;
