import Vue from 'vue'
import VueI18n from 'vue-i18n'
import vnMessage from './vn.json'
import enMessage from './en.json'
if (!Vue.prototype.hasOwnProperty('$t')) {
    Vue.use(VueI18n)
}

const messages = {
    vn: vnMessage,
    en: enMessage,
}

const dateTimeFormats = {
    en: {
        short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        },
        long: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            weekday: 'short',
            hour: 'numeric',
            minute: 'numeric',
        },
    },
    vn: {
        short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        },
        long: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            weekday: 'short',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        },
    },
}

const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: messages,
    dateTimeFormats,
})

/**
 * Set locale
 * @param locale
 */
export function setI18Locale(locale) {
    i18n.locale = locale
}

/**
 * Set locale message
 * @param locale
 * @param message
 */
export function setLocaleMessage(locale, message) {
    i18n.setLocaleMessage(locale, message)
}

/**
 * Get locale message
 * @param locale
 * @param message
 */
export function getLocaleMessage(locale) {
    return i18n.getLocaleMessage(locale)
}

export function getCurrentLocale() {
    return i18n.locale
}

export default i18n