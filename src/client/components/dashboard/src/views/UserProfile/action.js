const START = 'START';
const FAIL = 'FAIL';

const startSendRequest = data => {
    return {
        type: START,
        payload: data
    }
}

const failSendRequest = err => {
    return {
        type: FAIL,
        payload: err
    }
}

export const sendData = data => dis =>{
    fetch('/savadata',{
        method: 'POST',
        headers: {
            Accept : 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data})
    })
    .then(res => {
        console.log(res, ' res');
        dis(startSendRequest(res))}
    ).catch(err => {
        console.log(err, ' err');
        dis(failSendRequest(err))
    })
}