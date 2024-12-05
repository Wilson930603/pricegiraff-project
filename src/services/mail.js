import axios from 'axios'


const registerMailList = async (email) => {
    const response = await axios.post('/api/v1/mail_list', email)
    return response
}

const mailService = {
    registerMailList
}
export default mailService 