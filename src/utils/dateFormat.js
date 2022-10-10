import moment from 'moment';

const date = () => moment().format();
const fullDate = date().toString() 

export {
    date,
    fullDate
}

