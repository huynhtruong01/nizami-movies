import moment from 'moment'

export const formatDate = (date: Date | string, format = 'MMM DD, YYYY') => {
    return moment(date).format(format)
}
