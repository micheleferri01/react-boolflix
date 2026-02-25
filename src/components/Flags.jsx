
export default function Flags ({language}){
    const allLanguages = {
        it: 'it',
        fr: 'fr',
        tl: 'tl',
        jp: 'jp',
        es: 'es',
        ca: 'es',
        ko: 'kr',
        en: 'sh',
        ja: 'jp',
        de: 'de',
        el: 'gr',
        hi: 'in',
        zh: 'cn',
        cn: 'cn',
        th: 'th',
        sv: 'se',
        pt: 'pt',
        pl: 'pl',
        tr: 'tr',
        sr: 'rs',
        ru: 'ru',
        nb: 'no',
        te: 'in',
        fi: 'fi',
        sl: 'si',

    };

    return allLanguages[language] ? <span className={`fi fi-${allLanguages[language]}`}></span> : <span>?</span>
}