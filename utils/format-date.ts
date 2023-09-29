import moment from 'moment'

export const formatDate = (date: Date | string, format = 'MMM DD, YYYY') => {
    return moment(date).format(format)
}

export const getYear = (date: Date | string) => {
    return new Date(date).getFullYear()
}
